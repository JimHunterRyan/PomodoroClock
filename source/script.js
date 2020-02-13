
    var mins = 25;
    this.document.getElementById("display").innerHTML=mins+" minutes"

    

function increment(){
    mins++;
    this.document.getElementById("display").innerHTML=mins+" minutes"
}
function decrement(){
    if(mins>2){
        mins--;
        this.document.getElementById("display").innerHTML=mins+" minutes"
    }
   
}
function start(){

}
function pause(){
    this.document.getElementById("display").innerHTML="Paused"
}