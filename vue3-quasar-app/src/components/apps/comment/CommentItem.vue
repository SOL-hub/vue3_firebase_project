<template>
  <q-item class="q-py-md">
    <q-item-section side top>
      <q-avatar size="md">
        <img src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <div class="flex text-caption">
        <span>솔솔</span>
        <span class="q-mx-xs">&middot;</span>
        <span class="text-grey-6">1일 전</span>
      </div>

      <div class="q-mt-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam cumque
        numquam, mollitia cum voluptatem maxime voluptate ratione aut magnam
        aperiam quos, nisi incidunt officia recusandae repudiandae magni tempora
        delectus facere!
      </div>
    </q-item-section>
    <q-item-section side top>
      <q-btn flat color="grey" icon="sym_o_delete" round dense />
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
