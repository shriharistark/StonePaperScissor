document.onload = function() {
	function shuffler(){

	let items = ['stone.png', 'paper.png', 'scissor.png'];
	let random = Math.floor((Math.random() * 3));


	let img = document.getElementById('computer-choice');
	img.setAttribute("src",items[random]); 
	//console.log(document.getElementById('choice-shuffler').innerText);
}


function starthere(){
	let choices = document.getElementsByClassName('user-choice-button');

	let athlete;

	document.getElementById('choice-shuffler').addEventListener('dblclick', function(event){			
		console.log("started");
		athlete = setInterval(shuffler, 50)
	});

	for(let el of choices){
		el.addEventListener('click', function(event){

			clearInterval(athlete);
			if((event.target.innerText+".png") == document.getElementById('computer-choice').src){
				alert("you win");
			}

			else{
				alert("try again loser");
			}

		});
	}
}

starthere();

}();

