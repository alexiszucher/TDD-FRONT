import UseCaseResponse from "@/functional/application/UseCaseResponse";
import { Book } from "@/functional/domain/model/Book";
import type { BookRepository } from "@/functional/domain/repository/BookRepository";
import BookDatabase from "../database/BookDatabase";

export class BookRepositoryImpl implements BookRepository {
    public id: number = 3;
    constructor() {}

    add(book: Book): Promise<UseCaseResponse<number>> {
        this.id++;
        book.id = this.id;
        // Simulez une requête API
        return new Promise((resolve) => {
            BookDatabase.books.push(book);
            if(book.id) {
                return resolve(UseCaseResponse.createSuccessReponse(book.id));
            }
        });
    }

    getAll(): Promise<Book[]> {
        // Simulez une requête API
        return new Promise((resolve) => {
            setTimeout(() => {
            resolve(BookDatabase.books);
            }, 100);
        });
    }
}