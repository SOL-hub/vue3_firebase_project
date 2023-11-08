<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">회원가입</div>
    <q-form class="q-gutter-y-md" @submit.prevent="handleSubmit">
      <q-input placeholder="이메일" outlined dense v-model="form.email" />
      <q-input
        type="password"
        placeholder="비밀번호(문자, 숫자조합 8자 이상)"
        outlined
        dense
        v-model="form.password"
      />
      <q-input placeholder="닉네임" outlined dense v-model="form.nickname" />
      <q-btn
        type="submit"
        label="가입하기"
        class="full-width"
        unelevated
        color="primary"
      />

      <q-separator />
      <q-btn
        label="로그인하기"
        class="full-width"
        unelevated
        flat
        @click="$emit('changeView', 'SignInForm')"
      />
    </q-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { signUpWithEmail } from 'src/services';
import { useQuasar } from 'quasar';
const emit = defineEmits(['chang;eView', 'closeDialog']);

const $q = useQuasar();

const form = ref({
  email: '',
  password: '',
  nickname: '',
});

const handleSubmit = async () => {
  await signUpWithEmail(form.value);
  $q.notify('가입을 환영합니다.💕');
  emit('closeDialog');
};
</script>

<style lang="scss" scoped></style>
