import { Book } from '@/functional/domain/model/Book';
import GetBooksService from '../../../functional/application/GetBooksService'
import { describe, it, expect } from 'vitest'

describe('Service get books test', () => {
    it('should return books', async () => {
        let getBooksService: GetBooksService = new GetBooksService();
        let books: Book[] = await getBooksService.get();
        expect(books).toBeInstanceOf(Array);
        expect(books.filter((book) => book.author === 'George Orwell').length).toBeGreaterThan(0);
        expect(books.filter((book) => book.name === 'Brave New World').length).toBeGreaterThan(0);
        expect(books.filter((book) => book.name === 'Fahrenheit 451').length).toBeGreaterThan(0);
    });
})