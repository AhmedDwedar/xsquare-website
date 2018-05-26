$(".hone").click(function(){
        $(".pone").fadeToggle('fast');
    }); 
$(".htwo").click(function(){
        $(".ptwo").fadeToggle('fast');
    });
$(".hthree").click(function(){
        $(".pthree").fadeToggle('fast');
    });
$(".hfour").click(function(){
        $(".pfour").fadeToggle('fast');
    });

 $("#annually").click(function(){
     $(".numone").text("24");
     $(".numtwo").text("108");
     $("#annually").addClass("active");
     $("#monthly").removeClass("active");
     
 });

$("#monthly").click(function(){
    $(".numone").text("30");
    $(".numtwo").text("135");
    $("#monthly").addClass("active");
    $("#annually").removeClass("active");
    
});

$("#signin").click(function(){
    $(".down").removeClass('down');
});


