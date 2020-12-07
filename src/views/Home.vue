<!--
 * @Author: cbw
 * @Date: 2020-07-25 16:23:48
 * @Description: file content
-->
<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>cbw后台</div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <!-- 侧边栏菜单 -->
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>用户管理</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="1-4-1">
              <i class="el-icon-location"></i>
              用户列表</el-menu-item
            >
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>权限管理</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="1-4-1">
              <i class="el-icon-location"></i>
              角色列表</el-menu-item
            >
            <el-menu-item index="1-4-1">
              <i class="el-icon-location"></i>
              权限列表</el-menu-item
            >
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 左侧主题 -->

      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("./login");
      this.$message.success("退出成功");
    }
  }
};
</script>
<style lang="scss" scoped>
.home-container {
  height: 100%;
  color: #fff;
  .el-header {
    background-color: #373d41;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .el-aside {
    background-color: #333744;
  }
  .el-mian {
    background-color: #eaedf1;
  }
}
</style>
