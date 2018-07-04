$('.accordion').click(function(){

    if ($('#checkbox1').is(':checked')) {
        $(this).toggleClass('active');
        $(this).next().toggleClass('show');
    }

    else {
        if( $(this).hasClass('active') ){
            $(this).removeClass('active');
            $(this).next().removeClass('show');
        }

        else {
            $('.accordion').removeClass('active');
            $('.tab').removeClass('show');
            $(this).addClass('active');
            $(this).next().addClass('show');
        }
    }

});