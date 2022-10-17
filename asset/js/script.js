$(document).ready(function () {
    function loop() {
        $('.hero').animate({
            'top': '50px'
        }, 1000, function () {
            $('.hero').animate({
                'top': 0
            }, 1000, function () {
                loop()
            })
        })
    }
    loop()
})