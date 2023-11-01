
import { gsap } from "gsap"

export function header(_el, _active) {
    const elToAni = _el.elNode.querySelectorAll('.ani-section-title')
    if(!elToAni) return
    if (_active) {
        gsap.to([...elToAni], { duration: 0.5, y: 0, opacity: 1, ease: "ease", stagger: 0.3 })
    } else {
        gsap.to([...elToAni], { duration: 0.35, y: 125, opacity: 1, ease: "linear" })
    }
}

export function content(_el, _active) {
    const elToAni = _el.elNode.querySelector('.ani-content-in')
    if(!elToAni) return
    if (_active) {
        gsap.to(elToAni, { duration: 0.5,  y: 0, opacity: 1, ease: "ease" })
    } else {
        gsap.to(elToAni, { duration: 0.35,  y: 10, opacity: 0, ease: "ease" })
    }
}

export function line(_el, _active) {
    if (_active) {
        gsap.to(_el.elNode, { duration: 0.5 , width:'100%', ease: "ease" })
    }
}

export function footer(_el, _scroll) {
    gsap.to(_el.elNode.querySelector('.footer-ani-wrapper'), { duration: 0, y: _el.elNode.clientHeight / 3 - _scroll / 3 })
}

export function navigationToSmall(_el, _status) {
    let $lettersToAni = _el.querySelectorAll(['.let-4' , '.let-5' , '.let-6' , '.let-7' , '.let-8' , '.let-9' , '.let-10'])
    let $letterToMove = _el.querySelectorAll(['.let-3'])
    if(_status){
        gsap.to($lettersToAni, { duration: 0.3, y: -25, stagger:0.05 })
        gsap.to($letterToMove, { duration: 0.25, x: -15 })
    } else {
        gsap.to($lettersToAni, { duration: 0.2, y: 0, stagger:0.05 })
        gsap.to($letterToMove, { duration: 0.25, x: 0 })
    }
}



// Calculating relative pos diff and base on that give different rotation
// 3 cases:  < -1, [-1, 2], 2 <
let lastPos = 0;
let posDiff = 0;
export function iconRotate(_el, _position , _speed ) {
    const getPosDiff = (a, b) => {
        const res = Math.abs(Math.floor(a)) - Math.abs(Math.floor(b));
        lastPos = _position
        return res;
    }

    const rotationFn = (diff) => {
        let angel = 0
        if (diff < -1) angel = diff * 3;
        if (-1 <= diff && diff <= 2) angel = 5;
        if (diff > 2) angel = diff * 3;
        if(angel < 0 ) angel = -angel
        return `+=${angel/3}`
    }

    if (lastPos === 0) {
        lastPos = _position;
        return;
    }
    posDiff = getPosDiff(_position, lastPos)
    gsap.to(_el.elNode, { rotate: rotationFn(posDiff)})
}
