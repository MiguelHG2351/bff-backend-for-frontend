const { Router } = require('express')

const router = Router()
const { unlink } = require('fs-extra')
const path = require("path")

const Books = require('../models/Books')

router.get('/', async (req, res) => {
    const books = await Books.find()
    res.json(books)
})

router.post('/', async (req, res) => {
    const { title, author, isbn } = req.body
    const imagePath = '/uploads/' + req.file.filename
    const newBoook = await Books({title, author, isbn, imagePath})
    newBoook.save()
    console.log(newBoook)
    res.json({message: 'message recived'})
})

router.delete('/:id', async (req, res) => {
    const book = await Books.findByIdAndDelete(req.params.id)
    unlink(path.resolve('./backend/public/'+ book.imagePath))
    res.json({message: 'deleted'})
})

module.exports = router