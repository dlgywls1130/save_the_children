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
    
    // 마지막 단어를 설정하고 interval을 멈추기 전에 실행될 함수입니다.
    function updateText() {
      $('#rollingText').text(words[i]);
      if (i >= words.length - 1) { // 마지막 요소에 도달했는지 확인합니다.
        clearInterval(interval); // 마지막 요소에 도달했다면 interval을 멈춥니다.
      } else {
        i++; // 아직 마지막 요소에 도달하지 않았다면 인덱스를 증가시킵니다.
      }
    }
  
    // 페이지 로드 시 첫 번째 단어를 즉시 설정합니다.
    updateText();
  
    // setInterval을 사용하여 주기적으로 updateText 함수를 호출합니다.
    var interval = setInterval(updateText, 2000); // 2초마다 텍스트를 업데이트합니다.
  });
  
  