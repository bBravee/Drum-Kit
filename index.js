

// addEventListener(typ zdarzenia, obiekt powiadamiany gdy nastąpi zdarzenie)
// Jeżeli w nawiasach planujemy wpisać funkcję to podajemy ją bez nawiasów bo inaczej od razu się wywoła


// Wykrywanie Naciśnięcia Przycisku
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  // this zwraca element który wywołał listenera

  // zwróci tekst z przycisku który został naciśnięty
  // console.log(this.innerHTML);

  // wygeneruje dźwięk po naciśnięciu przycisku
  // var audio = new Audio("sounds/crash.mp3");
  // audio.play();

  var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);

  buttonAnimation(buttonInnerHTML);

});
}



// Wykrywanie Naciśnięcia Klawisza

// Dodajemy tego listenera do całego dokumentu, bo wtedy cała strona zaczyna nasłuchiwać kliknięcia klawisza a nie tylko jeden element
document.addEventListener("keydown", function(event) {

  // przekazujemy funkcji wygenerowane zdarzenie i dzięki temu możemy korzystać z jego właściwości takich jak np. key - który klawisz został wciśnięty

   makeSound(event.key);

   buttonAnimation(event.key);
});


function makeSound(key) {

  switch (key) {

    case "w":
     var crash = new Audio("sounds/crash.mp3");
     crash.play();
     break;

   case "a":
     var kick = new Audio("sounds/kick-bass.mp3");
     kick.play();
     break;

   case "s":
     var snare = new Audio("sounds/snare.mp3");
     snare.play();
     break;

  case "d":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

  case "j":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

  case "k":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

  case "l":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

  default: console.log(buttonInnerHTML);
  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("."+ currentKey);

  activeButton.classList.add("pressed");

// Wykonuje funkcję po odliczeniu podanego czasu
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
