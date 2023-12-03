<template>
  <q-list bordered separator class="item-wrap">
    <postItem
      v-for="item in items"
      :key="item.id"
      v-bind="item"
      class="item-box"
    />
  </q-list>
</template>

<script setup>
import PostItem from './PostItem.vue';
defineProps({
  items: Array,
  default: () => [],
});
</script>

<style lang="scss" scoped>
.item-wrap {
  display: flex;
  gap: 0.5rem;
}

.item-box {
  min-width: 20rem;
  padding: 1rem;

  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
