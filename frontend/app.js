import './style/index.css'
import UI from './UI'

const form = document.getElementById('form')
const sidenav = document.getElementById('sidenav')
const toggleMenu = document.getElementById('toggle-menu')
const overlay = document.getElementById('overlay')

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI()
    ui.renderBook()
})

toggleMenu.addEventListener('click', () => {
    overlay.classList.toggle('active')
    sidenav.classList.toggle('active')
})

overlay.addEventListener('click', () => {
    overlay.classList.remove('active')
    sidenav.classList.remove('active')
})

form.addEventListener('submit', e => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const ui = new UI()
    ui.addNewBook(formData)
})

const bookContainer = document.getElementById("container-card")
.addEventListener('click', (e) => {
    const ui = new UI()
    let attribute;
    if(e.target.classList.contains('btn-delete')) {
        attribute = e.target.getAttribute('_id')
        console.log(attribute)
        ui.deleteBook(attribute)
    }
    e.preventDefault()
})