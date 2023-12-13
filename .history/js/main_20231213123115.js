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
        rollingText.style.animation = 'none'; // Reset animation
        rollingText.offsetHeight; // Trigger reflow to restart animation
        rollingText.style.animation = null; // Restart animation

        rollingText.textContent = words[index++];
        if (index === words.length) {
            clearInterval(intervalId); // Stop the rolling when the last word is displayed
        }
    }

    var intervalId = setInterval(updateText, 3000); // Adjust the interval as needed
});
