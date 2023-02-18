function preload(){
  hitSound = createAudio('assets/sound/ponghit.mp3');
  mainSong = createAudio('assets/sound/wiisports.mp3');
  pressStartFont = loadFont('assets/Retro Gaming.ttf');
  buttonPress = createAudio('assets/sound/button.mp3');
  victorySound = createAudio('assets/sound/victory.mp3');
  titleSong = createAudio('assets/sound/titleSong.mp3');
  powerupSong = createAudio('assets/sound/powerupCollect.mp3');
  battleSong = createAudio('assets/sound/battleSong.mp3');
  exploreSong = createAudio('assets/sound/exploreSong.mp3');
  loseSound = createAudio("assets/sound/loseSound.mp3");

  //player img
  character11 = loadImage("assets/img/player11.png");
  character12 = loadImage("assets/img/player12.png");
  character13 = loadImage("assets/img/player13.png");
  character14 = loadImage("assets/img/player14.png");
  character21 = loadImage("assets/img/player21.png");
  character22 = loadImage("assets/img/player22.png");
  character23 = loadImage("assets/img/player24.png");
  character24 = loadImage("assets/img/player23.png");
  character31 = loadImage("assets/img/player31.png");
  character32 = loadImage("assets/img/player32.png");
  character33 = loadImage("assets/img/player33.png");
  character34 = loadImage("assets/img/player34.png");
  buurman11 = loadImage("assets/img/buurman11.png");
  buurman12 = loadImage("assets/img/buurman12.png");
  buurman21 = loadImage("assets/img/buurman21.png");
  buurman22 = loadImage("assets/img/buurman22.png");
  explorebotImg1 = loadImage("assets/img/explorebot11.png");
  explorebotImg = loadImage("assets/img/explorebot1.png");
  character41 = loadImage("assets/img/character41.png");
  character42 = loadImage("assets/img/character42.png");
  character43 = loadImage("assets/img/character43.png");
  character44 = loadImage("assets/img/character44.png");

  explorePlayerImg = loadImage("assets/img/exploreplayer12.png");
  explorePlayerImg1 = loadImage("assets/img/exploreplayer11.png");
  explorePlayerImg21 = loadImage("assets/img/exploreplayer21.png");
  explorePlayerImg22 = loadImage("assets/img/exploreplayer22.png");
  explorePlayerImg31 = loadImage("assets/img/exploreplayer31.png");
  explorePlayerImg32 = loadImage("assets/img/exploreplayer32.png");
  explorePlayerImg33 = loadImage("assets/img/exploreplayer33.png");
  explorePlayerImg41 = loadImage("assets/img/exploreplayer41.png");
  explorePlayerImg42 = loadImage("assets/img/exploreplayer42.png");
  explorePlayerImg51 = loadImage("assets/img/exploreplayer51.png");
  explorePlayerImg52 = loadImage("assets/img/exploreplayer52.png");

  powerupImg1 = loadImage("assets/img/powerup1.png");
  powerupImg2 = loadImage("assets/img/powerup2.png");
  powerupImg3 = loadImage("assets/img/powerup3.png");
  
  //grass img
  grassTile1 = loadImage("assets/img/grassTile.png");
  dirtTile1 = loadImage("assets/img/dirtTile2.png");

  grass1 = loadImage("assets/img/grass1.png");
  grass2 = loadImage("assets/img/grass2.png");
  grass3 = loadImage("assets/img/grass3.png");
  grass4 = loadImage("assets/img/grass4.png");
  grass5 = loadImage("assets/img/grass5.png");

  lineTile = loadImage("assets/img/lineTile.png");

  //object img
  scoreBoard = loadImage("assets/img/board.png")
  ballImg = loadImage("assets/img/ball.png");

  thijmenHoofd = loadImage("assets/img/thijmenHoofd.png");

  //background
  pongkemonMap = loadImage("assets/img/ponkemonMap.png");
  foregroundMap = loadImage("assets/img/foregroundMap.png");

  moneyImg = loadImage("assets/img/biljet.png");
}

collisionsMap = []
for(let i = 0; i < collisions.length; i+= 100){
  collisionsMap.push(collisions.slice(i,100+i));
}

class Boundary {
  constructor(x,y){
    this.x = x; 
    this.y = y; 
    this.width = 48; 
    this.height = 48;
  }

  draw(){
    fill("red");
    rect(this.x+(-1*scene.mapX-2000),this.y+(-1*scene.mapY-2000),this.width,this.height)
  }
}
boundaries = []

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if(symbol === 88){
      boundaries.push(new Boundary(j*48,i*48))
    }
  })
})


//==========================================================================================================================
//====================================================Playfield Functions===================================================
//==========================================================================================================================

class playField {
  constructor(x,y,width,height,bgColor,scoreX1,scoreY1,scoreX2,scoreY2,scoreS){
    this.x = x; 
    this.y = y; 
    this.width = width; 
    this.height = height; 
    this.bgColor = bgColor; 
    this.scoreX1 = scoreX1;
    this.scoreY1 = scoreY1;
    this.scoreX2 = scoreX2;
    this.scoreY2 = scoreY2;
    this.scoreS = scoreS;
  }

  draw(){
    for(var i = 0; i < width; i+=25){
      for(var n = 0; n < height; n+=25 ){
        image(grass1,i,n,25,25);
        if(i == this.x-25 && n > this.y-25 && n < this.y+this.height){
          image(grass3,i,n,25,25);
        }
        if(i == this.x+this.width && n > this.y-25 && n < this.y+this.height){
          image(grass2,i,n,25,25);
        }
        if(n == this.y-25&& i > this.x-25 && i < this.x+this.width){
          image(grass4,i,n,25,25);
        }
        if(n == this.y+this.height && i > this.x-25 && i < this.x+this.width){
          image(grass5,i,n,25,25);
        }
      }
    }
    fill(125, 79, 34);
    rect(this.x,this.y,this.width,this.height);
    fill('white');
    textSize(this.scoreS);
    image(scoreBoard,5,this.scoreY1-this.scoreS-10,90,90);
    image(scoreBoard,805,this.scoreY2-this.scoreS-10,90,90);
    text(scene.scoreP1,this.scoreX1,this.scoreY1);
    text(scene.scoreP2,this.scoreX2,this.scoreY2);
    for(var i = 0; i < this.height; i+=30){
      image(lineTile, this.x+this.width/2-12.5,this.y+i,25,25);
    }
    
  }
}
playFields = [
  new playField(100,50,700,500,'green',50,100,850,100,40),
  new playField(150,50,600,500,'green',50,100,850,100,40),
  new playField(200,50,500,500,'green',50,100,850,100,40),
]

//==========================================================================================================================
//====================================================Player Functions======================================================
//==========================================================================================================================

class player {
  constructor(x,y,width,height,speed,playerNum,keyUp,keyDown,botActive,unlocked,color,name, hitspeed){
    this.x = x; 
    this.y = y; 
    this.width = width; 
    this.height = height; 
    this.speed = speed; 
    this.playerNum = playerNum;
    this.keyUp = keyUp;
    this.keyDown = keyDown;
    this.botActive = botActive; 
    this.ballSpeedX = 0;
    this.ballSpeedY = 0;
    this.ballX = 0;
    this.ballY = 0;
    this.prediction = 250;
    this.unlocked = unlocked;
    this.color = color;
    this.name = name; 
    this.powerActive = false;
    this.usePower = false;
    this.powerup = 0; 
    this.drawActive = true;
    this.hitspeed = hitspeed;
    this.changePrediction = 0;
  }

  draw(){ 
    if(this.drawActive == true){
      if(this.playerNum == 1){
        if(this.name == "Frenk"){
          image(character22,this.x,this.y,this.width,this.height);
        }
        else if(this.name == "Frenka")image(character24,this.x,this.y,this.width,this.height);
        else if(this.name == "Krenda")image(character34,this.x,this.y,this.width,this.height);
        else if(this.name == "Krent"){
          image(character32,this.x,this.y,this.width,this.height);
        }
        else if(this.name == "Pat"){
          image(buurman12,this.x,this.y,this.width,this.height);
        }
        else if(this.name == "Mat"){
          image(buurman22,this.x,this.y,this.width,this.height);
        }
        else if(this.name == "Gerarda"){
          image(character42,this.x,this.y,this.width,this.height);
        }
        else if(this.name == "Gerald"){
          image(character44,this.x,this.y,this.width,this.height);
        }
        else if(this.name == "Gerda")image(character14,this.x,this.y,this.width,this.height);
        else{
          image(character12,this.x,this.y,this.width,this.height);
        }
      }
      if(this.playerNum == 2){
        if(this.name == "Frenk"){
          image(character21,this.x,this.y,this.width,this.height);
        }
        else if(this.name == "Frenka")image(character23,this.x,this.y,this.width,this.height);
        else if(this.name == "Krenda")image(character33,this.x,this.y,this.width,this.height);
        else if(this.name == "Krent"){
          image(character31,this.x,this.y,this.width,this.height);
        }
        else if(this.name == "Pat"){
          image(buurman11,this.x,this.y,this.width,this.height);
        }
        else if(this.name == "Mat"){
          image(buurman21,this.x,this.y,this.width,this.height);
        }
        else if(this.name == "Gerarda"){
          image(character41,this.x,this.y,this.width,this.height);
        }
        else if(this.name == "Gerald"){
          image(character43,this.x,this.y,this.width,this.height);
        }
        else if(this.name == "Gerda")image(character13,this.x,this.y,this.width,this.height);
        else{
          image(character11,this.x,this.y,this.width,this.height);
        }
      }
    }
  }

