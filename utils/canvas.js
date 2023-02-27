import {gsap} from "gsap";
import * as THREE from 'three';
import Scroll from './scroll.js';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

import scrollFragment from './shaders/scrollFragment.glsl';
import scrollVertex from './shaders/scrollVertex.glsl';
import defaultFragment from './shaders/defaultFragment.glsl';
import defaultVertex from './shaders/defaultVertex.glsl';
import projectFragment from './shaders/projectFragment.glsl';
import projectVertex from './shaders/projectVertex.glsl';

let Canvas = {
    scrollPosition: 0,
    scrollInProgress : false,
    canvasContainer : null,
    pageContainer : null,
    pointer : {cursor: null , intersects: null },
    time: 0,
    scene: new THREE.Scene(),
    materials: [],
    imageStore: [],
    scroll: null,
    currentScroll: 0,
    options: {
        default:{
            fragmentShader: defaultFragment,
            vertexShader: defaultVertex,
        },
        project: {
            fragmentShader: projectFragment,
            vertexShader: projectVertex,
      },
    },
    init(_canvasElement, _pageContainer) {

        this.canvasContainer = _canvasElement;
        this.pageContainer = _pageContainer;

        this.scroll = new Scroll({
            dom: this.pageContainer,
        });

        this.width = this.canvasContainer.offsetWidth;
        this.height = this.canvasContainer.offsetHeight;

        this.camera = new THREE.PerspectiveCamera( 70, this.width/this.height, 100, 2000 );
        this.camera.position.z = 600; // 600
        this.camera.fov = 2*Math.atan( (this.height/2)/600 )* (180/Math.PI);

        this.renderer = new THREE.WebGLRenderer({
            // antialias: true,
            alpha: true
        });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio , 1.5));

        // SHADOW
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        this.canvasContainer.appendChild( this.renderer.domElement );

        // this.controls = new OrbitControls( this.camera, this.renderer.domElement );

        // this.raycaster = new THREE.Raycaster();
        this.pointer.cursor = new THREE.Vector2();

        this.setSize();
        // this.setLight()

        this.composerPass()

        this.render();

        window.addEventListener('pointermove', (event) => {
            this.pointer.cursor.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            this.pointer.cursor.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        });

    },

    setImageMeshPositions(){
        if(!this.imageStore) return;

        for (var i = 0; i < this.imageStore.length ; i++) {

            if(
                this.currentScroll < this.imageStore[i].top + this.imageStore[i].height
                && this.imageStore[i].top  < this.currentScroll + this.height
            ){

                this.imageStore[i].mesh.position.x = ( this.imageStore[i].left - this.width/2 + this.imageStore[i].width/2);
                this.imageStore[i].mesh.position.y =  - this.imageStore[i].img.getBoundingClientRect().top + this.height/2 - this.imageStore[i].height/2;
                // this.imageStore[i].mesh.position.y =  this.currentScroll - this.imageStore[i].top + this.height/2 - this.imageStore[i].height/2 ;

            }
            else {
                this.imageStore[i].mesh.position.y = this.height*2;
            }

        }
    },

    addImage(_img, _type) {

        let meshIndex = this.imageStore.length;

        let id = `meshImage${_type}_${meshIndex}`;
        let fragmentShader= this.options.default.fragmentShader;
        let vertexShader = this.options.default.vertexShader;

        if(_type){
            fragmentShader = this.options[_type].fragmentShader;
            vertexShader = this.options[_type].vertexShader;
        }

        let geometry;
        let bounds = _img.getBoundingClientRect();
        let position = { top : bounds.top , left: bounds.left};
        position.top += this.currentScroll;


        geometry = new THREE.PlaneGeometry( bounds.width , bounds.height );

        let texture = new THREE.TextureLoader().load( _img.src );
        texture.needsUpdate = true;

        let material = new THREE.ShaderMaterial({
            uniforms:{
                time: {value:0},
                uImage: {value: texture},
                vectorVNoise: {value: new THREE.Vector2( 1.5 , 1.5 )}, // 1.5
                vectorWave: {value: new THREE.Vector2( 0.5 , 0.5 )}, // 0.5
                hoverState: {value: 0},
                cursorPositionX: {value: 0},
                cursorPositionY: {value: 0},
                aniIn: {value: 0},
                aniOut: {value: 0},
                aniOutToArticle: {value: 0},
                aniInImageGallery: {value: 0},
                aniOutImageGallery: {value: 0},
                galleryActive: {value: 0},
            },
            fragmentShader: fragmentShader,
            vertexShader: vertexShader,
            transparent: true,
            name: `meshImage${_type}`,
        });

        this.materials.push(material);

        let mesh = new THREE.Mesh( geometry, material );
        mesh.name =  id;

        mesh.castShadow = true;
        mesh.receiveShadow = true;
        this.scene.add(mesh);

        const newMesh = {
            name:id,
            img: _img,
            mesh: mesh,
            top: position.top,
            left: position.left,
            width: bounds.width,
            height: bounds.height,
            thumbOutAction: {value: 0},
        }

        this.imageStore.push(newMesh);
        this.meshMouseListeners(newMesh, material);
        // this.meshAniIn(newMesh, material, _type);

        gsap.to(material.uniforms.aniIn , {
            duration: 1.25,
            value: 1
        })

        this.setImageMeshPositions();

    },

    meshMouseListeners(_mesh, _material) {

        _mesh.img.addEventListener('mouseenter',(event)=>{
            _mesh.mesh.renderOrder = 1;
            this.hoverInProgress = true;

            gsap.to(_material.uniforms.hoverState, {
                duration: 0.5,
                value:1
            })
        })

        _mesh.img.addEventListener('mouseout',()=>{
            _mesh.mesh.renderOrder = 0;

            this.hoverInProgress = false;

            gsap.to(_material.uniforms.hoverState,{
                duration: 0.5,
                value:0
            })
        })

    },
    composerPass(){
        this.composer = new EffectComposer(this.renderer);
        this.renderPass = new RenderPass(this.scene, this.camera);
        this.composer.addPass(this.renderPass);

        //custom shader pass
        // var counter = 0.0;
        this.myEffect = {
            uniforms: {
                "tDiffuse": { value: null },
                "scrollSpeed": { value: null },
            },
            vertexShader: scrollVertex,
            fragmentShader: scrollFragment,
        }

        this.customPass = new ShaderPass(this.myEffect);
        this.customPass.renderToScreen = true;

        this.composer.addPass(this.customPass);
    },
    setSize(){
        this.width = this.canvasContainer.offsetWidth;
        this.height = this.canvasContainer.offsetHeight;

        this.camera.aspect = this.width/this.height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize( this.width,this.height );
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderer.render(this.scene, this.camera); // -> Also needed
    },
    render() {

        this.time+=0.05;

        this.scroll.render();
        this.scrollInProgress = this.currentScroll !== this.scroll.scrollToRender ;
        this.currentScroll = this.scroll.scrollToRender;

        //animate on scroll
        if( this.scrollInProgress){
            this.customPass.uniforms.scrollSpeed.value = 0;
            // this.customPass.uniforms.scrollSpeed.value = this.scroll.speedTarget;
            this.setImageMeshPositions();
        }

        //animate on hover
        for (var i = 0; i < this.materials.length; i++) {
            this.materials[i].uniforms.time.value = this.time;
        }

        // if(this.resizeInProgress ) {
        //   this.resetImageMeshPosition();
        // }

        this.composer.render()
        window.requestAnimationFrame(this.render.bind(this));
    },

}

export {Canvas};

