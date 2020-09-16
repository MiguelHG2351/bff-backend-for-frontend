class BooksServices {
    constructor() {
        this.URI = '/api/books'
    }

    async getBooks() {
        const response = await fetch(this.URI)
        const data = await response.json()
        return data
    }

    async postBooks(book) {
        const response = await fetch(this.URI, {
            method: 'POST',
            body: book
        })
        const data = await response.json()
    }

    async deleteBook(bookId) {
        const res = await fetch(`${this.URI}/${bookId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'Delete'
        });
        const data = await res.json();
        console.log(data);
    }

}

export default BooksServices