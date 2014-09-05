$(document).ready(function() {
// a dropdown for every element in class circle
    $('.circle').click(function(e) {
        // grab last class of this
        var classes = $(this).attr("class").split(/\s/);
        var classes = classes[classes.length - 1];
        // hide all other spoilers (to force only one appearing at a time)
        $('div.spoiler').not('div.'+classes).slideUp();
        // toggle this spoiler
        $('div.'+classes).slideToggle();
        e.preventDefault();
    });
// a dropdown for courses
    $('a.berkeley').click(function(e) {
        $('#berkeley-courses').slideToggle();
        e.preventDefault();
    });
    $('a.harvard').click(function(e) {
        $('#harvard-courses').slideToggle();
        e.preventDefault();
    });
});
