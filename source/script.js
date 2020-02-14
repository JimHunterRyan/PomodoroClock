let countdown;

let rememberedSeconds = 0;

function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = (then - Date.now()) / 1000;
    rememberedSeconds = secondsLeft;

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = Math.floor(seconds % 60);

  display = minutes + "m " + remainderSeconds + "s";
  this.document.getElementById("display").innerHTML = display;
  document.title = display;
}

function pause() {
  if (document.getElementById("pause").innerHTML == "Pause") {
    document.getElementById("pause").innerHTML = "Play";
    var savedString = document.getElementById("display").innerHTML;

    document.getElementById("display").innerHTML = "Paused";

    clearInterval(countdown);
  } else {
    document.getElementById("pause").innerHTML = "Pause";
    timer(rememberedSeconds);
  }
}

function start() {
  if (rememberedSeconds <= 0) {
    timer(25 * 60);
  } else {
    timer(rememberedSeconds);
  }
}
function decrement() {
  if (rememberedSeconds - 60 >= 0) {
    rememberedSeconds -= 60;
  }
  start();
}
function increment() {
  rememberedSeconds += 60;
  start();
}
function start25() {
  timer(60 * 25);
}

timer(25 * 60);
