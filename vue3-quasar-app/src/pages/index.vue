<template>
  <q-page padding>
    <div class="row q-gutter-x-lg">
      <aside class="col-grow">
        <PostLeftBar />
      </aside>
      <section class="col-7">
        <PostHeader />
        <PostList :items="posts" />
      </section>
      <PostRightBar />
    </div>
  </q-page>
</template>

<script setup>
import { route } from 'quasar/wrappers';
import { useRouter } from 'vue-router';

import PostList from 'src/components/apps/post/PostList.vue';
import PostHeader from './components/PostHeader.vue';
import PostLeftBar from './components/PostLeftBar.vue';
import PostRightBar from './components/PostRightBar.vue';

const router = useRouter();
const goPostDetails = id => router.push(`/posts/${id}`);

const posts = Array.from(Array(20), (_, index) => ({
  id: 'index',
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
