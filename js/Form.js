class Form{
    constructor(){
        this.input = createInput ("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h3");
        this.reset = createButton("Reset");

    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();

    }

 display(){
     var title = createElement('h2');
     title.html("CAR RACING GAME");
     title.position(windowWidth/2-100,20);
     console.log(title);

     
     this.input.position(windowWidth/2-100,windowHeight/2);
     this.button.position(windowWidth/2,windowHeight/2+40);
     this.reset.position(windowWidth-60,20);
     this.button.mousePressed(()=>{
         this.input.hide();
         this.button.hide();

         player.name = this.input.value()
         playerCount += 1
         player.index=playerCount
         player.update();
         player.updateCount(playerCount);

        
         this.greeting.html("HELLO!" + player.name );
         this.greeting.position(windowWidth/2-100,windowHeight/2-20)

     })
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        })
 }   
}