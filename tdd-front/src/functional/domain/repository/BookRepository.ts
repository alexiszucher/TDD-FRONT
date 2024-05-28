import type { Book } from "../model/Book";

export interface BookRepository {
    getAll(): Promise<Book[]>;
}