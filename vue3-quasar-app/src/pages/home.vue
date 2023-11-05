<template>
  <!-- <div class="text-h4">{{ $route }}</div> -->
  <div class="text-h4">{{ $route.name }}</div>
  <div class="text-h4">{{ $route.meta }}</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

<route lang="yaml">
name: home-page
meta:
  requiresAuth: true
</route>
