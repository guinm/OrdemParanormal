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

function Rituais() {
	var element = document.getElementsByClassName("morte");
	element.classList.toggle("display");
}