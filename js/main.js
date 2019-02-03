$( document ).ready(function() {

  $(".burger-button").click(function(){
    $(".burger-button").toggleClass("active");
    $(".burger-menu").toggleClass("menu-active");
  });

 $(".burger-menu").click(function(){
   $(".burger-button").toggleClass("active");
   $(".burger-menu").toggleClass("menu-active");
 });

  $(".screen-horizontal-wipe").click(function(){
    var target = $(this).attr("data-horizontal-target");
    console.log("horiz")
    $(".horizontal-sec").each(function(){
      if($(this).attr("data-horizontal-sec") !== target){
        $(this).addClass("inactive").removeClass("active-horizontal")
      }
      else {
        $(this).removeClass("inactive").addClass("active-horizontal");
      }
    })
  })

  $(".screen-vertical-wipe").click(function(){
    var target = $(this).attr("data-vert-target");
    console.log("vert")
    $(".sec").each(function(){
      if($(this).attr("data-vert-sec") !== target){
        $(this).addClass("inactive").removeClass("active-vert");
      }
      else {
        $(this).removeClass("inactive").addClass("active-vert");
      }
    })
  })

  $(".reset-horizontal").click(function(){
    $(".horizontal-sec").removeClass("inactive").removeClass("active-horizontal")
  })

})
