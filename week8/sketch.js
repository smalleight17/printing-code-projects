
var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600,
  debug: true
});
var noise = new Rune.Noise()

//r.line(0,400,r.width,400)
//perlin noise for the background
function draw_background_noise(){
    var noiseStep=0
    for(var i=0;i<r.height;i+=10){
      noise.noiseSeed(i*10)

      for(var j=0;j<r.width;j+=10){
        //console.log(i,j)
        r.rect(i,j,10,10)
          .fill(noise.get(j)*255,0.5)
          .stroke(false)
      }
  }
}


function create_noise(location,myColor,flag,axis){
  //flag is for whether to draw small circle on the outlines

  var noiseStep1=0
  var noiseStep2=1000
  var noise_reflect=r.path(0,location)
    .stroke(myColor)
    .fill(false)
    .strokeWidth(2)
  var noisePath2=r.path(0,location-10)
    .stroke(myColor)
    .strokeWidth(2)
    .fill(false)


  for(var x=0;x<r.width;x+=2){
    var main_y=noise.get(noiseStep1)*200;
    var sub_y=main_y-10+noise.get(noiseStep2)*20

    
    //console.log(x,y)
    //noisePath1.lineTo(x,main_y)
    noisePath2.lineTo(x,sub_y)
    //r.circle(x,sub_y+location-10,2,2).stroke(false).fill(myColor)


    if (axis!=0){
      var reflect_y=2*axis-sub_y-location
      //noise_reflect.lineTo(x,reflect_y)
      //console.log(x,reflect_y)
      //console.log(location,)
      r.circle(x,reflect_y,2,2).stroke(false).fill(myColor.rgb().r,myColor.rgb().g,myColor.rgb().b,myColor.rgb().a*0.5)
    }
    

    if (flag==true){
      r.circle(x,sub_y+location-10,Rune.random(0.5,3)).stroke(false).fill(myColor)
    }

    noiseStep1+=0.015
    noiseStep2+=0.1
  }
}

function color_noise(location, myColor,axis){

  var noiseSeed=Rune.random(500)
  noise.noiseSeed(noiseSeed)

  create_noise(location,myColor,true,axis)

  var alpha=0.7

  for (var i=1;i<80;i++){
    alpha-=Rune.random(0.008,0.012)
    if (alpha>0){
      var newColor=new Rune.Color(myColor.rgb().r,myColor.rgb().g,myColor.rgb().b,alpha)
      create_noise(location+i*2,newColor,false,axis)
    }
  }
}

//draw_background_noise()

//var myColor=new Rune.Color(28,120,213,1)
var myColor=new Rune.Color(152,233,216,1)
color_noise(0,myColor,0)

//myColor=new Rune.Color(119,215,187,1)
myColor=new Rune.Color(118,216,192,1)
color_noise(50,myColor,0)

//myColor=new Rune.Color(94,49,225,1)
myColor=new Rune.Color(103,201,153,1)
color_noise(100,myColor,400)

//myColor=new Rune.Color(28,120,213,1)
myColor=new Rune.Color(59,171,100,1)
color_noise(150,myColor,400)

//myColor=new Rune.Color(43,156,136,1)
myColor=new Rune.Color(15,50,21,1)
color_noise(200,myColor,400)

r.draw();