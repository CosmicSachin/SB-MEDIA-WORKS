tl = gsap.timeline()

tl.to(".logo",{
    y:"10vh",
    delay:1.5,
})

tl.to(".right li",{
    y:"10vh",
    stagger:0.2
})

tl.to(".icon li",{
    y:"10vh",
    stagger:0.2

})