// Gives random number between 1-6
let randomNumber1 = ((Math.floor(Math.random() * 6)) + 1);

// String of different image file  
let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "images/" + randomDiceImage;

// Select first <img> which is at index number 0 and set to random image
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);



// Gives random number between 1-6
let randomNumber2 = ((Math.floor(Math.random() * 6)) + 1);

// String of different image file
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// Select second <img> which is at index number 1 and set to random image
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);
