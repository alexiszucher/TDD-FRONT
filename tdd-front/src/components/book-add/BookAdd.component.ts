import { Book } from '../../functional/domain/model/Book';
import AddBookService from '@/functional/application/AddBookService';

export default class BookAddComponent {
    private addBookService: AddBookService;
    public author: string = '';
    public name: string = '';
    public displayErrorNameMessage: boolean = false;
    public displayErrorAuthorMessage: boolean = false;
    public displaySuccessMessage: boolean = false;

    constructor(addBookService: AddBookService) {
        this.addBookService = addBookService;
    }

    public async submitFormAddBook() {
        if(this.formIsValid(this.author, this.name)) {
            await this.addBookService.add(Book.builder().withName(this.name).withAuthor(this.author).build()).then((test) => {
                this.displaySuccessMessage = true;
            });
        } else {
            this.showErrorMessage(this.author, this.name);
        }
    }

    public formIsValid(author: string, name: string): boolean {
        if(author && name) {
            return true;
        }
        return false;
    }

    public showErrorMessage(author: string, name: string): void {
        !author ? this.displayErrorAuthorMessage = true : this.displayErrorAuthorMessage = false;
        !name ? this.displayErrorNameMessage = true : this.displayErrorNameMessage = false;
    }
}