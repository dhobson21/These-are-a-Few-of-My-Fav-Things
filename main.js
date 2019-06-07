// When the button is clicked, display the data in the following format in the DOM.
// I can purchase {thing} at {location}

const listButton = document.getElementById("addToWishList")

const wishListContainer = document.getElementById("wishList")

listButton.addEventListener("click", event => {
  let thing = document.getElementById("favThing").value 
  let local = document.getElementById("location").value 

  // console.log('thing', thing)
  // console.log('location', local)

  let wishListString = `
  <div>
  <h3>I can purchase ${thing} at ${local}</h3>
  </div>
  `
  wishListContainer.innerHTML += wishListString
})