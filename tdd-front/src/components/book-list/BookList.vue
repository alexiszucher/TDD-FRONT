<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import BookListComponent from './BookList.component';
import BookRepositoryFactory from '@/functional/infrastructure/factory/BookRepositoryFactory';
import GetBooksService from '@/functional/application/GetBooksService';
import type { Book } from '@/functional/domain/model/Book';

export default defineComponent({
  name: 'BookList',
  setup() {
    const component = ref<BookListComponent>(new BookListComponent(new GetBooksService(BookRepositoryFactory.create())));

    onMounted(async () => {
        await component.value.getBooks();
    });

    return {
      component,
    };
  },
});

</script>

<template>
    <div>
        <h1 data-test="book-list-title">Liste des livres</h1>
        <table data-test="book-list-table" class="table table-striped">
            <thead>
                <td data-test="book-list-table-author-column">Auteur</td>
                <td data-test="book-list-table-name-column">Nom</td>
            </thead>
            <tbody>
                <tr data-test="book-list-table-row" v-for="book in component.books" :key="book.name">
                    <td data-test="book-list-table-author-cell">{{ book.author }}</td>
                    <td data-test="book-list-table-name-cell">{{ book.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>