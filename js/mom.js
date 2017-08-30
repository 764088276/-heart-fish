var Mom=function(){
	this.x;
	this.y;
	this.bigBody=new Image();
	this.bigTail=new Image();
	this.bigEye=new Image();
	this.angle=Math.PI;

	this.tailTimer=0;
	this.tailCount=0;

	this.eyeTimer=0;
	this.eyeCount=0;
	this.eyeInterval=1000;

	this.blueCount=0;
	this.orangeCount=0;
	this.blueTimer=0;
	this.orangeTimer=0;
}
Mom.prototype.init=function(){
	this.x=w*0.5;
	this.y=h*0.5;
	this.bigBody.src="./images/big.png";
}
function lerp(aim,cur,radio){
	var delta=cur-aim;
	return aim+delta*radio
}
Mom.prototype.draw=function(){
	this.x=lerp(mouseX,this.x,0.97);
	this.y=lerp(mouseY,this.y,0.97);
	deltaX=mouseX-this.x;
	deltaY=mouseY-this.y;
	deltaAngle=Math.atan2(deltaY,deltaX);//-Math.PI~Math.PI

	// tail wave
	this.tailTimer+=nowtime;
	if(this.tailTimer>=50){
		this.tailCount=(this.tailCount+1)%8;
		this.tailTimer=0;
	}

	// eyes shine
	this.eyeTimer+=nowtime;
	if(this.eyeTimer>this.eyeInterval){
		this.eyeCount=(this.eyeCount+1)%2;
		this.eyeTimer=0;
		if(this.eyeCount==0){
			this.eyeInterval=Math.random()*1000+2000;
		}else{
			this.eyeInterval=100;
		}
	}
	ct1.save();
	ct1.translate(this.x,this.y);
	ct1.rotate(deltaAngle+Math.PI);

	if(data.type==0){
		ct1.drawImage(this.bigBody,-this.bigBody.width/2,-this.bigBody.height/2);
	}
	//蓝色身体发生的变化
	if(data.type==1){
		this.orangeCount=0;
		this.blueTimer+=nowtime;
		if(this.blueTimer>50){
			this.blueCount++;
			if(this.blueCount>7){
				this.blueCount=7;
			}
			this.blueTimer=0;
		}
		ct1.drawImage(blueEat[this.blueCount],-blueEat[this.blueCount].width/2,-blueEat[this.blueCount].height/2);
	}

	//橘色身体发生的变化
	if(data.type==2){
		this.blueCount=0;
		this.orangeTimer+=nowtime;
		if(this.orangeTimer>50){
			this.orangeCount++;
			if(this.orangeCount>7){
				this.orangeCount=7;
			}
			this.orangeTimer=0;
		}
		ct1.drawImage(orangeEat[this.orangeCount],-orangeEat[this.orangeCount].width/2,-orangeEat[this.orangeCount].height/2);
	}

	ct1.drawImage(momTail[this.tailCount],-momTail[this.tailCount].width/2+25,-momTail[this.tailCount].height/2);
	ct1.drawImage(momEye[this.eyeCount],-momEye[this.eyeCount].width/2,-momEye[this.eyeCount].height/2);
	ct1.restore();
}