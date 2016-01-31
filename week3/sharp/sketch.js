
var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  frameRate:2,
  debug: true
});

/**************** version 1 ************************/
// function draw_triangle(x, y,scale){
//   var hue1=Rune.random(215,237);
//   var saturation1=Rune.random(50,100);
//   var brightness1=Rune.random(50,100);

//   r.polygon(x,y)
//     .lineTo(0,0)
//     .lineTo(50*scale,0)
//     .lineTo(25*scale,150*scale)
//     .fill('hsv',hue1,saturation1,brightness1)
//     .stroke(false)

//   var hue2=Rune.random(215,237);
//   var saturation2=Rune.random(50,100);
//   var brightness2=Rune.random(50,100);

//     r.polygon(x,y)
//     .lineTo(0,0)
//     .lineTo(Rune.random(10,40)*scale,0)
//     .lineTo(25*scale,150*scale)
//     .fill('hsv',hue2,saturation2,brightness2)
//     .stroke(false)

//   // var return_array=[x+25*scale,150*scale];
//   // return return_array;
// }

// var temp_x;

// for (var i=0;i<20;i++){
//   temp_x=Rune.random(0,800);
//   draw_triangle(temp_x,0,Rune.random(0.5,2));
//   // var return_array=draw_triangle(temp_x,0,Rune.random(0.5,2));
//   // dripping(return_array[0],return_array[1])

// }

/**************** version 1 ************************/

/**************** version 2 ************************/

r.rect(0,0,800,600)
  .fill(0);

function draw_triangle(x, y,scale){

  r.polygon(x,y)
    .lineTo(0,0)
    .lineTo(40*scale,0)
    .lineTo(20*scale,200*scale)
    .fill(255,Rune.random(0.1,0.8))
    .stroke(false)
    .rotate(Rune.random(0,360),x,y)
  }


for (var i=0;i<30;i++){
  draw_triangle(400,300,Rune.random(0.2,1.2));

}

/**************** version 2 ************************/

/**************** version 3 ************************/





/**************** version 3 ************************/


r.draw();