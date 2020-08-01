<!--
 * @Author: cbw
 * @Date: 2020-07-25 16:23:48
 * @Description: file content
-->
<template>
  <div class="home">
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("./login");
      this.$message.success("退出成功");
    }
  }
};
</script>
