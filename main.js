var images = [
    "IMG_7617.jpeg" ,
    "IMG_7753.JPG",
    "IMG_4175.jpeg",
    "IMG_6124.jpeg",
    "IMG_5669.jpeg",
    "IMG_4934.jpeg",];
    
  var i = 0;
  function nextslide(){
    if (i == 9) 
    { 
      i= 0;
    } document.getElementById("album").src=images[i];
    i++;
  }
  