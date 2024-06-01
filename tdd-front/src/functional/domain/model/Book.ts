import { BookBuilder } from "./builder/BookBuilder";

export class Book {

    private _id: number|null;
    private _author: string;
    private _name: string;

    public constructor(id: number|null, author: string, name: string) {
        this._id = id;
        this._author = author;
        this._name = name;
    }

    public get author(): string {
        return this._author;
    }

    public get name(): string {
        return this._name;
    }

    public set id(id: number) {
        this._id = id;
    }
    
    public get id(): number|null {
        return this._id;
    }

    public static builder(): BookBuilder {
        return new BookBuilder();
    }
}