<template>
  <PostList :items="posts" />
</template>

<script setup>
import PostList from 'src/components/apps/post/PostList.vue';

const posts = Array.from(Array(3), (_, index) => ({
  id: 'A' + index,
  title: 'vue3 test' + index,
  content:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quo facilis eligendi distinctio neque. Mollitia, eaque enim officiis magnam aut esse voluptates maiores et quod nesciunt ipsum sunt ut',
  likeCount: 3,
  readCount: 1,
  bookmarkCount: 4,
  tags: ['html', 'css', 'javascript'],
  uid: 'uid',
  category: '카테고리' + index,
}));
</script>

<style lang="scss" scoped></style>
