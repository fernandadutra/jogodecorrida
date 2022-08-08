class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
    playercount=player.getcount();
    carro1=createSprite(width/2-100,height-100);
    carro2=createSprite(width/2+100,height-100);
    carro1.addImage(car1img);
    carro2.addImage(car2img);
    carro1.scale=0.07;
    carro2.scale=0.07;
    cars=[carro1,carro2];

  
  }
mododejogo(){
var gamestateref=database.ref("gamestate");
gamestateref.on("value",function(data){
gamestate=data.val();});

}

update(state){
database.ref("/").update({
gamestate:state
})
}

randomelements(){
form.hide();
form.titleImg.position(10,50);
form.titleImg.class("gameTitleAfterEffect");
}

play(){
this.randomelements();
Player.getplayersinfo();
if(allplayers!==undefined){
image(pistaimg,0,-height*5,width,height*6);
var index=0;
for(var plr in allplayers){
index=index+1;
var x=allplayers[plr].x;
var y=height-allplayers[plr].y;
cars[index-1].x=x;
cars[index-1].y=y;
console.log(index);
}
this.randomplayercontrols();
drawSprites();
}}

randomplayercontrols(){
if(keyIsDown(UP_ARROW)){
player.y+=10;
player.update();
}}




}