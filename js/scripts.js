$(document).ready(function() {
  jQuery(".clickable").click(function() {
    jQuery("#initially-showing").slideToggle("swing");
    $("#initially-hidden").slideToggle();
  });

  $("p").click(function() {
    $(".sealionfriend-hiding").toggle();
    $(".sealionfriend-showing").toggle();
  });


});
