const menuBtn = document.querySelector(".header__btn")
const rsideBtn = document.querySelector(".rightside-menu__close")
const body = document.querySelector("body")
const play = document.querySelector(".video__playbtn")
const over = document.querySelector(".overlay")


  rsideBtn.addEventListener("click", () => {
    body.classList.remove('open-menu')
  })

  menuBtn.addEventListener("click", () => {
    body.classList.add('open-menu')
  })
  over.addEventListener("click", () => {
    body.classList.remove('open-menu')
})


if (play){
  play.addEventListener("click", () => {
    play.classList.toggle('active')
  })
}


var myVideo = document.getElementById("myVideo");

function playPause() {
  if (myVideo.paused)
    myVideo.play();
  else
    myVideo.pause();
}







//animation for all sections
function isVisible(elem) {
  let coords = elem.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;
  let topVisible = coords.top >= 0 && coords.top <= windowHeight;
  let bottomVisible = coords.bottom <= windowHeight && coords.bottom >= 0;
  return topVisible || bottomVisible;
}

const sections = document.querySelectorAll('section');
$(window).on("load scroll", function () {
  // Don't run the rest of the code if every section is already visible
  if (!document.querySelectorAll('section:not(.visible)')) return;

  [...sections].map((item, i) => {
    if (isVisible(item)) {
      setTimeout(function () {
        sections[i].classList.add('visible');
      }, 200);
    }
  })
});




// $(".details__progress-line-span").each(function() {
//   $(this).animate(
//     {
//       width: $(this).attr("data-progress") + "%",
//     },
//     2000
//   );
//   // $(this).text($(this).attr("data-progress") + "%");
// });






