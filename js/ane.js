var Ane=function(){
	this.rootx=[];
	this.headx=[];
	this.heady=[];
	this.controly=[];
	this.angle=0;
	this.offset=[];
}
Ane.prototype.num=50;
Ane.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.rootx[i]=i*16+Math.random()*20;
		this.headx[i]=this.rootx[i];
		this.controly[i]=160+Math.random()*50;
		this.heady[i]=190+Math.random()*50;
		this.offset[i]=30+Math.random()*10;
	}
}
Ane.prototype.draw=function(){
	this.angle+=nowtime*0.002;
	var angle=Math.sin(this.angle);
	ct2.save();
	ct2.globalAlpha=0.6;
	ct2.lineWidth=20;
	ct2.lineCap="round";
	ct2.strokeStyle="#3b154e";
	for(var i=0;i<this.num;i++){
		this.headx[i]=this.rootx[i]+angle*this.offset[i];
		ct2.beginPath();
		ct2.moveTo(this.rootx[i],h);
		ct2.quadraticCurveTo(this.rootx[i],h-this.controly[i],this.headx[i],h-this.heady[i]);
		
		ct2.stroke();
	}
	ct2.restore();
}