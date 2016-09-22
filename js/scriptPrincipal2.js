$(document).on("ready",configurarWeb);

function configurarWeb ()
{
	var canvas = document.getElementByid('miCanvas');
	var ctx = canvas.getContext("2d");
	canvas.width = screen.availWidth;
}