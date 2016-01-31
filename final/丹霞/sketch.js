
var r = new Rune({
  container: "#canvas",
  width: 900,
  height: 600,
  debug: false
});

background()
rock()
part2()
part3()
part1()
r.line(0,200,400,200).strokeWidth(5)

function background(){
  for(var i=0;i<200;i+=10){
    r.rect(0,90-i,r.width,100).fill('hsv',226,85,76,0.2)
    .stroke(false)
  }

  r.rect(0,200,r.width,400)
  .stroke(false).fill('hsv',34,53,91)

}

function part1(){
var start_point=new Rune.Vector(100,100)
var local_end_point=new Rune.Vector(500,200)
var global_end_point=start_point.add(local_end_point)

var direction=-1

for(var i=0;i<200;i++){
  var temp_end_point=local_end_point.add(new Rune.Vector(2*i,i*direction))
  //r.circle(temp_end_point.x,temp_end_point.y,5)
  var myPath=
  r.path(0,100).moveTo(start_point.x-Math.pow(i,1.2),start_point.y)
  .curveTo(200-i,300+i*2,350,300+i*2)
  .curveTo(450+i*5,300+i*2,450+i*2,200+i,temp_end_point.x,temp_end_point.y)
  .fill(false)

  var color_choice=Math.floor(Rune.random(5))

  if(color_choice==0){
      myPath.stroke(255).strokeWidth(2)
  }else{
      if(i<50){
        myPath.stroke('hsv',Rune.random(25,40),Rune.random(40,60),Rune.random(80,90))
        .strokeWidth(Rune.random(2,4))
      }else if(i>=50 && i<100){
        myPath.stroke('hsv',Rune.random(25,40),Rune.random(60,100),Rune.random(60,90))
        .strokeWidth(Rune.random(2,4))
      }else{
        myPath.stroke('hsv',Rune.random(10,30),Rune.random(60,100),Rune.random(60,90))
        .strokeWidth(Rune.random(2,4)) 
      }
  }

}
}

function part2(){
  //r.circle(200,100,5)
  var start_point=new Rune.Vector(200,0)
  // var myPath=r.path(150,200).moveTo(start_point.x,start_point.y)
  //             .curveTo(150,50,0,50)
  //             .fill(false)

  for(var i=0;i<80;i++){
      var myPath=r.path(50,200).moveTo(start_point.x+Math.pow(i,1.1)*3,start_point.y)
              //.curveTo(200+i*3.5,50+i*2,100+i*1.5,30+i*2.5)
              //.curveTo(60+i,50+i*2.5/*,30,50+i*2.5*/,-50,30+i*2.5)
              .curveTo(150+i*4,50+i*3,60+i,30+i*2.8,-50,30+i*2.5)
              .fill(false)
              .strokeWidth(Rune.random(2,4))
              
      if(Math.floor(Rune.random(4))==0){
         myPath.stroke(255)
      }else{
        myPath.stroke('hsv',Rune.random(10,40),Rune.random(60,100),Rune.random(60,90))
      }
  }
}

function part3(){
  for (var i=0;i<100;i++){
      var myPath=r.path(500,50).moveTo(-1*i,i*1.5)
      .curveTo(10-i*1.5,20+i*1.8,50,50+i*3,300-i,100+i*2.5)
      .strokeWidth(2).fill(false)

    if(Math.floor(Rune.random(4))==0){
      myPath.stroke(255)
    }else{
      myPath.stroke('hsv',Rune.random(10,40),Rune.random(60,100),Rune.random(60,90))
    }
  }



}

function rock(){
  var rock_path=r.path(0,30)
  .lineTo(130,20).lineTo(140,50)
  .lineTo(190,55).lineTo(210,100)
  .lineTo(330,110).lineTo(350,150)
  .lineTo(410,150).lineTo(450,170)
  .lineTo(0,170).closePath()
  .stroke(false).fill('hsv',23,85,74)

  for (var i=0;i<rock_path.length();i+=8){
    var temp_vec=rock_path.vectorAtLength(i)
    r.line(temp_vec.x,temp_vec.y+30,0,temp_vec.y+30)
      .stroke(0,0.5)
  }

  for(var j=100;j<190;j+=8){
    for(var i=Rune.random(50);i<30+j*1.5;i+=2){
            r.circle(i+Rune.random(5),j+Rune.random(5),1)
          .stroke(false).fill('hsv',9,50,43,0.8)
    }
  }

  var rock_path2=r.path(400,200)
  .lineTo(120,-180).lineTo(200,-180)
  .lineTo(220,-120).lineTo(500,-120)
  .lineTo(500,0).closePath()
  .fill('hsv',23,85,74).stroke(false)

  for (var i=0;i<120;i+=6){
    if(i<40){
      r.line(520-i,20+i*1.5,600+i*0.5,20+i*1.5)
      .strokeWidth(Rune.random(1,3)).fill('hsv',9,50,43,0.8)
    }else{
      r.line(520-i,20+i*1.5,r.width,20+i*1.5)
      .strokeWidth(Rune.random(1,4)).fill('hsv',9,50,43,0.8)
    }
    
  }
}


r.draw();