const lerp = (a, b, n) => (1 - n) * a + n * b

import {Canvas} from "./canvas";


export default class Scroll{
  constructor(_options, _activeCallback) {

    this.DOM = {
      scrollable: _options.dom,
      scrollspeed : [],
      scrollactive : [],
    };

    this.activeCallback = _options.activeCallback;

    this.docScroll = 0;
    this.scrollToRender = 0;
    this.current = 0;
    this.ease = 0.1;
    this.speed = 0;
    this.speedTarget = 0;
    this.scrollTo = {target: 0 , executed: true}

    this.setSize();
    this.getScroll();
    this.init();
    this.initEvents();

  }

  init(){
    // sets the initial value (no interpolation) - translate the scroll value
    for (const key in this.renderedStyles) {
      this.current = this.scrollToRender = this.getScroll();
    }
    // translate the scrollable element
    this.setPosition();
    this.shouldRender = true;
  }

  getScroll(){
    this.docScroll = this.current = window.pageYOffset || document.documentElement.scrollTop;
    return this.docScroll;
  }
  initEvents() {
    window.addEventListener("resize", () => this.setSize());
    window.addEventListener("scroll", () => {
      this.getScroll();
    }
  );

  }

  setSize() {
    // set the heigh of the body in order to keep the scrollbar on the page
    document.body.style.height = this.DOM.scrollable.scrollHeight > window.innerHeight ? `${this.DOM.scrollable.scrollHeight}px` : `${window.innerHeight}px`;
  }

  findMeshID(_elParent){
    if(_elParent.dataset.meshId) return _elParent.dataset.meshId;

    let el = _elParent.querySelector("[data-mesh-id]");
    return el ? el.dataset.meshId : false;
  }

  setPosition() {
    // translate the scrollable container
    if ( Math.round(this.scrollToRender) !==  Math.round(this.current) || this.scrollToRender < 10  || !this.scrollTo.executed ) {
      this.DOM.scrollable.style.transform = `translate3d(0,${-1 * this.scrollToRender}px,0)`;
    }

    for (const item of this.DOM.scrollspeed) {
      const bounds = item.elNode.getBoundingClientRect();
      let speed = item.scrollSpeed ? item.scrollSpeed : false;
      if(speed){
        if( bounds.bottom > 0 && bounds.top < ( window.innerHeight ) ) {
          item.elNode.style.transform = `translate3d(0,${ -1 * this.scrollToRender * speed }px,0)`;
        }
      }
    }

    for (const item of this.DOM.scrollactive) {
      const bounds = item.elNode.getBoundingClientRect();
      const activeRange = item.scrollActive ? (1 - item.scrollActive) * window.innerHeight : 0;

      if( bounds.bottom > activeRange && bounds.top < ( window.innerHeight - activeRange) ){
        if(!item.elNode.classList.contains("active")){

          item.elNode.classList.add("active");

          let meshId = this.findMeshID( item.elNode );
          if(meshId){
            Canvas.activateImage(meshId , true);
          }

        }
      } else {
        if(item.elNode.classList.contains("active")){
          item.elNode.classList.remove("active");

          let meshId = this.findMeshID( item.elNode );
          if(meshId){
            Canvas.activateImage(meshId , false);
          }

        }
      }
    }

  }

  render(_scrollTo, _fluid) {
    this.setSize();

    if(_scrollTo && _fluid){
      window.scrollBy( 0 , _scrollTo );
    }
    else if( _scrollTo  && _fluid === false ){
      this.scrollTo.executed = false;
      this.scrollTo.target = Number(_scrollTo);
      window.scrollBy( 0 , _scrollTo.toString());
    }else if ( !this.scrollTo.executed ) {
      this.scrollToRender = this.scrollTo.target;
      const margin = 10;
      if(this.current <= this.scrollToRender + margin ){
        this.scrollTo.executed = true;
      }
    }
     else {
      this.scrollToRender = Math.round(
        lerp(
          this.scrollToRender,
          this.current,
          this.ease
        )
      );
    }

    this.speed = Math.min(Math.abs(this.current - this.scrollToRender), 200)/200;
    this.speedTarget +=(this.speed - this.speedTarget)*0.2
    this.setPosition();
  }

}
