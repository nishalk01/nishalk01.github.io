const AnimateElements = document.querySelectorAll(".animateOnScroll");

const config = {
    rootMargin: '50px 20px 75px 30px',
    threshold: [0, 0.25, 0.75, 1]
};

observor = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        const { animation, delay, repeat } = entry.target.dataset;
        let animationName=animation==undefined?"fade-in-bottom":animation
        let delayTime = delay==undefined? "1s":delay
        if (entry.intersectionRatio > 0) {
            entry.target.setAttribute("style", `animation:${animationName}  ${delayTime} cubic-bezier(0.390, 0.575, 0.565, 1.000) ;`);
            observor.unobserve(entry.target); //uncomment for animation to repeat
            // if (!repeat) {
            //     observor.unobserve(entry.target);
            // }

        }
        else {
            entry.target.style.animation = 'none';


        }
    })
}, config)

AnimateElements.forEach(AnimateElement => {

    observor.observe(AnimateElement);
})