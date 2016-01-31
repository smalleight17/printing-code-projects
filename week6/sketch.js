
var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1200,
  debug: true
});

console.log(r)



/*************   pink   ************************/

for(var i=0;i<50;i++){
  r.rect(0,r.height/2-20-5*i,r.width+20,40+10*i)
    .stroke(false)
    .fill('hsv',320,60,80,0.05+i*0.0001)  //pink
    .rotate(Rune.random(-5,5),0,r.height/2)
}

for(var i=0;i<30;i++){
  r.rect(0,r.height/2-20-5*i,r.width+20,40+10*i)
    .stroke(false)
    .fill('hsv',50,10,90,0.03)    //orange
    .rotate(Rune.random(-5,5),0,r.height/2)

}
/*************   blue  ************************/
for(var i=0;i<50;i++){
  r.rect(0,0,r.width+20,8*i)
    .stroke(false)
    .fill('hsv',250,63,30,0.09)
    .rotate(Rune.random(-5,5),r.width/2,200)

  r.rect(0,r.height-8*i,r.width+20,8*i)
    .stroke(false)
    .fill('hsv',250,63,30,0.09)
    .rotate(Rune.random(-5,5),r.width/2,1000)
}

/*************   yellow glow ************************/

// for(var i=0;i<10;i++){
//   r.rect(0,r.height/2-5-i,r.width+20,10+2*i)
//     .stroke(false)
//     .fill('hsv',Rune.random(60,70),20,100,0.1)
//     //.rotate(Rune.random(-5,5),r.width/2,r.height/2)

// }

for (var i=9;i>0;i--){
  r.circle(r.width/2,r.height/2,20+i*10)
    .fill('hsv',45,i*11,100,1-i*0.05)
    .stroke(false)
}

// for (var i=1;i<5;i++){
//   r.circle(r.width/2,r.height/2,30)
//     .fill(255)
//     .stroke(false)
// }

//outside glow
for (var i=10;i>0;i--){
  r.circle(r.width/2,r.height/2,150+i*10)
    .fill('hsv',60,60,100,0.05)
    .stroke(false)
}
/*************  rotating square ************************/
// for (var i=2;i<13;i++){
//   r.rect(r.width/2-20-25*i,r.height/2-20-25*i,40+50*i,40+50*i)
//   .fill(false)
//   //.stroke('hsv',180,100,80,1-0.08*i)
//   .stroke('hsv',260,100,50,1-0.08*i)
//   .strokeWidth(5+i)
//   .rotate(10*i,r.width/2,r.height/2)
// }

/*************  hallucination ************************/
//trying to use group

//  var myGroup=r.group(r.width/2,r.height/2)

// var spacing=4;
// for(var radius=30;radius<550;radius+=spacing*spacing){
//   console.log(radius,spacing)
//   for(var i=0;i<360;i+=10){
//   var temp_x=radius*Math.cos(i*Math.PI/180)
//   var temp_y=radius*Math.sin(i*Math.PI/180)

//   if(i%20==0){
//     r.rect(temp_x,temp_y,Math.pow(spacing,1.9),spacing,myGroup)
//     .fill(255,0.9-spacing*0.06)
//     .stroke(false)
//     .rotate(i-120+spacing,temp_x,temp_y)
//     //.rotate(Rune.random(5,10),temp_x,temp_y)
//   }else{
//     r.rect(temp_x,temp_y,Math.pow(spacing,1.9),spacing,myGroup)
//     .fill('hsv',340,100,40,0.9-spacing*0.06)
//     .stroke(false)
//     .rotate(i-120+spacing,temp_x,temp_y)
//   }
// }
// spacing++;

// }

/*************  building ************************/
//from top
for(var i=0;i<15;i++){
    var position=r.width/15*i+Rune.random(-30,30)
    var random_width=Rune.random(20,40)
    var random_height=Rune.random(100,300)
     r.rect(position,0,random_width,random_height)
      .fill(0)
    //pick a random building to give it a little triangle
    // if(Rune.random(0,3)>2){
    //   r.triangle(position,random_height,position+random_width,random_height,position+random_width/2,random_height+Rune.random(30,50))
    //   .fill(0)
    // }
};

for(var i=0;i<30;i++){
    var temp=r.width/30*i
     r.rect(temp,0,Rune.random(20,40),Rune.random(50,150))
      .fill(0)

};

//from bottom
for(var i=0;i<15;i++){
    var temp=r.width/15*i
    var random_height=Rune.random(100,300)
     r.rect(temp+Rune.random(-30,30),r.height-random_height,Rune.random(20,40),random_height)
      .fill(0)
};

for(var i=0;i<30;i++){
    var temp=r.width/30*i
    var random_height=Rune.random(50,150)
     r.rect(temp,r.height-random_height,Rune.random(20,40),random_height)
      .fill(0)

};

/*************  building ************************/

/*************  Title ************************/
r.text("INCEPTION",r.width/2,r.height/2+50)
.fontSize(140)
.stroke(false)
.fontFamily('Oswald')
.letterSpacing(15)
.fontWeight(10)
.textAlign('center')
.fill(100)

// for(var i=0;i<5;i++){
// r.text("INCEPTION",r.width/2,r.height/2+50)
// .fontSize(140+5*i)
// .stroke(false)
// .fontFamily('Oswald')
// .letterSpacing(15)
// .fontWeight(10)
// .textAlign('center')
// .fill(100+i*10,1-i*0.05)

// }
/*************  Title ************************/


r.draw();