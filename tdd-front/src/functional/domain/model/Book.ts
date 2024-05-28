export class Book {

    private _author: string;
    private _name: string;

    constructor(author: string, name: string) {
        this._author = author;
        this._name = name;
    }

    public get author(): string {
        return this._author;
    }

    public get name(): string {
        return this._name;
    }
}