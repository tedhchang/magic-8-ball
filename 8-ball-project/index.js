var fortuneList = ["Most likely", "Unlikely", "No way in hell", "Absolutely", "Ask again", "Ask again", "You're kidding", "Yuppers", "Don't even think about it"];
var fortuneNumber = Math.floor(Math.random() * 9);
var newFortune = fortuneList[fortuneNumber];


document.querySelector(".ball-img").addEventListener("click", function() {
  document.querySelector("h3").textContent = newFortune;



});
