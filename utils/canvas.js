import { gsap } from "gsap";
import * as THREE from 'three';

import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import pkg from 'three-msdf-text-utils';
// fix for CommonJS import deployment break
const { MSDFTextGeometry } = pkg;

import Scroll from './scroll.js';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

import scrollFragment from './shaders/scrollFragment.glsl';
import scrollVertex from './shaders/scrollVertex.glsl';

import defaultFragment from './shaders/defaultFragment.glsl';
import defaultVertex from './shaders/defaultVertex.glsl';

import textFragment from './shaders/textFragment.glsl';
import textVertex from './shaders/textVertex.glsl';

import example1Fragment from './shaders/example1Fragment.glsl';
import example1Vertex from './shaders/example1Vertex.glsl';

import example2Fragment from './shaders/example2Fragment.glsl';
import example2Vertex from './shaders/example2Vertex.glsl';

import MSDFfragment from './shaders/MSDFfragment.glsl';
import MSDFvertex from './shaders/MSDFvertex.glsl';

const CanvasOptions = {
    scroll: {
        fragmentShader: scrollFragment,
        vertexShader: scrollVertex,
    },
    default: {
        fragmentShader: defaultFragment,
        vertexShader: defaultVertex,
        textShader: textFragment,
        textVertex: textVertex,
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
    navigation: null,
    scrollInProgress : false,
    canvasContainer : null,
    scrollableContent : null,
    pointer : {cursor: null , intersects: null },
    time: 0,
    scene: new THREE.Scene(),
    materials: [],
    imageStore: [],
    trackViewPortElements:[],
    scroll: null,
    currentScroll: 0,
    options : CanvasOptions,
    animations: {
        welcome: {},
        cursorCallBack: () => {},
    },
    initScroll(){
        this.scroll = new Scroll({
            dom: this.scrollableContent,
            activeCallback: this.activateMesh,
        });
    },
    setCanvasAndCamera(){
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
    },
    init(_canvasElement, _scrollableContent) {

        this.canvasContainer = _canvasElement;
        this.scrollableContent = _scrollableContent;

        this.initScroll()

        this.setCanvasAndCamera()

        this.setSize();
        this.composerPass();

        this.setResizeListener()

        this.render();
    },
    setResizeListener(){
        window.addEventListener("resize", () => {

            this.width = this.canvasContainer.offsetWidth;
            this.height = this.canvasContainer.offsetHeight;

            this.setSize();

           this.resizeImageStore()

        })
    },
    resizeImageStore(){
        // all meshes should be resized to new size
        for (var i = 0; i < this.imageStore.length; i++) {
            let bounds = this.imageStore[i].img.getBoundingClientRect();
            this.imageStore[i].mesh.scale.set(bounds.width , bounds.height)
            this.imageStore[i].width = bounds.width;
            this.imageStore[i].height = bounds.height;
        }
        this._setMeshPositions()
    },
    _setMeshPositions(){
        if(!this.imageStore) return;
        for (var i = 0; i < this.imageStore.length ; i++) {
            this.imageStore[i].mesh.position.x = ( this.imageStore[i].img.getBoundingClientRect().left - this.width/2 + this.imageStore[i].width/2);
            this.imageStore[i].mesh.position.y =  - this.imageStore[i].img.getBoundingClientRect().top + this.height/2 - this.imageStore[i].height/2;
        }
    },

    hoverMesh(_id, _state) {
        const mesh = this.scene.getObjectByName(_id);
        if(!mesh) return;
        gsap.to(mesh.material.uniforms.hoverState , {
            duration: 0.5,
            value: _state ? 1 : 0,
        })
    },

    activateMesh(_id, _state) {
        const mesh = this.scene.getObjectByName(_id);
        gsap.to(mesh.material.uniforms.aniIn , {
            duration: 1.25,
            value: _state ? 1 : 0,
        })
    },

    onActiveElCallback(_item, _active){
        if(_item.options?.includes('examplecallback')) {
            // do something when _active is true or false
            console.log("Example callback triggered, element active state: " , _active )
        }
    },

    onScrollCallBack(_item, _scrollPosition, _scrollSpeed) {

    },

    addScrollSpeedElement(_el){
        if(_el.options?.includes('fixed')){
            setTimeout(() => { // timeout for rendering when page is changed
                _el.containerId = _el.scrollSpeed
                _el.scrollSpeed = 1
                _el.bounds = _el.elNode.getBoundingClientRect()
                _el.containerEl = document.getElementById(_el.containerId)
                _el.childEl= _el.elNode.children[0]
                _el.containerBottom = _el.containerEl.getBoundingClientRect().bottom
                _el.margin = 60
                this.scroll.DOM.scrollspeed.push(_el);
            }, 750);
            return
        }
        this.scroll.DOM.scrollspeed.push(_el);
    },

    removeScrollSpeedElement(_elNode){
        if(this.scroll.DOM.scrollspeed.length === 0 || !_elNode ) return
        for (var i = 0; i < this.scroll.DOM.scrollspeed.length; i++) {
            if(this.scroll.DOM.scrollspeed[i].elNode.isEqualNode(_elNode)){
                this.scroll.DOM.scrollspeed.splice(i, 1);
                break;
            }
        }
    },

    removeScrollActiveElement(_elNode) {
        if(!_elNode || this.scroll.DOM.scrollactive.length === 0) return
        for (var i = 0; i < this.scroll.DOM.scrollactive.length; i++) {
            if(this.scroll.DOM.scrollactive[i].elNode.isEqualNode(_elNode)){
                this.scroll.DOM.scrollactive.splice(i, 1);
                break;
            }
        }
    },

    addScrollActiveElement(_settings){
        _settings.containedMeshId = this.findMeshID(_settings.elNode, true);
        if(_settings.options?.includes('top')) _settings.rangeFromTop = true;
        if(_settings.options?.includes('once')) _settings.aniInOnly = true;
        _settings.elNode.classList.add('show-on-scroll')
        this.scroll.DOM.scrollactive.push(_settings);
        this.onActiveElCallback(_settings, false)
    },

    findMeshID(_elParent, _isActiveScroll){
        if(_elParent.dataset.meshId) {
            _elParent.dataset.scrollActive = "true";
            return _elParent.dataset.meshId;
        }

        let el = _elParent.querySelector("[data-mesh-id]");
        if(!el) return false;

        el.dataset.scrollActive = _isActiveScroll ? "true" : undefined;
        return el.dataset.meshId;
    },

    removeMesh(_id){
        let toRemove = this.scene.getObjectByName(_id);
        if(!toRemove) return;
        this.scene.remove(toRemove);
        toRemove.geometry.dispose();
        toRemove.material.dispose();
        toRemove = undefined;

        for (var i = 0; i < this.imageStore.length; i++) {
            if(this.imageStore[i].name === _id){
                this.imageStore.splice(i, 1);
                this.materials.splice(i, 1);
                break;
            }
        }
    },

    addTextAsMSDF(_shader, _id, _htmlEl, _text){

        let bounds = _htmlEl.getBoundingClientRect();
        let position = { top : bounds.top , left: bounds.left};
        position.top += this.currentScroll;

        //*****************************
        // MSDF
        //*****************************

        const fontUrl = '/font/PPFormula-CondensedBlack.fnt'
        const atlasUrl = '/font/PPFormula-CondensedBlack.png'

        const loadFontAtlas = (path) => {
            return new Promise((resolve, reject) => {
                const loader = new THREE.TextureLoader();
                loader.load(path, resolve);
            });
        }

        const loadFont = (path) => {
            return new Promise((resolve, reject) => {
                const loader = new FontLoader();
                loader.load(path, resolve);
            });
        }

        Promise.all([
            loadFontAtlas(atlasUrl),
            loadFont(fontUrl),
        ]).then(([atlas, font]) => {

            const geometry = new MSDFTextGeometry({
                text: _text.replaceAll(' ' , ''),
                font: font.data,
            });

            const material = new THREE.ShaderMaterial({
                side: THREE.DoubleSide,
                transparent: true,
                defines: {
                    IS_SMALL: false //false,
                },
                extensions: {
                    derivatives: false, //true,
                },
                uniforms: {
                    uColor: { value: new THREE.Color('#1b1818') },
                    // Common
                    uOpacity: { value: 1 },
                    uMap: { value: null },
                    // Rendering
                    uThreshold: { value: 0.05 },
                    uAlphaTest: { value: 0.01 },
                    // Strokes
                    // uStrokeColor: { value: new THREE.Color("#ff0000") },
                    uStrokeOutsetWidth: { value: 0.0 },
                    uStrokeInsetWidth: { value: 0.3 }, //0.3
                    // new generic
                    time: {value:1},
                    // uImage: {value: texture},
                    vectorVNoise: {value: new THREE.Vector2( 1.5 , 1.5 )}, // 1.5
                    hoverState: {value: 0},
                    aniIn: {value: 0},
                },
                vertexShader: MSDFvertex,
                fragmentShader: MSDFfragment,
            });

            material.uniforms.uMap.value = atlas;

            let mesh = new THREE.Mesh(geometry, material);
            mesh.name = _id;

            // const scaleCoefX = bounds.height / mesh.geometry._layout._height;
            const scaleCoefY = bounds.width / mesh.geometry._layout._width;

            mesh.scale.set(1*scaleCoefY, -1*scaleCoefY, 1);

            this.scene.add(mesh)

            const newMesh = {
                name: _id,
                img: _htmlEl,
                mesh: mesh,
                top: position.top,
                left: position.left,
                width: 0, //bounds.width,
                height: bounds.height * 1.43 // bounds.height,
            }

            this.imageStore.push(newMesh);

            this._setMeshPositions();

            setTimeout(() => {
                if(!_htmlEl.dataset.scrollActive) this.activateMesh(_id, true);
            },250)
            this.meshMouseListeners(newMesh, material);

        });
    },
    addImageAsMesh(_img, _shader, _meshId, _mouseListeners) {

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

        geometry = new THREE.PlaneGeometry( 1, 1 );

        let _id = _meshId ? _meshId : `meshImage_${ _shader || "default" }_${this.imageStore.length}`;
        _img.dataset.meshId = _id;

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

        mesh.scale.set(bounds.width , bounds.height)

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

        setTimeout(() => {
            if(!_img.dataset.scrollActive) this.activateMesh(_id, true);
        },250)

        this._setMeshPositions();
        if(_mouseListeners)
        this.meshMouseListeners(newMesh, material);
    },

    meshMouseListeners(_mesh, _material) {

        _mesh.img.addEventListener('mouseenter',(event)=>{
            _mesh.mesh.renderOrder = 1;
            gsap.to(_material.uniforms.hoverState, {
                duration: 0.5,
                value:1
            })
        })

        _mesh.img.addEventListener('mouseout',()=>{
            _mesh.mesh.renderOrder = 0;
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
    scrollToTop(_delay){
        setTimeout( () => {
            this.scroll.render( 0 , false );
        } , _delay)
    },


    render(currentTime) {
        this.animations.cursorCallBack()

        this.time+=0.05;

        this.scroll.render();
        this.scrollInProgress = this.currentScroll !== this.scroll.scrollToRender ;
        this.currentScroll = this.scroll.scrollToRender;

        //animate on scroll
        if( this.scrollInProgress){
            this.customPass.uniforms.scrollSpeed.value = this.scroll.speedTarget;
            this._setMeshPositions();
        }

        //animate on hover
        for (var i = 0; i < this.materials.length; i++) {
            this.materials[i].uniforms.time.value = this.time;
        }

        this.composer.render()

        try {
          requestAnimationFrame(this.render.bind(this));
        } catch (_) {
          setImmediate(this.render.bind(this));
        }
    },

}

export { Canvas };

