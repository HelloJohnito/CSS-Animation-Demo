(function() {

  let wordArray = ["Hello World", "Welcome"];
  let elementText = document.getElementsByClassName("text")[0];
  let index = 1;

  let resetAnimation = function (){
    elementText.classList.remove("flip");
  };

  setInterval(function(){
    switch(index){
      case 0:
        elementText.classList.add('flip');
        elementText.textContent = wordArray[index];
        index = 1;
        setTimeout(resetAnimation, 1000);
      break;

      case 1:
        elementText.classList.add('flip');
        elementText.textContent = wordArray[index];
        index = 0;
        setTimeout(resetAnimation, 1000);
      break;

      // case 2:
      //   elementText.classList.add('flip');
      //   elementText.textContent = wordArray[index];
      //   index = 0;
      //   setTimeout(resetAnimation, 1000);
      // break;
    }
  }, 2000);

}());
