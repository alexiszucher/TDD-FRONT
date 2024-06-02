import { Book } from "@/functional/domain/model/Book";

export default class BookDatabase {
    public static books: Book[] = [
        Book.builder().withId(1).withAuthor("George Orwell").withName("1984").build(),
        Book.builder().withId(2).withAuthor("Aldous Huxley").withName("Brave New World").build(),
        Book.builder().withId(3).withAuthor("Ray Bradbury").withName("Fahrenheit 451").build()
    ];
}