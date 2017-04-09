/**
 * Created by Игорь on 09.04.2017.
 */

var animateNumbers = function (time) {
    return (function () {
        $('.numb').each(function () {
            var $this = $(this),
                countTo = $this.text();
            //alert(countTo);
            $({countNum: 0}).animate({
                    countNum: countTo
                },
                {
                    duration: 3000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
        });
    })();
};
var circleRange = function () {
    if ($('body').scrollTop() + $('header .top_menu').height() * 4 >= $('.skills').offset().top) {
        $('.circle-progress').addClass('animation');
        $(document).off('scroll', circleRange);
    }
}


var countScroll = function () {
    console.log("IF");
    if ($('body').scrollTop() + $('header .top_menu').height() * 4 >= $('.stat').offset().top) {
        animateNumbers(3000);
        $(document).off('scroll', countScroll);
        $(document).on('scroll', circleRange)
    }

}

$(document).on('scroll', countScroll);