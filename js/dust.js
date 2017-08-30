var Dust=function(){
	this.x=[];
	this.y=[];
	this.type=[];
	this.angle;
	this.offset=[];
	this.position=[];
}
Dust.prototype.num=30;
Dust.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.x[i]=Math.random()*w;
		this.y[i]=Math.random()*h;
		this.position[i]=this.x[i];
		this.angle=0;
		this.offset[i]=Math.random()*10+4;
		this.type[i]=dustNum[Math.floor(Math.random()*7)];
	}
}
Dust.prototype.draw=function(){
	ct1.save();
	ct1.globalAlpha=0.9;
	this.angle=ane.angle;
	for(var i=0;i<this.num;i++){
		this.position[i]=this.x[i]+Math.sin(this.angle)*this.offset[i];
		ct1.beginPath();
		ct1.drawImage(this.type[i],this.position[i],this.y[i])
		ct1.closePath();
	}
	ct1.restore();
}