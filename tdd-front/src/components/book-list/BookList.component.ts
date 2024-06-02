import { Book } from '../../functional/domain/model/Book';
import GetBooksService from '@/functional/application/GetBooksService';
import type AddBookListener from '../listener/AddBookListener';

export default class BookListComponent {
    private getBooksService: GetBooksService;
    public books: Book[] = [];

    constructor(getBooksService: GetBooksService) {
        this.getBooksService = getBooksService;
    }

    async getBooks(): Promise<void> {
        this.books = await this.getBooksService.get();
    }
}