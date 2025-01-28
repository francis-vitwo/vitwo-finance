
(function (w, d, s, c, r, a, m) {
    w['KiwiObject'] = r;
    w[r] = w[r] || function () {
        (w[r].q = w[r].q || []).push(arguments);
    };
    w[r].l = 1 * new Date();
    a = d.createElement(s);
    m = d.getElementsByTagName(s)[0];
    a.async = 1; // Allow the script to load asynchronously
    a.src = c + "?v=1.0.0"; // Static version for caching
    m.parentNode.insertBefore(a, m);
})(window, document, 'script', "https://app.interakt.ai/kiwi-sdk/kiwi-sdk-17-prod-min.js", 'kiwi');

window.addEventListener("load", function () {
    kiwi.init('', 'UGuGJU1VZu9nC9YgIxeSQp6XsTyGvD4V', {});
});


/*OWL-Carousel*/

$(document).ready(function () {
    $("#owl-demo").owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        navText: [
            '<i class="fas fa-arrow-left"></i>',
            '<i class="fas fa-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1023: {
                items: 4
            }
        }
    });
});
