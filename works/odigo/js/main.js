const menuBtn = document.querySelector(".menu-close__btn")
const menu = document.querySelector(".menu-small")

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