<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white text-black">
        <q-avatar>
          <i class="iconfont icon-dianying icon-logo"></i>
        </q-avatar>

        <q-btn stretch flat label="What's Great Movie" />
        <q-btn stretch flat label="电影馆" />
        <q-btn stretch flat label="我的电影" />
        <q-btn stretch flat label="市民广场" />

        <q-space />
        <q-btn stretch flat label="登录" />
        <q-btn stretch flat label="注册" />
      </q-toolbar>
    </q-header>

    <q-page-container style="min-width:1200px;margin:auto">
      <router-view />
    </q-page-container>

    <div class="footer">

      <q-avatar>
        <i class="iconfont icon-dianying icon-logo-footer"></i>
      </q-avatar>

      <div class="text-h5  text-weight-light text-white">What is great movie</div>
      <div class="text-body1 text-weight-light text-white">我们只为告诉你&nbsp;&nbsp;&nbsp;这样的电影与至纯的感动&nbsp;&nbsp;&nbsp;别无其他</div>
      <div class="text-body1 text-weight-light text-white">Copyright ©2020 What'sGreatMovie</div> 
    </div>
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


<style lang="scss" scoped>
.footer {
  background-color: #333333;
  text-align: center;
  padding: 40px 0;
  .icon-logo-footer {
    font-size: 30px;
    color: #ffffff;
  }
  div{
    line-height: 50px;
  }
}
</style>

