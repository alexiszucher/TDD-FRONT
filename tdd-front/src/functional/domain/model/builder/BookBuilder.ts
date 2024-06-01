import { Book } from "../Book";

export class BookBuilder {

    private _id: number|null = null;
    private _author: string = "";
    private _name: string = "";

    public withId(id: number): BookBuilder {
        this._id = id;
        return this;
    }
    
    public withAuthor(author: string): BookBuilder {
        this._author = author;
        return this;
    }
    
    public withName(name: string): BookBuilder {
        this._name = name;
        return this;
    }
    
    public build(): Book {
        return new Book(this._id, this._author, this._name);
    }
}