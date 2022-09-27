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

