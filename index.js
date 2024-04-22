tl = gsap.timeline()

tl.from(".logo",{
    y:"-10vh",
    opacity:0,
    delay:1.5,
})

tl.from(".right li",{
    y:"-10vh",
    opacity:0,
    stagger:0.2
})

tl.from(".icon li",{
    y:"-10vh",
    opacity:0,
    stagger:0.2

})