var Data=function(){
	this.score;
	this.blue;
	this.orange;
	this.piece;
	this.type;
	this.show;
	this.alpha;
}
Data.prototype.init=function(){
	this.score=0;
	this.blue=0;
	this.show=0;
	this.alpha=0;
	this.orange=0;
	this.piece=20;
	this.type=0;//0：代表初始状态；1：代表blue；2：代表orange
}
Data.prototype.draw=function(){
	this.score=(this.blue*2+this.orange)*this.piece;
	ct1.save();
	ct1.fillStyle="rgb(255,255,255)";
	ct1.shadowBlur="10";
	ct1.font="30px Arial";
	ct1.fillText("Score : "+this.show,w/2-80,40);
	ct1.restore();
}
Data.prototype.gameover=function(){
	ct1.save();
	this.alpha+=0.01;
	if(this.alpha>=1){
		this.alpha=1;
	}
	ct1.font="35px Arial";
	ct1.fillStyle="rgba(255,255,255,"+this.alpha+")";
	// ct1.fillStyle="white";
	ct1.textAlign="center";
	ct1.textBaseline="middle";
	ct1.fillText("Game Over",w/2,h/2);
	ct1.restore();
}