const menuButton = document.querySelector('.menu-js')

let modal = document.querySelector('.modal-js')
menuButton.addEventListener('click', () => {
  modal.style.display = 'block'
})
let closeButton = document.querySelector('.close')

closeButton.addEventListener('click', () => {
  modal.style.display = 'none'
})
