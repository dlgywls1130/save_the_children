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

const words = ["탄생", "백일", "첫 옹알이", "첫 뒤집기", "첫 나들이", "첫 이유식", "첫돌", "첫 걸음마", "모든"];
let index = 0;
const element = document.getElementById("rollingText");

function updateText() {
    element.classList.remove("animate-text");
    // 브라우저가 CSS 변경을 감지하도록 잠시 대기
    setTimeout(() => {
        element.innerText = words[index];
        element.classList.add("animate-text");
        index++;
        if (index < words.length) {
            setTimeout(updateText, 2000); // 2초마다 텍스트 변경
        }
    }, 50); // CSS 변경 감지 대기 시간
}

setTimeout(updateText, 2000); // 첫 번째 변경을 위한 초기 지연