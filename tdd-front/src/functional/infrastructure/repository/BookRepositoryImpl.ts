import { Book } from "@/functional/domain/model/Book";
import type { BookRepository } from "@/functional/domain/repository/BookRepository";

export class BookRepositoryImpl implements BookRepository {
    getAll(): Promise<Book[]> {
        let books: Book[] = [];
        books.push(new Book('George Orwell', '1984'));
        books.push(new Book('Aldous Huxley', 'Brave New World'));
        books.push(new Book('Ray Bradbury', 'Fahrenheit 451'));
        // Simulez une requête API
        return new Promise((resolve) => {
            setTimeout(() => {
            resolve(books);
            }, 1000);
        });
    }
}