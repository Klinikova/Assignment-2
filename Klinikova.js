function computeInfo()
{
  var firstName = document.getElementById('firstname').value;
  var lastName = document.getElementById('lastname').value;
  var howManyPets = document.getElementById('howmanypets').value;
  
  var outputTextBox = document.getElementById('output');
  
  outputTextBox.innerText = 'Your Name is listed ' + lastName + 
              ' , ' + firstName + '.';
}