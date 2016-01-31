var width=800;
var height=1000;

var r = new Rune({
  container: "#canvas",
  width: width,
  height: height,
  debug: true,
});

// background
r.rect(0,0,width,height)
  .fill(0);

//scattered stars in universe
for (var i=1;i<=15;i++){
  var star_x=Rune.random(width);
  var star_y=Rune.random(height/2,height);
  var star_radius=Rune.random(3,15);

  for (var j=1;j<=10;j++){
    //r.circle(star_x,star_y,star_radius+j*2)
      r.rect(star_x-j,star_y-j,star_radius+j*2,star_radius+j*2)
      .fill(255,0.1)
      .stroke(false)
      .rotate(45,star_x,star_y,false);
  }
  r.rect(star_x,star_y,star_radius,star_radius)
      .fill(255)
      .stroke(false)
      .rotate(45,star_x,star_y,false);

}

//draw the mars, shadow, glow

var center_x=width+300;
var center_y=-700;
var radius=1500;

for(var i=1;i<=20;i++){
  r.circle(center_x,center_y,radius+i*2)
  .fill(255,0.1)
  .stroke(false);

}

r.circle(center_x,center_y,radius)
  .fill(255)
  .stroke(false);

for(var i=1;i<=20;i++){
  r.circle(center_x,center_y,1380+i*5)
  .fill(0,0.03)
  .stroke(false);

}



//random walk to make the texture
var posX=600;
var posY=100;
var stepSize=10;
var direction;

function randomWalk(){
    for (var i=0; i<=20; i++) {
    direction = Math.floor(Rune.random(0, 8));
    //console.log(direction);

    if (direction == 0) {  
      posY -= stepSize;  
    } 
    else if (direction == 1) {
      posX += stepSize;
      posY -= stepSize;
    } 
    else if (direction == 2) {
      posX += stepSize;
    } 
    else if (direction == 3) {
      posX += stepSize;
      posY += stepSize;
    }
    else if (direction == 4) {
      posY += stepSize;
    }
    else if (direction == 5) {
      posX -= stepSize;
      posY += stepSize;
    }
    else if (direction == 6) {
      posX -= stepSize;
    }
    else if (direction == 7) {
      posX -= stepSize;
      posY -= stepSize;
    }

    if (posX > width) posX = width-600;
    if (posY > height) posY = height-600;

/*
    if (withinCircle(posX,posY)==false){
        posX = 600;
        posY = 1000;
        //stepSize=-1*stepSize;
    }
*/  
    r.circle(posX+stepSize/2, posY+stepSize/2, 10)
      .fill(0, 0.01)
      .stroke(false);
  }

}

function withinCircle(x, y){
  //console.log((center_x-x)*(center_x-x)+(center_y-y)*(center_y-y));
  if((center_x-x)*(center_x-x)+(center_y-y)*(center_y-y)>=360000){
      return false;
  }else
    return true;

}

r.text("THE",width/2,200)
  .fill(255)
  .fontSize(80)
  .textAlign("center")
  .fontFamily("Helvetica")
  .fontWeight("bold")
  .stroke(false);

r.text("MARTIAN",width/2,300)
  .fill(255)
  .fontSize(80)
  .textAlign("center")
  .fontFamily("Helvetica")
  .fontWeight("bold")
  .stroke(false);

r.text("Andy Weir",width/2,400)
  .fill(255)
  .fontSize(40)
  .textAlign("center")
  .fontFamily("Helvetica")
  .fontWeight("normal")
  .stroke(false);

r.on('draw',randomWalk);
r.play();



r.draw();