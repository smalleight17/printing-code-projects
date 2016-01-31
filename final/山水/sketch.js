
var r = new Rune({
  container: "#canvas",
  width: 900,
  height: 600,
  debug: false
});

draw_mountain1()

function draw_mountain1(){
  draw_trapezoid(new Rune.Vector(80,300),100,240,0.9,0.3)
  draw_trapezoid(new Rune.Vector(40,300),100,160,0.8,0.3)
  draw_trapezoid(new Rune.Vector(0,300),100,200,0.9,0.3)
}

function draw_mountain2(){
  draw_trapezoid(new Rune.Vector(180,100),0,50,0.9,0.2)
  draw_trapezoid(new Rune.Vector(140,200),150,80,0.8,0.2)
  draw_trapezoid(new Rune.Vector(100,300),200,100,0.9,0.2)
}

function draw_trapezoid(start_point,w,h,scale,portion){
  var temp= r.path(start_point.x,start_point.y)
              .moveTo(portion*w,-1*h)
              .lineTo(w,0)
  var vector=temp.vectorAt(0.4)
       
  var trapezoid=r.path(start_point.x,start_point.y)
  .lineTo(portion*w,-1*h)
  .lineTo(vector.x,vector.y-Rune.random(40,80))
  .lineTo(w,0)
  .closePath()
  .stroke(false)
  .fill('hsv',189,33,87)

  trapezoid.copy().scale(scale).fill('hsv',193,62,71)
}
r.draw();