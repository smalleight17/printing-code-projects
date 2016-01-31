
var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600,
  frameRate:2,
  debug: false
});


/**************** version 1 ************************/
// function dripping(x,y,radius){
//   var drip_radius=radius;
//   var temp_y=y+10;
//   while(drip_radius>0){
//     drip_radius-=Rune.random(5,10);
//     temp_y+=Rune.random(2,5);
//     r.circle(x,temp_y,drip_radius)
//     .fill(0,0,0,0.1)
//     .stroke(false);
//   }

// }

// for(var i=0;i<800;i+=Rune.random(10,15)){
//   console.log(i,i%10)
//   var radius=Rune.random(20,60)
//   r.circle(i,0,radius)
//     .fill(0,0.1)
//     .stroke(false);

//   if(i%10>5){
    
//     dripping(i, 50,radius)

//   }
// }
/**************** version 1 ************************/


/**************** version 2 ************************/
// r.rect(0,0,800,600)
//   .fill(0);

//   var hue1=Rune.random(215,237);
//   var saturation1=Rune.random(50,100);
//   var brightness1=Rune.random(50,100);

// for(var i=0;i<8;i++){
//   var center_x=Rune.random(0,800);
//   var center_y=Rune.random(0,600);
//   var drip_radius=Rune.random(100,200);

//   var hue1=Rune.random(215,237);
//   var saturation1=Rune.random(80,100);
//   var brightness1=Rune.random(50,100);

//   while(drip_radius>20){
//     drip_radius-=Rune.random(5,30)
//     r.circle(center_x,center_y,drip_radius)
//     //.fill(255,255,255,0.1)
//     .fill('hsv',hue1,saturation1,brightness1,0.1)
//     .stroke(false)
//   }
// }
/**************** version 2 ************************/


/**************** version 3 ************************/

r.rect(0,0,800,600)
  .fill(0);


function draw_ripple(center_x,center_y,radius){
  var unit=radius/3;

  for(var i=0;i<360;i+=2){
    r.path(center_x,center_y)
      .curveTo(unit,(-2)*unit,2*unit,0)
      .curveTo(2.5*unit,(-1.5)*unit,3*unit,0)
      .fill(false)
      .stroke(255,0.2)
      .rotate(i,center_x,center_y)
  }
}

for(var j=0;j<5;j++){
  var center_x=Rune.random(0,250);
  var center_y=Rune.random(0,600);
  var drip_radius=Rune.random(100,200);

  draw_ripple(center_x,center_y,drip_radius);
}

for(var j=0;j<5;j++){
  var center_x=Rune.random(550,800);
  var center_y=Rune.random(0,600);
  var drip_radius=Rune.random(80,150);

  draw_ripple(center_x,center_y,drip_radius);
}

function draw_triangle(x, y,scale){

  r.polygon(x,y)
    .lineTo(0,0)
    .lineTo(40*scale,0)
    .lineTo(20*scale,150*scale)
    .fill(255,Rune.random(0.1,0.8))
    .stroke(false)
    .rotate(Rune.random(0,360),x,y)
  }


for (var i=0;i<30;i++){
  draw_triangle(400,300,Rune.random(0.2,1.2));

}

/**************** version 3 ************************/

r.draw();