  movement(){
    if(this.botActive == false){
      if(keyIsDown(this.keyUp)){
        
        this.y-=this.speed;
      }
      if(keyIsDown(this.keyDown)){
        this.y+=this.speed;
        
      }
    }
    else{
      if(scene.botDifficulty >= 2){
        if(scene.playerTurn == this.playerNum){
          if(this.y+this.height/2 < this.prediction){
            this.y+=this.speed;
            
          }
          if(this.y+this.height/2 > this.prediction){
            this.y-=this.speed;
            
          }
        }
        else{
          if(this.y < playFields[scene.activePlayField].y+playFields[scene.activePlayField].height/2-this.height/2){
            this.y+=this.speed;
            
          } 
          if(this.y > playFields[scene.activePlayField].y+playFields[scene.activePlayField].height/2-this.height/2){
            this.y-=this.speed;
        
          }
        }
      }
      if(scene.botDifficulty == 1){
        if(scene.playerTurn == this.playerNum){
          if(this.y+this.height/2 < balls[scene.activeBall].y){
            this.y+=this.speed;

          }
          if(this.y+this.height/2 > balls[scene.activeBall].y){
            this.y-=this.speed;
          }
        }
        else{
          if(this.y < playFields[scene.activePlayField].y+playFields[scene.activePlayField].height/2-this.height/2){
            this.y+=this.speed;

          } 
          if(this.y > playFields[scene.activePlayField].y+playFields[scene.activePlayField].height/2-this.height/2){
            this.y-=this.speed;
            
          }
        }
      }
      
    }
    if(keyIsDown(69) && this.playerNum == 1 && this.powerActive == true){
      this.usePower = true;
    }
    if(keyIsDown(37) && this.playerNum == 2 && this.powerActive == true && this.botActive == false){
      this.usePower = true;
    }
    if(this.botActive == true && this.powerActive == true && Math.floor(Math.random()*100) == 0){
      this.usePower = true;
    }
    if(scene.botDifficulty == 3 && balls[scene.activeBall].x > playFields[scene.activePlayField].x+playFields[scene.activePlayField].width-playFields[scene.activePlayField].width/3 && this.changePrediction == 0 && scene.playerTurn == 2){
      this.changePrediction = 1;
    }
    if(players[scene.activeP1].y+players[scene.activeP1].height/2 < playFields[scene.activePlayField].y+playFields[scene.activePlayField].height/2 &&  this.changePrediction == 1){
      this.prediction -= this.height/4;
      this.changePrediction = 2; 
    }
    if(players[scene.activeP1].y+players[scene.activeP1].height/2 > playFields[scene.activePlayField].y+playFields[scene.activePlayField].height/2 &&  this.changePrediction == 1){
      this.prediction += this.height/4;
      this.changePrediction = 2; 
    }
    this.y = constrain(this.y,playFields[scene.activePlayField].y,playFields[scene.activePlayField].y+playFields[scene.activePlayField].height-this.height);
  }


  //predict bot
  predictBall(){
    this.ballX = balls[scene.activeBall].x; 
    this.ballY = balls[scene.activeBall].y; 
    this.ballSpeedY = balls[scene.activeBall].speedY;

    for(var i = this.ballX; i<this.x-balls[scene.activeBall].width/2; i+=balls[scene.activeBall].speedX){
      this.ballY += this.ballSpeedY;
      if(this.ballY+balls[scene.activeBall].width/2 > playFields[scene.activePlayField].y+playFields[scene.activePlayField].height || this.ballY-balls[scene.activeBall].width/2 < playFields[scene.activePlayField].y){
        this.ballSpeedY *= -1;
      }
      this.ballY = constrain(this.ballY,playFields[scene.activePlayField].y+balls[scene.activeBall].width/2,playFields[scene.activePlayField].y+playFields[scene.activePlayField].height-balls[scene.activeBall].width/2);
    }
    this.prediction = this.ballY; 
  }

  

}
players = [
  //(x,y,width,height,speed,playernum,keyUP,keyDOWN,botActive,unlocked)
  new player(150,250,50,100,4,1,87,83,false,true,"#595959","Gerd",9), //0
  new player(730,250,50,100,4,2,38,40,false,true,"#595959","Gerda",9), //1
  new player(730,250,50,200,2,2,0,0,false,false,"#595959","Frenk",7),   //2
  new player(730,250,50,200,2,2,0,0,false,false,"#595959","Frenka",7),   //3
  new player(730,250,75,150,2.5,2,38,40,false,false,"##595959","Gerald",8),//4
  new player(730,250,75,150,2.5,2,38,40,false,false,"#595959","Gerarda",8),//5
  new player(730,250,100,100,2,2,38,40,false,false,"#595959","Krent",11),//6
  new player(730,250,100,100,2,2,38,40,false,false,"#595959","Krenda",11),//7
  new player(730,250,50,150,3,2,38,40,false,false,"#595959","Pat",10),//8
  new player(730,250,50,150,3,2,38,40,false,false,"#595959","Mat",10),//9
  
]

//==========================================================================================================================
//====================================================Player Explore Functions==============================================
//==========================================================================================================================

class explorePlayer{
  constructor(x,y,width,height,speed){
    this.x = x; 
    this.y = y; 
    this.width = width; 
    this.height = height; 
    this.speed = speed; 
    this.move = true;
    this.animation = 1; 
    this.intervalAnimation = 0;
    this.frame = 0;
    this.moving = false;
    this.usetofight = 0;
  }

  draw(){
    fill('white');
    this.intervalAnimation++;
    if(this.intervalAnimation % 20 == 0){

      if(this.animation == 1){
        if(this.frame == 0){
          this.frame = 1;
        }
        else{
          this.frame = 0;
        }
      }

      if(this.animation == 2){
        if(this.frame == 0){
          this.frame = 1;
        }
        else if(this.frame == 1)this.frame = 2;
        else if(this.frame == 2)this.frame = 3;
        else{
          this.frame = 0;
        }
      }

      if(this.animation == 3){
        if(this.frame == 0){
          this.frame = 1;
        }
        else if(this.frame == 1)this.frame = 2;
        else if(this.frame == 2)this.frame = 3;
        else{
          this.frame = 0;
        }
      }

      if(this.animation == 4){
        if(this.frame == 0){
          this.frame = 1;
        }
        else{
          this.frame = 0;
        }
      }

      if(this.animation == 5){
        if(this.frame == 0){
          this.frame = 1;
        }
        else{
          this.frame = 0;
        }
      }
      
 
      
    }
    //idle
    if(this.frame == 0 && this.animation == 1 && this.moving == false){
      image(explorePlayerImg,this.x,this.y,this.width,this.height);
    }
    else if(this.frame == 1 && this.animation == 1 && this.moving == false){
      image(explorePlayerImg1,this.x,this.y,this.width,this.height);
    }
    //movedown
    if(this.frame == 0 && this.animation == 2 && this.moving == true){
      image(explorePlayerImg21,this.x,this.y,this.width,this.height);
    }
    else if(this.frame == 1 && this.animation == 2 && this.moving == true){
      image(explorePlayerImg,this.x,this.y,this.width,this.height);
    }
    else if(this.frame == 2 && this.animation == 2 && this.moving == true){
      image(explorePlayerImg22,this.x,this.y,this.width,this.height);
    }
    else if(this.frame == 3 && this.animation == 2 && this.moving == true){
      image(explorePlayerImg,this.x,this.y,this.width,this.height);
    }
    //moveup
    if(this.frame == 0 && this.animation == 3 && this.moving == true){
      image(explorePlayerImg33,this.x,this.y,this.width,this.height);
    }
    else if(this.frame == 1 && this.animation == 3 && this.moving == true){
      image(explorePlayerImg31,this.x,this.y,this.width,this.height);
    }
    else if(this.frame == 2 && this.animation == 3 && this.moving == true){
      image(explorePlayerImg32,this.x,this.y,this.width,this.height);
    }
    else if(this.frame == 3 && this.animation == 3 && this.moving == true){
      image(explorePlayerImg31,this.x,this.y,this.width,this.height);
    }

    if(this.frame == 0 && this.animation == 4 && this.moving == true){
      image(explorePlayerImg41,this.x,this.y,this.width,this.height);
    }
    else if(this.frame == 1 && this.animation == 4 && this.moving == true){
      image(explorePlayerImg42,this.x,this.y,this.width,this.height);
    }

    if(this.frame == 0 && this.animation == 5 && this.moving == true){
      image(explorePlayerImg51,this.x,this.y,this.width,this.height);
    }
    else if(this.frame == 1 && this.animation == 5 && this.moving == true){
      image(explorePlayerImg52,this.x,this.y,this.width,this.height);
    }
    
  }

  movement(){
    this.animation = 1;
    this.move = true;
    this.moving = false;
    if(keyIsDown(87)){ //w
      for(var i = 0; i < boundaries.length; i++){
        const boundary = boundaries[i];
        if(this.mapCollision({...boundary,y: boundary.y+this.speed}) == true){
          this.move = false;
          
          break
        }
      }
      if(this.move == true){
        scene.mapY -= this.speed;
        this.moving = true;
        this.animation = 3;
      }
    }
    this.move = true;
    if(keyIsDown(83)){ //s
      for(var i = 0; i < boundaries.length; i++){
        const boundary = boundaries[i];
        if(this.mapCollision({...boundary,y: boundary.y-this.speed}) == true){
          this.move = false;
          break
        }
      }
      if(this.move == true){
        scene.mapY += this.speed;
        this.moving = true;
        this.animation = 2;
      }
    }
    this.move = true;
    if(keyIsDown(65)){ //a
      for(var i = 0; i < boundaries.length; i++){
        const boundary = boundaries[i];
        if(this.mapCollision({...boundary,x: boundary.x+this.speed}) == true){
          this.move = false;
          break
        }
      }
      if(this.move == true){
        scene.mapX -= this.speed;
        this.moving = true;
        this.animation = 5;
      }
    }
    this.move = true;
    if(keyIsDown(68)){ //d
      for(var i = 0; i < boundaries.length; i++){
        const boundary = boundaries[i];
        if(this.mapCollision({...boundary,x: boundary.x-this.speed}) == true){
          this.move = false;
          break
        }
      }
      if(this.move == true){
        scene.mapX += this.speed;
        this.moving = true;
        this.animation = 4;
      }
    }
  }

