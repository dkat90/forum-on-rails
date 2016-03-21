$(document).ready(function() {
  var like = 0;
  var unlike = 0;
  $(".like").on("click", counterLike);
  $(".unlike").on("click", counterUnlike);

  function clicked () {
    console.log("Hello I'm clicked");
  }

  function unclicked (){
    console.log("I'm unclicked");
  }

  function counterLike () {
    like = like + 1;
    $(".counter_like").text(like);
  }

  function counterUnlike() {
    unlike = unlike + 1;
    $(".counter_unlike").text(unlike);
  }




});
