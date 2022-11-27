const menuBtn = document.querySelector(".burger")
const menu = document.querySelector(".menu__list")
const header = document.querySelector(".header")

if (menuBtn && menu){
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle('active')
    menu.classList.toggle('active')
  })

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.toggle('active')
      menu.classList.toggle('active')
    })
  })
}

window.addEventListener("scroll", () => {
  window.scrollY > 0 ? header.classList.add('fixed') : header.classList.remove('fixed');
})

function openTechnology(worksTechnology) {
  let i;
  let x = document.getElementsByClassName("works__tabs-inner");
  let btn = document.getElementsByClassName('works__tabs-button')
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    btn[i].classList.remove("active");
  }
  document.getElementsByClassName(worksTechnology)[0].classList.add('active')
  document.getElementById(worksTechnology).style.display = "block";
}