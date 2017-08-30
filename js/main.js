var canvas1=document.getElementById('canvas1');
var canvas2=document.getElementById('canvas2');
var all=document.getElementById("all-bg");
var ct1=canvas1.getContext("2d");
var ct2=canvas2.getContext("2d");
var w=canvas1.width;
var h=canvas1.height;
var lasttime=Date.now();
var nowtime;
var ane=new Ane();
var fruit=new Fruit();
var bg1=new Image();
var bg2=new Image();
var mom=new Mom();
var mouseX=w/2;
var mouseY=h/2;
var baby=new Baby();
var data=new Data();
var babyTail=[];
var babyEye=[];
var babyBody=[];
var momEye=[];
var momTail=[];
var blueEat=[];
var orangeEat=[];
var wave=new Wave();
var halo=new Halo();
var dust=new Dust();
var dustNum=[];
var over=false;
document.body.onload=game;
function move(e){
	e=e||window.event;
	mouseX=e.pageX-all.offsetLeft;
	mouseY=e.pageY-all.offsetTop;
}

function game(){
	bg1.src="images/background.jpg";
	bg2.src="images/cover.png";
	canvas1.addEventListener("mousemove",move,false);
	for(var i=0;i<8;i++){
		babyTail[i]=new Image();
		babyTail[i].src="./images/babyTail"+i+".png";
	}
	for(var j=0;j<2;j++){
		babyEye[j]=new Image();
		babyEye[j].src="./images/babyEye"+j+".png";
	}
	for(var i=0;i<20;i++){
		babyBody[i]=new Image();
		babyBody[i].src="./images/babyFade"+i+".png";
	}
	for(var i=0;i<8;i++){
		momTail[i]=new Image();
		momTail[i].src="./images/bigTail"+i+".png";
	}
	for(var i=0;i<2;i++){
		momEye[i]=new Image();
		momEye[i].src="./images/bigEye"+i+".png";
	}
	for(var i=0;i<8;i++){
		blueEat[i]=new Image();
		blueEat[i].src="./images/bigSwimBlue"+i+".png";
		orangeEat[i]=new Image();
		orangeEat[i].src="./images/bigSwim"+i+".png";
	}
	for(var i=0;i<7;i++){
		dustNum[i]=new Image();
		dustNum[i].src="./images/dust"+i+".png";
	}
	// bg.onload=function(){
		data.init();
		ane.init();
		fruit.init();
		mom.init();
		baby.init();
		wave.init();
		halo.init();
		dust.init();
		bg2.onload=function(){
			ct2.drawImage(bg2,0,0,w,h);
			begin();
		}
		canvas1.addEventListener("click",start,false)
	// }

	// 获取当前时间
	nowtime=0;
	
}
function start(){
	ct2.clearRect(0,0,w,h);
	ct1.clearRect(0,0,w,h);
	gameloop();
	canvas2.removeEventListener("click",start);
}
function begin(){
	ct1.save();
	ct1.beginPath();
	ct1.fillStyle="white";
	ct1.font="30px Arial";
	ct1.textAlign="center";
	ct1.textBaseline="middle";
	ct1.fillText("Click to start  !",w/2,h/2+100);
	ct1.restore();
}
function gameloop(){
	requestAnimFrame(gameloop);
	var now=Date.now();
	nowtime=now-lasttime;
	lasttime=now;
	ct2.drawImage(bg1,0,0,w,h);
	ane.draw();
	fruitMonitor();
	fruit.draw();
	ct1.clearRect(0,0,w,h);
	mom.draw();
	if(!over){
	check();
	babyAlive();
	// baby.draw();
	// data.draw();
	// wave.draw();
	// halo.draw();
	// dust.draw();
}	else{
	data.gameover();
}
	baby.draw();
	data.draw();
	wave.draw();
	halo.draw();
	dust.draw();
}