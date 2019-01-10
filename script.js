$("#button1").click(function() {
  $(".rond, .carre").each(function() {
    $(this).addClass("active");
  });
});

$("#button2").click(function() {
  $(".rond, .carre").each(function() {
    $(this).removeClass("active");
  });
});
$(".rond").click(function(){

    if ($(this).hasClass("active"))
    {
      $(this).removeClass("active");
    }
    else
    {
      $(this).addClass("active");
    }
  });

$("#carre1").click(function(){
  $("#carre1, #rond9, #rond13, #rond17, #rond5")
  .each(function(){
    $(this).toggleClass("active");
  })
})

$("#carre2").click(function(){
  $("#carre2, #rond1, #rond10, #rond14, #rond18")
  .each(function(){
    $(this).toggleClass("active");
  })
})
$("#carre3").click(function(){
  $("#carre3, #rond2, #rond11, #rond15, #rond19, #rond6, #rond9, #rond10, #rond11, #rond12")
  .each(function(){
    $(this).toggleClass("active");
  })
})
$("#carre4").click(function(){
  $("#carre4, #rond3, #rond7, #rond11, #rond20")
  .each(function(){
    $(this).toggleClass("active");
  })
})
$("#carre5").click(function(){
  $("#carre5, #rond4, #rond8, #rond16, #rond12")
  .each(function(){
    $(this).toggleClass("active");
  })
})