  collider(){
    for(var i = 0; i<battleBots.length; i++){
      if(this.x+this.width>battleBots[i].x+(-1*scene.mapX-2000) && this.x < battleBots[i].x+(-1*scene.mapX-2000)+battleBots[i].width && this.y+this.height>battleBots[i].y+(-1*scene.mapY-2000) && this.y < battleBots[i].y+battleBots[i].height+(-1*scene.mapY-2000)){
        textSize(40);
        fill("black");
        if(players[battleBots[i].unlock].unlocked == true){
          text('"A wild '+ players[battleBots[i].unlock].name + ' just appeared!"',450,200);
        }
        else{
          text('"A wild ? just appeared!"',450,200);
        }
        battleBots[i].show = true;
        if(keyIsDown(70)){
          scene.activeP2 = battleBots[i].unlock;
          scene.activeP1 = this.usetofight;
          if(scene.activeP1 != scene.activeP2){
            if(scene.activeP2 == 2){
              scene.botDifficulty = 3;
              scene.activePlayField = 2;
            }
            if(scene.activeP2 == 3){
              scene.botDifficulty = 1;
              scene.activePlayField = 2;
            }
            if(scene.activeP2 == 4){
              scene.botDifficulty = 2;
              scene.activePlayField = 1;
            }
            if(scene.activeP2 == 5){
              scene.botDifficulty = 1;
              scene.activePlayField = 1;
            }
            if(scene.activeP2 == 6){
              scene.botDifficulty = 3;
              scene.activePlayField = 0;
            }
            if(scene.activeP2 == 7){
              scene.botDifficulty = 1;
              scene.activePlayField = 0;
            }
            
            
            players[scene.activeP2].botActive = true;
            players[scene.activeP1].botActive = false;
            players[scene.activeP2].playerNum = 2;
            players[scene.activeP1].playerNum = 1;
            players[scene.activeP1].keyDown = 83;
            players[scene.activeP1].keyUp = 87; 
            console.log(players[scene.activeP1].keyUp = 87);
            scene.activeScene = 2;
            scene.reset();
          }
          else {
            textSize(30);
            text('"You cant fight the same character!"', 450,300);
          }
        }
      }
      else{
        battleBots[i].show = false;
      }
    }
  }

  mapCollision(rectangle){
    if(this.x+this.width >= rectangle.x+(-1*scene.mapX-2000) && this.x<=rectangle.x+(-1*scene.mapX-2000)+rectangle.width && this.y<=rectangle.y+(-1*scene.mapY-2000)+rectangle.height && this.y+this.height>=rectangle.y+(-1*scene.mapY-2000)){
      return true;

    }
  }
}

explorePlayers = [
  new explorePlayer(900/2-24,600/2-24,48,48,2),
]

class battleBot {
  constructor(x,y,width,height,color,unlock){
    this.x = x; 
    this.y = y; 
    this.width = width; 
    this.height = height; 
    this.color = color; 
    this.unlock = unlock;
    this.show = false;
    this.interval = 0;
    this.frame = 0;
  }

  draw(){
    this.interval++;
    if(this.interval % 20 == 0){
      if(this.frame == 0)this.frame = 1;
      else this.frame = 0;
    }
    if(this.show == true){
      if(this.frame == 1)image(explorebotImg,this.x+(-1*scene.mapX-2000),this.y+(-1*scene.mapY-2000),this.width,this.height);
      if(this.frame == 0)image(explorebotImg1,this.x+(-1*scene.mapX-2000),this.y+(-1*scene.mapY-2000),this.width,this.height);
    }
  }
}

battleBots = [
  new battleBot(48*46-24,48*42,48,48,'red',3),
  new battleBot(48*55-24,48*32+24,48,48,'red',4),
  new battleBot(48*53,48*52,48,48,'red',5),
  new battleBot(48*23-24,48*45+24,48,48,'red',6),
  new battleBot(48*61,48*22+24,48,48,'red',7),
  new battleBot(48*75-24,48*37,48,48,'red',2),
]


//==========================================================================================================================
//====================================================Ball Functions========================================================
//==========================================================================================================================


class ball {
  constructor(x,y,width,speedX,speedY){
    this.x = x; 
    this.y = y; 
    this.width = width; 
    this.speedX = speedX;
    this.speedY = speedY;
    this.drawcolor = true;
  }

  draw(){
    if(this.drawcolor == true){
      image(ballImg,this.x-this.width/2,this.y-this.width/2,this.width,this.width);
    }
  }

  movement(){
    this.x+=this.speedX;
    this.y+=this.speedY;
    
  }

  bounce(){
    if(this.x-this.width/2+this.speedX < playFields[scene.activePlayField].x){ //left wall collision
      scene.scoreP2++;
      scene.scored(2);
    }
    if(this.x+this.width/2+this.speedX > playFields[scene.activePlayField].x+playFields[scene.activePlayField].width){ //right wall collision
      scene.scoreP1++; 
      scene.scored(1);
    }
    if(this.y-this.width/2 <= playFields[scene.activePlayField].y){
      this.speedY*=-1;
    }
    if(this.y+this.width/2 >= playFields[scene.activePlayField].y+playFields[scene.activePlayField].height){
      this.speedY*=-1;
    }
    
    //player1 collision
    if(this.x-this.width/2 < players[scene.activeP1].x+players[scene.activeP1].width && this.x+this.width/2 > players[scene.activeP1].x && this.y+this.width/2 > players[scene.activeP1].y && this.y-this.width/2 < players[scene.activeP1].y+players[scene.activeP1].height && scene.playerTurn == 1){
      if(players[scene.activeP1].powerActive == true && players[scene.activeP1].usePower == true && players[scene.activeP1].powerup == 1){
        players[scene.activeP1].powerActive = false;
        players[scene.activeP1].usePower = false;
        this.speedY = (players[scene.activeP1].y+players[scene.activeP1].height/2-this.y)/-((players[scene.activeP1].height/2+this.width/2)/(players[scene.activeP1].hitspeed*2));
        this.speedX = Math.sqrt((players[scene.activeP1].hitspeed*2)*(players[scene.activeP1].hitspeed*2)-this.speedY*this.speedY)+0.5;
        balls[scene.activeBall].drawcolor = true;
        players[scene.activeP2].drawActive = true;
        players[scene.activeP1].drawActive = true;
        players[scene.activeP2].predictBall();
        
      }
      else if(players[scene.activeP1].powerActive == true && players[scene.activeP1].usePower == true && players[scene.activeP1].powerup == 2){
        balls[scene.activeBall].drawcolor = false;
        players[scene.activeP1].powerActive = false;
        players[scene.activeP1].usePower = false;
        this.speedY = (players[scene.activeP1].y+players[scene.activeP1].height/2-this.y)/-((players[scene.activeP1].height/2+this.width/2)/players[scene.activeP1].hitspeed);
        this.speedX = Math.sqrt(players[scene.activeP1].hitspeed*players[scene.activeP1].hitspeed-this.speedY*this.speedY)+0.5;
        players[scene.activeP2].drawActive = true;
        players[scene.activeP1].drawActive = true;
        players[scene.activeP2].prediction = (Math.random()*playFields[scene.activePlayField].height)+playFields[scene.activePlayField].y;
        console.log(players[scene.activeP2].prediction);
      }
      else if(players[scene.activeP1].powerActive == true && players[scene.activeP1].usePower == true && players[scene.activeP1].powerup == 3){
        players[scene.activeP2].drawActive = false;
        players[scene.activeP1].powerActive = false;
        players[scene.activeP1].usePower = false;
        balls[scene.activeBall].drawcolor = true;
        this.speedY = (players[scene.activeP1].y+players[scene.activeP1].height/2-this.y)/-((players[scene.activeP1].height/2+this.width/2)/players[scene.activeP1].hitspeed);
        this.speedX = Math.sqrt(players[scene.activeP1].hitspeed*players[scene.activeP1].hitspeed-this.speedY*this.speedY)+0.5;
        players[scene.activeP1].drawActive = true;
        players[scene.activeP2].prediction = (Math.random()*playFields[scene.activePlayField].height)+playFields[scene.activePlayField].y;
        console.log(players[scene.activeP2].prediction);
      }
      else{
        this.speedY = (players[scene.activeP1].y+players[scene.activeP1].height/2-this.y)/-((players[scene.activeP1].height/2+this.width/2)/players[scene.activeP1].hitspeed);
        this.speedX = Math.sqrt(players[scene.activeP1].hitspeed*players[scene.activeP1].hitspeed-this.speedY*this.speedY)+0.5;
        balls[scene.activeBall].drawcolor = true;
        players[scene.activeP2].drawActive = true;
        players[scene.activeP1].drawActive = true;
        players[scene.activeP2].predictBall();
      }
      
      scene.playerTurn = 2;
      hitSound.play();
      scene.createParticles(1,players[scene.activeP1].color);
      scene.particles = true;
    }

    if(this.x-this.width/2 < players[scene.activeP2].x+players[scene.activeP2].width && this.x+this.width/2 > players[scene.activeP2].x && this.y+this.width/2 > players[scene.activeP2].y && this.y-this.width/2 < players[scene.activeP2].y+players[scene.activeP2].height && scene.playerTurn == 2){
      if(players[scene.activeP2].powerActive == true && players[scene.activeP2].usePower == true && players[scene.activeP2].powerup == 1){
        players[scene.activeP2].powerActive = false;
        players[scene.activeP2].usePower = false;
        this.speedY = (players[scene.activeP2].y+players[scene.activeP2].height/2-this.y)/-((players[scene.activeP2].height/2+this.width/2)/(players[scene.activeP2].hitspeed*2));
        this.speedX = -Math.sqrt((players[scene.activeP2].hitspeed*2)*(players[scene.activeP2].hitspeed*2)-this.speedY*this.speedY)-0.5;
        balls[scene.activeBall].drawcolor = true;
        players[scene.activeP1].drawActive = true;
        players[scene.activeP2].drawActive = true;
        players[scene.activeP2].changePrediction = 0;
      }
      else if(players[scene.activeP2].powerActive == true && players[scene.activeP2].usePower == true && players[scene.activeP2].powerup == 2){
        players[scene.activeP2].powerActive = false;
        players[scene.activeP2].usePower = false;
        this.speedY = (players[scene.activeP2].y+players[scene.activeP2].height/2-this.y)/-((players[scene.activeP2].height/2+this.width/2)/players[scene.activeP2].hitspeed);
        this.speedX = -Math.sqrt(players[scene.activeP2].hitspeed*players[scene.activeP2].hitspeed-this.speedY*this.speedY)-0.5;
        balls[scene.activeBall].drawcolor = false;
        players[scene.activeP1].drawActive = true;
        players[scene.activeP2].drawActive = true;
        players[scene.activeP2].changePrediction = 0;
        
      }
      else if(players[scene.activeP2].powerActive == true && players[scene.activeP2].usePower == true && players[scene.activeP2].powerup == 3){
        players[scene.activeP2].powerActive = false;
        players[scene.activeP2].usePower = false;
        this.speedY = (players[scene.activeP2].y+players[scene.activeP2].height/2-this.y)/-((players[scene.activeP2].height/2+this.width/2)/players[scene.activeP2].hitspeed);
        this.speedX = -Math.sqrt(players[scene.activeP2].hitspeed*players[scene.activeP2].hitspeed-this.speedY*this.speedY)-0.5;
        players[scene.activeP1].drawActive = false;
        players[scene.activeP2].drawActive = true;
        players[scene.activeP2].changePrediction = 0;
        
      }
      else{
        this.speedY = (players[scene.activeP2].y+players[scene.activeP2].height/2-this.y)/-((players[scene.activeP2].height/2+this.width/2)/players[scene.activeP2].hitspeed);
        this.speedX = -Math.sqrt(players[scene.activeP2].hitspeed*players[scene.activeP2].hitspeed-this.speedY*this.speedY)-0.5;
        balls[scene.activeBall].drawcolor = true;
        players[scene.activeP1].drawActive = true;
        players[scene.activeP2].drawActive = true;
        players[scene.activeP2].changePrediction = 0;
      }
      scene.playerTurn = 1;
      hitSound.play();
      scene.createParticles(-1,players[scene.activeP2].color);
      scene.particles = true;
    }
    this.y = constrain(this.y,playFields[scene.activePlayField].y+this.width/2,playFields[scene.activePlayField].y+playFields[scene.activePlayField].height-this.width/2);
  }
}
balls = [
  new ball(300,300,40,5,0)
]
//==========================================================================================================================
//====================================================PowerUP Functions======================================================
//==========================================================================================================================

