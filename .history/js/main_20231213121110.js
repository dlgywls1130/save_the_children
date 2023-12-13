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

$(document).ready(function() {
    var words = ["탄생", "백일", "첫 옹알이", "첫 뒤집기", "첫 나들이", "첫 이유식", "첫돌", "첫 걸음마", "모든"],
        i = 0;
    var interval = setInterval(function() {
      $('#rollingText').fadeOut(function() {
        $(this).text(words[i++]).fadeIn();
      });
      if (i >= words.length) { // '모든'에 도달했을 때
        clearInterval(interval); // interval을 멈춥니다.
      }
    }, 2000); // 2초마다 변경
  });
  