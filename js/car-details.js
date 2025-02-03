document.addEventListener("DOMContentLoaded", () => {
  console.log("Website Loaded!");
  var main = new Splide("#main-slider", {
    type: "fade",
    rewind: true,
    pagination: false,
    arrows: false,
    cover: true,
    heightRatio: 0.7,
  });

  var thumbnails = new Splide("#thumbnail-slider", {
    fixedWidth: 100,
    fixedHeight: 90,
    gap: 12,
    rewind: true,
    pagination: false,
    cover: true,
    isNavigation: true,
    breakpoints: {
      600: {
        fixedWidth: 60,
        fixedHeight: 44,
      },
    },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});
