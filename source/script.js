/*var mins = 25;
var secs=0;
var seconds=0;
this.document.getElementById("display").innerHTML = mins + " minutes";


function increment() {
    seconds=0;
  mins++;
  
  this.document.getElementById("display").innerHTML = mins + " minutes";
}
function decrement() {
  if (mins > 0) {
    mins--;
    this.document.getElementById("display").innerHTML = mins + " minutes";
  }
}
function start() {
  function timer(seconds){
  
    setInterval(function(){
      if(seconds<=0){
      return
    }
      seconds--;
      console.log(seconds+"seconds")
      this.document.getElementById("display").innerHTML = Math.floor(seconds/(60*1000))+" mins "+(seconds%60*1000)/1000+ " secs"

    }, 1000);
  }
  
  timer(mins*60*1000)
  
  

}
()*/
let countdown;

let rememberedSeconds=0;

function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = (then - Date.now()) / 1000;
    rememberedSeconds = secondsLeft;
    //check if shuld stop
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    //display
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
  if (rememberedSeconds<=0){
    timer(25*60)
  }else{
    timer(rememberedSeconds)
  }
}
function decrement() {
  if(rememberedSeconds-60>=0){
    rememberedSeconds-=60;
  }
  start()
}
function increment(){
  rememberedSeconds+=60;
  start()
}
function start25(){
  timer(60*25)
}


timer(25 * 60);
