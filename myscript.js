
var i = 0;
var txt = 'Hi I\'m Andrew... and welcome to my page!';
var speed = 60;
//document.getElementById("searchInput").onload = function() {writeText()};

function writeText(callback){
  if(i < txt.length) {
      document.getElementById('searchInput').value += txt.charAt(i);
      i++;
      setTimeout(writeText, speed);
    };
//  deleteText();
}
//window.onload = function(){ alert('Working!!'); }
//window.onload = function(){writeText();}
function back(){
    if(i > 0){
    document.getElementById('searchInput').value = value.substr(0,value.length -1);
  };
}
