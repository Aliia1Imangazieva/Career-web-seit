document.addEventListener('DOMContentLoaded', function () {
    const mySlider = new Splide('#mySlider', {
        type: 'fade',
        width: '100%',
        perPage: 1,
        pagination: window.innerWidth < 650,
        arrows: window.innerWidth > 650,
        autoplay: true,
        rewind: true
    }).mount()


    window.addEventListener('resize', function () {
        const shouldShowPagination = window.innerWidth < 650;
        const shouldShowArrows = window.innerWidth >= 650;

        if (mySlider.options.pagination !== shouldShowPagination || mySlider.options.arrows !== shouldShowArrows) {
            mySlider.options.pagination = shouldShowPagination;
            mySlider.options.arrows = shouldShowArrows;
            mySlider.refresh();
        }
    });

    mySlider.on('active', function (e) {
        const element = document.querySelectorAll('.sliderContent');
        element[e.index].classList.add('animate__animated', 'animate__fadeInUp');
    });

    mySlider.on('inactive', function (e) {
        const element = document.querySelectorAll('.sliderContent');
        element[e.index].classList.remove('animate__animated', 'animate__fadeOut');
    });
});