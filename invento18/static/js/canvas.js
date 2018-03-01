





var canvas = document.querySelector('canvas');





canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');



var x , y , r , g , b , a,dx,dy;

//for(var i=0; i<1000; i++)
//{x = Math.random()*window.innerWidth;
//y = Math.random()*window.innerHeight;
//
  //r = Math.random()*255;
  //g = Math.random()*255;
  //b = Math.random()*255;
  //a = Math.random()*255;
//}
var mouse = {
  x:undefined,
  y:undefined
}
var maxRadius = 10;
//var minRadius = 2;

var colorArray = [
  '#F61666',
  '#3B5998',
  '#3B3C58',
  '#FAFAFA',
  '#DACED8'
]
window.addEventListener('mousemove',
  function(event){
    mouse.x=event.x;
    mouse.y=event.y;
})
window.addEventListener('resize', function(){
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  init();
})

function Circle(x,y,dx,dy,r){
  this.x=x;
  this.y=y;
  this.dx=dx;
  this.dy=dy;
  this.r=r;
  this.minRadius=r;
  this.color= colorArray[Math.floor(Math.random()*colorArray.length)];
  this.draw = function(){
    c.beginPath();
    c.arc(this.x,this.y,this.r,0,Math.PI*2,false);


    c.fillStyle = this.color;
    c.fill();
  }
  this.update = function(){
    if(this.x + this.r > innerWidth || this.x - this.r < 0)
    {
      this.dx=-this.dx;
    }
    if(this.y + this.r > innerHeight || this.y - this.r < 0)
    {
      this.dy=-this.dy;
    }

    this.x+=this.dx;
    this.y+=this.dy;

    if( mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
      if (this.r<maxRadius) {
        this.r+=1;
      }

    }
    else if(this.r > this.minRadius) {
      this.r-=1;

    }


    this.draw();
  }
}

  var circleArray = [];

function init(){
    circleArray = [];

  for (var i = 0; i <100 ; i++) {
    r = Math.random() * 3 + 1;
    x = Math.random()*(innerWidth - r * 2) + r;
    y = Math.random()*(innerHeight - r * 2) + r;
    dx = (Math.random()-0.5)*1.3;
    dy = (Math.random()-0.5)*1.5;


    circleArray.push(new Circle(x,y,dx,dy,r));
  }
}



  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
    }


  }
  init();
  animate();
