document.onload = function() {
	function shuffler(){

	let items = ['stone.png', 'paper.png', 'scissor.png'];
	let random = Math.floor((Math.random() * 3));


	let img = document.getElementById('computer-choice');
	img.setAttribute("src",items[random]); 
	img.setAttribute("value",items[random].slice(0,-4));
	//console.log(document.getElementById('choice-shuffler').innerText);
}

function gameplay(computer, player){

	let one = 'paper';
	let two = 'stone';
	let three = 'scissor';

	let elems = document.getElementsByClassName('score-user');

	let userscoreelem;
	let computerscoreelem;

	for(let ele of elems){
		if(ele.dataset.computerscore){
			computerscoreelem = ele;
		}

		else if(ele.dataset.userscore){
			userscoreelem = ele;
		}

	}


	if(computer != player){

		if(computer == one){
			if(player == two){
				computerscoreelem.innerText = "Computer -" + ++computerscoreelem.dataset.computerscore;
				return one+" beats "+ two + " > computer wins";
			}

			else if(player == three){
				userscoreelem.innerText = "You -" + ++userscoreelem.dataset.userscore;
				return three+" beats "+ one + " > player wins";
			}
		}

		else if(computer == two){
			if(player == one){
				//++userscoreelem.getAttribute('userscore');
				userscoreelem.innerText = "You -" + ++userscoreelem.dataset.userscore;
				return one+" beats "+ two + " > player wins";
			}

			else if(player == three){
				computerscoreelem.innerText = "Computer -" + ++computerscoreelem.dataset.computerscore;
				return two +" beats "+ three + " > computer wins";
			}
		}


		else {
			if(player == one){
				computerscoreelem.innerText = "Computer -" + ++computerscoreelem.dataset.computerscore;
				return three +" beats "+ one + " > computer wins";
			}

			else if(player == two){
				userscoreelem.innerText = "You -" + ++userscoreelem.dataset.userscore;
				return two +" beats "+ three + " > player wins";
			}
		}
	}

	return "both picked "+computer+". It is a tie";
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
			console.log("player: "+ event.target.innerText + "| computer: " + document.getElementById('computer-choice').getAttribute('value'));
			alert(gameplay(document.getElementById('computer-choice').getAttribute('value'), event.target.innerText));

		});
	}
}

starthere();

}();

