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
  
    setInterval(function() {
      $('#rollingText').fadeOut(function() {
        $(this).text(words[i = (i + 1) % words.length]).fadeIn();
      });
      // 마지막 단어에 도달했을 때 애니메이션을 멈추고 싶다면 여기에 조건문을 추가하세요.
      if (i === words.length - 1) {
        $('#rollingText').css('animation', 'none');
        clearInterval(this);
      }
    }, 2000); // 여기서 2000은 롤링 간격을 의미합니다 (2초).
  });