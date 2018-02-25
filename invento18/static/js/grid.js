var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
ctx.globalCompositeOperation = 'lighter';

var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

var points = [];
var numPoints = 400;
var distToTravel = 25;
var distortionLevel = 11;

function Draw() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.beginPath();
  
  for(var x = 0; x < points.length; x++) {
    
    if(points[x].life > 0) {
      points[x].Dying();
    } else {
      points.splice(x, 1);
      points.unshift(new Point());
    }
    
    points[x].UpdatePath();
    points[x].Move();
    
    ctx.moveTo(points[x].x, points[x].y);
    var rando = GetRandom(0, distortionLevel);
    for(var y = 0; y < points[x].path.length; y++) {
      ctx.lineTo((points[x].path[y].x + GetRandom(-rando, rando)), (points[x].path[y].y + GetRandom(-rando, rando)));
    } 
  }
  ctx.strokeStyle = 'rgba(0, 180, 230, 0.4)';
  ctx.stroke();
  
  requestAnimationFrame(Draw);
}




function Point() {
  this.x = window.innerWidth / 2;
  this.y = window.innerHeight / 2;
  this.direction = GetRandom(1, 5);
  this.distanceMoved = 0;
  this.life = GetRandom(1, 10);
  this.speed = 3;
  this.path = [];
  this.maxPath = 15;
}

Point.prototype.Dying = function() {
  this.life -= 0.01;
}

Point.prototype.Move = function() {
  this.distanceMoved += this.speed;
  
  switch(this.direction) {
    case 1:
      //moving up
      this.y -= this.speed;
      break;
    case 2: 
      //moving right
      this.x += this.speed;
      break;
    case 3: 
      //moving down
      this.y += this.speed;
      break;
    case 4:
      //moving left
      this.x -= this.speed;
      break
  }
  
  if(this.distanceMoved > distToTravel) {
    this.direction = GetRandom(1, 5);
    this.distanceMoved = 0;
  }
}

Point.prototype.UpdatePath = function() {
  if(this.path.length > this.maxPath) {
    this.path.splice(this.path.length - 1, 1);
    this.path.unshift({
      x: this.x,
      y: this.y
    });
  } else {
    this.path.unshift({
      x: this.x,
      y: this.y
    });
  }
}

function GetPoints() {
  for(var x = 0; x < numPoints; x++) {
    points.push(new Point());
  }
}

function GetRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

GetPoints();
Draw();