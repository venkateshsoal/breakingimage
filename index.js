console.log(document);
console.log("Hello");

document.getElementsByClassName('card')[0].style.border.color = "purple";
document.getElementsByClassName('card')[1].innerHTML = "<h2>Hello card 2</h2>"



const addImage = function () {
  document.getElementById('image-holder').innerHTML = '<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsupport.kickofflabs.com%2Fwp-content%2Fuploads%2F2016%2F06%2F500px.png&f=1&nofb=1" alt="Smiley face" height="500" width="500">'
}

const breakImage = function () {
  const image_div = document.getElementById('#image-holder');

}

// addImage();


// document.getElementById('image-holder').innerHTML =



// // need to create a border for card.
// $(document).ready(function () {
//   $('.card ').css('border-right', '2px solid blue');
// });


