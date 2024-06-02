import type { BookRepository } from "@/functional/domain/repository/BookRepository";
import { BookRepositoryImpl } from "../repository/BookRepositoryImpl";

export default class BookRepositoryFactory {
    static create(): BookRepository {
        return new BookRepositoryImpl();
    }
}