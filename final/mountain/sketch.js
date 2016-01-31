
var r = new Rune({
  container: "#canvas",
  width: 900,
  height: 600,
  debug: false
});

/******************  background 1  ************************/
for(var i=0;i<20;i++){
  r.circle(r.width/2+100,-1050,1100+i*15)
    .stroke(false)
    .fill('hsv',16,30,100,0.2)

}

for(var i=0;i<20;i++){
  r.circle(r.width/2+100,-1000,800+i*20)
    .stroke(false)
    .fill('hsv',220,80,67,0.2)

}

for(var i=0;i<10;i++){
  r.path(0,300-i*15)
  .curveTo(r.width/2,350,r.width,-50)
  .lineTo(r.width,r.height)
  .lineTo(0,r.height)
  .closePath()
  .fill('hsv',220,80,67,0.1)
  .stroke(false)  
}
/******************  background 1  ************************/


/******************  background 2  ************************/

// for(var i=0;i<r.width;i+=2){
//   r.line(i,0,i,Rune.random(100,150))
//   .stroke('hsv',229,55,42)
//   .strokeWidth(2)
// }

// for(var i=0;i<r.width;i+=5){
//   r.line(i,Rune.random(100,150),i,Rune.random(250,300))
//   .stroke('hsv',26,55,100,0.5)
//   .strokeWidth(5)
// }

// for(var i=0;i<r.width;i+=5){
//   r.line(i,Rune.random(50,100),i,Rune.random(150,250))
//   .stroke('hsv',221,45,51,0.8)
//   .strokeWidth(5)
// }




/******************  background 2  ************************/


fog()

/******************  mountain  ************************/
var group1=r.group(0,0)

draw_mountain()
var group2=group1.copy().scale(0.6).move(-100,140)
var group3=group1.copy().scale(0.8).move(330,80)
group1.copy()
var group4=group1.copy().scale(0.6).move(100,240)

cloud(70,80,0.3,1100,new Rune.Vector(r.width/2,-670))
cloud(95,108,0.3,1100,new Rune.Vector(r.width/2,-660))

function draw_mountain(){
  var mountain_left=new Rune.Vector(50,500)
  var mountain_right=new Rune.Vector(800,500)
  var start_point=new Rune.Vector(400,100)
  var end_point=new Rune.Vector(500,500)

  r.path(0,0)
    .moveTo(mountain_left.x,mountain_left.y)
    .lineTo(start_point.x,start_point.y)
    .lineTo(550,300)
    .lineTo(mountain_right.x,mountain_right.y)
    .stroke(false)
    .fill('hsv',24,28,100)
    .addParent(group1)

  var reference_line=r.path(0,0).moveTo(start_point.x,start_point.y)
                .lineTo(end_point.x,end_point.y)
                .stroke(false)
                .addParent(group1)


  var anchor_array=[0.2,0.5,0.7]
  draw_shadow(reference_line,anchor_array,start_point,end_point)

}

