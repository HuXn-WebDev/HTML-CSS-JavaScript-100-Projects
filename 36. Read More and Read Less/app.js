const containerTwo = document.querySelector(".content-container-2");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  containerTwo.classList.toggle("toggle");
});
