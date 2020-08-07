$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  $("#mypic").fadeIn(2000);
  $("#about-me").fadeIn(2000);

  $(".column1").fadeIn(3000);
  $(".column2").fadeIn(4000);
  $(".column3").fadeIn(4000);
});
