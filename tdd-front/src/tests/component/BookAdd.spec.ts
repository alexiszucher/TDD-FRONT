import { describe, it, expect } from 'vitest'
import BookAddComponent from '@/components/book-add/BookAdd.component';
import { BookRepositoryFake } from '../functional/fake/BookRepositoryFake';
import type { BookRepository } from '@/functional/domain/repository/BookRepository';
import AddBookService from '@/functional/application/AddBookService';
import { Book } from '@/functional/domain/model/Book';

const bookRepository: BookRepository = new BookRepositoryFake();
const component: BookAddComponent = new BookAddComponent(new AddBookService(bookRepository));

describe('Check form validity', () => {
    it('should form is invalid if name field is empty', async () => {
        let name: string = "";
        let author: string = "Robert C. Martin";
        expect(component.formIsValid(author, name)).toBe(false);
    });

    it('should form is invalid if author field is empty', async () => {
        let name: string = "CLEAN CODE";
        let author: string = "";
        expect(component.formIsValid(author, name)).toBe(false);
    });

    it('should form is valid if author and name are valid', async () => {
        let name: string = "CLEAN CODE";
        let author: string = "Robert C. Martin";
        expect(component.formIsValid(author, name)).toBe(true);
    });


});
describe('Add book test', () => {
    it('should add book if form is valid', async () => {
        component.name = "Lou";
        component.author = "Julien Neel";
        await component.submitFormAddBook();
        expect(component.displaySuccessMessage).toBe(true);
        const books: Book[] = await bookRepository.getAll();
        expect(books.some((book) => book.name === "Lou" && book.author === "Julien Neel")).toBe(true);
    });
});

describe('Error message field test', () => {
    it('should display error name message', () => {
        const emptyName: string = '';
        const author: string = 'Julien Neel';
        component.showErrorMessage(author, emptyName);
        expect(component.displayErrorNameMessage).toBe(true);
    });
    it('should display error author message', () => {
        const name: string = 'Lou';
        const emptyAuthor: string = '';
        component.showErrorMessage(emptyAuthor, name);
        expect(component.displayErrorAuthorMessage).toBe(true);
    });
});