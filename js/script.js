const menuBtn = document.querySelector(".burger")
const menu = document.querySelector(".menu__list")

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

