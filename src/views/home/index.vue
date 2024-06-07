<template>
  <div>
    {{ userInfo?.username }}
    this is home page
  </div>
  <div class="txt-r">
    <router-link to="/register">没有账号？去注册</router-link>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);
</script>