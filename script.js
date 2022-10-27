$('ul li').on('click', function() {
	$('li').removeClass('active');
	$(this).addClass('active');
});

function myFunction() {
  var element = document.getElementById("menu");
  element.classList.toggle("open");
}