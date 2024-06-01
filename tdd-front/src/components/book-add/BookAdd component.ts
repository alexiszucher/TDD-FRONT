import { Book } from '../../functional/domain/model/Book';
import GetBooksService from '@/functional/application/GetBooksService';

export default class BookAddComponent {
    private getBooksService: GetBooksService;
    public books: Book[] = [];

    constructor() {
        this.getBooksService = new GetBooksService();
        this.getBooks();
    }

    async addBook() {
        this.books = await this.getBooksService.get();
    }
}