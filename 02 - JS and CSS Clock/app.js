function getTime() {
  let now = new Date();
  let secondHand = document.querySelector(".second-hand");
  let minHand = document.querySelector(".min-hand");
  let hourHand = document.querySelector(".hour-hand");

  let second = now.getSeconds();
  let min = now.getMinutes();
  let hour = now.getHours();

  let secondDegrees = second * 6;
  let minDegrees = min * 6;
  let hourDegrees = hour * 30;

  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
getTime();
setInterval(getTime, 1000);
