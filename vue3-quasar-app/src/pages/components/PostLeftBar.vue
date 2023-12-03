<template>
  <StickySideBar>
    <p class="text-h4">
      기능, 컴포넌트 먼저 작업하기, UI 퍼블리싱은 그 후에 진행
    </p>
    <q-card flat bordered>
      <q-list borderd separator>
        <q-item clickable v-ripple :active="true">
          <q-item-section>전체</q-item-section>
        </q-item>

        <q-item v-for="cate in categories" :key="cate.value" clickable v-ripple>
          <q-item-setion>{{ cate.label }}</q-item-setion>
        </q-item>
      </q-list>
    </q-card>
  </StickySideBar>
</template>

<script setup>
import StickySideBar from 'src/components/StickySideBar.vue';
import { getCategories } from 'src/services/category';

const categories = getCategories();
</script>
