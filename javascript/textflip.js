(function() {

  let wordArray = ["Hello World", "Welcome"];
  let element = document.getElementsByClassName("text")[0];
  let index = 1;

  let resetAnimation = function (){
    element.classList.remove("flip");
  };

  setInterval(function(){
    switch(index){
      case 0:
        element.classList.add('flip');
        element.textContent = wordArray[index];
        index = 1;
        setTimeout(resetAnimation, 1000);
      break;

      case 1:
        element.classList.add('flip');
        element.textContent = wordArray[index];
        index = 0;
        setTimeout(resetAnimation, 1000);
      break;

      // case 2:
      //   element.classList.add('flip');
      //   element.textContent = wordArray[index];
      //   index = 0;
      //   setTimeout(resetAnimation, 1000);
      // break;
    }
  }, 2000);

}());
