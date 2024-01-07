const lerp = (a, b, n) => (1 - n) * a + n * b

import {Canvas} from "./canvas";

export default class Scroll{
  constructor(_options, _activeCallback) {

    this.DOM = {
      scrollable: _options.dom,
      scrollspeed : [],
      scrollactive : [],
      scrollspeedBackup : [],
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
  resizeMobileBreakEvents(){
    if(window.innerWidth < 768){
      for (const item of this.DOM.scrollspeed) {
        item.elNode.style.transform = `translate3d(0,0px,0)`;
      }
      for (const item of this.DOM.scrollactive) {
        item.elNode.style.transform = `translate3d(0,0px,0)`;
      }
      if(this.DOM.scrollspeed.length > 0){
        this.DOM.scrollspeedBackup = this.DOM.scrollspeed
      }
      this.DOM.scrollspeed = []
    }else{
      if(this.DOM.scrollspeed.length == 0 && this.DOM.scrollspeedBackup.length > 0){
        this.DOM.scrollspeed = this.DOM.scrollspeedBackup
      }
    }
  }
  initEvents() {
    window.addEventListener("resize", () => {

        //update fixed elements position in scrollSpeed array
        for (const item of this.DOM.scrollspeed) {
          if(item.options?.includes('fixed') ) {
            item.bounds = item.elNode.getBoundingClientRect();
            item.containerBottom = item.containerEl.getBoundingClientRect().bottom;
          }
        }

      this.resizeMobileBreakEvents()

      this.setSize()
    });
    window.addEventListener("scroll", () => {
      this.getScroll();
    }
  );

  }

  setSize() {
    // set the heigh of the body in order to keep the scrollbar on the page
    document.body.style.height = this.DOM.scrollable.scrollHeight > window.innerHeight ? `${this.DOM.scrollable.scrollHeight}px` : `${window.innerHeight}px`;
  }
  setSpeedElementsPosition(){
    for (const item of this.DOM.scrollspeed) {
      let speed = item.scrollSpeed || item.scrollSpeed === 0 ? item.scrollSpeed : false;
      if(item.options?.includes('fixed') ){
        const bounds = item.elNode.getBoundingClientRect();
        const containerBottom = item.containerEl.getBoundingClientRect().bottom;
        if( bounds.top < item.margin && containerBottom > item.margin + 250 ) {
          const fixedPosition = window.innerWidth > 992 ? - bounds.top + item.margin : 0 ;
          item.childEl.style.transform = `translate3d(0,${ fixedPosition }px,0)`;
        }
      } else {
        const bounds = item.elNode.getBoundingClientRect();
        if( bounds.top < window.innerHeight && bounds.bottom > 0 ) {
          item.elNode.style.transform = `translate3d(0,${ -1 * (this.scrollToRender - bounds.top) * speed }px,0)`;
        }
      }
    }
  }

  setElementActive(item, _status){
    if(_status){
      item.elNode.classList.add("active");
    }else {
      item.elNode.classList.remove("active");
    }

    Canvas.onActiveElCallback(item, _status);

    if(item.containedMeshId){
      Canvas.activateMesh(item.containedMeshId , _status);
    }
  }

  setActiveElementsPosition() {
    for (const item of this.DOM.scrollactive) {

      const bounds = item.elNode.getBoundingClientRect();
      const activeRange = item.scrollActive ? (1 - item.scrollActive) * window.innerHeight : 0;

        if( bounds.top < window.innerHeight - activeRange  && (item.rangeFromTop || bounds.bottom > activeRange)  ){
          if(item.options?.includes('scroll')) Canvas.onScrollCallBack(item,   window.innerHeight - bounds.top , this.speed )

          if(!item.elNode.classList.contains("active")){
            this.setElementActive(item, true )
          }

        } else {
          if(item.elNode.classList.contains("active") && !item.aniInOnly){
            this.setElementActive(item, false )
          }
        }

    }
  }

  setPosition() {

    // translate the scrollable container
    if ( Math.round(this.scrollToRender) !==  Math.round(this.current) || this.scrollToRender < 10  || !this.scrollTo.executed ) {
      this.DOM.scrollable.style.transform = `translate3d(0,${-1 * this.scrollToRender}px,0)`;
    }

    if(this.DOM.scrollspeed.length > 0){
      this.setSpeedElementsPosition()
    }
    if(this.DOM.scrollactive.length > 0){
      this.setActiveElementsPosition()
    }

  }
  scrollRenderToFluid(_scrollTo){
    window.scrollBy( 0 , _scrollTo.toString() );
    document.documentElement.scrollTop = _scrollTo
  }
  scrollRenderTo(_scrollTo) {
    this.scrollTo.executed = false;
    this.scrollTo.target = Number(_scrollTo);
    window.scrollBy( 0 , _scrollTo.toString());
    document.documentElement.scrollTop = _scrollTo
  }
  scrollRender(){
    this.scrollToRender = this.scrollTo.target;
    const margin = 10;
    this.docScroll = 0
    if(this.current <= this.scrollToRender + margin ){
      this.scrollTo.executed = true;
    }
  }
  render(_scrollTo, _fluid) {
    this.setSize();
    if(_scrollTo !== undefined && _fluid){
     this.scrollRenderToFluid(_scrollTo)
    }else if( _scrollTo !== undefined  && _fluid === false ){
      this.scrollRenderTo(_scrollTo)
    }else if ( !this.scrollTo.executed ) {
     this.scrollRender()
    }else {
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
