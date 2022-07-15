const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    removeCurrentActives();
    slide.classList.add("active");
  });
});

function removeCurrentActives() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
