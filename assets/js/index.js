$(document).ready(function () {


  $('.sidenav').sidenav();


  const randomColorGen = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  $(".material-icons").click(() => {
    $('.navcolor').css({ "position": "static" });
    $('#mobile-demo').css({ "background-color": randomColorGen() });
  });
  $(".sidenav").click(() => {
    $('.navcolor').css({ "position": "sticky" });
    $('.sidenav').sidenav();
  })


  $(window).on("scroll", ()=> {
    if(window.scrollY > 29 && window.scrollY < 111) {
      $(".links").css("color", "black");
      $(".material-icons").css("color", "black")
    } else {
      $(".links").css("color", "white")
      $(".material-icons").css("color", "white")
    }

    
window.scrollY > 700 ? $(".about-page").css("overflow", "auto") : $(".about-page").css("overflow", "hidden");

window.scrollY > 1300 ? $(".portfolio-page").css("overflow", "auto") : $(".portfolio-page").css("overflow", "hidden");

  })
});



