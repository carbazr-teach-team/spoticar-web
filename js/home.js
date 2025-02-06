document.addEventListener("DOMContentLoaded", () => {
  var mainSlider = new Splide("#home-carousel-one", {
    autoplay: true,
    type: "loop",
  });

  var secondSlider = new Splide("#home-carousel-two", {
    autoplay: true,
    type: "loop",
  });

  mainSlider.mount();
  secondSlider.mount();
});
