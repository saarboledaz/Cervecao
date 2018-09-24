$(document).ready(() => {
    const $navBar = $('#navbar');
    const $navElements = $navBar.find('li');
    $navElements.on('mouseenter', function (event) {
        $(event.currentTarget).addClass('nav-active');
        $(event.currentTarget).animate({ fontSize: '18px' }, 200);
    });
    $navElements.on('mouseleave', function (event) {
        $(event.currentTarget).removeClass('nav-active');

        $(event.currentTarget).animate({ fontSize: '14px' }, 0);
    });
    const $contactButton = $('.contact');
    $contactButton.on('mouseenter', function (event) {
        $(event.currentTarget).addClass('nav-active');
        $(event.currentTarget).animate({ fontSize: '18px' }, 200);
    });
    $contactButton.on('mouseleave', function (event) {
        $(event.currentTarget).removeClass('nav-active');
        $(event.currentTarget).animate({ fontSize: '14px' }, 200);

    });
    
});