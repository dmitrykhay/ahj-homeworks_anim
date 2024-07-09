class Like {
  constructor(container) {
    this.container = container;
    this.variants = [
      "like-animation-1",
      "like-animation-2",
      "like-animation-3",
      "like-animation-4",
    ];
    this.init();
  }

  init() {
    const likeButton = document.createElement("button");
    likeButton.classList.add("like-button");
    likeButton.textContent = "Like";

    const likeIcon = document.createElement("img");
    likeIcon.src = "./img/heart.png";
    likeIcon.classList.add("like-icon");
    likeButton.appendChild(likeIcon);

    this.container.appendChild(likeButton);

    const buttonLike = document.querySelector(".like-button");

    buttonLike.addEventListener("click", () => {
      this.animation(buttonLike);
    });
  }

  animation(buttonLike) {
    const likeIcon = this.container.querySelector(".like-icon");
    const likeElement = likeIcon.cloneNode(true);
    likeElement.classList.add("like-animation");
    likeElement.style.animationName = this.getRandomElement(this.variants);
    buttonLike.appendChild(likeElement);

    likeElement.addEventListener("animationend", () => {
      likeElement.remove();
    });
  }

  getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}

new Like(document.querySelector("body"));
