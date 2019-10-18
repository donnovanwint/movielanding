const menuTarget = document.querySelector('[data-menu-toggle]')
const menu = document.querySelector('[data-menu]')

menuTarget.addEventListener('click', (event) => {
  event.preventDefault()
  menuTarget.querySelector('svg').classList.toggle('text-brand')
  menu.classList.toggle('hidden')
})
