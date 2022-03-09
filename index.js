if (playerFirst === undefined & playerSecond === undefined) {
  var playerFirst = prompt("Enter the name of the first player:");
  var playerSecond = prompt("Enter the name of the second player:");
  document.querySelector(".first").innerHTML = playerFirst;
  document.querySelector(".second").innerHTML = playerSecond;
  var sampl1 = playerFirst;
  var sampl2 = playerSecond;
}

if (playerFirst === sampl1 & playerSecond === sampl2) {

  all.addEventListener("click", function() {
    for (let l = 0; l < 1; l++) {
      beginGame();
    }; //end loop1

  });

  all.addEventListener("keydown", function() {
        for (let l = 0; l < 1; l++) {
          beginGame();
        }; //end loop2

});

}; //end if

      function beginGame() {
        var randomNumber1 = Math.floor(Math.random() * 13 + 2);
        var randomNumber2 = Math.floor(Math.random() * 13 + 2);
        var numberImage1 = "images/card" + randomNumber1 + ".png";
        var numberImage2 = "images/card" + randomNumber2 + ".png";
        document.querySelector(".img1").setAttribute("src", numberImage1);
        document.querySelector(".img2").setAttribute("src", numberImage2);
        document.querySelector(".win").removeAttribute("hidden");
        if (randomNumber1 > randomNumber2) {
          document.querySelector(".win").innerHTML = playerFirst + " Wins!";
          document.querySelector(".win").setAttribute("style", "color: #EEEEEE");
        };
        if (randomNumber1 < randomNumber2) {
          document.querySelector(".win").innerHTML = playerSecond + " Wins!";
          document.querySelector(".win").setAttribute("style", "color: #EEEEEE");
        };
        if (randomNumber1 === randomNumber2) {
          document.querySelector(".win").innerHTML = "Draw";
          document.querySelector(".win").setAttribute("style", "color: #EEEEEE");
        };
      };
