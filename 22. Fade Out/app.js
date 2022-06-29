let arrow = document.getElementById("arrow");

window.addEventListener("scroll", () => {
  let position = window.scrollY;
  // console.log(position);
  if (position <= 5) {
    arrow.classList.toggle("fade-in");
    arrow.classList.toggle("fade-out");
  }
});
