// Slider show
const listSliderImage = document.querySelector('.slider-list');
const sliderImages = document.getElementsByClassName('slider-list-img');
const sliderLength = sliderImages.length;
const btnSliderLeft = document.querySelector('.arrow-left');
const btnSliderRight = document.querySelector('.arrow-right');
let sliderIndex = 0; // Biến index cho slider

const handleChangeSlide = () => {
    if (sliderIndex == sliderLength - 1) {
        sliderIndex = 0;
        listSliderImage.style.transform = `translateX(0px)`;
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.dot-' + sliderIndex).classList.add('active');
    } else {
        sliderIndex++;
        let width = sliderImages[0].offsetWidth;
        listSliderImage.style.transform = `translateX(${width * -1 * sliderIndex}px)`;
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.dot-' + sliderIndex).classList.add('active');
    }
};

// Chạy slide tự động sau 5 giây
let sliderInterval = setInterval(handleChangeSlide, 5000);

// Xử lý khi nhấn nút cho slider
btnSliderRight.addEventListener('click', () => {
    clearInterval(sliderInterval);
    handleChangeSlide();
    sliderInterval = setInterval(handleChangeSlide, 5000);
});

btnSliderLeft.addEventListener('click', () => {
    clearInterval(sliderInterval);
    if (sliderIndex == 0) {
        sliderIndex = sliderLength - 1;
        let width = sliderImages[0].offsetWidth;
        listSliderImage.style.transform = `translateX(${width * -1 * sliderIndex}px)`;
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.dot-' + sliderIndex).classList.add('active');
    } else {
        sliderIndex--;
        let width = sliderImages[0].offsetWidth;
        listSliderImage.style.transform = `translateX(${width * -1 * sliderIndex}px)`;
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.dot-' + sliderIndex).classList.add('active');
    }
    sliderInterval = setInterval(handleChangeSlide, 5000);
});




// Playlist slideshow
