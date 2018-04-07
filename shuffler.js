document.onload = (function() {

	function receiveName(){

		let div = document.createElement("div");
		let form = document.createElement("Form");
		let input = document.createElement("input");
		input.setAttribute("type", "text");
		input.setAttribute("placeholder","Name");
		input.id  = "in";
		div.appendChild(form).appendChild(input);

		document.body.appendChild(div);

		console.log(document.getElementById("in"));

		return document.getElementById("in").getAttribute("value");
	}

	function blur(){
		document.body.style.opacity = 0.2;
		document.body.getElementById("user-choice").style.opacity = 1;
	}

	function shuffler(){

	let items = ['stone.png', 'paper.png', 'scissor.png'];
	let random = Math.floor((Math.random() * 3));
	document.getElementById("user-choice").style.display = "flex";
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

	//populate scores
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

	
	let name = receiveName();
	//	alert(name);
	let choices = document.getElementsByClassName('user-choice-button');

	let img = document.getElementById('computer-choice');
	img.setAttribute("src","doubleclick.png"); 

	let athlete;


	document.getElementById('choice-shuffler').addEventListener('click', function(event){			
		console.log("started");
		if(!athlete){
			athlete = setInterval(shuffler, 5);
		}
	});

	for(let el of choices){
		el.addEventListener('click', function(event){

			(function(){
				document.getElementById("user-choice").style.display = "none";
				clearInterval(athlete);
				img.setAttribute("src","doubleclick.png"); 
			})();

			athlete = null;
			console.log("player: "+ event.target.innerText + "| computer: " + document.getElementById('computer-choice').getAttribute('value'));
			alert(gameplay(document.getElementById('computer-choice').getAttribute('value'), event.target.innerText));

		});

		el.addEventListener('mouseover', function(event){
			if(athlete){
				event.target.style.opacity = .5;
			}
		})

		el.addEventListener('mouseleave', function(event){
			event.target.style.opacity = 1;
		})
	}

	/*
	if(!athlete){
		let alertToStart = document.createElement("DIV");
		alertToStart.appendChild(document.createTextNode("Double click to play"));
		document.getElementById('choice-shuffler').appendChild(alertToStart);
	}

	else{
		document.getElementById("alert-game-start").remove();
	}*/

}

starthere();

})();