class PowerUp{
  constructor(x,y,speed,type){
    this.x = x; 
    this.y = y;
    this.speed = speed;
    this.type = type;
  }

  draw(){
    if(this.type == 1)image(powerupImg1,this.x-20,this.y-20,40,40)
    if(this.type == 2)image(powerupImg2,this.x-20,this.y-20,40,40)
    if(this.type == 3)image(powerupImg3,this.x-20,this.y-20,40,40)
  }

  update(){
    this.y+=this.speed;
  }

  collider(){
    if(dist(this.x,this.y,balls[scene.activeBall].x,balls[scene.activeBall].y) <= 40 && scene.playerTurn == 1 && players[scene.activeP2].powerActive == false){
      players[scene.activeP2].powerup = this.type;
      players[scene.activeP2].powerActive = true;
      powerupSong.play();
      return true;
    }
    if(dist(this.x,this.y,balls[scene.activeBall].x,balls[scene.activeBall].y) <= 40 && scene.playerTurn == 2 && players[scene.activeP1].powerActive == false){
      players[scene.activeP1].powerup = this.type;
      players[scene.activeP1].powerActive = true;
      powerupSong.play();
      return true;
    }
    if(this.y-20 > 600){
      return true;
    }
    if(this.y+20 < 0){
      return true;
    }

  }
}

powerUps = [];



//==========================================================================================================================
//====================================================Button Functions======================================================
//==========================================================================================================================

class button  {
  constructor(x,y,width,height,text){
    this.x = x; 
    this.y = y;
    this.width = width;
    this.height = height; 
    this.text = text; 
    this.active = false; 
  }

  draw(){
    fill('white');
    rect(this.x,this.y,this.width,this.height,10);
    textAlign(CENTER);
    textSize(15);
    fill('black');
    text(this.text, this.x+this.width/2,this.y+this.height/2);
  }

  buttonOut(){
    if(mouseX > this.x && mouseX < this.x+this.width && mouseY > this.y && mouseY < this.y+this.height && mouseIsPressed == true && this.active == false){
      this.active = true;
      buttonPress.play();
      return true;
    }
    if(mouseX > this.x && mouseX < this.x+this.width && mouseY > this.y && mouseY < this.y+this.height && mouseIsPressed != true){ 
      this.active = false; 
    }
  }
}
buttons=[
  new button(600,300,100,50,'bot'),       //0
  new button(200,300,100,50,'2 players'), //1
  new button(400,200,100,50,'easy'),      //2
  new button(400,300,100,50,'medium'),    //3
  new button(400,400,100,50,'hard'),      //4
  new button(400,500,100,50,'godmode'),   //5
  new button(300,275,100,50,'resume'),    //6
  new button(500,275,100,50,'exit'),      //7
  new button(300,250,100,50,'explore'),   //8
  new button(300,325,100,50,'pong'),      //9
  new button(400,160,75,50,'map 1'),      //10
  new button(500,160,75,50,'map 2'),      //11
  new button(600,160,75,50,'map 3'),      //12
  new button(500,360,75,50,'>'),       //13 p1
  new button(400,360,75,50,'<'),       //14 p1
  new button(750,500,100,50,'ready'),     //15
  new button(400,260,75,50,'<'),       //16
  new button(500,260,75,50,'>'),      //17
  new button(500,460,75,50,'>'),       //18 p2
  new button(400,460,75,50,'<'),       //19 p2
  new button(400,300,100,50,'menu'),      //20
  new button(50,50,100,50,'back'),        //21
  new button(500,400,100,50,'keybinds'),        //22
  new button(400,160,75,50,'+'),        //23
  new button(500,160,75,50,'-'),        //24
  new button(400,260,75,50,'+'),        //23
  new button(500,260,75,50,'-'),        //24
  new button(300,400,100,50,'shop'),        //27
  new button(500,250,100,300,'buy 1'),        //28
  new button(700,250,100,300,'buy 2'),        //29
  new button(500,250,100,50,'pongdex'),        //30
  new button(500,325,100,50,'credits'),        //31
  new button(15,535,75,50,'stop'),        //32
  new button(150,150,100,150,'use'),    //33
  new button(150,200+150,100,150,'use'),
  new button(120+150,150,100,150,'use'),
  new button(120+150,200+150,100,150,'use'),
  new button(240+150,150,100,150,'use'),
  new button(240+150,200+150,100,150,'use'),
  new button(360+150,150,100,150,'use'),
  new button(360+150,200+150,100,150,'use'),
  new button(480+150,150,100,150,'use'),
  new button(480+150,200+150,100,150,'use'), 43
];

class slider {
  constructor(x,y,width,height,x2,name){
    this.x = x; 
    this.y = y; 
    this.width = width; 
    this.height = height; 
    this.name = name; 
    this.x2 = x2;
  }

  draw(){
    fill('white');
    rect(this.x,this.y,this.width,this.height);
    fill('black');
    rect(this.x2,this.y-10,50,this.height+20);
    if(mouseX > this.x2 && mouseX < this.x2+this.height+20 && mouseY > this.y-10 && mouseY < this.y+this.height+10 && mouseIsPressed){
      this.x2 = mouseX-25;
      this.x2 = constrain(this.x2,this.x,this.x+this.width-50);
    }
  }
}
sliders = [
  new slider(100,300,400,20,150,'herres'),
]

//==========================================================================================================================
//====================================================Scenes================================================================
//==========================================================================================================================



