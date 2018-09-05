var $ = function(id){
  return document.getElementById(id);
}

var displayMessage = function(){
  var today = new Date();
  var todaytext = today.toDateString();
  
  var todayyyy = today.getFullYear();
  var todaymm = today.getMonth() + 1;
  var todaydd = today.getDate();
  
  var todayformatted = todayyyy + '-' + todaymm + '-' + todaydd;
  
  var myText = "Today's date is" + todayformatted;
}