function draw_shadow(reference_line, anchor_array,start_point,end_point){
  var new_shadow_line=r.path(0,0)
                      .moveTo(start_point.x,start_point.y)
                      .addParent(group1)

  var direction= new Rune.Vector(-130,150)
  var magnitude= direction.multiply(2)
  var iterate= magnitude.divide(15)

  for(var j=0;j<8;j++){
  r.path(start_point.x+j*2.4,start_point.y+j*10)
    .lineTo(magnitude.sub(iterate.multiply(j+1)).x,magnitude.sub(iterate.multiply(j+1)).y)
    .strokeWidth(8)
    .stroke('hsv',230,47,43,0.5-j*0.08)
    .addParent(group1)
  }

for (var i=0;i<anchor_array.length;i++){
  var anchor1=reference_line.vectorAt(anchor_array[i])
  var anchor2=reference_line.vectorAt(anchor_array[i]+0.08)
  var offset_anchor1= new Rune.Vector(anchor1.x+Rune.random(40,60),anchor1.y+Rune.random(30,40))
  var offset_anchor2= new Rune.Vector(anchor2.x-Rune.random(30,50),anchor1.y-Rune.random(20))
  //var offset_anchor2= new Rune.Vector(anchor2.x,anchor2.y)

  new_shadow_line.lineTo(anchor1.x,anchor1.y)
                .lineTo(offset_anchor1.x,offset_anchor1.y) 
                .lineTo(offset_anchor2.x,offset_anchor2.y) 

  direction= new Rune.Vector(Rune.random(-150,-100),150)
  magnitude= direction.multiply(1.5/(i+1))
  iterate= magnitude.divide(15)


  for(var j=0;j<8;j++){
  r.path(offset_anchor2.x+j*4,offset_anchor2.y+j*8)
    .lineTo(magnitude.sub(iterate.multiply(j+1)).x,magnitude.sub(iterate.multiply(j+1)).y)
    .strokeWidth(8/Math.sqrt(i+1))
    .stroke('hsv',230,47,43,0.5-j*0.08)
    .addParent(group1)
  }

}

  new_shadow_line.lineTo(end_point.x,end_point.y)
  .lineTo(50,500)
  .lineTo(400,100)
  .fill('hsv',219,32,78)
  .stroke(false)

  
  // add_touch(new Rune.Vector(400,110),200,5,1.3)
  // add_touch(new Rune.Vector(460,200),70,5,1.3)
  // add_touch(new Rune.Vector(460,215),100,5,1.3)
  // add_touch(new Rune.Vector(460,230),100,5,1.3)
  // add_touch(new Rune.Vector(470,300),150,10,1.2)
  // add_touch(new Rune.Vector(470,320),150,10,1.2)
  // add_touch(new Rune.Vector(480,420),50,10,1.2)
}

function add_touch(touch,length,variation,direction){
  for(var i=0;i<length;i+=1){

    r.circle(touch.x+i+Rune.random(variation),touch.y+i*direction,1)
    .stroke(false).fill('hsv',219,32,78,0.5).addParent(group1)

    r.circle(touch.x+i-Rune.random(variation),touch.y+i*direction,1)
    .stroke(false).fill('hsv',219,32,78,0.5).addParent(group1)

  }

}
/******************  mountain  ************************/


//more fog
//using perlin noise
/******************  fog  ************************/
for(var i=0;i<5;i++){
  r.path(0,420-i*10)
  .curveTo(r.width/2,300,r.width,0)
  .lineTo(r.width,r.height)
  .lineTo(0,r.height)
  .closePath()
  .fill(255,0.5)
  .stroke(false)  
}
/******************  fog  ************************/


function fog(){
  //r.circle(r.width/2,-750,1100)
  var circle_center=new Rune.Vector(r.width/2,-800)
  var radius=1100
  //var x= Math.cos(Rune.radians())*radius+circle_center.x
  //var y= Math.cos(Rune.radians())*radius+circle_center.y
  r.circle(r.width/2,-640,1000).stroke(255)
    .fill(false).strokeWidth(60)

  var min=60, max=120
  var mid=(min+max)/2
  for (var degree=min;degree<max;degree+=6){
      var x= Math.cos(Rune.radians(degree))*radius+circle_center.x
      var y= Math.sin(Rune.radians(degree))*radius+circle_center.y
      r.circle(x,y,Rune.random(60,80)).fill(255).stroke(false)
      //console.log(x,y)
  }


  cloud(100,110,0.3,radius,new Rune.Vector(r.width/2,-900))
  cloud(80,90,0.3,radius,new Rune.Vector(r.width/2,-930))
  cloud(68,75,0.3,radius,new Rune.Vector(r.width/2,-950))
  cloud(70,80,0.3,radius,new Rune.Vector(r.width/2,-980))
}

function cloud(min,max,unit,radius,circle_center){
  var mid=(min+max)/2

    var temp_radius=1
  for (var degree=min;degree<max;degree+=unit){
      var x= Math.cos(Rune.radians(degree))*radius+circle_center.x
      var y= Math.sin(Rune.radians(degree))*radius+circle_center.y
      if(degree<mid){
        temp_radius+=Rune.random(0.15,0.3)
        y+=0.2
      }else{
        temp_radius-=Rune.random(0.15,0.3)
      }

      r.circle(x,y,temp_radius).fill(255).stroke(false)
      //console.log(x,y)
  }
}

r.draw();