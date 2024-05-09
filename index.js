var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.10);
        }, 20);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(10);
});


tl = gsap.timeline()

tl.from(".logo",{
    y:"-10vh",
    opacity:0,
    delay:4,
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