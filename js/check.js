function check(){
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i]){
			if(calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y)<625&&fruit.size[i]>15){
				fruit.dead(i);
				if(fruit.fruitType[i]==fruit.blue){
					data.blue++;
					data.type=1;
				}else{
					data.orange++;
					data.type=2;
				}
				wave.born(fruit.x[i],fruit.y[i]);
			}
		}
	}
}
function babyAlive(){
	if(calLength2(mom.x,mom.y,baby.x,baby.y)<625){
		if(data.score>50){
			baby.bodyCount=0;
			data.type=0;
			halo.born(baby.x,baby.y);
			data.orange=0;
			data.blue=0;
			data.show+=data.score;
		}
	}
}