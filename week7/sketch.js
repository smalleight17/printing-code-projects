
var r = new Rune({
  container: "#canvas",
  width: 500,
  height: 300,
  debug: false
});



eye_shadow_group(0,0,40,100)
eye_shadow_group(150,320,40,100)
eye_shadow_group(300,30,35,90)

hickey_group(0,0,80,100)
hickey_group(150,357,84,60)
hickey_group(300,12,46,89)

function hickey_group(group_position,h,s,v){
	var myGroup=r.group(group_position,0)

	for(var i=0;i<10;i++){
		path_r=r.path(50+i*3,200)
		lipstick_scale_path(path_r,1-i*0.08,0.1+i*0.05,h,s,v)
		myGroup.add(path_r)
}

	var line=r.path(50,200)
				.moveTo(0,2)
				.curveTo(15,3,10,20,45,20)
				.curveTo(70,20,80,8,102,2)
				.curveTo(80,5,60,18,45,17)
				.curveTo(30,18,16,10,0,2)
				.fill(0)
				.stroke(false)

	var text=r.text("Sephora",60,205)
				//.fontFamily('Dancing Script')
				.fontFamily('Great Vibes')
				.fontSize(30)
				.stroke(false)
				.fill(0)

	myGroup.add(line)
	myGroup.add(text)

}

function lipstick_scale_path(path_r, scale,alpha,h,s,v){

	path_r.curveTo(20*scale,-10*scale,22*scale,-24*scale,40*scale,-10*scale)
			.curveTo(60*scale,-30*scale,80*scale,0*scale,100*scale,0*scale)
			.curveTo(75*scale,13*scale,60*scale,18*scale,45*scale,17*scale)
			.curveTo(30*scale,18*scale,16*scale,10*scale,0*scale,2*scale)
			.fill('hsv',h,s,v,alpha)
			.stroke(false)
}



function eye_shadow_group(group_position,h,s,v){

var myGroup=r.group(group_position,0)

var eyeLine=r.path(50,100)
.moveTo(-10,0)
.curveTo(30,-20,60,15,100,0)
.curveTo(55,20,35,-20,-10,0)
.fill(0)
.stroke(false)

myGroup.add(eyeLine)

// r.path(50,95)
// .curveTo(60,-60,100,0)
// .curveTo(80,20,30,-10, 0,0)
// .stroke(false)
// .fill('hsv',0,40,100,0.5)

for(var i=0;i<10;i++){
	path_r=r.path(50+i*4,95)
	eye_shadow_scale_path(path_r,1-i*0.06,0.1+i*0.05,h,s,v)
	myGroup.add(path_r)
}

var text=r.text("Sephora",60,95)
.fontFamily('Great Vibes')
.fontSize(30)
.stroke(false)
.fill(0)

myGroup.add(text)

}

function eye_shadow_scale_path(path_r, scale,alpha,h,s,v){
path_r.curveTo(60*scale,-60*scale,100*scale,0*scale)
		.curveTo(80*scale,20*scale,30*scale,-10*scale, 0,0)
		.stroke(false)
		.fill('hsv',h,s,v,alpha)

}

r.draw();