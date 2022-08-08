class Player {
  constructor() {
  this.name=null;
  this.index=null;
  this.x=0;
  this.y=0;
}
getcount(){
var playercountref=database.ref("playercount");
playercountref.on("value",data=>{
  playercount=data.val();
});
}

updatecount(count){
database.ref("/").update({
playercount:count
});
}

addplayer(){
var playerindex="players/player"+this.index
if(this.index==1){
this.x=width/2-100;
}
else{
this.x=width/2+100;
}
database.ref(playerindex).set({
name:this.name,
positionx:this.x,
positiony:this.y,
});
}

static getplayersinfo(){
var playerinforef=database.ref("players");
playerinforef.on("value",data=>{
allplayers=data.val();

})


}
update(){
var playerindex="players/player"+this.index;
database.ref(playerindex).update({
  positionx:this.x,
  positiony:this.y,
})
}



}



