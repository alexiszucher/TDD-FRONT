import { Book } from "../domain/model/Book";
import type { BookRepository } from "../domain/repository/BookRepository";
import { BookRepositoryImpl } from "../infrastructure/repository/BookRepositoryImpl";

export default class GetBooksService {
    private bookRepository: BookRepository = new BookRepositoryImpl();
    public async get(): Promise<Book[]> {
        return this.bookRepository.getAll();
    }
}