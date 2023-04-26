function applyTopPadding() {
    // Update various absolute positions to match where the main container
    // starts. This is necessary for handling multi-line nav headers, since
    // that pushes the main container down.
    var offset = $('#main-container').offset();
    $('html').css('scroll-padding-top', offset.top + 'px');
    $('.bs-sidebar.affix').css('top', offset.top + 'px');
}
$(document).ready(function() {
    applyTopPadding();
})
$(window).on('resize', applyTopPadding);
