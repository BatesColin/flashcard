$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#flashcard1-showing").slideToggle();
    $("#flashcard1-hidden").fadeToggle();
  });
  $(".clickable2").click(function() {
    $("#flashcard2-showing").slideToggle();
    $("#flashcard2-hidden").fadeToggle();
  });
  $(".clickable3").click(function() {
    $("#flashcard3-showing").slideToggle();
    $("#flashcard3-hidden").fadeToggle();
  });
  $(".clickable4").click(function() {
    $("#flashcard4-showing").slideToggle();
    $("#flashcard4-hidden").fadeToggle();
  });
  $(".clickable5").click(function() {
    $("#flashcard5-showing").slideToggle();
    $("#flashcard5-hidden").fadeToggle();
  });
});
