<template>
  <q-list bordered separator class="q-mt-lg bg-white">
    <CommentItem v-for="item in items" :key="item.id" v-bind="item" />
  </q-list>
</template>

<script setup>
import CommentItem from './CommentItem.vue';
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped></style>
