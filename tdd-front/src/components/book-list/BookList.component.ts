import { defineComponent, ref } from 'vue';
import { Book } from '../../functional/domain/model/Book';
import GetBooksService from '@/functional/application/GetBooksService';

export default class BookListComponent {
    private getBooksService: GetBooksService;
    public books: Book[] = [];

    constructor() {
        this.getBooksService = new GetBooksService();
        this.getBooks();
    }

    async getBooks() {
        this.books = await this.getBooksService.get();
    }
}