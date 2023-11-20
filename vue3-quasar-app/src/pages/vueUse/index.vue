<template>
  <q-page padding>
    <div class="text-h4">useAsyncState</div>
    <q-separator spaced />
    <p>isLoading: {{ isLoading }}</p>
    <p>error: {{ error }}</p>
    <p>isReady: {{ isReady }}</p>
    <button @click="handleButton">execute</button>
    <p>{{ state }}</p>
  </q-page>
</template>

<script setup>
import axios from 'axios';
import { useAsyncState } from '@vueuse/core';

const { state, isLoading, error, isReady, execute } = useAsyncState(
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(Response => Response.data),
  { name: '솔' },
  { immediate: false },
);

const handleButton = () => {
  execute(1000);
};
</script>

<style lang="scss" scoped></style>
