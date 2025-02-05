document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll(".slider");
    let index = 0;

    function moveSlider(slider, value) {
        slider.value = value;
        slider.style.background = `linear-gradient(90deg, #ff758c ${value}%, #ddd ${value}%)`;
    }

    function animateSliders() {
        sliders.forEach((slider, idx) => {
            let value = 0;
            let interval = setInterval(() => {
                if (value <= 100) {
                    value += 1;
                    moveSlider(slider, value);
                } else {
                    clearInterval(interval);
                }
            }, 10 * (idx + 1));
        });
    }

    animateSliders();
});
