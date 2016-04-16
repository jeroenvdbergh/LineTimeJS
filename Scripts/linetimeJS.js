$(document).ready(function () {

    var opts = $.extend({}, $.fn.initTimelineObjects.defaults);

    $(".timeline-object").each(function (index, value) {
        if (index % 2 == 0){
            $(this).addClass("col-lg-4 col-lg-offset-2 col-xs-10 col-xs-offset-1 col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-0");
            $(this).css({"border-color": "#C1E0FF",
                "border-width":"15px",
                "border-style":"solid",
                "border-bottom": "none",
                "border-left": "none",
                "border-top": "none",
                "padding-right": "0px",//Remove bootstrap padding so the canvas is directly next to the middle line
            });
        }else{
            $(this).addClass("col-lg-4 col-lg-offset-6 col-xs-10 col-xs-offset-1 col-md-5 col-md-offset-6 col-sm-6 col-sm-offset-6");
            $(this).css({"border-color": "#C1E0FF",
                "border-width":"15px",
                "border-style":"solid",
                "border-bottom": "none",
                "border-right": "none",
                "border-top": "none",
                "padding-left": "0px",//Remove bootstrap padding so the canvas is directly next to the middle line
            });
        }

        switch((index) % 4 ){
            case 0:
                $(this).css({"border-color": opts.firstColor});
                setBackgroundColor(this, opts.firstColor);
                break;

            case 1:
                $(this).css({"border-color": opts.secondColor});
                setBackgroundColor(this, opts.secondColor);
                break;

            case 2:
                $(this).css({"border-color": opts.thirdColor});
                setBackgroundColor(this, opts.thirdColor);
                break;

            case 3:
                $(this).css({"border-color": opts.fourthColor});
                setBackgroundColor(this, opts.fourthColor);
                break;
        }
    });

    function setBackgroundColor(container, color){
        var color = hexToRgb(color);

        $(container).css({"background-color": "rgba(" + color.r + "," + color.g + "," + color.b + ", 0.3)"});
    }
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
        ctx.canvas.width = opts.circleRadius + opts.strokeWeight + 15;
        ctx.canvas.height = opts.circleRadius + opts.strokeWeight;

        ctx.beginPath();
        ctx.arc(opts.circleRadius / 2 + (opts.strokeWeight/2), opts.circleRadius / 2 + (opts.strokeWeight/2), opts.circleRadius / 2, 0, 2 * Math.PI);
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
        strokeColor: "#CC6134"
    };

    $.fn.initTimelineObjects = function (options) {

        var opts = $.extend({}, $.fn.initTimelineObjects.defaults, options);
        var colorIndex = 1;

        $(".timeline-object").each(function (index, value) {
            $(this).css('height', opts.height);
            var canvas = $('<canvas/>');//.width(300).height(150);

            canvas.css('margin', 'auto');
            canvas.css('display', 'block');
            canvas.css('background-color', '#000');
            canvas.css('position', 'absolute');
            canvas.css('top', '25%');
            if (index % 2 == 0) {

                canvas.css('right', '0');

            }else {
                canvas.css('left', '0');
            }


            var ctx = canvas[0].getContext("2d");

            ctx.canvas.width = opts.lineLength;
            ctx.canvas.height = opts.lineWeight;

            switch((index) % 4 ){
                case 0:
                    ctx.fillStyle = opts.firstColor;
                    break;

                case 1:
                    ctx.fillStyle = opts.secondColor;
                    break;

                case 2:
                    ctx.fillStyle = opts.thirdColor;
                    break;

                case 3:
                    ctx.fillStyle = opts.fourthColor;
                    break;
            }
            ctx.fillRect(0,0,120,10);




            $(this).append(canvas);
        });

        return this;
    };

    $.fn.initTimelineObjects.defaults = {
        height: 300,
        lineWeight: 4,
        lineLength: 50,
        firstColor: "#EF9F07",
        secondColor: "#B03060",
        thirdColor: "#096AB1",
        fourthColor: "#80A852"
    };

}(jQuery));

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}