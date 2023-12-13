// slide
$(document).ready(function(){
    $('.se04_slide').slick({
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="./img/arrow_p.png" alt="Previous"></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="./img/arrow_n.png" alt="Next"></button>'
    });
  });



// acodian

const accordionItem = document.querySelectorAll(".accordion-item");

    accordionItem.forEach((el) =>
        el.addEventListener("click", () => {
            if (el.classList.contains("active")) {
                el.classList.remove("active");
            } else {
                accordionItem.forEach((el2) => el2.classList.remove("active"));
                el.classList.add("active");
            }
        })
    );



//rolling
document.addEventListener('DOMContentLoaded', function () {
    var words = ['백일', '첫 옹알이', '첫 뒤집기', '첫 나들이', '첫 이유식', '첫돌', '첫 걸음마', '모든'];
    var index = 0;
    var rollingText = document.getElementById('rollingText');

    function updateText() {
        // 애니메이션 클래스를 항상 추가
        rollingText.classList.add('animate-text');

        rollingText.textContent = words[index++];
        if (index === words.length) {
            clearInterval(intervalId); // 모든 단어가 표시되면 롤링 중지
        }
    }

    // 초기에는 애니메이션 클래스를 제거
    rollingText.classList.remove('animate-text');

    var intervalId = setInterval(updateText, 3000); // 필요에 따라 간격 조정
});
