import { Book } from '@/functional/domain/model/Book';
import GetBooksService from '../../../functional/application/GetBooksService'
import { describe, it, expect } from 'vitest'
import { BookRepositoryFake } from '../fake/BookRepositoryFake';
import type { BookRepository } from '@/functional/domain/repository/BookRepository';

let bookRepository: BookRepository = new BookRepositoryFake();
bookRepository.add(Book.builder().withAuthor("George Orwell").withName("1984").build());
bookRepository.add(Book.builder().withAuthor("Aldous Huxley").withName("Brave New World").build());
bookRepository.add(Book.builder().withAuthor("Ray Bradbury").withName("Fahrenheit 451").build());

describe('Service get books test', () => {
    it('should return books', async () => {
        let getBooksService: GetBooksService = new GetBooksService(bookRepository);
        let books: Book[] = await getBooksService.get();
        expect(books).toBeInstanceOf(Array);
        expect(books.filter((book) => book.author === 'George Orwell').length).toBeGreaterThan(0);
        expect(books.filter((book) => book.name === 'Brave New World').length).toBeGreaterThan(0);
        expect(books.filter((book) => book.name === 'Fahrenheit 451').length).toBeGreaterThan(0);
    });
});