$(function() {
    $('.toggles button').click(function(){
        var get_id = this.id;
        var get_current = $('.posts .' + get_id);

        $('.post').not(get_current).hide(500);
        get_current.show(500);
    });

    $('#showall').click(function() {
        $('.post').show(500);
    });
});

$('.owl-carousel').owlCarousel({
    nav:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})