import { defineComponent, ref } from 'vue';
import { Book } from '../../domain/model/Book';

export default defineComponent({
    name: 'BookList',
    setup() {
        const books = ref<Book[]>([]);
        books.value = [
            { name: '1984', author: 'George Orwell' },
            { name: 'Brave New World', author: 'Aldous Huxley' },
            { name: 'Fahrenheit 451', author: 'Ray Bradbury' }
        ];

        return {
            books
        };
    }
});