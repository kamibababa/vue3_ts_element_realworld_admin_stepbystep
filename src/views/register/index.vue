<template>
  <div>
    <el-form ref="formRef" :model="user" :rules="rules" label-width="86px">
      <h3 class="title">系统注册</h3>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="user.username" placeholder="请输入用户名" prefix-icon="user"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="user.email" placeholder="请输入邮箱" prefix-icon="message"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password" type="password" placeholder="请输入密码" prefix-icon="lock"></el-input>
      </el-form-item>
      <el-form-item label>
        <el-button type="primary" @click="doRegister">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { register } from '@/api';
import { ref, computed } from 'vue'
import type { User } from '@/types';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
const { setUser } = userStore;
const router = useRouter();
const user = ref<User>({
  email: '',
  username: '',
  password: ''
});
const formRef = ref();
const rules = computed(() => {
  return {
    email: {
      required: true,
      message: '请输入邮箱',
      trigger: ["change", "blur"],
    },
    password: {
      required: true,
      min: 4,
      message: '密码至少4位',
      trigger: ["change", "blur"],
    }
  }
});

const doRegister = () => {
  formRef.value.validate(async (valid: any) => {
    if (!valid) return;
    try {
      const res = await register({ user: user.value });
      setUser(res.data.user);

      router.push({ name: 'Home' });
    } catch (error) {

    }
  })
}
</script>
<style lang="scss"></style>