var Fruit=function(){
	this.alive=[];
	this.blue=new Image();
	this.orange=new Image();
	this.fruitType=[];
	this.grow=[];
	this.up=[];
	this.x=[];
	this.y=[];
	this.size=[];
	this.aneID=[];
}
Fruit.prototype.num=30;
Fruit.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.x[i]=0;
		this.y[i]=0;
		this.alive[i]=false;
		this.born(i);
		this.grow[i]=Math.random()*0.3+0.1;//[0.05,0.08)
		this.up[i]=Math.random()*0.6+0.2//[0.5,0.8)
	};
	this.blue.src="./images/blue.png";
	this.orange.src="./images/fruit.png";
}
Fruit.prototype.draw=function(){
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			if(this.size[i]<=15){
				this.x[i]=ane.headx[this.aneID[i]];
				this.y[i]=h-ane.heady[this.aneID[i]];
				this.size[i]+=this.grow[i];
			}else{
				this.y[i]-=this.up[i];
			}
			ct2.drawImage(this.fruitType[i],this.x[i]-this.size[i]/2,this.y[i]-this.size[i]/2,this.size[i],this.size[i]);
		}
		if(this.y[i]<=this.size[i]/2){
			this.alive[i]=false;
		}
	}
}
Fruit.prototype.born=function(i){
	var aneID=Math.floor(Math.random()*ane.num);
	this.aneID[i]=aneID;
	this.x[i]=ane.headx[aneID];
	this.y[i]=h-ane.heady[aneID];
	this.size[i]=0;
	this.alive[i]=true;
	var type=Math.random();
	if(type<0.2){
		this.fruitType[i]=this.blue;
	}else{
		this.fruitType[i]=this.orange;
	}
}
Fruit.prototype.dead=function(i){
	this.alive[i]=false;
}
function fruitMonitor(){
	var num=0;
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i]){
			num++;
		}
	}
	if(num<10){
		sendFruit();
	}
}

function sendFruit(){
	for(var i=0;i<fruit.num;i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}
}