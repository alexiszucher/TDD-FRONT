import UseCaseResponse from "@/functional/application/UseCaseResponse";
import { Book } from "@/functional/domain/model/Book";
import type { BookRepository } from "@/functional/domain/repository/BookRepository";

export class BookRepositoryFake implements BookRepository {
    private books: Book[] = [];
    private id: number = 0;

    constructor() {
    }

    add(book: Book): Promise<UseCaseResponse<number>> {
        // Simulez une requête API
        this.id++;
        book.id = this.id;
        return new Promise((resolve) => {
            this.books.push(book);
            resolve(UseCaseResponse.createSuccessReponse(this.id));
        });
    }

    getAll(): Promise<Book[]> {
        // Simulez une requête API
        return new Promise((resolve) => {
            resolve(this.books);
        });
    }
}