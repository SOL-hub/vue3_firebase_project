<template>
  <q-page padding>
    <PostLeftBar />
    <PostHeader />
    <PostList :items="posts" />
    <PostRightBar @open-write-dialog="openWriteDialog" />
    <PostWriteDialog
      :model-value="postDialog"
      @update:model-value="val => (postDialog = val)"
    />
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { getPosts } from 'src/services';
import { useAsyncState } from '@vueuse/core';

import PostList from 'src/components/apps/post/PostList.vue';
import PostHeader from './components/PostHeader.vue';
import PostLeftBar from './components/PostLeftBar.vue';
import PostRightBar from './components/PostRightBar.vue';
import PostWriteDialog from 'src/components/apps/post/PostWriteDialog.vue';

const router = useRouter();
// const goPostDetails = id => router.push(`/posts/${id}`);

const { state: posts } = useAsyncState(getPosts, [], {
  throwError: true,
});

const postDialog = ref(false);
const openWriteDialog = () => {
  postDialog.value = true;
};
</script>

<style lang="scss" scoped>
.mainpage-container {
  display: flex;
}

.center-wrap {
  flex-direction: column;
}

.left-wrap,
.right-wrap {
  flex-grow: 1;
}
</style>
