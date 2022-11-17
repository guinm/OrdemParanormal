$('ul li').on('click', function() {
	$('li').removeClass('active');
	$(this).addClass('active');
});

function OpenMenu() {
  var element = document.getElementById("menu");
  element.classList.toggle("open");
  var bt = document.getElementById("extra_ars");
  
  if (bt.classList.contains("open")) {
	  bt.classList.toggle("open");
  }
}

function OpenArsenal() {
  var element = document.getElementById("extra_ars");
  var bt = document.getElementById("menu");
  element.classList.toggle("open");
  if (bt.classList.contains("open")) {
	  bt.classList.toggle("open");
  }
}

function Rituais(elemento) {
	const conhecimento = document.getElementById("conhecimento");
	const sangue = document.getElementById("sangue");
	const morte = document.getElementById("morte");
	const energia = document.getElementById("energia");
	
	var rituais = document.getElementsByClassName("ritual");
	
	for ( var i = 0; i < rituais.length; ++i ) {
		if ((rituais[i].classList.contains("morte") && morte.checked == true) || 
		(rituais[i].classList.contains("sangue") && sangue.checked == true) || 
		(rituais[i].classList.contains("energia") && energia.checked == true) || 
		(rituais[i].classList.contains("conhecimento") && conhecimento.checked == true)) {
			rituais[i].classList.remove("no_display");
		} else {
			rituais[i].classList.add("no_display");
		}			
	}
}

function split(roll) {
	var nums = roll.split("(?:\dd\d{1,2}|\d{1,2}|d\d{1,2})", 'gm');
	for (var i = 0; i < nums.length; ++i) {
		alert(nums[i]);
	}	
}

function bg_Change() {
	var bg = document.body;
	
	if (bg.classList.contains("sangue") == true) {
		bg.classList.remove("sangue");
		bg.classList.add("morte");
	} else if (bg.classList.contains("morte") == true) {
		bg.classList.remove("morte");
		bg.classList.add("energia");
	} else if (bg.classList.contains("energia") == true) {
		bg.classList.remove("energia");
		bg.classList.add("conhecimento");
	} else if (bg.classList.contains("conhecimento") == true) {
		bg.classList.remove("conhecimento");
		bg.classList.add("sangue");
	}
}

function select_change() {
	var sel = document.getElementById("selector");
	
	sel.classList.toggle("open");
}