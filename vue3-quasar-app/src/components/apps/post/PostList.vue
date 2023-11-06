<template>
  <q-list bordered separator>
    <!-- <q-item v-for="item in items" :key="item.id" clickable>
      <q-item-section>{{ item.id }} - {{ item.title }}</q-item-section>
    </q-item> -->
    <!-- <postItem
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :item="item.title"
    /> -->

    <postItem v-for="item in items" :key="item.id" v-bind="item" />
  </q-list>
</template>

<script setup>
import PostItem from './PostItem.vue';
defineProps({
  items: Array,
  default: () => [],
});
</script>

<style lang="scss" scoped></style>
