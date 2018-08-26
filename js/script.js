$(document).ready(function(){
   $(".carousel").carousel({
       interval:6000
   });
   //color piker apearence
   $(".gearBox").click(function () {
      $(".color_box").fadeToggle(1000);
   });
   $(".colo_piker ul li").eq(0).css("backgroundColor","red").end().eq(1).css("backgroundColor","blue");

    $(".colo_piker ul li").click(function () {
    	$("link[href*='colors']").attr("href",$(this).attr("data-value"));
    });
    /*******back top btn****************************************************************************/
    $(window).scroll(function(){
     var topscrht = $(this).scrollTop();
     console.log(topscrht);
     if(topscrht>=700)
     {
     	$("#back_button").show(1000);
     }
     else
     {
     	$("#back_button").hide(1000);
     }

    });

    $("#back_button").click(function(){

        $("html,body").animate({scrollTop : 0},600);
    });


});
$(window).on("load",function(){

$(".loading").fadeOut(1000,function(){
    $("body").css("overflow","auto");


});
	

});