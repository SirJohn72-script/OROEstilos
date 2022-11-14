const mobileIcon = document.querySelector('.navbar_mobile')
mobileIcon.addEventListener('click', () => {
  const menu = document.querySelector('.navbar_menu')
  mobileIcon.classList.toggle('navbar_mobile_show')
  menu.classList.toggle('navbar_menu_show')
})
