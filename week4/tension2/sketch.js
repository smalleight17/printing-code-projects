
var r = new Rune({
  container: "#canvas",
  width: 1000,
  height: 600,
  debug: false
});

var width=1000
var height=600


r.rect(0,0,width,height)
  .fill('hsv',260,100,20)

function draw_curve(bird,wing,tail){

bird.curveTo(35,-10,35,-70,80,-80)
  .curveTo(150,-75,160,-200,200,-250)
  .curveTo(250,-300,300,-250,350,-500)
  .fill(false)
  .stroke('hsv',Rune.random(30,50),100,100)
  .strokeWidth(Rune.random(0.5,4))


bird.moveTo(0,0)
  .curveTo(100,-60,150,60,250,-20)
  .curveTo(380,-70,450,40,600,0)
  .curveTo(700, -40,800,0)
  .fill(false)
  .strokeWidth(Rune.random(0.5,4))

wing.curveTo(50,100,0,200)
  .fill(false)
  .stroke('hsv',Rune.random(30,50),100,100)
  .strokeWidth(Rune.random(0.5,4))

wing.moveTo(50,300)
    .curveTo(140,380,200,350)
    .curveTo(240,430,400,450)

tail.curveTo(150,80,250,-300,450,-200)
  .fill(false)
  .stroke('hsv',Rune.random(30,50),100,100)
  .strokeWidth(Rune.random(0.5,4))

tail.moveTo(10,10)
  .curveTo(180,80,350,-250,500,-100)
  .curveTo(550,-20,450, -50,400,-80)
  .stroke('hsv',Rune.random(30,50),100,100)
  .strokeWidth(Rune.random(0.5,4))

tail.moveTo(20,20)
  .curveTo(200,80,400,-80,500,0)
  .curveTo(550,80,400,80,350,40)
  .stroke('hsv',Rune.random(30,50),100,100)
  .strokeWidth(Rune.random(0.5,4))

}




function draw_feather(x,y){
  console.log(x,y)
  r.path(x,y)
  .curveTo(100,20,140,30,150,0)
  .curveTo(80,-40,0,-10)
  .closePath()
  .fill('hsv',Rune.random(40,50),100,100,0.8)
  .stroke(false)
  .rotate(Rune.random(-30,0),x,y)

}

for(var i=0;i<8;i++){
  var bird=r.path(100+Rune.random(-10,10),500+Rune.random(-10,10))
  var wing=r.path(480+Rune.random(-10,10),Rune.random(-10,10))
  var tail=r.path(500+Rune.random(-10,10),250+Rune.random(-10,10))

  draw_curve(bird,wing,tail)


}


var start_x=130
var start_y=450
var temp_x,temp_y


for(var i=0;i<10;i++){
  temp_x=start_x+i*30
  temp_y=start_y-i*30*(5.0/4)
  //console.log(temp_x,temp_y)

  r.rect(temp_x,temp_y,800,Rune.random(5,15))
    .fill(255,Rune.random(0.5,0.9))
    .rotate(-30,temp_x,temp_y)
    .stroke(false)
}


start_x=300
start_y=480

for (var i = 0; i <20; i++) {
  temp_x=start_x+i*40
  temp_y=start_y

   r.rect(temp_x,temp_y,800,Rune.random(5,15))
    .fill(255,Rune.random(0.5,0.9))
    .rotate(-30,temp_x,temp_y)
    .stroke(false)
};



// var start_y=350
// var start_x=450

// for (var i=0;i<10;i++){
//   var x=start_x+i*20
//   var y=start_y+i*20*8.0/15
//   draw_feather(x,y)
// }

r.draw();