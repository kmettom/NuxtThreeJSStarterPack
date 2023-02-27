const lerp = (a, b, n) => (1 - n) * a + n * b

export default class Scroll{
  constructor(_options){

    this.DOM = {
      scrollable: _options.dom,
      scrollspeed : _options.dom.querySelectorAll("div[data-scroll-speed]"),
      scrollactive : _options.dom.querySelectorAll("div[data-scroll-active]"),
    };

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
    // this.docScroll = window.pageYOffset || document.documentElement.scrollTop;
    this.docScroll = this.current = window.pageYOffset;
    return this.docScroll;
  }
  initEvents() {

    // on resize reset the body's height
    window.addEventListener("resize", () => this.setSize());
    window.addEventListener("scroll", () => {
      this.getScroll();
    }
  );

  }

  setSize() {
    // set the heigh of the body in order to keep the scrollbar on the page
    // document.body.style.height = this.DOM.scrollable.scrollHeight > window.innerHeight ? `${this.DOM.scrollable.scrollHeight}px` : `${window.innerHeight}px`;
    document.body.style.height = `${this.DOM.scrollable.scrollHeight}px`;
  }

  setPosition() {
    // translate the scrollable container
    if ( Math.round(this.scrollToRender) !==  Math.round(this.current) || this.scrollToRender < 10  || !this.scrollTo.executed ) {
      this.DOM.scrollable.style.transform = `translate3d(0,${-1 * this.scrollToRender}px,0)`;
    }

    for (const item of this.DOM.scrollspeed) {
      const bounds = item.getBoundingClientRect();
      let speed = item.dataset.scrollSpeed ? item.dataset.scrollSpeed : false;
      if(speed){
        item.style.transform = `translate3d(0,${ -1 * this.scrollToRender * speed }px,0)`;
      }
    }

    for (const item of this.DOM.scrollactive) {
      const bounds = item.getBoundingClientRect();
      const activeRange = item.dataset.scrollActive ? (1 - item.dataset.scrollActive) * window.innerHeight : 0;

      //todo - finish active range and event emiter study and finish

      if( bounds.bottom > activeRange && bounds.top < ( window.innerHeight - activeRange) ){
        item.classList.add("active");
      } else {
        item.classList.remove("active");
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

    // scroll speed for Canvas
    this.speed = Math.min(Math.abs(this.current - this.scrollToRender), 200)/200;
    this.speedTarget +=(this.speed - this.speedTarget)*0.2
    this.setPosition();
  }

}
