//jQuery is required to run this code
$( document ).ready(function () {
    "use strict";
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}

$(document).ready(function(){
    // function to add hover to pwoerld svg + line1 + li 1
   $("#pworld, #li1 , #world").mouseover(function(){
       $("#li1, #pworld").css("color", "blue");
       $("#line1,#world").css("fill", "blue");
   });
   $("#pworld , #li1, #world").mouseout(function(){
        $("#li1 , #pworld").css("color","black");
        $("#line1 , #world").css("fill","gray");
   });
    // function to add hover to li2 + line2 + mine + pmine
     $("#li2, #mine, #pmine").mouseover(function(){
        $("#li2, #pmine").css("color","blue");
        $("#line2, #mine").css("fill","blue");
    });
    $("#li2, #mine, #pmine").mouseout(function(){
        $("#li2, #pmine").css("color","black");
        $("#line2,#mine").css("fill","gray");
    });
    // function to add hover  to li3 + line3 + hand + phand
    $("#li3 , #hand, #phand").mouseover(function(){
    $("#li3 , #phand").css("color","blue");
    $("#line3 , #hand").css("fill","blue"); 
    });
    $("#li3 , #hand, #phand").mouseout(function(){
    $("#li3 , #phand").css("color","black");
    $("#line3 , #hand").css("fill", "gray");
     });
    // function to add hover  to li4 + line4 + check + pcheck
    $("#li4 ,#pcheck , #check").mouseover(function(){
       $("#li4,#pcheck").css("color","blue");
       $("#line4 ,#check ").css("fill","blue");
   });
    $("#li4 ,#pcheck , #check").mouseout(function(){
        $("#li4,#pcheck").css("color","black");
       $("#line4 ,#check ").css("fill","gray");
    });
    // function to add hover  to li5 + line5 + flag + pflag
    $("#li5 ,#pflag , #flag").mouseover(function(){
       $("#li5,#pflag").css("color","blue");
       $("#line5 ,#flag ").css("fill","blue");
   });
    $("#li5 ,#pflag , #flag").mouseout(function(){
        $("#li5,#pflag").css("color","black");
       $("#line5 ,#flag ").css("fill","gray");
    });
    // function to add hover  to li6 + line6 + circle + pcircle
    $("#li6 ,#pcircle , #circle").mouseover(function(){
       $("#li6,#pcircle").css("color","blue");
       $("#line6 ,#circle ").css("fill","blue");
   });
    $("#li6 ,#pcircle , #circle").mouseout(function(){
        $("#li6,#pcircle").css("color","black");
       $("#line6 ,#circle ").css("fill","gray");
    });
    // nav pills small screen
    $("#tabs li").click(function(){
       var myId = $(this).attr("id");
        $(this).removeClass("inactive").siblings().addClass("inactive");
        $(".my-container div").hide();
        $("#" + myId + "-content").fadeIn(500);
    });
});



// to make section site map display 
$("#sitemap").click(function(){
    $(".sitemap").toggle('sitemap')
    
});
$("#company").click(function(){
    $(".company").toggle('company')
});
$("#community").click(function(){
    $(".community").toggle('community')
});
$("#integration").click(function(){
    $(".integration").toggle('integration')
});
$("#language").click(function(){
    $(".language").toggle('language')
});

//

  //pricres
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
// mine list
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

// change navbar color
$('#fullpage').fullpage({
    onLeave: function (index, nextIndex, direction){
        var leavingSection = $(this);
        
        	//after leaving section 2
        if(index == 1 && direction == 'down'){
            $("#fp-navgation").addClass('navbar-inverse'); 
            $("#fp-navgation").removeClass('navbar-default');
        }
        else if (index == 2 && direction == 'up'){
			$("#fp-navgation").removeClass('navbar-inverse');
			$("#fp-navgation").addClass('navbar-default');
        }
    }
});

//scroll section 
  $(document).ready(function () {
      //make page scroll top when refreash
      window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
        });

