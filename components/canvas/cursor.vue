<template>
  <div  id="uniqueCursor" ></div>
</template>

<script type="text/babel">

import {Canvas} from "~/utils/canvas";

export default {
  name: "appCursor",
  props: [ 'cursorEnabled' ],
  data: () => {
    return {
      baseSize: 12,
      baseOpacity: 0.95,
      curNewSize: null,
      curNewOpacity: 0.95,
      currentSize: null,
      currentOpacity: null,
      windowMargin: 40,
      cursorX: null,
      cursorY: null,
      curNewX: null,
      curNewY: null,
      cursorInited: false,
      easingPosition: 2 ,
      easing: 5 ,
    }
  },
  methods:{
    cursorInit(){
      Canvas.animations.cursorCallBack = this.draw
      // this.draw();
      window.onmousemove = (event) => {
        let  _event = event;
        this.cursorTrack(_event);
      };
      document.addEventListener( 'mouseout' , (e) => {
        e = e ? e : window.event;
        var from = e.relatedTarget || e.toElement;
        if (!from || from.nodeName === "HTML") {
          this.curNewSize = 1;
        }
      });
    },
    cursorTrack(_event){
      this.curNewSize = _event.target.dataset.cursorsize ? _event.target.dataset.cursorsize : this.baseSize ;
      this.curNewOpacity =  _event.target.dataset.cursoropacity ? _event.target.dataset.cursoropacity : this.baseOpacity;
      this.curNewX = _event.clientX;
      this.curNewY = _event.clientY;
      this.curNewColor = _event.target.dataset.cursorcolor  && _event.target.dataset.cursorcolor  == 'light' ? '#fff' : '#172d4a' ;
      if( !this.cursorInited ){
        this.currentSize = this.baseSize;
        this.cursorX = _event.clientX;
        this.cursorY = _event.clientY;
        this.cursorInited = true;
      }
      // this.$store.state.cursorPosition = { clientX: _event.clientX , clientY: _event.clientY };
    },
    draw(){
      const dX =  this.curNewX - this.cursorX;
      const dY =  this.curNewY - this.cursorY;
      this.cursorX += dX / this.easingPosition;
      this.cursorY += dY / this.easingPosition;
      const t3d = `translate3d(${ this.cursorX - this.currentSize / 2}px,${ this.cursorY - this.currentSize / 2 }px,0)`;
      this.$el.style.webkitTransform = t3d;
      this.$el.style.transform = t3d;

      const dO = this.curNewOpacity - this.currentOpacity;
      this.currentOpacity += dO / this.easing;
      this.$el.style.opacity = this.currentOpacity;

      const dD = this.curNewSize - this.currentSize;
      this.currentSize += dD / this.easing;
      this.$el.style.height = this.currentSize + "px";
      this.$el.style.width = this.currentSize + "px";

      this.$el.style.background = this.curNewColor
    },
  },
  mounted(){
    if( window.innerWidth > 768 ){
      this.cursorInit();
    }
  },
};
</script>

<style lang="scss" >

body {
  cursor: none;
  * {
    cursor: none;
  }
}

#uniqueCursor{
  display: block;
  pointer-events: none;
  position: fixed;
  text-align: center;
  z-index: 99;
  background: var(--blue-secondary);
  border-radius: 50%;
  z-index: 99;
  top: 0px;
  left: 0px;
}


</style>
