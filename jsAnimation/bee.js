var cavas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var x = 100;
var y = 100;


var circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

var drawBee = function (x, y) {
  ctx.lineWidth = 3;
  ctx.strokeStyle = "Black";
  ctx.fillStyle = "Gold";

  circle(x, y, 12, true);
  circle(x, y, 12, false);
  circle(x - 8, y - 18, 8, false);
  circle(x + 8, y - 18, 8, false);
  circle(x - 3, y - 2, 3, false);
  circle(x + 3, y - 2, 3, false);
};

var update = function (coordinate) {
  var offset = Math.random() * 4 - 2;
  coordinate += offset;
  if (coordinate > 200) {
    coordinate = 200;
  }
  if (coordinate < 0) {
    coordinate = 0;
  }
  return coordinate;
}


setInterval(function () {
  ctx.clearRect(0, 0 , 200, 200);

  drawBee(x, y);
  x = update(x);
  y = update(y);

  ctx.strokeRect(0, 0, 200, 200);
}, 30);
