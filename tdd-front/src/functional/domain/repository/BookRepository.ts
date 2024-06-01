import type UseCaseResponse from "@/functional/application/UseCaseResponse";
import type { Book } from "../model/Book";

export interface BookRepository {
    getAll(): Promise<Book[]>;
    add(book: Book): Promise<UseCaseResponse<number>>
}