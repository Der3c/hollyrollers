var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sweetbike.jpg') {
      myImage.setAttribute ('src','images/retroposter.jpg');
    } else {
      myImage.setAttribute ('src','images/sweetbike.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Keep Holy Rollin, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name')
  myHeading.textContent = 'Keep Holy Rollin, ' + storedName;
  }
myButton.onclick = function() {
  setUserName();
}
