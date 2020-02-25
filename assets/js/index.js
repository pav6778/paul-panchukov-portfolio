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

  let absect = document.getElementById("about-section"),
  prfsect = document.getElementById("portfolio-section");

  $(window).on("scroll", ()=> {
    if(window.scrollY > 29 && window.scrollY < 111) {
      $(".links").css("color", "black");
      $(".material-icons").css("color", "black")
    } else {
      $(".links").css("color", "white")
      $(".material-icons").css("color", "white")
    }
    if(window.scrollY > absect.clientHeight || window.scrollY < prfsect.clientHeight) {

    }
  })
});
