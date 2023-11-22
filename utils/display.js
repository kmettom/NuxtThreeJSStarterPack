let Display = {
    isMobile: null,

    init() {
        this.setScreenSize();
        this.resizeListener();
    },
    resizeListener(){
        window.addEventListener('resize', () => {
            this.setScreenSize();
        });
    },
    emitScreenChange() {
        // window.dispatchEvent(new Event('resize'));
    },
    setScreenSize() {
        this.isMobile = window.innerWidth < 768;
    },

}

export { Display };

