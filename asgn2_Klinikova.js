var $ = function (id) {
	return document.getElementById(id);
}

var displayMessage = function ()
{
	var myFirstName = $("firstname").value;
	var myLastName = $("lastname").value;
	var HowManyPets = $("howmanypets").value;
	var HowManyPetsInt = parseInt(HowManyPets);
  
  var myPet1 = $("pet1").value;
  var myPet2 = $("pet2").value;
  var myPet3 = $("pet3").value;
  
  var today = new Date();
  
	
	var myText = "Your Name is listed as " + myLastName + " , " + myFirstName + " and today's date is " + today + ". Your Pet #1 named " + myPet1 + ". Your Pet #2 named " + myPet2 + ". Your Pet #3 named " + myPet3 + " . "
	$("mymsg").innerHTML = myText;
}

window.onload = function ()
{
	$("mybutton").onclick = displayMessage;  //Remember no ()!!
}