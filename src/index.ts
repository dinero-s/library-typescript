interface iBook {
    title: string,
    description: string,
    authors: string,
    favorite: string,
    fileCover: string,
    fileName: string,
    comments: string
}

abstract class BooksRepository {
    abstract createBook(book: iBook): void
    abstract getBook(id: number): iBook | null
    abstract getBooks(): iBook[]
    abstract updateBook(id: number, updatedBook: iBook): void
    abstract deleteBook(id: number): void
}