scene = {
  activePlayField: 0, 
  activeBall: 0,
  activeP1: 0,
  activeP2: 2,
  playerTurn: 2, 
  botDifficulty: 1,
  scoreP1: 0,
  scoreP2: 0,
  activeScene: 0,
  esc: false,
  mapX: -500,
  mapY: -100,
  botActive: false,
  fightSceneScoreToUnlock: 2,
  particles: false,
  scoreToWin: 1,
  timeTillEnd: 1,
  money: 0, 

  scored(playerScored){
    balls[this.activeBall].x = playFields[this.activePlayField].x+playFields[this.activePlayField].width/2;
    balls[this.activeBall].y = playFields[this.activePlayField].y+playFields[this.activePlayField].height/2;
    balls[this.activeBall].speedY = 0;
    players[this.activeP2].powerActive = false;
    players[this.activeP1].powerActive = false;
    players[this.activeP2].usePower = false;
    players[this.activeP1].usePower = false;
    balls[scene.activeBall].drawcolor = true;
    players[scene.activeP1].drawActive = true;
    players[scene.activeP2].drawActive = true;
    if(playerScored == 1){
      balls[this.activeBall].speedX = -5;
      scene.playerTurn = 1;
    }
    else{
      balls[this.activeBall].speedX = 5;
      scene.playerTurn = 2;
      players[this.activeP2].prediction = playFields[this.activePlayField].y+playFields[this.activePlayField].height/2;
    }
  },

  reset(){
    for(var i = 0; i<players.length; i++){
      players[i].y = playFields[scene.activePlayField].y+playFields[scene.activePlayField].height/2-players[i].height/2;
      players[i].prediction = playFields[scene.activePlayField].y+playFields[scene.activePlayField].height/2;
      players[this.activeP2].powerActive = false;
      players[this.activeP1].powerActive = false;
      players[this.activeP2].usePower = false;
      players[this.activeP1].usePower = false;
      balls[scene.activeBall].drawcolor = true;
      players[scene.activeP1].drawActive = true;
      players[scene.activeP2].drawActive = true;
      if(players[i].playerNum == 1){
        players[i].x = playFields[scene.activePlayField].x+20;
      }
      if(players[i].playerNum == 2){
        players[i].x = playFields[scene.activePlayField].x+playFields[scene.activePlayField].width-players[i].width-20;
      }
    }
    balls[scene.activeBall].x = playFields[scene.activePlayField].x+playFields[scene.activePlayField].width/2;
    balls[scene.activeBall].y = playFields[scene.activePlayField].y+playFields[scene.activePlayField].height/2;
    balls[this.activeBall].speedX = 5;
    balls[this.activeBall].speedY = 0;
    this.playerTurn = 2;
    this.scoreP1 = 0;
    this.scoreP2 = 0;

  
  },

  draw(){
    if(keyIsDown(27) && (this.activeScene != 0 && this.activeScene != 1 && this.activeScene != 7) ){
      this.esc = true;
    }

    if(this.activeScene == 0){
      homeScene.draw();
    }
    else if(this.activeScene == 1){
      setupScene.draw();
    }
    else if(this.activeScene == 6){
      settingScene.draw();
    }
    else if(this.activeScene == 7){
      scoreTimeScene.draw();
    }
    else if(this.activeScene == 8){
      winSceneP1.draw();
    }
    else if(this.activeScene == 9){
      winSceneP2.draw();
    }
    else if(this.activeScene == 10){
      shopScene.draw();
    }
    else if(this.activeScene == 12){
      creditsScene.draw();
    }
    else if(this.activeScene == 13){
      pongdexScene.draw();
    }
  

    if(this.esc == false){
      if(this.activeScene == 2){
        fightScene.draw();
      }
      else if(this.activeScene == 3){
        playScene.draw();
      }
      else if(this.activeScene == 4){
        exploreScene.draw();
      }
      else if(this.activeScene == 5){
        unlockScene.draw();
      }
      else if(this.activeScene == 11){
        loseScene.draw();
      }
    }
    else{
      escScene.draw();
    }
  }, 

  particleEffect(){
    for(var i = 0; i < particles.length; i++){
      particles[i].draw();
      particles[i].grow();
      if(particles[i].size < 4){
        particles.splice(i,1);
      }
    }
    if(particles.length < 1){
      scene.particles = false; 
    }
  }, 

  createParticles(speed,colour){
    particles.splice(0,particles.length);
    for(var i = 0; i<50;i++){
      particles.push(new particle(balls[scene.activeBall].x-(speed*balls[scene.activeBall].width/2+10),balls[scene.activeBall].y,Math.random()*15+10,speed*(Math.random()+1),Math.random()*5-2.5,colour));
    }
  }
}

homeScene = {
  draw(){
    scene.activeP1 = 0;
    scene.activeP2 = 1;
    scene.activePlayField = 0;
    scene.botDifficulty = 2;
    players[scene.activeP1].botActive = false; 
    players[scene.activeP2].botActive = true;
    players[scene.activeP1].keyDown = 83;
    players[scene.activeP1].keyUp = 87;
    for(var i = 0; i < width; i+=25){
      for(var n = 0; n < height; n+=25 ){
        image(grass1,i,n,25,25);
        if(i == playFields[scene.activePlayField].x-25 && n > playFields[scene.activePlayField].y-25 && n < playFields[scene.activePlayField].y+playFields[scene.activePlayField].height){
          image(grass3,i,n,25,25);
        }
        if(i == playFields[scene.activePlayField].x+playFields[scene.activePlayField].width && n > playFields[scene.activePlayField].y-25 && n < playFields[scene.activePlayField].y+playFields[scene.activePlayField].height){
          image(grass2,i,n,25,25);
        }
        if(n == playFields[scene.activePlayField].y-25&& i > playFields[scene.activePlayField].x-25 && i < playFields[scene.activePlayField].x+playFields[scene.activePlayField].width){
          image(grass4,i,n,25,25);
        }
        if(n == playFields[scene.activePlayField].y+playFields[scene.activePlayField].height && i > playFields[scene.activePlayField].x-25 && i < playFields[scene.activePlayField].x+playFields[scene.activePlayField].width){
          image(grass5,i,n,25,25);
        }
      }
    }
    fill(125, 79, 34);
    rect(playFields[scene.activePlayField].x,playFields[scene.activePlayField].y,playFields[scene.activePlayField].width,playFields[scene.activePlayField].height);
    players[scene.activeP1].draw();
    players[scene.activeP2].draw();
    players[scene.activeP1].movement();
    players[scene.activeP2].movement();
    balls[scene.activeBall].movement();
    balls[scene.activeBall].bounce();
    balls[scene.activeBall].draw();
    borderRect();
    textSize(60);
    fill('white');
    text('POKEPONG',width/2,200);
    buttons[9].draw();
    buttons[8].draw();
    buttons[22].draw();
    buttons[27].draw();
    buttons[30].draw();
    buttons[31].draw();
    if(buttons[9].buttonOut() == true){
      scene.activeScene = 1;
      scene.botDifficulty = 0;
    }
    if(buttons[8].buttonOut() == true){
      scene.activeScene = 4;
      scene.mapX = -500;
      scene.mapY = -100;
    }
    if(buttons[22].buttonOut() == true){
      scene.activeScene = 6;
    }
    if(buttons[27].buttonOut() == true){
      scene.activeScene = 10;
    }
    if(buttons[30].buttonOut() == true){
      scene.activeScene = 13;
    }
    if(buttons[31].buttonOut() == true){
      scene.activeScene = 12;
    }
  }
}

