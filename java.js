document.getElementById("checkButton").addEventListener("click", function() {
  let age = document.getElementById("ageInput").value;
  let resultText = document.getElementById("resultText");
  let resultImage = document.getElementById("resultImage");

  if (age <=15) {
    resultText.innerText = "You cannot drive";
    resultText.style.color = "red"; // change color
    resultImage.src = "bicycle.webp";
  } else if (age >=16 && age <=24) {
    resultText.innerText = "You can drive";
    resultText.style.color = "green";
     resultImage.src = "car.png";
  } else if (age >= 25) {
    resultText.innerText = "You can drive and rent a car";
    resultText.style.color = "green";
  }
});


