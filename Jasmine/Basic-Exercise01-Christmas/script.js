//SELECTORS
let output = document.querySelector(".grid");

//VARIABLES
const data = ["./img/santa-claus.png", "./img/gift-box.png"];
let number = 9;

//LOGIC
showData(number);

//FUNCTIONS
function showData(number) {
	for(let i=0; i<number; i++) {
		
		let random = Math.floor(Math.random()*2 +1);
		output.innerHTML += `<img id="${random}" class="item" src="${random === 1 ? data[0] : data[1]}">`;
	}
}

output.addEventListener("click", removeSanta);

function removeSanta(e) {
	
	console.log(e)
	
	if(e.target.id === "1") {
		e.target.style.opacity = "0";
	}
}
