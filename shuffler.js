function shuffler(){

	let items = ['Rock', 'Paper', 'Scissor'];
	let random = Math.floor((Math.random() * 3));

	document.getElementById('choice-shuffler').innerHTML = items[random];

	console.log(document.getElementById('choice-shuffler').innerText);
}

function selector(){
	return function(){
		setInterval(shuffler, 100);
	}
}
document.onload = function(){
	var clicked = false;
	let choices = document.getElementsByClass('user-choice-button');
	var repeater = selector;

	for(let choice of choices){
		choice.addEventListener('click', function(event){
			clicked = event.target.innerText;
		});
	}

	if(!clicked){
		repeater();
	}

	else{
		clearInterval(repeater);
	}
}

