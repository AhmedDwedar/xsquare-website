//jQuery is required to run this code
$( document ).ready(function() {

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


//scroll section 
  $(document).ready(function(){
            $('#fullpage').fullpage();
      //make page scroll top when refreash
      window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
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
$(".en").click(function(){
    location.reload();
});
// lang button
$(".ar").click(function(){
    //price page
    
    $("#PRICINGhead").text("الاسعار");
    $("#p-annually").text("الاشتراك السنوي");
    $("#p-monthly").text("الاشتراك الشهري");
    $("#p-basic").text("الباقة الأساسية");
    $("#p-start").text("للشهر تدفع سنوياً");
    $("#p-permonth").text("500 منتج");
    $("#p-import-one").text("وصف المنتجات بلغة واحدة");
    $("#p-prodct-one").text("حديث المخزون كل 24 ساعة");
    $("#p-sync-one").text("$1 رسوم معالجة الطلب");
    $("#p-stores-one").text("الربط مع متجر واحد");
    $("#p-order-one").text("دورات تدريبية بالبريد الإلكتروني");
    $("#p-training").text("دعم عبر البريد الالكتروني");
    $("#p-email").text("الربط مع متجر واحد");
    $("#select-p").text("اختر");
    $("#p-premium").text("الباقة المميزة");
    $("#p-everything").text("للشهر تدفع سنوياً");
    $("#p-per").text("10,000 منتج");
    $("#p-improttwo").text("وصف المنتجات بلغتين");
    $("#p-prodcttwo").text("تحديث المخزون كل 12 ساعة");
    $("#p-sync").text("$0 رسوم معالجة الطلب");
    $("#p-stores").text("الربط مع متجرين");
    $("#p-order").text("دورات تدريبية اونلاين");
    $("#p-online").text("دعم عبر الشات و البريد الإلكتروني");
    $("#p-chat").text("دورات تدريبية اونلاين");
    $("#p-select").text("اختر");
    $("#p-firms").text("باقة الشركات");
    $("#p-enterprise").text("للشركات التي تتجاوز مبيعاتها مليون دولار سنوياً");
    $("#p-custom").text("عملاء");
    $("#p-custom").css("fontSize" , "80px");     
    $("#p-access").text("وصول لكافه المنتجات");
    $("#p-description").text("وصف المنتجات بأربع لغات");
    $("#p-sync-three").text("تحديث آني للمخزون");
    $("#p-stores-three").text("$0 رسوم معالجة الطلب");
    $("#p-per-three").text("عدد متاجر غير محدود");
    $("#p-special").text("دورات تدريبية متخصصة");
    $("#p-dedicated").text("دعم عبر مدير للحساب");
    $("#p-contact").text("اتصل بنا");
    //magrin buton
    $(".con").css("marginTop" , "30px"); 
    $("#p-which").text("ماهي اللغات التي تدعمها قنوات؟");
    $("#p-administrative").text("لوحة التحكم، المحتوى الخاص بالمنتجات وفواتير المبيعات؛ من الممكن أن تكون بلغتين أو أربع لغات تبعا لنوع باقتك، ");
    $("#p-What").text("ما هو المقصود بتحديث كمية المخزون؟");
    $("#p-integrated").text("بالنسبة لربط متجرك بقاعدة بيانات الموردين والمنتجات، سوف نقوم بعملية تحديث آلي لكمية المخزون المتوفرة؛ مرة كل يوم أو مرة كل ساعة تبعا لنوع باقتك.");
    $("#p-meant").text("ما هو المقصود بـ نظام تحديد الأرباح الآلي و نظام التسعير المتكامل؟");
        $("#p-s").text("نظام تحديد الأرباح الألي");
        $("#p-ss").text(": يتيح لك تخصيص نسبة الربح التي ترغب بها كصاحب متجر ويقوم النظام آليا بإضافتها على أسعار الجملة دون الحاجة لتسعير كل صنف على حدة");
        $("#p-a").text("نظام التسعير المتكامل");
        $("#p-aa").text("آلية تفصيلية لتخصيص استراتيجية تسعير المنتجات وتحديد نسب الخصومات والعروض وفقا لمعايير مالية دقيقة (نوع المنتج، تكلفة المنتج، أسعار المنافسين، …..)");
    $("#p-how").text("كم هي مدة عقدي؟");
    $("#p-knawat").text("بالنسبة لربط متجرك بقاعدة بيانات الموردين والمنتجات، سوف نقوم بعملية تحديث آلي لكمية المخزون المتوفرة؛ مرة كل يوم أو مرة كل ساعة تبعا لنوع باقتك.");
    // feature
   
    $("#f-p").text("لدينا ما يكفي من المميزات التي تلبي طموحاتك");
    $("#w-Features").text("المميزات");
    $("#-development").text("التدريب و التطوير");
    $("#f-success").text("نقدم لك مجموعة من الدروس والنصائح الدورية في مهارات التسويق الإلكتروني وكيفية استخدام أدواته في الترويج لمتجرك، ذلك من شأنه أن يساعدك على النجاح في زيادة مبيعاتك حتى لو لم تكن تمتلك الخبرة الكافية.");
    $("#f-complete").text("التوصيل لعملائك مباشرة");
    $("#f-derect").text("نقوم بتجهيز وتوصيل منتجات عملائك مباشرة، هذا من شأنه أن يوفر في قيمة الشحن خصوصا عندما يحوي الطلب منتجات لمجموعة من الموردين، حينها نقوم بتجميع المنتجات ثم تغليفها وشحنها كـ “طلب واحد” بعد إرفاق فاتورة متجرك الخاص.");
    $("#f-handle").text("مواكبة الموضة");
    $("#f-lastest").text("نواكب أحدث صيحات الموضة والأزياء من خلال تحديث أسبوعي لجديد المنتجات المتوفرة لدى موردينا. هذه الميزة تجعلك متقدما بخطوات على العديد من المتاجر الإلكترونية والمتاجر التقليدية المنافسة، كما تمثل لك مصدر تميز أمام عملائك.");
    $("#f-update").text("تحديث آلي للكميات");
    $("#f-auto-update").text("تحديث آلي يومي لكميات المنتجات المتوفرة في مستودعات الموردين، وذلك من خلال نظام أتوماتيكي “Real Time Sync” يربط ما بين مستودعات موردينا وما بين قاعدة البيانات المشتركة بين قنوات ومورديها وعملائها.");
    $("#f-our").text("لا وجود للمخاطر");
    $("#risk").text("قنوات تمنحك الفرصة لزيادة عدد مورديك أو البدء بمشروعك الخاص بدون أي مخاطر، إن اشتراكك في خدمة قنوات لا يترتب عليه أي التزامات مستقبلية في حال أردت إيقاف الخدمة، يمكنك التوقف في أي وقت تشاء وبدون أي شروط.");
     $("#risk").css("fontSize" , " 20px");
    $("#f-gives").text("منتجاتنا بعدة لغات");
    $("#f-always").text("ستكون بامان دائما معنا");
    $("#f-Multilingual").text("وصف المنتجات متوفر بعدة لغات (التركية، العربية، الإنجليزية، الفرنسية) هذه الميزة تمكنك من توسيع نطاق عملك التسويقي ولا تكون محصور في شريحة واحدة فقط بل يمكنك استهداف شرائح مجتمعية مختلفة ومناطق جغرافية أوسع.");
    $("#f-product").text("ادفع بعد أن تبيع");
    $("#f-pay").text("احصل على المنتج بنظام البيع تحت التصريف، سدد لنا قيمة المنتج بعد أن يدفع لك الزبون واحتفظ بربحك الخاص. هذه الميزة لا تستنزف رأس مالك؛ وتجنبك الاحتفاظ بالموديلات التي لا تلقى رواجا بين زبائنك، بينما تركز على توفير المنتجات الأكثر طلبا.");
    $("#f-drop").text("ربط متجرك بقاعدة بياناتنا");
    $("#f-store").text("إذا كنت تمتلك متجر إلكتروني سوف نقوم بربطه مباشرة بقاعدة بياناتنا الخاصة والتي تحوي شبكة الموردين وجميع المنتجات.");
    $("#f-will").text("الشحن لكافة أنحاء العالم");
    $("#f-get").text("ادفع بعد أن تبيع");
    $("#f-worldwide").text("الشحن لكافة أنحاء العالم");
    $("#f-development").text("تدريب و تطوير");
   $(".one").css("paddingTop" , "60px");
   $(".ar").css("paddingRight" , "50px");

    
    $("#f-market").text("لا تجعل الجغرافيا عائق يقف في طريقك؛ نقوم بتجهيز وشحن منتجات عملائك إلى كافة أنحاء العالم، يمكنك دائما استهداف شرائح مجتمعية و مناطق جغرافية جديدة، هنالك دائما أسواق ناشئة وعملاء جدد بحاجة إلى منتجات متجرك.");
    //navbar
    $("#special-home").text("الرئيسيه");
    $("#special-feature").text("المميزات");
    $("#special-price").text("الاسعار");
    $("#log").text("الدخول");
    $(".s-Registration").text("التسجيل");

});
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

