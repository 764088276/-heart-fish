var Wave=function(){
	this.x=[];
	this.y=[];
	this.r=[];
	this.alive=[];
	this.type=null;//0表示与果实的碰撞，1表示与小鱼的碰撞
}
Wave.prototype.num=10;
Wave.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=false;
	}
}
Wave.prototype.draw=function(){
	ct1.save();
	ct1.shadowBlur=60;
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			this.r[i]+=1;
			if(this.r[i]>100){
				this.r[i]=100;
				this.alive[i]=false
			}
			ct1.beginPath();
			ct1.lineWidth=4;
			ct1.globalAlpha=1-this.r[i]/100;
			ct1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
			ct1.strokeStyle="rgba(255,255,255,"+ct1.globalAlpha+")";
			ct1.globalAlpha=1;
			ct1.stroke();
			ct2.closePath();
	}
	
}
ct1.restore();

}
Wave.prototype.born=function(x,y){
	for(var i=0;i<this.num;i++){
		if(!this.alive[i]){
			this.alive[i]=true;
			this.x[i]=x;
			this.y[i]=y;
			this.r[i]=20;
			return
		}
	}
}