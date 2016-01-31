
var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 1200,
  debug: false
});

var width=600
var height=1200

/******************** version 1*******************/

// for(var i=0;i<30;i++){
// r.path(0,0)
//   .moveTo(Rune.random(0,300),0)
//   .curveTo(width/2, Rune.random(0,300),width/2,800)
//   .strokeWidth(Rune.random(1,4))
//   .fill(false)
// }

// for(var i=0;i<30;i++){
//   r.path(0,0)
//     .moveTo(Rune.random(300,600),0)
//     .curveTo(width/2, Rune.random(0,300),width/2,800)
//     .strokeWidth(Rune.random(1,4))
//     .fill(false)

// }

// r.line(300,800,300,840)
//   .strokeWidth(1.5)

// r.line(300,800,300,880)

// r.path(300,950)
//   .moveTo(-50,0)
//   .curveTo(-20,-100,20,-100,50,0)
//   .fill(false)
//   .strokeWidth(20)

// r.circle(300,1030,100)
//   .fill(0)

// for(var i=1;i<30;i++){

//   r.circle(300-18-i,1030-18-i,80-2*i)
//   .fill(255,0.01*i)
//   .stroke(false)
// }
/******************** version 1*******************/

/******************** version 2*******************/
r.rect(0,0,width,height)
  .fill(0,0.9)

for(var i=0;i<30;i++){
r.path(0,0)
  .moveTo(Rune.random(0,300),0)
  .curveTo(width/2, Rune.random(0,300),width/2,800)
  .strokeWidth(Rune.random(1,4))
  .fill(false)
  .stroke(255)
}

for(var i=0;i<30;i++){
  r.path(0,0)
    .moveTo(Rune.random(300,600),0)
    .curveTo(width/2, Rune.random(0,300),width/2,800)
    .strokeWidth(Rune.random(1,4))
    .fill(false)
      .stroke(255)

}

r.line(300,800,300,840)
  .strokeWidth(1.5)
    .stroke(255)

r.line(300,800,300,880)
  .stroke(255)

r.path(300,950)
  .moveTo(-40,0)
  .curveTo(-20,-100,20,-100,50,0)
  .fill(false)
  .strokeWidth(20)
    .stroke(255)

r.path(300,950)
  .moveTo(-50,0)
  .curveTo(-20,-100,20,-100,50,0)
  .fill(false)
  .strokeWidth(20)

r.circle(300+5,1030+5,100)
  .fill(255)

r.circle(300,1030,100)
  .fill(0)

for(var i=1;i<30;i++){

  r.circle(300-18-i,1030-18-i,80-2*i)
  .fill(255,0.01*i)
  .stroke(false)
}
/******************** version 2*******************/
r.draw();