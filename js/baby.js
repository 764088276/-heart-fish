var Baby=function(){
	this.x;
	this.y;
	this.angle;
	this.body=new Image();
	this.tail=new Image();
	this.eye=new Image();
	this.tailCount;
	this.timeLoop;

	this.eyeCount=0;
	this.eyeTimer=0;
	this.eyeInterval=1000;

	this.bodyCount=0;
	this.bodyTimer=0;
}
Baby.prototype.init=function(){
	this.x=w/2-50;
	this.y=h/2-50;
	this.angle=0;
	this.timeLoop=0;
	this.tailCount=0;
	this.body.src="./images/baby.png";
}
Baby.prototype.draw=function(){
	this.x=lerpDistance(mom.x,this.x,0.99);
	this.y=lerpDistance(mom.y,this.y,0.99);
	// 尾巴的运动
	this.timeLoop+=nowtime;
	if(this.timeLoop>=50){
		this.tailCount++;
		this.tailCount=this.tailCount%8;
		this.timeLoop=0;
	}

	// 眼镜的眨动
	this.eyeTimer+=nowtime;
	if(this.eyeTimer>=this.eyeInterval){
		this.eyeCount=(this.eyeCount+1)%2;
		this.eyeTimer=0;
		if(this.eyeCount==0){
			this.eyeInterval=Math.random()*1000+2000;
		}else{
			this.eyeInterval=200;
		}
	}

	//身体的变白
	this.bodyTimer+=nowtime;
	if(this.bodyTimer>=200){
		this.bodyCount++;
		this.bodyTimer=0;
		if(this.bodyCount>19){
			// game over
			this.bodyCount=19;
			canvas1.removeEventListener("mousemove",move);
			over=true;
			}
	} 
	var angle=Math.atan2(mom.y-this.y,mom.x-this.x);
	ct1.save();
	ct1.translate(this.x,this.y);
	ct1.rotate(angle+Math.PI);
	ct1.drawImage(babyTail[this.tailCount],-babyTail[this.tailCount].width/2+18,-babyTail[this.tailCount].height/2);
	ct1.drawImage(babyBody[this.bodyCount],-babyBody[this.bodyCount].width/2,-babyBody[this.bodyCount].height/2);
	ct1.drawImage(babyEye[this.eyeCount],-babyEye[this.eyeCount].width/2,-babyEye[this.eyeCount].height/2);
	ct1.restore();
}