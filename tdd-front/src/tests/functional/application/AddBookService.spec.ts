import { Book } from '@/functional/domain/model/Book';
import GetBooksService from '../../../functional/application/GetBooksService'
import { describe, it, expect } from 'vitest'
import type UseCaseResponse from '@/functional/application/UseCaseResponse';
import AddBookService from '@/functional/application/AddBookService';
import type { BookRepository } from '@/functional/domain/repository/BookRepository';
import { BookRepositoryFake } from '../fake/BookRepositoryFake';

let bookRepository: BookRepository = new BookRepositoryFake();
const BOOK_CLEAN_CODE = Book.builder().withName('Clean Code').withAuthor('Robert C. Martin').build();

describe('Service add book test', () => {
    it('should add book', async () => {
        let addBookService: AddBookService = new AddBookService(bookRepository);
        let response: UseCaseResponse<Number> = await addBookService.add(BOOK_CLEAN_CODE);
        expect(response.success).toBe(true);
        let getBooksService: GetBooksService = new GetBooksService(bookRepository);
        let books: Book[] = await getBooksService.get();
        expect(books.filter((book) => book.name === 'Clean Code').length).toBeGreaterThan(0);
    });
})