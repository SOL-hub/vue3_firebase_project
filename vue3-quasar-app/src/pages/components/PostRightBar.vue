<template>
  <StickySideBar>
    <q-btn
      unelevated
      color="primary"
      text-color="white"
      class="full-width post-btn"
      @click="$emit('openWriteDialog')"
    >
      <img src="../../assets/icons/pen.svg" />

      <span class="text-weight-bold">새 글 작성하기</span>
    </q-btn>
    <q-card class="q-mt-md bg-grey-1" bordered flat>
      <q-card-section class="flex items-center q-pb-none">
        <div class="text-weight-bold">태그</div>
        <q-space />
        <q-btn icon="refresh" dense size="sm" flat round color="grey" />
      </q-card-section>

      <q-card-section class="q-pb-sm">
        <q-card class="q-px-sm" bordered flat sqare>
          <q-input
            borderless
            dense
            input-style="font-size: 12px;"
            placeholder="태그로 검색해보세요."
          />

          <div class="q-gutter-sm q-pb-sm">
            <q-btn
              size="10px"
              padding="2px 4px 2px 7px"
              color="grey-3"
              text-color="dark"
              unelevated
              >vuejs
              <q-icon name="clear" size="12px" color="grey" />
            </q-btn>

            <q-btn
              size="10px"
              padding="2px 4px 2px 7px"
              color="grey-3"
              text-color="dark"
              unelevated
              >react
              <q-icon name="clear" size="12px" color="grey" />
            </q-btn>
          </div>
        </q-card>
      </q-card-section>

      <q-list class="tag-wrap">
        <q-item
          v-for="tag in tags"
          :key="tag.name"
          clickable
          dense
          class="tag-box"
        >
          <q-item-section class="text-teal text-caption">{{
            tag.name
          }}</q-item-section>
          <q-item-section side class="text-teal text-caption">{{
            tag.count
          }}</q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </StickySideBar>
</template>

<script setup>
import { ref } from 'vue';
import StickySideBar from 'src/components/StickySideBar.vue';

defineEmits(['openWriteDialog']);

const tags = ref([
  { name: '태그1', count: 10 },
  { name: '태그2', count: 4 },
  { name: '태그3', count: 2 },
]);
</script>

<style lang="scss" scoped>
.post-btn {
  margin: 12px auto;
  padding: 0.5rem 0.75rem;

  @include justifyPosition(center);
}
</style>
