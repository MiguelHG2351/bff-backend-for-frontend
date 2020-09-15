import './style/index.css'
import UI from './UI'

const form = document.getElementById('form')

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI()
    ui.renderBook()
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