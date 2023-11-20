<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">회원가입</div>
    <q-form class="q-gutter-y-md" @submit.prevent="handleSubmit">
      <q-input
        placeholder="닉네임"
        outlined
        dense
        v-model="form.nickname"
        hide-bottom-space
        :rules="[validateRequired]"
      />
      <q-input
        placeholder="이메일"
        outlined
        dense
        hide-bottom-space
        v-model="form.email"
        :rules="[validateRequired, validateEmail]"
      />
      <q-input
        type="password"
        placeholder="비밀번호(문자, 숫자조합 8자 이상)"
        outlined
        dense
        hide-bottom-space
        v-model="form.password"
        :rules="[validateRequired, validatePassword]"
      />
      <q-input
        type="password"
        placeholder="비밀번호 확인"
        outlined
        dense
        hide-bottom-space
        v-model="passwordConfirm"
        :rules="[
          validateRequired,
          val => validatePasswordConfirm(form.password, val),
        ]"
      />

      <q-btn
        type="submit"
        label="가입하기"
        class="full-width"
        unelevated
        color="primary"
        :loading="isLoading"
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
import { useAsyncState } from '@vueuse/core';
import {
  validateRequired,
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
} from 'src/utils/validate-rules';
const emit = defineEmits(['chang;eView', 'closeDialog']);

const $q = useQuasar();

const { isLoading, execute } = useAsyncState(signUpWithEmail, null, {
  immediate: false,
  onSuccess: () => {
    $q.notify('가입을 환영합니다.💕');
    $q.notify('이메일에서 인증 링크를 확인해주세요.💕');
    emit('closeDialog');
  },
  onError: err => {
    $q.notify({
      type: 'negative',
      message: getErrorMessage(err.code),
    });
  },
});

const passwordConfirm = ref('');
const form = ref({
  email: '',
  password: '',
  nickname: '',
});

const handleSubmit = () => execute(1000, form.value);

// const handleSubmit = async () => {
//   await signUpWithEmail(form.value);
//   $q.notify('가입을 환영합니다.💕');
//   $q.notify('이메일에서 인증 링크를 확인해주세요.💕');
//   emit('closeDialog');
// };
</script>

<style lang="scss" scoped></style>
