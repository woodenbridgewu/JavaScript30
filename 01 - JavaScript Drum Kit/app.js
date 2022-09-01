window.addEventListener("keydown", playHandler);
function playHandler(e) {
  // play music
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (audio) {
    audio.currentTime = 0; //可不播完就再次播放
    audio.play();
  }
  // DOM styles
  const dom = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (dom) {
    dom.classList.add("playing");
  }
  // console.log(audio, dom);
}

document.querySelectorAll(".key").forEach(function (key) {
  key.addEventListener("transitionend", reansitionendHandler);

  function reansitionendHandler(e) {
    // console.log(e);
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  }
});
