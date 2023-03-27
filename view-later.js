
/**
function renderitems(){
    let ul= document.getElementById('itemList');
    ul.innerHTML="";
    let imageStrings = JSON.parse(localStorage.getItem('viewLaterImages'));
   for (var i = 0; i < imageStrings.length; i++) {
  let image = document.createElement('img') ;
  let li = document.createElement("li"); // create li element.
  li.innerHTML= imageStrings[i] + `<span   onClick='remove_element( ${i})'> \u00D7</span>` ;;
  //image.src = imageStrings[i] + `<span   onClick='remove_element( ${i})'> \u00D7</span>` ;;
  ul.appendChild(li);
}
}
 */

 
//Retrieve the image data from localStorage.
let imageStrings = JSON.parse(localStorage.getItem('viewLaterImages'));

//Parse the data back into an array 
for (var i = 0; i < imageStrings.length; i++) {
//Create image elements for each image and set their src attributes  strings.
  let image = document.createElement('img');
  image.src = imageStrings[i];
  document.body.appendChild(image);
}
