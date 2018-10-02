$(document).ready(() => {
    const $navBar = $('.navbar');
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
    $('.tooltip').on('mouseenter', function(event){
        $('.tooltip').find('div').removeClass('refu').addClass('refa');
    });
    $('.tooltip').on('mouseleave', function(event){
        $('.tooltip').find('div').removeClass('refa').addClass('refu');
    });
    const $stud = $('#stud');
    const $navRight = $stud.find('nav');
    const $studies = $stud.find('div')
    $stud.on('mouseenter',function(event){
        $studies.addClass('nav-active');
        $studies.animate({ fontSize: '18px' }, 200);
        $navRight.removeClass('refu');
        /*$navRight.on('mouseleave',function(){
            $navRight.addClass('refu');
        });*/
    });
    $stud.on('mouseleave', function(event){
        $studies.removeClass('nav-active');
        $studies.animate({ fontSize: '14px' }, 200);
        $navRight.addClass('refu');
    });
    
    
    
});