setupScene = {
  draw(){
    background(33, 117, 143);
    borderRect();
    textSize(60);
    fill('white');
    text('Setup',width/2,100);
    textSize(30);
    push();
    textAlign(LEFT);
    text('MAP: ' + (scene.activePlayField+1),50,200);
    if(scene.botDifficulty == 0){
      text('BOT: none',50,300);
    }
    if(scene.botDifficulty == 1){
      text('BOT: easy',50,300);
    }
    if(scene.botDifficulty == 2){
      text('BOT: hard',50,300);
    }
    if(scene.botDifficulty == 3){
      text('BOT: godmode',50,300);
    }
    text('Player 1: ' + (players[scene.activeP1].name),50,400);
    text('Player 2: ' + (players[scene.activeP2].name),50,500);
    pop();
    buttons[10].draw();
    buttons[11].draw();
    buttons[12].draw();
    buttons[16].draw();
    buttons[17].draw();
    buttons[13].draw();
    buttons[14].draw();
    buttons[18].draw();
    buttons[19].draw();
    buttons[15].draw();
    buttons[21].draw();
    previewScene.draw();
    if(buttons[10].buttonOut() == true){
      scene.activePlayField = 0;
    }
    if(buttons[11].buttonOut() == true){
      scene.activePlayField = 1;
    }
    if(buttons[12].buttonOut() == true){
      scene.activePlayField = 2;
    }
    if(buttons[16].buttonOut() == true){
      scene.botDifficulty--;
      if(scene.botDifficulty == 0){
        scene.botActive = false;
      }
      else{
        scene.botActive = true;
      }
      scene.botDifficulty = constrain(scene.botDifficulty,0,3);
    }
    if(buttons[17].buttonOut() == true){
      scene.botDifficulty++;
      if(scene.botDifficulty == 0){
        scene.botActive = false;
      }
      else{
        scene.botActive = true;
      }
      scene.botDifficulty = constrain(scene.botDifficulty,0,3);
    }
    if(buttons[13].buttonOut() == true){
      scene.activeP1++;
      if(scene.activeP1 >= players.length){
        scene.activeP1 = 0;
      }
      while(players[scene.activeP1].unlocked == false){
        scene.activeP1++;
        if(scene.activeP1 >= players.length){
          scene.activeP1 = 0;
        }
      }
    }
    if(buttons[14].buttonOut() == true){
      scene.activeP1--;
      if(scene.activeP1 < 0){
        scene.activeP1 = players.length-1;
      }
      while(players[scene.activeP1].unlocked == false){
        scene.activeP1--;
        if(scene.activeP1 < 0){
          scene.activeP1 = players.length-1;
        }
      }
    }
    if(buttons[18].buttonOut() == true){
      scene.activeP2++;
      if(scene.activeP2 >= players.length){
        scene.activeP2 = 0;
      }
      while(players[scene.activeP2].unlocked == false){
        scene.activeP2++;
        if(scene.activeP2 >= players.length){
          scene.activeP2 = 0;
        }
        console.log('herres');
      }
    }
    if(buttons[19].buttonOut() == true){
      scene.activeP2--;
      if(scene.activeP2 < 0){
        scene.activeP2 = players.length-1;
      }
      while(players[scene.activeP2].unlocked == false){
        scene.activeP2--;
        if(scene.activeP2 < 0){
          scene.activeP2 = players.length-1;
        }
      }
    }
    if(scene.activeP1 == scene.activeP2){
      scene.activeP2++;
      if(scene.activeP2 >= players.length){
        scene.activeP2 = 0;
      }
      while(players[scene.activeP2].unlocked == false){
        scene.activeP2++;
        if(scene.activeP2 >= players.length){
          scene.activeP2 = 0;
        }
      }
    }
    if(buttons[15].buttonOut() == true){
      scene.activeScene = 7;
      players[scene.activeP1].playerNum = 1;
      players[scene.activeP2].playerNum = 2;
      players[scene.activeP1].keyDown = 83;
      players[scene.activeP1].keyUp = 87;
      players[scene.activeP2].keyDown = 40;
      players[scene.activeP2].keyUp = 38;
      players[scene.activeP2].botActive = scene.botActive;
      players[scene.activeP1].botActive = false;
      scene.timeTillEnd = 1; 
      scene.scoreToWin = 1;
      scene.reset();
    }
    if(buttons[21].buttonOut() == true){
      scene.esc = false; 
      scene.activeP1 = 0;
      scene.activeP2 = 1;
      players[scene.activeP1].playerNum = 1;
      players[scene.activeP2].playerNum = 2;
      scene.botDifficulty = 2;
      scene.activePlayField = 0;
      scene.reset();
      scene.activeScene = 0;
    }
  }
}

exploreScene = {
  move: true,

  draw(){
    image(pongkemonMap,-1*scene.mapX-2000,-1*scene.mapY-2000,4800,3840);
    
    battleBots.forEach(element => {
      element.draw();
    });
    explorePlayers[0].draw();
    image(foregroundMap,-1*scene.mapX-2000,-1*scene.mapY-2000,4800,3840);
    explorePlayers[0].movement();
    explorePlayers[0].collider();
    buttons[21].draw();
    if(buttons[21].buttonOut() == true){
      scene.esc = false; 
      scene.activeP1 = 0;
      scene.activeP2 = 1;
      players[scene.activeP1].playerNum = 1;
      players[scene.activeP2].playerNum = 2;
      scene.activePlayField = 0;
      scene.reset();
      scene.activeScene = 0;
    }
    fill("white");
    borderRect();
  }
}

playScene = {
  draw(){
    scene.timeTillEnd--;
    background(66, 135, 245,1);
    
    playFields[scene.activePlayField].draw();
    players[scene.activeP1].movement();
    players[scene.activeP2].movement();
    players[scene.activeP1].draw();
    players[scene.activeP2].draw();
    balls[scene.activeBall].movement();
    balls[scene.activeBall].bounce();
    balls[scene.activeBall].draw();
    
    if(scene.particles == true){
      scene.particleEffect();
    }
    if(scene.scoreToWin == scene.scoreP1){
      scene.activeScene = 8;
      scene.money += scene.scoreP1*20;
      victorySound.play();
    }
    if(scene.scoreToWin == scene.scoreP2){
      scene.activeScene = 9;
      scene.money += scene.scoreP2*20;
      victorySound.play();
    }
    if(scene.timeTillEnd < 0){
      if(scene.scoreP1 > scene.scoreP2){
        scene.activeScene = 8;
        scene.money += scene.scoreP1*20;
        victorySound.play();
      }
      else{
        scene.activeScene = 9;
        scene.money += scene.scoreP2*20;
        victorySound.play();
      }
    }

    //Math.round(Math.random()*2)+1
    if(Math.floor(Math.random()*1000) == 0 && powerUps.length == 0){
      powerUps.push(new PowerUp(450,40,1,Math.floor(Math.random()*3)+1)); 
      console.log("fucking spawn");
    }
    if(powerUps.length > 0){
      for(var i = 0; i < powerUps.length; i++){
        powerUps[i].update();
        powerUps[i].draw();
        if(powerUps[i].collider() == true){
          powerUps.splice(i,1);
        }
      }
    }
    if(players[scene.activeP1].powerActive == true){
      if(players[scene.activeP1].powerup == 1){
        image(powerupImg1,30,280,40,40);
      }
      if(players[scene.activeP1].powerup == 2){
        image(powerupImg2,30,280,40,40);
      }
      if(players[scene.activeP1].powerup == 3){
        image(powerupImg3,30,280,40,40);
      }
    }
    else{
      fill("white");
      ellipse(50,300,40,40);
    }
    if(players[scene.activeP2].powerActive == true){
      if(players[scene.activeP2].powerup == 1){
        image(powerupImg1,830,280,40,40);
      }
      if(players[scene.activeP2].powerup == 2){
        image(powerupImg2,830,280,40,40);
      }
      if(players[scene.activeP2].powerup == 3){
        image(powerupImg3,830,280,40,40);
      }
    }
    else{
      fill("white");
      ellipse(850,300,40,40);
    }
    fill('white');
    textSize(15);
    text(players[scene.activeP1].name,50,350);
    text(players[scene.activeP2].name,850,350);
    textSize(40);
    borderRect();
    buttons[32].draw();
    if(buttons[32].buttonOut() == true){
      scene.esc = false; 
      scene.activeP1 = 0;
      scene.activeP2 = 1;
      players[scene.activeP1].playerNum = 1;
      players[scene.activeP2].playerNum = 2;
      scene.activePlayField = 0;
      scene.botDifficulty = 2;
      scene.reset();
      scene.activeScene = 4;
      scene.mapX = -500;
      scene.mapY = -100;
    }
    textSize(40);
    fill("white");
    image(scoreBoard,playFields[scene.activePlayField].x+playFields[scene.activePlayField].width/2-50,playFields[scene.activePlayField].y+playFields[scene.activePlayField].height-55,100,100);
    text(Math.floor(scene.timeTillEnd/60),playFields[scene.activePlayField].x+playFields[scene.activePlayField].width/2,playFields[scene.activePlayField].y+playFields[scene.activePlayField].height);
  }
}

fightScene = {
  draw(){
    background(66, 135, 245,1);
    
    playFields[scene.activePlayField].draw();
    players[scene.activeP1].movement();
    players[scene.activeP2].movement();
    players[scene.activeP1].draw();
    players[scene.activeP2].draw();
    balls[scene.activeBall].movement();
    balls[scene.activeBall].bounce();
    balls[scene.activeBall].draw();
    
    if(scene.particles == true){
      scene.particleEffect();
    }
    if(Math.floor(Math.random()*1000) == 0 && powerUps.length == 0){
      powerUps.push(new PowerUp(450,40,1,Math.floor(Math.random()*3)+1)); 
      console.log("fucking spawn");
    }
    if(powerUps.length > 0){
      for(var i = 0; i < powerUps.length; i++){
        powerUps[i].update();
        powerUps[i].draw();
        if(powerUps[i].collider() == true){
          powerUps.splice(i,1);
        }
      }
    }
    
    if(players[scene.activeP1].powerActive == true){
      if(players[scene.activeP1].powerup == 1){
        image(powerupImg1,30,280,40,40);
      }
      if(players[scene.activeP1].powerup == 2){
        image(powerupImg2,30,280,40,40);
      }
      if(players[scene.activeP1].powerup == 3){
        image(powerupImg3,30,280,40,40);
      }
    }
    else{
      fill("white");
      ellipse(50,300,40,40);
    }
    if(players[scene.activeP2].powerActive == true){
      if(players[scene.activeP2].powerup == 1){
        image(powerupImg1,830,280,40,40);
      }
      if(players[scene.activeP2].powerup == 2){
        image(powerupImg2,830,280,40,40);
      }
      if(players[scene.activeP2].powerup == 3){
        image(powerupImg3,830,280,40,40);
      }
    }
    else{
      fill("white");
      ellipse(850,300,40,40);
    }
    if(scene.scoreP1 == scene.fightSceneScoreToUnlock){
      if(players[scene.activeP2].unlocked == false){
        scene.money += 500;
      }
      scene.activeScene = 5;
      victorySound.play();
    }
    if(scene.scoreP2 == scene.fightSceneScoreToUnlock+2){
      scene.activeScene =11;
      loseSound.play();
    }
    fill("white");
    textSize(15);
    text(players[scene.activeP1].name,50,350);
    text(players[scene.activeP2].name,850,350);
    
    borderRect();
    buttons[32].draw();
    if(buttons[32].buttonOut() == true){
      scene.esc = false; 
      scene.activeP1 = 0;
      scene.activeP2 = 1;
      players[scene.activeP1].playerNum = 1;
      players[scene.activeP2].playerNum = 2;
      scene.activePlayField = 0;
      scene.botDifficulty = 2;
      scene.reset();
      scene.activeScene = 4;
      scene.mapX = -500;
      scene.mapY = -100;
    }
    textSize(40);
    fill("white");
    image(scoreBoard,playFields[scene.activePlayField].x+playFields[scene.activePlayField].width/2-50,playFields[scene.activePlayField].y+playFields[scene.activePlayField].height-55,100,100);
    text(scene.fightSceneScoreToUnlock,playFields[scene.activePlayField].x+playFields[scene.activePlayField].width/2,playFields[scene.activePlayField].y+playFields[scene.activePlayField].height);
  }
  
  
}

