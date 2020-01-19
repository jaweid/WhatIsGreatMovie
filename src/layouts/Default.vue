<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white text-black">
        <q-avatar>
          <i class="iconfont icon-dianying icon-logo"></i>
        </q-avatar>

        <!-- <q-toolbar-title> -->
        <!-- What's Great Movie -->
        <!-- </q-toolbar-title> -->
        <q-btn stretch flat label="What's Great Movie" />
        <q-btn stretch flat label="电影馆" />
        <q-btn stretch flat label="我的电影" />
        <q-btn stretch flat label="华山论剑" />

        <q-space />
        <q-btn stretch flat label="登录" />
        <q-btn stretch flat label="注册" />
      </q-toolbar>
    </q-header>

    <q-page-container style="min-width:1200px;margin:auto">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>


export default {
  name: "LayoutDefault",

  data() {
    return {};
  }
};
</script>

