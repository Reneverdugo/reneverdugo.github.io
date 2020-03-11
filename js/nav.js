
$( document ).ready(function() {
    $('.active a.clickable').on("click", function (e) {
        if ($(this).hasClass('panel-collapsed')) {
            // expand the panel
            $(this).parents('.active').find('.collapsein').slideDown();
            $(this).removeClass('panel-collapsed');
            $(this).find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
        }
        else {
            // collapse the panel
            $(this).parents('.active').find('.collapsein').slideUp();
            $(this).addClass('panel-collapsed');
            $(this).find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
        }
    });
    });