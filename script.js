const ride = document.getElementById("rideImg");
const snare = document.getElementById("snareImg");
const crash = document.getElementById("crashImg");
const floorTom = document.getElementById("floorTomImg");
const tom1 = document.getElementById("tom1Img");
const tom2 = document.getElementById("tom2Img");
const kick = document.getElementById("kickImg");
const hiHat = document.getElementById("hihatImg");


ride.addEventListener("click", () =>{
    document.getElementById("ride").pause();
    document.getElementById("ride").currentTime = 0;
    document.getElementById("ride").play();
});

snare.addEventListener("click", () =>{
    document.getElementById("snare").pause();
    document.getElementById("snare").currentTime = 0;
    document.getElementById("snare").play();
});

crash.addEventListener("click", () =>{
    document.getElementById("crash").pause();
    document.getElementById("crash").currentTime = 0;
    document.getElementById("crash").play();
});

floorTom.addEventListener("click", () =>{
    document.getElementById("floortom").pause();
    document.getElementById("floortom").currentTime = 0;
    document.getElementById("floortom").play();
});

tom1.addEventListener("click", () =>{
    document.getElementById("bigtom").pause();
    document.getElementById("bigtom").currentTime = 0;
    document.getElementById("bigtom").play();
});

tom2.addEventListener("click", () =>{
    document.getElementById("smalltom").pause();
    document.getElementById("smalltom").currentTime = 0;
    document.getElementById("smalltom").play();
});

kick.addEventListener("click", () =>{
    document.getElementById("kick").pause();
    document.getElementById("kick").currentTime = 0;
    document.getElementById("kick").play();
});

hiHat.addEventListener("click", () =>{
    document.getElementById("hihat").pause();
    document.getElementById("hihat").currentTime = 0;
    document.getElementById("hihat").play();
});

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return null;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
    setTimeout(function() {
      key.classList.remove("playing");
    }, 100);
  }

  window.addEventListener("keydown", playSound);

