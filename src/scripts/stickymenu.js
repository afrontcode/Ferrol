$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('.m-header').addClass('fix-header');
    }
    else {
        $('.m-header').removeClass('fix-header');
    }
});