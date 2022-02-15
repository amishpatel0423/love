var numberOfDrumButton = document.querySelectorAll(".drum").length;
for (var i = 0; i <numberOfDrumButton ; i++) {


  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
var buttonInnerHTML  = this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);

  });
}

document.addEventListener("keypress", function(){
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key){
  switch (key) {

      case "Click Me!":
        var tom1 = new Audio("love.mp3")
        tom1.play();
      break;
      default: console.log(this)

    }
}

function buttonAnimation(currentkey){
var activeButton = document.querySelector("." + currentkey);
activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
}, 100);
}
