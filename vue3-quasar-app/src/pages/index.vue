<template>
  <q-page padding>
    <!-- 칼럼사이에 간격넣기 q-col-gutter-x-lg -->
    <div class="row q-col-gutter-x-lg">
      <!-- col-grow 나머지 모두 차지 -->
      <PostLeftBar class="col-grow" />
      <section class="col-7">
        <PostHeader />
        <PostList :items="posts" />
      </section>
      <PostRightBar class="col-3" @open-write-dialog="openWriteDialog" />
    </div>
    <PostWriteDialog v-model="postDialog" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { route } from 'quasar/wrappers';
import { useRouter } from 'vue-router';

import PostList from 'src/components/apps/post/PostList.vue';
import PostHeader from './components/PostHeader.vue';
import PostLeftBar from './components/PostLeftBar.vue';
import PostRightBar from './components/PostRightBar.vue';
import PostWriteDialog from 'src/components/apps/post/PostWriteDialog.vue';

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

const postDialog = ref(false);

const openWriteDialog = () => {
  postDialog.value = true;
};
</script>

<style lang="scss" scoped></style>
