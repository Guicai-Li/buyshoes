window.onload = function() {
  console.log("page loaded");
}
function makeCartScrollNicely() {
  var cart = document.querySelector(".cart");
  Ps.initialize(cart);
}