$(document).ready(function () {

    $(".timeline-object").each(function (index, value) {
        if (index % 2 == 0){
            $(this).addClass("col-lg-4 col-lg-offset-2 col-xs-10 col-xs-offset-1 col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-0");
            $(this).css({"border-color": "#C1E0FF",
                "border-width":"15px",
                "border-style":"solid",
                "border-bottom": "none",
                "border-left": "none",
                "border-top": "none"});
        }else{
            $(this).addClass("col-lg-4 col-lg-offset-6 col-xs-10 col-xs-offset-1 col-md-5 col-md-offset-6 col-sm-6 col-sm-offset-6");
            $(this).css({"border-color": "#C1E0FF",
                "border-width":"15px",
                "border-style":"solid",
                "border-bottom": "none",
                "border-right": "none",
                "border-top": "none"});
        }
    });
});

(function ($) {

    $.fn.startTimeline = function (options) {

        var opts = $.extend({}, $.fn.startTimeline.defaults, options);

        var canvas = $('<canvas/>');//.width(300).height(150);
        canvas.css('padding', 0);
        canvas.css('margin', 'auto');
        canvas.css('display', 'block');

        (this).append(canvas);

        var ctx = canvas[0].getContext("2d");
        ctx.canvas.width = opts.circleRadius + 2 * opts.strokeWeight;
        ctx.canvas.height = opts.circleRadius + 2 * opts.strokeWeight;

        ctx.beginPath();
        ctx.arc(opts.circleRadius / 2 + opts.strokeWeight, opts.circleRadius / 2 + opts.strokeWeight, opts.circleRadius / 2, 0, 2 * Math.PI);
        ctx.lineWidth = opts.strokeWeight;
        ctx.strokeStyle = opts.strokeColor;
        ctx.stroke();
        ctx.fillStyle = opts.color;
        ctx.fill();

        return this;
    };

    $.fn.startTimeline.defaults = {
        circleRadius: 100,
        color: "#FFC024",
        strokeWeight: 4,
        strokeColor: "#9B14E7"
    };

    $.fn.initTimelineObjects = function (options) {

        var opts = $.extend({}, $.fn.initTimelineObjects.defaults, options);

        $(".timeline-object").each(function (index, value) {
            $(this).css('height', opts.height);
            var canvas = $('<canvas/>');//.width(300).height(150);

            canvas.css('margin', 'auto');
            canvas.css('display', 'block');
            canvas.css('background-color', '#000');
            if (index % 2 == 0) {

                canvas.css('float', 'right');

            }else {
                canvas.css('float', 'left');
            }


            var ctx = canvas[0].getContext("2d");

            ctx.canvas.width = opts.circleRadius + 2 * opts.strokeWeight;
            ctx.canvas.height = opts.circleRadius + 2 * opts.strokeWeight;

            $(this).append(canvas);
        });

        return this;
    };

    $.fn.initTimelineObjects.defaults = {
        height: 300,
        circleRadius: 100,
        strokeWeight: 4,
        strokeColor: "#9B14E7"
    };

}(jQuery));