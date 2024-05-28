import { Book } from '../../../../functional/domain/model/Book';
import { describe, it, expect } from 'vitest'

describe('Book Object Test', () => {
    it('should create a book object with author and name', () => {
        let book: Book = new Book('Auteur1', 'Nom1');
        expect(book.author).toBe('Auteur1');
        expect(book.name).toBe('Nom1');
    });
})
  