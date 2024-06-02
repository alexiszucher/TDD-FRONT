<script lang="ts">
import BookAdd from './components/book-add/BookAdd.vue';
import BookList from './components/book-list/BookList.vue';
import { ref } from 'vue';
import './style.scss'

export default {
  name: 'App',
  components: {
    BookList,
    BookAdd
  },
  setup() {
    const componentKey = ref(0);

    const refreshBookList = () => {
      componentKey.value++;
    };

    return {
      componentKey,
      refreshBookList
    };
  }
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6">
        <button data-test="refresh-book-list-button" type="button" @click="refreshBookList" class="btn btn-primary">Rafraichir</button>
      </div>
      <div class="col-6">
        <BookAdd />
      </div>
      <div class="col-12">
        <BookList :key="componentKey" />
      </div>
    </div>
  </div>
</template>