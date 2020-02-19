$(document).ready(function(){
    $('.sidenav').sidenav();
  });

  const randomColorGen = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


$(".material-icons").click(()=>{

  $('.navcolor').css({"position": "static"});
  $('#mobile-demo').css({"background-color": randomColorGen()});
});
$(".sidenav").click( ()=>{
  $('.navcolor').css({"position": "sticky"});
  $('.sidenav').sidenav();
})