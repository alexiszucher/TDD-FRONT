import { Book } from "@/functional/domain/model/Book";
import type { BookRepository } from "@/functional/domain/repository/BookRepository";

export class BookRepositoryImpl implements BookRepository {
    private books: Book[] = [];

    constructor() {
        this.books.push(new Book('George Orwell', '1984'));
        this.books.push(new Book('Aldous Huxley', 'Brave New World'));
        this.books.push(new Book('Ray Bradbury', 'Fahrenheit 451'));
    }

    getAll(): Promise<Book[]> {
        // Simulez une requête API
        return new Promise((resolve) => {
            setTimeout(() => {
            resolve(this.books);
            }, 1000);
        });
    }
}