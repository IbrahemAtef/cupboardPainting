$(document).ready(function(){
	var score = $('#score');
	var inpId = $('#cupNum');
	var color = document.querySelector('#cupCol');
	colorScore(score);
	$('.alert').hide();
	var allDivs = [".header", ".first",".second",".third",".fourth",
					".fifth",".sixth",".seventh",".eighth"];
	for (var i = 0; i < allDivs.length; i++) {
		$(allDivs[i]).hide();
	}
	for (var i = 0; i < allDivs.length; i++) {
		
		showAll(allDivs[i],Number(i+1+"000"));
	}
	score[0].value = "0%";
	$(".header").css({"text-align":"center"});
	$(".container").css({"text-align":"center"});
	color.addEventListener('input', function(){
		var persent = score[0].value.indexOf("%");
		var currentScore = score[0].value.substr(0,persent);
		switch(inpId.val()){
			case "1":
				console.log($('.first'));
			    if ($('.first')[0].style.backgroundColor === "") { 
					$('.first').css("background-color",color.value);
					$('.first')[0].textContent = "";
					score[0].value = (Number(currentScore) + 6) + "%";	
			    } else {
			    	$('.first').css("background-color",color.value);
					$('.first')[0].textContent = "";
			    }
				break;
			case "2":
				if ($('.second')[0].style.backgroundColor === "") { 
					$('.second').css("background-color",color.value);
					$('.second')[0].textContent = "";
					score[0].value = (Number(currentScore) + 10) + "%";
				} else {
					$('.second').css("background-color",color.value);
					$('.second')[0].textContent = "";
				}
				break;
			case "3":
				if ($('.third')[0].style.backgroundColor === "") { 
					$('.third').css("background-color",color.value);
					$('.third')[0].textContent = "";
					score[0].value = (Number(currentScore) + 10) + "%";
					
				} else {
					$('.third').css("background-color",color.value);
					$('.third')[0].textContent = "";
				}
				break;
			case "4":
				if ($('.fourth')[0].style.backgroundColor === "") { 
					$('.fourth').css("background-color",color.value);
					$('.fourth')[0].textContent = "";
					score[0].value = (Number(currentScore) + 25) + "%";
					
				} else {
					$('.fourth').css("background-color",color.value);
					$('.fourth')[0].textContent = "";
				}
				break;
			case "5":
				if ($('.fifth')[0].style.backgroundColor === "") { 
					$('.fifth').css("background-color",color.value);
					$('.fifth')[0].textContent = "";
					score[0].value = (Number(currentScore) + 25) + "%";
					
				} else {
					$('.fifth').css("background-color",color.value);
					$('.fifth')[0].textContent = "";
				}
				break;
			case "6":
				if ($('.sixth')[0].style.backgroundColor === "") { 
					$('.sixth').css("background-color",color.value);
					$('.sixth')[0].textContent = "";
					score[0].value = (Number(currentScore) + 8) + "%";
					
				} else {
					$('.sixth').css("background-color",color.value);
					$('.sixth')[0].textContent = "";
				}
				break;
			case "7":
				if ($('.seventh')[0].style.backgroundColor === "") { 
					$('.seventh').css("background-color",color.value);
					$('.seventh')[0].textContent = "";
					score[0].value = (Number(currentScore) + 8) + "%";	
				} else {
					$('.seventh').css("background-color",color.value);
					$('.seventh')[0].textContent = "";
				}
				break;
			case "8":
				if ($('.eighth')[0].style.backgroundColor === "") { 
					$('.eighth').css("background-color",color.value);
					$('.eighth')[0].textContent = "";
					score[0].value = (Number(currentScore) + 8) + "%";
				} else {
					$('.eighth').css("background-color",color.value);
					$('.eighth')[0].textContent = "";
				}
				break;
			default:
				alert("Please choose a number");
		}
		inpId.val("")
		colorScore(score);
	});
})

function showAll(tagId, timeInSec){
	var div = $(tagId);
	setTimeout(function(){
		div.show();
	},timeInSec);
}

function colorScore(score){
	var persent = score[0].value.indexOf("%");
	var currentScore = Number(score[0].value.substr(0,persent));
	console.log(currentScore);
	if (currentScore < 25) {
		score.css("background-color", "red");
	} else if (currentScore >= 25 && currentScore < 50){
		score.css("background-color", "orange");
		score.css("color", "ligthgreen");
	} else if (currentScore >= 50 && currentScore < 75){
		score.css("background-color", "yellow");
		score.css("color", "forestgreen");
	} else if (currentScore >= 75 && currentScore < 100) {
		score.css("background-color", "lightgreen");
		score.css("color", "white");
	} else {
		score.css("background-color", "green");
		score.css("color", "white");
		score[0].value = "100%";
		$('.alert').show();
	}
}