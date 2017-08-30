var Halo=function(){
	this.x=[];
	this.y=[];
	this.r=[];
	this.alive=[];
}
Halo.prototype.num=10;
Halo.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=false;
	}
	
}
Halo.prototype.draw=function(){
	for(var i=0;i<this.num;i++){
	if(this.alive[i]){
		ct1.save();
		ct1.lineWidth=3;
		this.r[i]+=1;
		if(this.r[i]>=300){
			this.r[i]=300;
			this.alive[i]=false;
		}
		ct1.globalAlpha=1-this.r[i]/300;
		ct1.beginPath();
		ct1.strokeStyle="rgba(255,0,0,"+ct1.globalAlpha+")";
		ct1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
		ct1.stroke();
		ct1.restore();
	}
}}
Halo.prototype.born=function(x,y){
	for(var i=0;i<this.num;i++){
	if(!this.alive[i]){
		this.x[i]=x;
		this.y[i]=y;
		this.r[i]=20;
		this.alive[i]=true;
		return
	}
}
}