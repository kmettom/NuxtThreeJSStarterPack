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

import example1Fragment from './shaders/example1Fragment.glsl';
import example1Vertex from './shaders/example1Vertex.glsl';

import example2Fragment from './shaders/example2Fragment.glsl';
import example2Vertex from './shaders/example2Vertex.glsl';

const CanvasOptions = {
    default: {
        fragmentShader: defaultFragment,
        vertexShader: defaultVertex,
    },
    scroll: {
        fragmentShader: scrollFragment,
        vertexShader: scrollVertex,
    },
    example1: {
        fragmentShader: example1Fragment,
        vertexShader: example1Vertex,
    },
    example2: {
        fragmentShader: example2Fragment,
        vertexShader: example2Vertex,
    },
};

let Canvas = {
    scrollPosition: 0,
    scrollInProgress : false,
    canvasContainer : null,
    scrollableContent : null,
    pointer : {cursor: null , intersects: null },
    time: 0,
    scene: new THREE.Scene(),
    materials: [],
    imageStore: [],
    scroll: null,
    currentScroll: 0,
    options : CanvasOptions,
    init(_canvasElement, _scrollableContent) {

        this.canvasContainer = _canvasElement;
        this.scrollableContent = _scrollableContent;

        this.scroll = new Scroll({
            dom: this.scrollableContent,
            activeCallback: this.activateImage,
        });

        this.width = this.canvasContainer.offsetWidth;
        this.height = this.canvasContainer.offsetHeight;

        this.camera = new THREE.PerspectiveCamera( 70, this.width/this.height, 100, 2000 );
        this.camera.position.z = 600; // 600
        this.camera.fov = 2 * Math.atan( (this.height/2)/600 ) * (180/Math.PI);

        this.renderer = new THREE.WebGLRenderer({
            alpha: true
        });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio , 1.5));
        this.canvasContainer.appendChild( this.renderer.domElement );
        this.setSize();
        this.composerPass()
        this.render();
    },

    setImageMeshPositions(){
        if(!this.imageStore) return;

        for (var i = 0; i < this.imageStore.length ; i++) {

            this.imageStore[i].mesh.position.x = ( this.imageStore[i].left - this.width/2 + this.imageStore[i].width/2);
            this.imageStore[i].mesh.position.y =  - this.imageStore[i].img.getBoundingClientRect().top + this.height/2 - this.imageStore[i].height/2;

        }
    },

    hoverImage(_id, _state) {
        const mesh = this.scene.getObjectByName(_id);
        if(!mesh) return;
        gsap.to(mesh.material.uniforms.hoverState , {
            duration: 0.5,
            value: _state ? 1 : 0,
        })
    },

    activateImage(_id, _state) {
        const mesh = this.scene.getObjectByName(_id);
        gsap.to(mesh.material.uniforms.aniIn , {
            duration: 1.25,
            value: _state ? 1 : 0,
        })
    },

    onActiveElCallback(_el){

    },

    addScrollSpeedElement(_el){
        this.scroll.DOM.scrollspeed.push(_el);
    },

    addScrollActiveElement(_el){
        this.scroll.DOM.scrollactive.push(_el);
        const $imageChild = _el.elNode.querySelector('img')
        if($imageChild){
            this.scroll.DOM.scrollactive.push({elNode: $imageChild , scrollActive: _el.scrollActive });
        }
    },

    addImage(_img, _shader, _id) {

        _img.dataset.meshId = _id;

        let fragmentShader= this.options.default.fragmentShader;
        let vertexShader = this.options.default.vertexShader;

        if(_shader){
            fragmentShader = this.options[_shader].fragmentShader;
            vertexShader = this.options[_shader].vertexShader;
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
                hoverState: {value: 0},
                aniIn: {value: 0},
            },
            fragmentShader: fragmentShader,
            vertexShader: vertexShader,
            transparent: true,
            name: _id,
        });

        this.materials.push(material);

        let mesh = new THREE.Mesh( geometry, material );
        mesh.name =  _id;

        mesh.castShadow = true;
        mesh.receiveShadow = true;
        this.scene.add(mesh);

        const newMesh = {
            name: _id,
            img: _img,
            mesh: mesh,
            top: position.top,
            left: position.left,
            width: bounds.width,
            height: bounds.height,
            thumbOutAction: {value: 0},
        }

        this.imageStore.push(newMesh);

        //todo - on image load, after Position SET!!!
        
        setTimeout(() => {
            if(!_img.dataset.scrollActive) this.activateImage(_id, true);
        },250)

        this.setImageMeshPositions();

    },

    animateElOnScroll(){

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

        this.myEffect = {
            uniforms: {
                "tDiffuse": { value: null },
                "scrollSpeed": { value: null },
            },
            vertexShader: this.options.scroll.vertexShader,
            fragmentShader: this.options.scroll.fragmentShader,
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
            this.customPass.uniforms.scrollSpeed.value = this.scroll.speedTarget;
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

