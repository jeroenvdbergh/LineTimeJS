$( document ).ready(function() {

    $.fn.startTimeline.defaults.circleRadius = 50;
    $.fn.startTimeline.defaults.strokeWeight = 10;

    $("#timeline-start").startTimeline();

    $.fn.initTimelineObjects(300);

});