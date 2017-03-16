var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sweetbike.jpg') {
      myImage.setAttribute ('src','images/retroposter.jpg');
    } else {
      myImage.setAttribute ('src','images/sweetbike.jpg');
    }
}
