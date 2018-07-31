$(function () {
    $('.header_nav').css('top','100px');
    setStar();
    $('.container_box>div').smoove({
        offset:'10%',
        moveY:'150px'
    });
    $('.star li:nth-child(odd)').smoove({
        offset:'10%',
        moveX:'150px'
    });
    $('.star li:nth-child(even)').smoove({
        offset:'10%',
        moveX:'-150px'
    });
    $('.service li').smoove({
        offset:'3%',
        moveY:'150px'
    });
    $(window).scroll(function () {
        var $window = $(window).height();
        var scrollTop = $(document).scrollTop();
        var results = $(".results").offset().top - $window;
        var about = $(".about").offset().top - $window;
        if(scrollTop>90){
            $('.header_nav').css('top','0');
        }else {
            $('.header_nav').css('top','100px');
        }
        if (scrollTop >= results) {
            $(".results .clear").addClass("animateds infinite leftSpeedIn");
        }else{
            $(".results .clear").removeClass("animateds infinite leftSpeedIn");
        }
        if (scrollTop >= about) {
            $(".about .clear").addClass("animateds infinite flipInX");
        }else{
            $(".about .clear").removeClass("animateds infinite flipInX");
        }
    });

});
$(window).resize(setStar);
function setStar() {
    var h=$('#star_1').height();
   $('.star li').css('height',h+'px');
   $('.star li img').css('height',h+'px');
}
