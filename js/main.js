$( document ).ready(function() {


  $(".screen-horizontal-wipe").click(function(){
    var target = $(this).attr("data-horizontal-target");
    console.log("horiz")
    $(".horizontal-sec").each(function(){
      if($(this).attr("data-horizontal-sec") !== target){
        $(this).addClass("inactive").removeClass("active")
      }
      else {
        $(this).removeClass("inactive").addClass("active");
      }
    })
  })

  $(".screen-vertical-wipe").click(function(){
    var target = $(this).attr("data-vert-target");
    console.log("vert")
    $(".sec").each(function(){
      if($(this).attr("data-vert-sec") !== target){
        $(this).addClass("inactive");
      }
      else {
        $(this).removeClass("inactive");
      }
    })
  })

  $(".reset-horizontal").click(function(){
    $(".horizontal-sec").removeClass("inactive").removeClass("active")
  })

})
