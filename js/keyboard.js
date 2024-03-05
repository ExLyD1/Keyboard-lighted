//общие переменные
let clickKey = document.querySelector(".clickKey")
let inputStroke = document.querySelector('#inputHueta')
let butReset = document.querySelector("#buttonHueta")
let fullKeyboard = document.querySelector(".parent")

//кнопки для проверки
let space = document.querySelector("#space")
let tab = document.querySelector("#tab")
let capslock = document.querySelector("#capslock")
let shiftL = document.querySelector("#shiftleft")
let ctrlL = document.querySelector("#ctrlL")
let winL = document.querySelector("#winL")
let altL = document.querySelector("#altL")
let altR = document.querySelector("#altR")
let winR = document.querySelector("#winR")
let ctrlR = document.querySelector("#ctrlR")
let shiftR = document.querySelector("#shiftright")
let enter = document.querySelector("#enter")
let deleteKey = document.querySelector("#delete")





// кнопка сброса текста

butReset.addEventListener("click", event=>{
  inputStroke.value = "";
  butReset.textContent = "Reset";
  writtenEl = []
})



// трай сделать светящиеся кнопки

document.addEventListener('keydown', function(event) {
  const keyChar = event.key;
  let keyElement;

  if (keyChar === "Delete") {
    keyElement = document.querySelector(`#delete`);
  } else {
    keyElement = document.querySelector(`.clickKey[data-char="${keyChar}"]`);
  }

  if (keyElement) {
    keyElement.classList.add('highlighted');

    setTimeout(function() {
      keyElement.classList.remove('highlighted');
    }, 1000);
  }
});







// Проверка допустимых символов ввода с клавиатуры



let writtenEl = []
document.onkeydown = function (event) {
  if ( event.keyCode == 8) {
    writtenEl.pop()
    inputStroke.value = writtenEl.join('');
  }
  else if ( event.keyCode == 9) {
    let statusTab = true;
  }
  else if ( event.keyCode == 20) {
    let statusCaps = true;
  }
  else if ( event.keyCode == 16) {
    let statusShift = true;
  }
  else if ( event.keyCode == 17) {
    let statusCtrl = true;
  }
  else if ( event.keyCode == 91) {
    let statusWin = true;
  }
  else if ( event.keyCode == 18) {
    let statusAlt = true;
  }
  else if ( event.keyCode == 92) {
    let statusWin = true;
  }
  else if ( event.keyCode == 93) {
    let statusMenu = true;
  }
  else if ( event.keyCode == 18) {
    let statusAlt = true;
  }
  else if ( event.keyCode == 13) {
    let statusEnter = true;
  }
  else {
    writtenEl.push(event.key)
    inputStroke.value = writtenEl.join('');


    event.target.classList.add("addLight")
    setTimeout(function lightRemove() {
      event.target.classList.remove("addLight")
    },1000)
  }
}






// добавка символов через екранную клвау





fullKeyboard.addEventListener("click", event=>{
  target = event.target

  if (target.classList.contains('clickKey')) {

    if ( target == deleteKey) {
      writtenEl.pop()
      inputStroke.value = writtenEl.join('');
    }
    else if ( target == tab) {
      let statusTab = true;
    }
    else if ( target == capslock) {
      let statusCaps = true;
    }
    else if (target == shiftL) {
      let statusShift = true;
    }
    else if ( target == ctrlL) {
      let statusCtrl = true;
    }
    else if ( target == winL) {
      let statusWin = true;
    }
    else if ( target == altL) {
      let statusAlt = true;
    }
    else if (target == altR) {
      let statusAlt = true;
    }
    else if ( target == winR) {
      let statusWin = true;
    }
    else if ( target == ctrlR) {
      let statusCtrl = true;
    }
    else if ( target == shiftR) {
      let statusShift = true;
    }
    else if (target == enter) {
      let statusEnter = true;
    }
    else if (target == space) {
      writtenEl.push(" ")
      console.log(writtenEl.join(''));
      inputStroke.value = writtenEl.join('');
    }
    else {


      writtenEl.push(target.textContent)
      console.log(writtenEl.join(''));
      inputStroke.value = writtenEl.join('');


    }
  }
})
