import { Book } from "../domain/model/Book";
import type { BookRepository } from "../domain/repository/BookRepository";
import type UseCaseResponse from "./UseCaseResponse";

export default class AddBookService {
    private bookRepository: BookRepository;

    constructor(bookRepository: BookRepository) {
        this.bookRepository = bookRepository;
    }

    public async add(book: Book): Promise<UseCaseResponse<number>> {
        return this.bookRepository.add(book);
    }
}