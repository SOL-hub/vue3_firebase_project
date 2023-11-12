<template>
  <StickySideBar>
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
const categories = [
  {
    label: 'test1',
    value: 'value',
  },
  {
    label: 'test2',
    value: 'value',
  },
  {
    label: 'test3',
    value: 'value',
  },
];
</script>
