$('ul li').on('click', function() {
	$('li').removeClass('active');
	$(this).addClass('active');
});

function OpenMenu() {
  var element = document.getElementById("menu");
  element.classList.toggle("open");
}

function OpenArsenal() {
  var element = document.getElementById("extra_ars");
  element.classList.toggle("open");
}