unlockScene = {
  draw(){
    background(33, 117, 143);
    borderRect();
    fill('white');
    textSize(40);
    text('YOU UNLOCKED ' + (players[scene.activeP2].name) + '!',width/2,200);
    push();
    textAlign(LEFT);
    if(players[scene.activeP2].unlocked == false){
      text("+"+500,width/2,470);
    }
    else{
      text("+"+0,width/2,470);
    }
    pop();
    image(moneyImg,350,400,100,100);
    buttons[20].draw();
    if(buttons[20].buttonOut() == true){
      players[scene.activeP2].unlocked = true;
      scene.esc = false; 
      scene.activeP1 = 0;
      scene.activeP2 = 1;
      players[scene.activeP1].playerNum = 1;
      players[scene.activeP2].playerNum = 2;
      scene.activePlayField = 0;
      scene.botDifficulty = 2;
      scene.reset();
      scene.activeScene = 4;
      scene.mapX = -500;
      scene.mapY = -100;
    }
  }
}

escScene = {
  draw(){
    background(33, 117, 143);
    borderRect();
    buttons[6].draw();
    buttons[7].draw();
    if(buttons[6].buttonOut() == true){
      scene.esc = false; 
    }
    if(buttons[7].buttonOut() == true){
      scene.esc = false; 
      scene.activeP1 = 0;
      scene.activeP2 = 1;
      players[scene.activeP1].playerNum = 1;
      players[scene.activeP2].playerNum = 2;
      scene.activePlayField = 0;
      scene.botDifficulty = 2;
      scene.reset();
      scene.activeScene = 0;
      
    }
  }
}

previewScene = {
  draw(){
    players[scene.activeP1].playerNum = 1;
    players[scene.activeP2].playerNum = 2;
    scene.reset();
    push();
    stroke('white');
    strokeWeight(4);
    fill(66, 135, 245,1);
    translate(625,275);
    rect(0,0,240,160);
    scale(1/3.75);
    noStroke();
    playFields[scene.activePlayField].draw();
    players[scene.activeP2].draw();
    players[scene.activeP1].draw();
    balls[scene.activeBall].draw();
    pop();
  }
}

settingScene = {
  draw(){
    background(33, 117, 143);
    borderRect();
    fill("white");
    textSize(40);
    text("PLAYER 1:", 250,150);
    text("PLAYER 2:", 650,150);
    text("EXPLORE MODE:", 650, 400);
    push();
    textAlign(LEFT);
    textSize(20);
    text("UP: press W", 140,200);
    text("DOWN: press S", 140,250);
    text("USE POWERUP: press E", 140,300);

    text("UP: press ArrowUP", 530,200);
    text("DOWN: press ArrowDOWN", 530,250);
    text("USE POWERUP: ArrowLEFT", 530,300);
    text("To pause or exit: press ESC", 50, 550);

    
    text("Movement: press WASD", 530,450);
    text('To fight: press F', 530, 500);

    
    pop();
    buttons[21].draw();
    if(buttons[21].buttonOut() == true){
      scene.esc = false; 
      scene.activeP1 = 0;
      scene.activeP2 = 1;
      players[scene.activeP1].playerNum = 1;
      players[scene.activeP2].playerNum = 2;
      scene.botDifficulty = 2;
      scene.activePlayField = 0;
      scene.reset();
      scene.activeScene = 0;
    }

  }
}

scoreTimeScene = {
  draw(){
    background(33, 117, 143);
    borderRect();
    textSize(60);
    fill('white');
    text('Setup',width/2,100);
    push();
    textAlign(LEFT);
    textSize(30);
    text('Max Score: ' + scene.scoreToWin, 50, 200);
    text('Time Limit: ' + scene.timeTillEnd, 50, 300);
    pop();
    buttons[23].draw();
    buttons[24].draw();
    buttons[25].draw();
    buttons[26].draw();
    buttons[15].draw();
    buttons[21].draw();
    if(buttons[23].buttonOut() == true){
      scene.scoreToWin ++;
      scene.scoreToWin = constrain(scene.scoreToWin,1,100);
    }
    if(buttons[24].buttonOut() == true){
      scene.scoreToWin --;
      scene.scoreToWin = constrain(scene.scoreToWin,1,100);
    }
    if(buttons[25].buttonOut() == true){
      scene.timeTillEnd ++;
      scene.timeTillEnd = constrain(scene.timeTillEnd,1,100);
    }
    if(buttons[26].buttonOut() == true){
      scene.timeTillEnd --;
      scene.timeTillEnd = constrain(scene.timeTillEnd,1,100);
    }
    if(buttons[15].buttonOut() == true){
      scene.activeScene = 3;
      scene.timeTillEnd *= 3600;
    }
    if(buttons[21].buttonOut() == true){
      scene.activeScene = 1;
    }
  }
}

winSceneP1 = {
  draw(){
    background(33, 117, 143);
    borderRect();
    textSize(60);
    fill('white');
    text(players[scene.activeP1].name + ' WON!',width/2,270);
    push();
    textAlign(LEFT);
    text("+"+scene.scoreP1*20,width/2,470);
    pop();
    image(moneyImg,350,400,100,100);
    buttons[21].draw();
    if(buttons[21].buttonOut() == true){
      scene.activeScene = 0;
      scene.esc = false; 
      scene.activeP1 = 0;
      scene.activeP2 = 1;
      players[scene.activeP1].playerNum = 1;
      players[scene.activeP2].playerNum = 2;
      scene.activePlayField = 0;
      scene.botDifficulty = 2;
      scene.reset();
    }
  }
}

winSceneP2 = {
  draw(){
    background(33, 117, 143);
    borderRect();
    textSize(60);
    fill('white');
    text(players[scene.activeP2].name + ' WON!',width/2,270);
    push();
    textAlign(LEFT);
    text("+"+scene.scoreP2*20,width/2,470);
    pop();
    image(moneyImg,350,400,100,100);
    buttons[21].draw();
    if(buttons[21].buttonOut() == true){
      scene.activeScene = 0;
      scene.esc = false; 
      scene.activeP1 = 0;
      scene.activeP2 = 1;
      players[scene.activeP1].playerNum = 1;
      players[scene.activeP2].playerNum = 2;
      scene.botDifficulty = 2;
      scene.activePlayField = 0;
      scene.reset();
    }
  }
}

shopScene ={
  draw(){
    background(33, 117, 143);
    borderRect();
    textSize(60);
    textAlign(CENTER);
    fill('white');
    text("SHOP", 450,100);
    buttons[21].draw();
    fill("#235396");
    rect(490,240,120,320,10);
    rect(690,240,120,320,10);
    image(buurman11,500,250,100,300);
    textSize(30);
    fill("white");
    if(players[8].unlocked == false){
      text("1000",550,230)
    }
    else{
      text("unlocked",550,230)
    }
    
    image(buurman21,700,250,100,300);
    if(players[9].unlocked == false){
      text("1000",750,230)
    }
    else{
      text("unlocked",750,230)
    }
    if(buttons[21].buttonOut() == true){
      scene.activeScene = 0;
      scene.esc = false; 
      scene.activeP1 = 0;
      scene.activeP2 = 1;
      players[scene.activeP1].playerNum = 1;
      players[scene.activeP2].playerNum = 2;
      scene.botDifficulty = 2;
      scene.activePlayField = 0;
      scene.reset();
    }
    if(buttons[28].buttonOut() == true && scene.money >= 1000 && players[8].unlocked == false){
      scene.money -= 1000;
      players[8].unlocked = true;
    }
    if(buttons[29].buttonOut() == true && scene.money >= 1000 && players[9].unlocked == false){
      scene.money -= 1000;
      players[9].unlocked = true;
    }

    text("STATS",250,230);
    fill("#235396");
    rect(100,240, 300,320,10);
    fill("white"); 
    push();
    textAlign(LEFT)
    textSize(30);
    text("Speed: ", 120,280);
    text("Power: ", 120,360);
    text("Height: ", 120,440);
    text("Width: ", 120,520);
    if(mouseX > 490 && mouseX < 610 && mouseY > 240 && mouseY < 560){
      text("2.5", 270,280);
      text("10", 270,360);
      text("150", 270,440);
      text("75", 270,520);
    }
    if(mouseX > 690 && mouseX < 810 && mouseY > 240 && mouseY < 560){
      text("2.5", 270,280);
      text("10", 270,360);
      text("150", 270,440);
      text("75", 270,520);
    }
    pop();
    image(moneyImg, 100,100,100,100);
    push();
    textAlign(LEFT);
    fill("white");
    textSize(50);
    text(": " + scene.money, 200,165);
    pop();
  }
}

