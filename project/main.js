probList = {
  "18 x 92":1656,
  "19 x 83":1577,
  "-14 x -91":1274,
  "20 x 55":1100,
  "77 x -66":-5082,
  "90 x 101":9090,
  "43 x 72":3096,
  "-53 x 97":-5141,
  "69 x 420":28980,
  "-(20 - 63) + 13":56,
  "12 + 13 - (12 / 2)":19,
  "(71 + 5) / -(9 + 10)":-4,
  "7 + 8^3":519,
  "23 + (7 x 9)":86,
  "(14 + 5) x 9":171,
  "98 x (5 - 8)":-294
};
const usedList = [];
var countInterval;
var min = 0;
var sec = 0;

function genProbs() {
  document.getElementById("stbutton").style.display = "none";
  document.getElementById("chbutton").style.display = "inline-block";
  document.getElementById("textTimer").innerHTML = "00:00";
  var form = document.getElementById("frm");

  var probKeys = Object.keys(probList);

  for (var i = 0; i < form.length; i++) {
    if (usedList.length >= probKeys.length){
      break;
    }
    x = probKeys[Math.floor(Math.random()*probKeys.length)];
    while (usedList.includes(x)) {
      x = probKeys[Math.floor(Math.random()*probKeys.length)];
    }
    try {
      document.getElementById("question".concat((i+1).toString())).innerHTML = x;
    }
    catch(err) {}
    usedList.push(x)
  }
  form.style = "";
  
  countInterval = setInterval(countdown, 1000);
  function countdown() {
    sec += 1;
    if (sec >= 60) {
      sec = 0
      min += 1
    }
    document.getElementById("textTimer").innerHTML = (min.toString().padStart(2,0)).concat(":", sec.toString().padStart(2,0));
  }
}

function checkFunction() {
  document.getElementById("chbutton").style.display = "none"
  clearInterval(countInterval);
  Math.floor(Math.random() * 10) + 1;

  var form = document.getElementById("frm");
  var correctNum = 0;
  for (var i = 0; i < form.length;i++) {
    //✗✓
    if (form.elements[i].value == probList[document.getElementById("question".concat((i+1).toString())).innerHTML]) {
      document.getElementById("check".concat((i+1).toString())).innerHTML = "correct"
      document.getElementById("check".concat((i+1).toString())).style.color = "green"
      correctNum += 1;
    } else {
      document.getElementById("check".concat((i+1).toString())).innerHTML = "incorrect"
      document.getElementById("check".concat((i+1).toString())).style.color = "red"
    }
    form.elements[i].disabled = true;
  }
  document.getElementById("result").innerHTML = correctNum.toString().concat("/", form.length.toString(), " - ", Math.floor(correctNum/form.length*100).toString(), "%")

}