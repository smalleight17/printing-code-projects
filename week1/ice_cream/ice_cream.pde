int radius;
int theta;
float x, y;
float x_off, y_off;

void setup() {
  radius=100;
  theta=0;
  x_off=0;
  y_off=1000;

  size (500, 500);
  //background(100,100,100);
  background(255);

  fill(255);
  strokeWeight(5);
  triangle(150, 200, 350, 200, 250, 450);

  pushMatrix();
  translate(width/2, height/2-100); 
  fill(0);
  strokeWeight(2);
  for (float i=0; i<2*PI; i+=0.01) {
    x=radius*sin(i)+map(noise(x_off), 0, 1, -5, 5);
    y=radius*cos(i)+map(noise(y_off), 0, 1, -5, 5);
    ellipse(x, y, 3, 3);
    x_off+=0.5;
    y_off+=0.5;
  }
  popMatrix();

  pushMatrix();
  translate(250, 20);
  rotate(PI/4);
  noFill();
  for (int i=0; i<9; i++) {
    for (int j=0; j<10; j++) {
      //rect(20*i, 20*j+20*i,20,20);

      if ((i==0&j>4)||(i==1&j>5)||(i==2&j>6)||(i>=3&i<=4&j>7)||
      (i==5&(j==0||j>7))||(i>=6&(j<=1||j>8))||(i==7&(j<=2||j>8))||
      (i==8 & (j<=5||j>9))) {
        //stroke(255);
      } else {
        //stroke(0);
        strokeWeight(random(0.5,3));
         rect(30*j, 30*i, 30, 30);
      }
      //rect(30*j, 30*i, 30, 30);
    }
  }


  popMatrix();
}

void draw() {
}
