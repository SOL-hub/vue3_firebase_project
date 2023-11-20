<template>
  <q-dialog persistent v-bind="$attrs" @hide="onHide">
    <q-card :style="{ width: '660px' }">
      <q-toolbar>
        <q-toolbar-title>글쓰기</q-toolbar-title>
        <q-btn v-close-popup flat round dense icon="close" />
      </q-toolbar>
      <q-separator />
      <!-- <PostForm
        v-model:title="form.title"
        v-model:category="form.category"
        v-model:content="form.content"
        :loading="isLoading"
        @submit="handleSubmit"
      /> -->

      <PostForm
        v-model:title="form.title"
        v-model:category="form.category"
        v-model:content="form.content"
        v-model:tags="form.tags"
        :loading="isLoading"
        @submit="
          execute(1000, {
            ...form.value,
            uid: authStore.uid,
          })
        "
      />
      <q-separator />
    </q-card>
  </q-dialog>
</template>

<script>
const getInitialForm = () => ({
  title: '',
  category: '',
  content: '',
  tags: [],
});
</script>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPost } from 'src/services/posts';
import { useAsyncState } from '@vueuse/core';
import { useAuthStore } from 'src/stores/auth';
import PostForm from 'src/components/apps/post/PostForm.vue';
import { auth } from 'src/boot/firebase';

const router = useRouter();
const authStore = useAsyncState();
const form = ref(getInitialForm());

const onHide = () => {
  form.value = getInitialForm();
  tagField.value = '';
};

const { isLoading, execute } = useAsyncState(createPost, null, {
  immediate: false,
  throwError: true,
  onSuccess: postId => {
    console.log('postId:', postId);
    router.push(`/posts/${postId}`);
  },
});

// const handleSubmit = async () => {
//   await execute(1000, {
//     ...form.value,
//     uid: authStore.uid,
//   });
// };
</script>

<style lang="scss" scoped></style>