loseScene = {
  draw(){
    background(33, 117, 143);
    borderRect();
    fill('white');
    textSize(40);
    text('YOU LOST',width/2,200);
    push();
    textAlign(LEFT);
    text("+"+0,width/2,470);
    pop();
    image(moneyImg,350,400,100,100);
    buttons[20].draw();
    if(buttons[20].buttonOut() == true){
      scene.esc = false; 
      scene.activeP1 = 0;
      scene.activeP2 = 1;
      players[scene.activeP1].playerNum = 1;
      players[scene.activeP2].playerNum = 2;
      scene.activePlayField = 0;
      scene.botDifficulty = 2;
      scene.reset();
      scene.activeScene = 4;
      scene.mapX = -500;
      scene.mapY = -100;
    }
  }
}

pongdexScene ={
  draw(){
    background(33, 117, 143);
    borderRect();
    textSize(60);
    textAlign(CENTER);
    fill('white');
    text("PONGDEX", 450,100);
    buttons[21].draw();
    
    for(var i = 0; i < 5; i++){
      for(var n = 0; n < 2; n++){
        fill("white");
        rect(i*120+150,n*200+150,100,150);  
      }
    }
    image(character11, 175,175,50,100);
    push();
    textAlign(LEFT);
    textSize(20);
    text("Gerd", 150,320);
    image(character13, 175,375,50,100);
    text("Gerda", 150,520);
    image(character21, 310,175,25,100);
    text("Frenk", 270,320);
    image(character23, 310,375,25,100);
    text("Frenka", 270,520);
    image(character31, 410,187.5,75,75);
    text("Krent", 390,320);
    image(character33, 410,387.5,75,75);
    text("Krenda", 390,520);
    image(character43, 527.5,165,60,120);
    text("Gerard", 510,320);
    image(character41, 527.5,365,60,120);
    text("Gerarda", 510,520);
    image(buurman11, 647.5,165,60,120);
    text("Pat", 630,320);
    image(buurman21, 647.5,365,60,120);
    text("Mat", 630,520);
    pop();
    fill(117, 117, 117,0.9);
    if(players[0].unlocked == false)rect(150,150,100,150); 
    if(players[1].unlocked == false)rect(150,200+150,100,150); 
    if(players[2].unlocked == false)rect(120+150,150,100,150); 
    if(players[3].unlocked == false)rect(120+150,200+150,100,150); 
    if(players[6].unlocked == false)rect(240+150,150,100,150); 
    if(players[7].unlocked == false)rect(240+150,200+150,100,150); 
    if(players[4].unlocked == false)rect(360+150,150,100,150); 
    if(players[5].unlocked == false)rect(360+150,200+150,100,150); 
    if(players[8].unlocked == false)rect(480+150,150,100,150); 
    if(players[9].unlocked == false)rect(480+150,200+150,100,150); 
    for(var i = 33; i < 43; i++){
      if(mouseX > buttons[i].x && mouseX < buttons[i].x+buttons[i].width && mouseY > buttons[i].y && mouseY < buttons[i].y+buttons[i].height){
        buttons[i].draw();
      }
    }
    fill(0, 255, 68,0.3);
    if(explorePlayers[0].usetofight == 0)rect(150,150,100,150); 
    if(explorePlayers[0].usetofight == 1)rect(150,200+150,100,150); 
    if(explorePlayers[0].usetofight == 2)rect(120+150,150,100,150); 
    if(explorePlayers[0].usetofight == 3)rect(120+150,200+150,100,150); 
    if(explorePlayers[0].usetofight == 6)rect(240+150,150,100,150); 
    if(explorePlayers[0].usetofight == 7)rect(240+150,200+150,100,150); 
    if(explorePlayers[0].usetofight == 4)rect(360+150,150,100,150); 
    if(explorePlayers[0].usetofight == 5)rect(360+150,200+150,100,150); 
    if(explorePlayers[0].usetofight == 8)rect(480+150,150,100,150); 
    if(explorePlayers[0].usetofight == 9)rect(480+150,200+150,100,150); 

    if(buttons[33].buttonOut()==true && players[0].unlocked == true)explorePlayers[0].usetofight = 0;
    if(buttons[34].buttonOut()==true && players[1].unlocked == true)explorePlayers[0].usetofight = 1;
    if(buttons[35].buttonOut()==true && players[2].unlocked == true)explorePlayers[0].usetofight = 2;
    if(buttons[36].buttonOut()==true && players[3].unlocked == true)explorePlayers[0].usetofight = 3;
    if(buttons[37].buttonOut()==true && players[6].unlocked == true)explorePlayers[0].usetofight = 6;
    if(buttons[38].buttonOut()==true && players[7].unlocked == true)explorePlayers[0].usetofight = 7;
    if(buttons[39].buttonOut()==true && players[4].unlocked == true)explorePlayers[0].usetofight = 4;
    if(buttons[40].buttonOut()==true && players[5].unlocked == true)explorePlayers[0].usetofight = 5;
    if(buttons[41].buttonOut()==true && players[8].unlocked == true)explorePlayers[0].usetofight = 8;
    if(buttons[42].buttonOut()==true && players[9].unlocked == true)explorePlayers[0].usetofight = 9;
       
    if(buttons[21].buttonOut() == true){
      scene.activeScene = 0;
      scene.esc = false; 
      scene.activeP1 = 0;
      scene.activeP2 = 1;
      players[scene.activeP1].playerNum = 1;
      players[scene.activeP2].playerNum = 2;
      scene.botDifficulty = 2;
      scene.activePlayField = 0;
      scene.reset();
    }
  }
}

creditsScene ={
  draw(){
    background(33, 117, 143);
    borderRect();
    textSize(60);
    textAlign(CENTER);
    fill('white');
    text("CREDITS", 450,100);
    textSize(30);
    text("Met dank aan:", 450,200);
    text("-Arjan", 450,250);
    text("-Tim", 450,300);
    text("-Joao", 450,350);
    text("-Frank", 450,400);
    text("-Thijmen", 450,450);
    text("-Mr. Douglas", 450,500);
    buttons[21].draw();
    if(buttons[21].buttonOut() == true){
      scene.activeScene = 0;
      scene.esc = false; 
      scene.activeP1 = 0;
      scene.activeP2 = 1;
      players[scene.activeP1].playerNum = 1;
      players[scene.activeP2].playerNum = 2;
      scene.botDifficulty = 2;
      scene.activePlayField = 0;
      scene.reset();
    }
  }
}



function borderRect(){
  push();
  stroke('white');
  strokeWeight(4);
  noFill();
  rect(0,0,width,height);
  pop();

}

//==========================================================================================================================
//====================================================Particle Functions====================================================
//==========================================================================================================================

class particle {
  constructor(x,y,size,speedX,speedY,color){
    this.x = x; 
    this.y = y; 
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
    this.color = color;
  }

  draw(){
    fill(this.color); 
    rect(this.x,this.y,this.size);
    this.x+=this.speedX;
    this.y+=this.speedY;
  }
  grow(){
    this.size-=1;
  }
}
particles = [];



//==========================================================================================================================
//====================================================Standard Functions====================================================
//==========================================================================================================================

for(var i = 0; i<players.length; i++){
  players[i].y = playFields[scene.activePlayField].y+playFields[scene.activePlayField].height/2-players[i].height/2;
  players[i].prediction = playFields[scene.activePlayField].y+playFields[scene.activePlayField].height/2;
  if(players[i].playerNum == 1){
    players[i].x = playFields[scene.activePlayField].x+20;
  }
  if(players[i].playerNum == 2){
    players[i].x = playFields[scene.activePlayField].x+playFields[scene.activePlayField].width-players[i].width-20;
  }
}
balls[scene.activeBall].x = playFields[scene.activePlayField].x+playFields[scene.activePlayField].width/2;
balls[scene.activeBall].y = playFields[scene.activePlayField].y+playFields[scene.activePlayField].height/2;



function setup() {
  canvas = createCanvas(900, 600);
  frameRate(60);
  colorMode(RGB,225,225,225,1);
  noStroke();
  textAlign(CENTER);
  mainSong.volume(0.05);
  hitSound.volume(0.01);
  buttonPress.volume(0.1);
  titleSong.volume(0.05);
  victorySound.volume(0.2);
  powerupSong.volume(0.2);
  battleSong.volume(0.05);
  exploreSong.volume(0.05);
  loseSound.volume(0.2);
  textFont(pressStartFont);
  
}

allplayersunlocked = false;
playMusic = false; 
unlockEffects = false;
hutsEffects = false;
function draw(){
  scene.draw();
  if(mouseIsPressed == true){
    playMusic = true;
    //mainSong.play();
  }
  
  if(playMusic == true && (scene.activeScene == 2 || scene.activeScene == 3)){
    battleSong.play();
    titleSong.stop();
    exploreSong.stop();
  }
  else if(playMusic == true && scene.activeScene == 4){
    exploreSong.play();
    battleSong.stop();
    titleSong.stop();
  }
  else if(playMusic == true && (scene.activeScene == 0||  scene.activeScene == 1|| scene.activeScene == 7)){
    titleSong.play();
    battleSong.stop();
    exploreSong.stop();
  }
  else{
    battleSong.stop();
    titleSong.stop();
    exploreSong.stop();
  }
  
  if(keyIsDown(72) && keyIsDown(85) && keyIsDown(84) && keyIsDown(83)){ //huts
    unlockEffects = true;
    players.forEach(element => {
      element.unlocked = true;
    });

  }
  if(unlockEffects == true){
    unlockEffect();
  }

}

effect = 0;
alfaUnlock = 0;
function unlockEffect(){
  background("white");
  if(effect <= 60){
    alfaUnlock += 1/60;
  }
  else alfaUnlock -= 1/60;
  effect++
  fill(255,0,0,alfaUnlock);
  textSize(40);
  text('All players are unlocked!', 450, 300);
  if(effect >= 120){
    unlockEffects = false;
  }
}




