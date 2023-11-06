<template>
  <q-layout view="lHh Lpr lff" class="bg-grey-2">
    <q-header bordered class="bg-white text-grey-9">
      <!-- <q-toolbar class="justify-between" > -->
      <q-toolbar>
        <q-btn flat dense to="/">
          <q-toolbar-title>
            <q-avatar>
              <img
                src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
              />
            </q-avatar>
            솔솔
          </q-toolbar-title>
        </q-btn>

        <q-space />

        <!-- <div> -->
        <q-btn stretch flat label="Home" to="/home" />
        <q-btn
          stretch
          flat
          label="Link"
          href="https://google.com"
          target="_blank"
        />
        <q-btn
          stretch
          flat
          label="Link"
          href="https://google.com"
          target="_blank"
        />
        <q-btn
          stretch
          flat
          label="Link"
          href="https://google.com"
          target="_blank"
        />

        <q-separator class="q-my-md q-mr-md" vertical />
        <q-btn
          unelevated
          rounded
          color="primary"
          label="로그인 / 회원가입"
          @click="openAuthDialog"
        ></q-btn>
        <!-- </div> -->
      </q-toolbar>
    </q-header>

    <q-page-container :style="pageContainerStyles">
      <router-view />
    </q-page-container>

    <AuthDialog v-model="authDialog" />
  </q-layout>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import AuthDialog from 'src/components/auth/AuthDialog.vue';

const route = useRoute();
//debugger;

const pageContainerStyles = computed(() => ({
  maxWidth: route.meta?.width || '1080px',
  margin: '0 auto',
}));

const authDialog = ref(false);
const openAuthDialog = () => (authDialog.value = true);
</script>
