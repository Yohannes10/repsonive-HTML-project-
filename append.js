// Add a click event listener to each bookmark button


let imagearray =[];
let bookmarks = document.querySelectorAll('.bookmark');
bookmarks.forEach(function(button) {
  button.addEventListener('click', function(e) {

    let imagepath = e.target.parentElement.children[0].children[0].children[0].src; 
    imagearray.push(imagepath)

  
localStorage.setItem('viewLaterImages', JSON.stringify(imagearray));
  
window.location.href = 'bookmark.html';


  });
});





































/**
 * Starting  - clicking the button
 * Step 1
 * console.log the image source name on click 
 * step 2
 * create an empty array
 * push all source strings into an array
 * 
 * step3
 * save the array into the storage - localstrage
 * 
 * step4 
 * save for later page - create a js file 
 * fetch the data from local storage 
 * 
 * step 5
 * render all thr images on your save for later page 
 * display the list - refer shoppinglist task 
 * 
 * 
 * 
 * endpoint - render all the images on the saveforlater page 
 */