<template>
  <q-page padding>
    <div class="text-h4">home</div>
    <section class="q-gutter-y-sm q-mt-lg">
      <q-card v-for="id in 100" :key="id">
        <q-card-section>{{ id }}번 게시글</q-card-section>
      </q-card>
    </section>
  </q-page>
  <!-- <div class="text-h4">{{ $route }}</div> -->
  <!-- <div class="text-h4">{{ $route.name }}</div> -->
  <!-- <div class="text-h4">{{ $route.meta }}</div> -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

<route lang="yaml">
name: home-page
meta:
  requiresAuth: true
  width: 600px
</route>
