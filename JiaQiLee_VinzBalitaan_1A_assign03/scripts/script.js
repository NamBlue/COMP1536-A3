//function to draw shapes on canvas element
function drawShapes() {
	//variables are declared here
	var shapes = document.getElementById("myHouse");
	var draw = shapes.getContext("2d");
	var LEFTBASE = 50;
	var BOTTOMBASE = 250;
	var img = new Image;
	var ctx;
	var x = 160, x2 = 160, x3 = 160;
	var y = 100, y2 = 100, y3 = 100;
	var rightC = 10, topC = 10;
	
	//animated cloud function
	setInterval(function() {
	y -= 1;
	y2 -= 0.90;
	y3 -= 0.80;
	x += 1;
	x2 *= 1.01;
	x3 -= 1;
	
	if (y < 0) {
		x = 160;
		y = 100;
	}
	if (x2 > 300) {
		x2 = 160;
		y2 = 100;
		rightC = 10;
	}
	if (y3 < 0) {
		x3 = 160;
		y3 = 100;
		topC = 10;
	}
	
	//all drawing shapes below
	
	//frame
	draw.beginPath();
	draw.moveTo(0, 0);
	draw.lineTo(300, 0);
	draw.lineTo(300, 300);
	draw.lineTo(0, 300);
	draw.lineTo(0, 0);
	draw.stroke();
	draw.closePath();
	//background
	draw.fillStyle="#00cc00";
	draw.fillRect(0, 0, 300, 300);
	//shadows
	draw.beginPath();
	draw.moveTo(LEFTBASE + 150, BOTTOMBASE - 100);
	draw.lineTo(LEFTBASE + 100, BOTTOMBASE + 25);
	draw.lineTo(LEFTBASE + 250, BOTTOMBASE );
	draw.lineTo(LEFTBASE + 250, BOTTOMBASE - 150);
	draw.fillStyle="#008000";
	draw.fill();
	draw.closePath();
	//left outside base
	draw.beginPath();
	draw.moveTo(LEFTBASE, BOTTOMBASE - 10);
	draw.lineTo(LEFTBASE, BOTTOMBASE);
	draw.lineTo(LEFTBASE + 100, BOTTOMBASE + 45);
	draw.lineTo(LEFTBASE + 100, BOTTOMBASE + 35);
	draw.lineTo(LEFTBASE, BOTTOMBASE - 10);
	draw.fillStyle="#b3b3b3";
	draw.fill();
	draw.closePath();
	//right outside base
	draw.beginPath();
	draw.moveTo(LEFTBASE + 100, BOTTOMBASE + 35);
	draw.lineTo(LEFTBASE + 100, BOTTOMBASE + 45);
	draw.lineTo(LEFTBASE + 195, BOTTOMBASE - 30);
	draw.lineTo(LEFTBASE + 195, BOTTOMBASE - 40);
	draw.lineTo(LEFTBASE + 100, BOTTOMBASE + 35);
	draw.fillStyle="#808080";
	draw.fill();
	draw.closePath();
	//left inner base
	draw.beginPath();
	draw.moveTo(LEFTBASE, BOTTOMBASE - 10);
	draw.lineTo(LEFTBASE + 20, BOTTOMBASE - 20);
	draw.lineTo(LEFTBASE + 20, BOTTOMBASE - 10);
	draw.lineTo(LEFTBASE + 60, BOTTOMBASE + 8);
	draw.lineTo(LEFTBASE + 65, BOTTOMBASE + 5);
	draw.lineTo(LEFTBASE + 80, BOTTOMBASE + 12);
	draw.lineTo(LEFTBASE + 80, BOTTOMBASE + 15);
	draw.lineTo(LEFTBASE + 100, BOTTOMBASE + 25);
	draw.lineTo(LEFTBASE + 115, BOTTOMBASE + 23);
	draw.lineTo(LEFTBASE + 100, BOTTOMBASE + 35);
	draw.fillStyle="#e6e6e6";
	draw.fill();
	draw.closePath();
	//right inner base
	draw.beginPath();
	draw.moveTo(LEFTBASE + 100, BOTTOMBASE + 25);
	draw.lineTo(LEFTBASE + 175, BOTTOMBASE - 35);
	draw.lineTo(LEFTBASE + 175, BOTTOMBASE - 48);
	draw.lineTo(LEFTBASE + 195, BOTTOMBASE - 40);
	draw.lineTo(LEFTBASE + 115, BOTTOMBASE + 23);
	draw.fillStyle="#b3b3b3";
	draw.fill();
	draw.closePath();
	//wall leftside
	draw.beginPath();
	draw.moveTo(LEFTBASE + 26, BOTTOMBASE - 35);
	draw.lineTo(LEFTBASE + 26, BOTTOMBASE - 90);
	draw.lineTo(LEFTBASE + 65, BOTTOMBASE - 115);
	draw.lineTo(LEFTBASE + 100, BOTTOMBASE - 60);
	draw.lineTo(LEFTBASE + 100, BOTTOMBASE - 0);
	draw.lineTo(LEFTBASE + 26, BOTTOMBASE - 37);
	draw.fillStyle="#d9d9d9";
	draw.fill();
	draw.closePath();
	//wall leftside upper shadows
	draw.beginPath();
	draw.moveTo(LEFTBASE + 26, BOTTOMBASE - 90);
	draw.lineTo(LEFTBASE + 26, BOTTOMBASE - 96);
	draw.lineTo(LEFTBASE + 64, BOTTOMBASE - 120);
	draw.lineTo(LEFTBASE + 100, BOTTOMBASE - 64);
	draw.lineTo(LEFTBASE + 100, BOTTOMBASE - 60);
	draw.lineTo(LEFTBASE + 65, BOTTOMBASE - 115);
	draw.lineTo(LEFTBASE + 26, BOTTOMBASE - 90);
	draw.fillStyle="#bfbfbf";
	draw.fill();
	draw.closePath();
	//left base wall outer
	draw.beginPath();
	draw.moveTo(LEFTBASE + 20, BOTTOMBASE - 10);
	draw.lineTo(LEFTBASE + 20, BOTTOMBASE - 35);
	draw.lineTo(LEFTBASE + 55, BOTTOMBASE - 20);
	draw.lineTo(LEFTBASE + 55, BOTTOMBASE + 6);
	draw.fillStyle="#a6a6a6";
	draw.fill();
	draw.closePath();
	//left base wall inner
	draw.beginPath();
	draw.moveTo(LEFTBASE + 20, BOTTOMBASE - 35);
	draw.lineTo(LEFTBASE + 26, BOTTOMBASE - 40);
	draw.lineTo(LEFTBASE + 26, BOTTOMBASE - 37);
	draw.lineTo(LEFTBASE + 55, BOTTOMBASE - 25);
	draw.lineTo(LEFTBASE + 55, BOTTOMBASE - 20);
	draw.fillStyle="#cccccc";
	draw.fill();
	draw.closePath();
	//wall rightside
	draw.beginPath();
	draw.moveTo(LEFTBASE + 100, BOTTOMBASE - 64);
	draw.lineTo(LEFTBASE + 100, BOTTOMBASE - 0);
	draw.lineTo(LEFTBASE + 168, BOTTOMBASE - 30);
	draw.lineTo(LEFTBASE + 168, BOTTOMBASE - 110);
	draw.fillStyle="#b3b3b3";
	draw.fill();
	draw.closePath();
	//right base wall outer
	draw.beginPath();
	draw.moveTo(LEFTBASE + 100, BOTTOMBASE + 25);
	draw.lineTo(LEFTBASE + 100, BOTTOMBASE - 1);
	draw.lineTo(LEFTBASE + 85, BOTTOMBASE - 7);
	draw.lineTo(LEFTBASE + 85, BOTTOMBASE + 19);
	draw.fillStyle="#a6a6a6";
	draw.fill();
	draw.closePath();
	//rightmost base wall outer
	draw.beginPath();
	draw.moveTo(LEFTBASE + 100, BOTTOMBASE + 25);
	draw.lineTo(LEFTBASE + 175, BOTTOMBASE - 35);
	draw.lineTo(LEFTBASE + 175, BOTTOMBASE - 55);
	draw.lineTo(LEFTBASE + 100, BOTTOMBASE);
	draw.fillStyle="#8c8c8c";
	draw.fill();
	draw.closePath();
	//right base wall inner
	draw.beginPath();
	draw.moveTo(LEFTBASE + 85, BOTTOMBASE - 7);
	draw.lineTo(LEFTBASE + 85, BOTTOMBASE - 60);
	draw.lineTo(LEFTBASE + 88, BOTTOMBASE - 62);
	draw.lineTo(LEFTBASE + 88, BOTTOMBASE - 10);
	draw.lineTo(LEFTBASE + 100, BOTTOMBASE - 5);
	draw.lineTo(LEFTBASE + 168, BOTTOMBASE - 54);
	draw.lineTo(LEFTBASE + 168, BOTTOMBASE - 57);
	draw.lineTo(LEFTBASE + 175, BOTTOMBASE - 55);
	draw.lineTo(LEFTBASE + 100, BOTTOMBASE - 0);
	draw.fillStyle="#cccccc";
	draw.fill();
	draw.closePath();
	//doorframe outer
	draw.beginPath();
	draw.moveTo(LEFTBASE + 85, BOTTOMBASE + 20);
	draw.lineTo(LEFTBASE + 85, BOTTOMBASE - 60);
	draw.lineTo(LEFTBASE + 55, BOTTOMBASE - 72);
	draw.lineTo(LEFTBASE + 55, BOTTOMBASE + 6);
	draw.lineTo(LEFTBASE + 60, BOTTOMBASE + 9);
	draw.lineTo(LEFTBASE + 60, BOTTOMBASE - 65);
	draw.lineTo(LEFTBASE + 80, BOTTOMBASE - 57);
	draw.lineTo(LEFTBASE + 80, BOTTOMBASE + 17);
	draw.fillStyle="#e6e6e6";
	draw.fill();
	draw.closePath();
	//doorframe inner
	draw.beginPath();
	draw.moveTo(LEFTBASE + 60, BOTTOMBASE + 9);
	draw.lineTo(LEFTBASE + 60, BOTTOMBASE - 65);
	draw.lineTo(LEFTBASE + 65, BOTTOMBASE - 63);
	draw.lineTo(LEFTBASE + 65, BOTTOMBASE + 2);
	draw.lineTo(LEFTBASE + 80, BOTTOMBASE + 9);
	draw.lineTo(LEFTBASE + 80, BOTTOMBASE + 13);
	draw.lineTo(LEFTBASE + 65, BOTTOMBASE + 6);
	draw.fillStyle="#808080";
	draw.fill();
	draw.closePath();
	//doorframe top
	draw.beginPath();
	draw.moveTo(LEFTBASE + 55, BOTTOMBASE - 72);
	draw.lineTo(LEFTBASE + 59, BOTTOMBASE - 74);
	draw.lineTo(LEFTBASE + 88, BOTTOMBASE - 62);
	draw.lineTo(LEFTBASE + 85, BOTTOMBASE - 60);
	draw.fillStyle="#f2f2f2";
	draw.fill();
	draw.closePath();
	//door
	draw.beginPath();
	draw.moveTo(LEFTBASE + 65, BOTTOMBASE + 2);
	draw.lineTo(LEFTBASE + 65, BOTTOMBASE - 63);
	draw.lineTo(LEFTBASE + 80, BOTTOMBASE - 57);
	draw.lineTo(LEFTBASE + 80, BOTTOMBASE + 9);
	draw.fillStyle="#1a1a1a";
	draw.fill();
	draw.closePath();
	//roof under
	draw.beginPath();
	draw.moveTo(LEFTBASE + 26, BOTTOMBASE - 96);
	draw.lineTo(LEFTBASE + 26, BOTTOMBASE - 94);
	draw.lineTo(LEFTBASE + 13, BOTTOMBASE - 93);
	draw.lineTo(LEFTBASE + 61, BOTTOMBASE - 124);
	draw.lineTo(LEFTBASE + 64, BOTTOMBASE - 120);
	draw.lineTo(LEFTBASE + 26, BOTTOMBASE - 96);
	draw.fillStyle="#800000";
	draw.fill();
	draw.closePath();
	//roof front left
	draw.beginPath();
	draw.moveTo(LEFTBASE + 13, BOTTOMBASE - 92);
	draw.lineTo(LEFTBASE + 10, BOTTOMBASE - 100);
	draw.lineTo(LEFTBASE + 65, BOTTOMBASE - 134);
	draw.lineTo(LEFTBASE + 110, BOTTOMBASE - 63);
	draw.lineTo(LEFTBASE + 105, BOTTOMBASE - 55);
	draw.lineTo(LEFTBASE + 62, BOTTOMBASE - 123);
	draw.fillStyle="#b30000";
	draw.fill();
	draw.closePath();
	//roof front right
	draw.beginPath();
	draw.moveTo(LEFTBASE + 110, BOTTOMBASE - 63);
	draw.lineTo(LEFTBASE + 180, BOTTOMBASE - 112);
	draw.lineTo(LEFTBASE + 179, BOTTOMBASE - 107);
	draw.lineTo(LEFTBASE + 105, BOTTOMBASE - 55);
	draw.fillStyle="#990000";
	draw.fill();
	draw.closePath();
	//roof top
	draw.beginPath();
	draw.moveTo(LEFTBASE + 110, BOTTOMBASE - 63);
	draw.lineTo(LEFTBASE + 180, BOTTOMBASE - 112);
	draw.lineTo(LEFTBASE + 140, BOTTOMBASE - 175);
	draw.lineTo(LEFTBASE + 65, BOTTOMBASE - 134);
	draw.fillStyle="#c50000";
	draw.fill();
	draw.closePath();
	//chimney left
	draw.beginPath();
	draw.moveTo(LEFTBASE + 125, BOTTOMBASE - 100);
	draw.lineTo(LEFTBASE + 110, BOTTOMBASE - 125);
	draw.lineTo(LEFTBASE + 110, BOTTOMBASE - 140);
	draw.lineTo(LEFTBASE + 125, BOTTOMBASE - 136);
	draw.fillStyle="#d9d9d9";
	draw.fill();
	draw.closePath();
	//chimney right
	draw.beginPath();
	draw.moveTo(LEFTBASE + 125, BOTTOMBASE - 100);
	draw.lineTo(LEFTBASE + 137, BOTTOMBASE - 108);
	draw.lineTo(LEFTBASE + 137, BOTTOMBASE - 143);
	draw.lineTo(LEFTBASE + 125, BOTTOMBASE - 136);
	draw.fillStyle="#b3b3b3";
	draw.fill();
	draw.closePath();
	//chimney top
	draw.beginPath();
	draw.moveTo(LEFTBASE + 137, BOTTOMBASE - 143);
	draw.lineTo(LEFTBASE + 123, BOTTOMBASE - 147);
	draw.lineTo(LEFTBASE + 109, BOTTOMBASE - 139);
	draw.lineTo(LEFTBASE + 126, BOTTOMBASE - 135);
	draw.fillStyle="#bfbfbf";
	draw.fill();
	draw.closePath();
	//chimney hole
	draw.beginPath();
	draw.moveTo(LEFTBASE + 130, BOTTOMBASE - 142);
	draw.lineTo(LEFTBASE + 123, BOTTOMBASE - 144);
	draw.lineTo(LEFTBASE + 117, BOTTOMBASE - 140);
	draw.lineTo(LEFTBASE + 124, BOTTOMBASE - 138);
	draw.fillStyle="#0d0d0d";
	draw.fill();
	draw.closePath();
	//window outer
	draw.beginPath();
	draw.moveTo(LEFTBASE + 30, BOTTOMBASE - 81);
	draw.lineTo(LEFTBASE + 50, BOTTOMBASE - 73);
	draw.lineTo(LEFTBASE + 50, BOTTOMBASE - 40);
	draw.lineTo(LEFTBASE + 30, BOTTOMBASE - 48)
	draw.fillStyle="#e6e6e6";
	draw.fill();
	draw.closePath();
	//window inner
	draw.beginPath();
	draw.moveTo(LEFTBASE + 32, BOTTOMBASE - 77);
	draw.lineTo(LEFTBASE + 47, BOTTOMBASE - 71);
	draw.lineTo(LEFTBASE + 47, BOTTOMBASE - 44);
	draw.lineTo(LEFTBASE + 32, BOTTOMBASE - 50)
	draw.fillStyle="#595959";
	draw.fill();
	draw.closePath();
	//window glass
	draw.beginPath();
	draw.moveTo(LEFTBASE + 34, BOTTOMBASE - 76);
	draw.lineTo(LEFTBASE + 40, BOTTOMBASE - 74);
	draw.lineTo(LEFTBASE + 40, BOTTOMBASE - 66);
	draw.lineTo(LEFTBASE + 34, BOTTOMBASE - 68)
	draw.fillStyle="#1a8cff";
	draw.fill();
	draw.closePath();
	//window glass 2
	draw.beginPath();
	draw.moveTo(LEFTBASE + 34, BOTTOMBASE - 65);
	draw.lineTo(LEFTBASE + 40, BOTTOMBASE - 63);
	draw.lineTo(LEFTBASE + 40, BOTTOMBASE - 50);
	draw.lineTo(LEFTBASE + 34, BOTTOMBASE - 52)
	draw.fillStyle="#3399ff";
	draw.fill();
	draw.closePath();
	//window glass 3
	draw.beginPath();
	draw.moveTo(LEFTBASE + 42, BOTTOMBASE - 73);
	draw.lineTo(LEFTBASE + 47, BOTTOMBASE - 71);
	draw.lineTo(LEFTBASE + 47, BOTTOMBASE - 47);
	draw.lineTo(LEFTBASE + 42, BOTTOMBASE - 49);
	draw.fillStyle="#1a8cff";
	draw.fill();
	draw.closePath();
	//window right frame
	draw.beginPath();
	draw.moveTo(LEFTBASE + 50, BOTTOMBASE - 73);
	draw.lineTo(LEFTBASE + 52, BOTTOMBASE - 74);
	draw.lineTo(LEFTBASE + 52, BOTTOMBASE - 40);
	draw.lineTo(LEFTBASE + 50, BOTTOMBASE - 40)
	draw.fillStyle="#a6a6a6";
	draw.fill();
	draw.closePath();
	//window top frame
	draw.beginPath();
	draw.moveTo(LEFTBASE + 50, BOTTOMBASE - 73);
	draw.lineTo(LEFTBASE + 30, BOTTOMBASE - 78);
	draw.lineTo(LEFTBASE + 32, BOTTOMBASE - 82);
	draw.lineTo(LEFTBASE + 50, BOTTOMBASE - 75)
	draw.fillStyle="#f2f2f2";
	draw.fill();
	draw.closePath();
	
	//left cloud
	draw.beginPath();
	draw.arc(x, y, 10, 0, Math.PI*2);
	draw.fillStyle = "gray";
	draw.fill();
	
	draw.beginPath();
	draw.arc(x + 5, y + 10, 10, 0, Math.PI*2);
	draw.fillStyle = "gray";
	draw.fill();
	
	draw.beginPath();
	draw.arc(x + 7, y, 10, 0, Math.PI*2);
	draw.fillStyle = "gray";
	draw.fill();
	
	//right cloud
	draw.beginPath();
	draw.arc(x2, y2, rightC, 0, Math.PI*2);
	draw.fillStyle = "gray";
	draw.fill();
	
	draw.beginPath();
	draw.arc(x2 + 5, y2 - 10, rightC, 0, Math.PI*2);
	draw.fillStyle = "gray";
	draw.fill();
	
	draw.beginPath();
	draw.arc(x2 + 7, y2, rightC, 0, Math.PI*2);
	draw.fillStyle = "gray";
	draw.fill();
	
	//top cloud
	draw.beginPath();
	draw.arc(x3, y3, topC, 0, Math.PI*2);
	draw.fillStyle = "gray";
	draw.fill();
	
	draw.beginPath();
	draw.arc(x3 + 5, y3 - 10, topC, 0, Math.PI*2);
	draw.fillStyle = "gray";
	draw.fill();
	
	draw.beginPath();
	draw.arc(x3 + 7, y3, topC, 0, Math.PI*2);
	draw.fillStyle = "gray";
	draw.fill();
	}, 30);
}