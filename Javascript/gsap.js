gsap.to(".main-division", {
    backgroundColor: '#0F1014',
    scrollTrigger : {
        trigger: '.main-division',
        scroller: 'body',
        // markers: true,
        start: 'top 60%',
        end: 'top 10%',
        scrub: 3
    }
})