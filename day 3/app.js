const closeB = document.getElementById('close')
const openB = document.getElementById('menu')
const container = document.querySelector('.container')

openB.addEventListener('click', () => container.classList.add('show-nav'))
closeB.addEventListener('click', () => container.classList.remove('show-nav'))