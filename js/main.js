$( document ).ready(function() {


  $(".screen-horizontal-wipe").click(function(){
    var target = $(this).attr("data-horizontal-target");
    console.log("horiz")
    $(".horizontal-sec").each(function(){
      if($(this).attr("data-horizontal-sec") == target){
        $(this).removeClass("inactive").addClass("active");
      }
      else {
       $(this).addClass("inactive").removeClass("active")
      }
    })
  })

  $(".screen-vertical-wipe").click(function(){
    var target = $(this).attr("data-vert-target");
    console.log("vert")
    $(".sec").each(function(){
      if($(this).attr("data-vert-sec") == target){
        $(this).removeClass("inactive");
      }
      else {
        $(this).addClass("inactive")
      }
    })
  })

  $(".reset-horizontal").click(function(){
    $(".horizontal-sec").removeClass("inactive")
  })

})
