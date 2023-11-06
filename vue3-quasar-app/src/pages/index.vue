<template>
  <q-page padding>
    <div class="text-h4">커뮤니티 목록</div>
    <section class="q-gutter-y-sm q-mt-lg">
      <q-list bordered separator>
        <!-- <q-item v-for="post in posts" :key="post.id" clickable>
          <q-item-section>{{ post.id }} - {{ post.title }}</q-item-section>
        </q-item> -->
        <PostList :items="posts" />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
        quo facilis eligendi distinctio neque. Mollitia, eaque enim officiis
        magnam aut esse voluptates maiores et quod nesciunt ipsum sunt ut
        repellat.
      </q-list>
    </section>
    <!-- <ul>
      <li>
        <router-link to="/posts/1">1번 게시글</router-link>
      </li>
    </ul> -->
  </q-page>
</template>

<script setup>
import { route } from 'quasar/wrappers';
import { useRouter } from 'vue-router';

import PostList from 'src/components/apps/post/PostList.vue';

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
