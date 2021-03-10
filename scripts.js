const ball = document.querySelector(".ball");
const ballWrapper = document.querySelector(".move");

ballWrapper.onanimationiteration = e => {
  if (e.animationName === "moveX") {
    ball.classList.contains("rotate-right")
      ? ball.classList.replace("rotate-right", "rotate-left")
      : ball.classList.replace("rotate-left", "rotate-right");
  }
};