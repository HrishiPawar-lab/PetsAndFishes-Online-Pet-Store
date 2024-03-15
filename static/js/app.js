// AOS
AOS.init({
    duration: 700,
    easing: "ease",
    once: true,
    disable: "mobile",
});

const categorySection = document.querySelector(".category-section");
const smoothScroller = document.querySelector(".smooth-scroller");

categorySection.addEventListener("mouseenter", () => {
    gsap.to(smoothScroller, {
        scale: 1,
        opacity: 1
    })
})
categorySection.addEventListener("mouseleave", () => {
    gsap.to(smoothScroller, {
        scale: 0,
        opacity: 0
    })
})
categorySection.addEventListener("mousemove", (e) => {
    gsap.to(smoothScroller, {
        top: e.clientY,
        left: e.clientX,
    })
})
