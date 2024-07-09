const textEl = document.querySelector(".text");
const buttonEl = document.querySelector(".btn-сollapse");

buttonEl.addEventListener("click", () => {
  textEl.classList.toggle("open");
});
