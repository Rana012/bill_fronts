setInterval(function () {
  var x = new Date();
  var x1 = x.getMonth() + 1 + "/" + x.getDate() + "/" + x.getFullYear();
  x1 = x1 + " - " + x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();
  document.getElementById("time").innerHTML = x1;
}, 1000);
