
let numSquares = 6;
let colors = generateRandomColors(numSquares);

let squares = document.querySelectorAll(".square");
let pickedColor = colorPicker();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay= document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetBut = document.querySelector("#reset");
let easyBtn = document.querySelector("#easybtn")
let hardBtn = document.querySelector("#hardbtn")


easyBtn.addEventListener("click",function(){
easyBtn.classList.add("selected");
hardBtn.classList.remove("selected");
//generate new colors
numSquares = 3;
colors = generateRandomColors(numSquares);
//pick a new picked color
pickedColor = colorPicker();
//changing the display to show the new picked color
colorDisplay.textContent = pickedColor;
//hiding the last three square when the user select easy mode
for(let i = 0; i < squares.length; i++){
	if(colors[i]) {
	squares[i].style.background = colors[i];
} else {
	squares[i].style.display = "none";
}}
});

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = colorPicker();
	colorDisplay.textContent = pickedColor;
	for(let i = 0; i < squares.length; i++){
		
		squares[i].style.background = colors[i];
		squares[i].style.display ="block";

}});


//this function generate new colors for each square let the picked color change
resetBut.addEventListener("click",function(){
	//generate all new colors
 colors = generateRandomColors(numSquares);
 //pick a new random color grom array
  pickedColor = colorPicker();
 //change colordisplay to match pickedcolor
 colorDisplay.textContent = pickedColor;
 messageDisplay.textContent = "";
 this.textContent="New colors";
 //change color of squares
 for(let i = 0; i < squares.length; i++){
    // add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	
}
h1.style.background = "steelblue";
})

colorDisplay.textContent = pickedColor;


for(let i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		let clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent= "correct";
			resetBut.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			
		} else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent= "Try Again";
		}
	});
}

//this function change the 
function changeColors(color){
	//whatever the chosen color is this function apply it to each square whenever someone wins the game
	//this loops through all th squares
	for(let i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;

}}

//this function picks a random color as the goal of the game
function colorPicker(){
	let random = Math.floor(Math.random()* colors.length);
	return colors[random];
}

//this function takes generates an array of 6 rgb number
function generateRandomColors(num){
	//here my array variable
	let arr = [];
	// repeat num times
	for(let i=0; i < num; i++){
		//get random color and push into arr
		 arr.push(randomColor());
	}
	return arr;
	}


	//this function generates a set of three numbers between 0 and 255
function randomColor(){
	//pick a "red " from 0-255
	let r = Math.floor(Math.random()*256);
	//pick a green from 0 - 255
	let g = Math.floor(Math.random()*256);
	//pick a blue from 0 - 255
	let b = Math.floor(Math.random()*256);

	return `rgb(${r}, ${g}, ${b})`;
	
}










