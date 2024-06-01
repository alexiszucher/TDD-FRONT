<script lang="ts">
</script>

<template>
    <div>
        <form>
            <input data-test="book-add-author-field" type="text" name="name" placeholder="Nom" />
            <input data-test="book-add-name-field" type="text" name="author" placeholder="Auteur" />
            <button data-test="book-add-submit-button" :click="addBookSubmit()">Ajouter</button>
        </form>
    </div>
</template>