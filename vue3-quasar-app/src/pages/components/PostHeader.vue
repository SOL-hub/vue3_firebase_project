<template>
  <div class="flex items-center q-mb-lg">
    <div class="text-h5">커뮤니티 목록</div>
    <q-tabs narrow-indicator dense>
      <q-tab :rapple="false" label="최신순" name="createTime" />
      <q-tab :rapple="false" label="조회순" name="readCount" />
      <q-tab :rapple="false" label="좋아요순" name="likeCount" />
    </q-tabs>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
