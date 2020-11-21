//List of possible fortune returns
var fortuneList = ["Most likely", "Unlikely", "No way in hell", "Absolutely", "Ask again", "Ask again", "You're kidding", "Yuppers", "Don't even think about it"];
var locked = false;




document.querySelector(".ball-img").addEventListener("click", function() {

  //Selecting a random fortune and returning to the user
  var fortuneNumber = Math.floor(Math.random() * fortuneList.length);
  var newFortune = fortuneList[fortuneNumber];
  document.querySelector("h3").textContent = newFortune;


  //Adding shake animation to 8-ball images
  document.querySelector("img").classList.add("shake");
  setTimeout(function() {
    document.querySelector("img").classList.remove("shake");
  }, 700);


});
