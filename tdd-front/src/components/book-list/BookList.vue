<template>
    <div>
        <h1 data-test="book-list-title">Liste des livres</h1>
        <table data-test="book-list-table">
            <thead>
                <td data-test="book-list-table-author-column">Auteur</td>
                <td data-test="book-list-table-name-column">Nom</td>
            </thead>
            <tbody>
                <tr data-test="book-list-table-row" v-for="book in books" :key="book.name">
                    <td data-test="book-list-table-author-cell">{{ book.author }}</td>
                    <td data-test="book-list-table-name-cell">{{ book.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import BookList from './BookList';
export default BookList;
</script>