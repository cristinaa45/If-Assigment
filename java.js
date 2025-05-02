document.getElementById("checkButton").addEventListener("click", function() {
  let age = document.getElementById("ageInput").value;
  let resultText = document.getElementById("resultText");
  let resultImage = document.getElementById("resultImage");

  if (age <=15) {
    resultText.innerText = "You cannot drive";
    resultText.style.color = "red"; // change color
    resultImage.src = "https://www.prioritybicycles.com/cdn/shop/products/L_trainDisk8Speed_hero_1of1.jpg?v=1708061515";
  } else if (age >=16 && age <=24) {
    resultText.innerText = "You can drive";
    resultText.style.color = "green";
    resultImage.src = "YOUR_CAR_IMAGE_LINK_HERE";
  } else if (age >= 25) {
    resultText.innerText = "You can drive and rent a car";
    resultText.style.color = "green";
      resultImage.src = "https://static.independent.co.uk/2025/02/18/10/40/Kia-EV6.png";
  }
});


