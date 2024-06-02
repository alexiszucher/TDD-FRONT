<script lang="ts">
    import { defineComponent, onMounted, ref } from 'vue';
    import BookAddComponent from './BookAdd.component';
import AddBookService from '@/functional/application/AddBookService';
import BookRepositoryFactory from '@/functional/infrastructure/factory/BookRepositoryFactory';

    export default defineComponent({
        name: 'BookAdd',
        setup() {
            let component = ref<BookAddComponent>(new BookAddComponent(new AddBookService(BookRepositoryFactory.create())));
            return {
                component
            };
        }
    });
</script>

<template>
    <div>
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Auteur du livre</label>
                <input v-model="component.author" data-test="book-add-author-field" type="text" class="form-control" name="author" placeholder="Auteur">
                <div data-test="book-add-error-author-message" v-if="component.displayErrorAuthorMessage" class="form-text text-danger">L'auteur du livre est incorrect</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Nom du livre</label>
                <input v-model="component.name" data-test="book-add-name-field" type="text" class="form-control" name="name" placeholder="Nom">
                <div data-test="book-add-error-name-message" v-if="component.displayErrorNameMessage" class="form-text text-danger">Le nom du livre est incorrect</div>
            </div>
            <button type="button" data-test="book-add-submit-button" @click="component.submitFormAddBook()" class="btn btn-success">Ajouter</button>
            <div data-test="book-add-success-message" v-if="component.displaySuccessMessage" class="form-text text-success">Le livre a bien été créé !</div>
        </form>
    </div>
</template>