$(document).ready(function(){
	$(".header").css({"text-align":"center"});
	$(".container").css({"text-align":"center"});
	var inpId = $('#cupNum');
	var color = document.querySelector('#cupCol');
	color.addEventListener('input', function(){
		switch(inpId.val()){
			case "1":
				$('.first').css("background-color",color.value);
				break;
			case "2":
				$('.second').css("background-color",color.value);
				break;
			case "3":
				$('.third').css("background-color",color.value);
				break;
			case "4":
				$('.fourth').css("background-color",color.value);
				break;
			case "5":
				$('.fifth').css("background-color",color.value);
				break;
			case "6":
				$('.sixth').css("background-color",color.value);
				break;
			case "7":
				$('.seventh').css("background-color",color.value);
				break;
			case "8":
				$('.eighth').css("background-color",color.value);
				break;
			default:
				alert("Please choose a number");
		}
		inpId.val("")
	});
})

