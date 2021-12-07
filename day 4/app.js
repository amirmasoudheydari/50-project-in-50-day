const search = document.getElementById('search')
const input = document.getElementById('sInput')
const button = document.getElementById('sBtn')

button.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
})