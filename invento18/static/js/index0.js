(function() {
  var canvas, chinese, columns, draw, drops, font_size, j, matrix, ref;

  canvas = document.getElementById("c");

  matrix = canvas.getContext("2d");

  canvas.height = window.innerHeight;

  canvas.width = window.innerWidth;

  chinese = "INVENTO'18田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑inventinggreen".split("");
  chinese1 = "Invento18".split("");

  font_size = 18;

  columns = canvas.width / font_size;

  drops = [];

  for (j = 0, ref = columns; 0 <= ref ? j <= ref : j >= ref; 0 <= ref ? j++ : j--) {
    drops.push(1);
  }

  draw = function() {
    var i, results, text;
    matrix.fillStyle = "rgba(0, 0, 0, 0.05)";
    matrix.fillRect(0, 0, c.width, c.height);
    matrix.fillStyle = "#0f0"; //green text
    matrix.font = font_size + "px arial";
    i = 0;
    results = [];
    while (i < drops.length) {
      text = chinese[Math.floor(Math.random() * chinese.length)];
      matrix.fillText(text, i * font_size, drops[i] * font_size);
      if (drops[i] * font_size > c.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
      results.push(i++);
    }
    return results;
  };

  setInterval(draw, 35);

}).call(this);
