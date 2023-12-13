// slide
$(document).ready(function(){
    $('.se04_slide').slick({
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: $('.slick-prev'), // 이전 버튼 커스텀 클래스
        nextArrow: $('.slick-next'), // 다음 버튼 커스텀 클래스
        centerMode: true,
    });
  });