var tl = gsap.timeline()

const bmw = function () {
    tl.to("#inner_circle", {
        scale: 1.3,
        duration: 1,
        delay: .2
    }, "anim")
    tl.to("#inner_circle", {
        rotate: 90,
        duration: 1.4,
        delay: 1
    }, "anim")
    tl.to(".shape.s1", {
        background: "#CFFF04",
        duration: 2,
        delay: 1
    }, "anim")
    tl.to(".shape.s3", {
        background: "#CFFF04",
        duration: 2,
        delay: 1
    }, "anim")
    tl.to("#inner_circle", {
        scale: 1,
        duration: .1,
        delay: 0
    })
}

const loader = function () {
    bmw();
    tl.to(".loader_page1", {
        backgroundColor: "#DEFF4B",
        duration: 1
    })
    tl.to(".loader_page1", {
        top: "-100%",
        duration: 1.5,
        delay: .1
    })
    tl.from(".loader_page2", {
        top: "100%",
        duration: 1.5,
        delay: .3
    })
    tl.to(".loader",{
        display:"none",
        opacity:0
    })
}
loader();

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});