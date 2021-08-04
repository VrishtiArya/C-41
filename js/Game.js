class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    
    }
    update(state){
        database.ref("/").update({
            gameState: state
        })
    }
   async start(){
        if(gameState === 0){
            player = new Player()
         var   playerCountRef = await database.ref("playerCount").once("value");
         if(playerCountRef.exists()){
             playerCount = playerCountRef.val();
             player.getCount()
         }
            form = new Form()
            form.display()
        }
        car1 = createSprite(100,200);
        car1.addImage(car1Img);
        car2 = createSprite(300,200);
        car2.addImage(car2Img);
        car3 = createSprite(500,200);
        car3.addImage(car3Img);
        car4 = createSprite(700,200);
        car4.addImage(car4Img);
        cars =[car1,car2,car3,car4];

    }
    play(){
      form.hide();

      textSize(25);
      text ("Game Start",120,100)

      Player.getPlayerInfo();
      player.getRank();  

      if(allPlayers!== undefined){
          background(131,179,100);
          image(trackImg,0,-windowHeight*4,windowWidth,windowHeight*5);
         // var displayPosition =130;
         var index = 0;

         var x =50;
         var y ;
          for(var plr in allPlayers){

            index = index+1;
            x = x+200 ;
            y = windowHeight-allPlayers[plr].distance ;
            cars[index-1].x = x
            cars[index-1].y = y

            if(index === player.index){
                stroke (10);
                fill ("red");
                ellipse(x,y,60,60);
                cars[index-1].shapeColor = "red";
                camera.position.x=windowWidth/2
                camera.position.y=cars[index-1].y
            }
        
          }
          
      }
      if(keyIsDown(UP_ARROW)&& player.index!== null){
          player.distance+=50;
          player.update();
      }
    //car1.depth=5
    console.log(player.distance);
    if(player.distance>2850){
        gameState=2;
        player.rank = player.rank+1;
        Player.updateRank(player.rank);
    }
      drawSprites();
      
    }
End(){
    console.log("game ended");
    console.log(player.rank);
}
}