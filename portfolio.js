/*global $ */

$('body').scrollspy({
    target: "#welcome-section",
    offset: 150
});


//collapsing navbar when clicked on mobile
$("#navigationtop a").click(function () {
    'use strict';
    $('.navbar-collapse').collapse('hide');
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 60
    }, 300);
});

function loadprogress(element, color, value) {
    'use strict';
    var bar = new ProgressBar.Circle(element, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 2
        },
        to: {
            color: color,
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = (Math.round(circle.value() * 100) + ' %');
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '100%';
    bar.text.style.color = color;

    bar.animate(value); // Number from 0.0 to 1.0
}

loadprogress(progressjava, "#5382A1", 0.60);
loadprogress(progresspython, "#8B008B", 0.50);
loadprogress(progressc, "#D2691E",0.50);

loadprogress(progresshtml, "#EC662B", 0.40);
loadprogress(progresscss, "#1572B6", 0.35);
loadprogress(progressflask, "#000000",0.35);

loadprogress(progressoracle, "#8B008B",0.35);
loadprogress(progressmongodb, "#8b4513",0.35);


loadprogress(progressgit, "#000080",0.50);

