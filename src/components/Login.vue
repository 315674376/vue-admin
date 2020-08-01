<!--
 * @Author: cbw
 * @Date: 2020-08-01 17:58:00
 * @Description: file content
-->
<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="@/assets/logo.png" alt />
      </div>
      <!-- 登录表单 -->
      <el-form
        ref="loginFormRef"
        style="margin-top: 80px;"
        class="login_form"
        :model="loginForm"
        :rules="loginFormRules"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="iconfont icon-user"
          />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="iconfont icon-password"
            type="password"
          />
        </el-form-item>

        <!-- 按钮 -->
        <el-form-item>
          <el-button type="primary" @click="login()">登录</el-button>
          <el-button type="info" @click="resetLoginForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        username: "zs",
        password: "123"
      },
      // 这是表单的验证规则
      loginFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
      // 参数为一个回调函数。该回调函数会在校验结束后被调用，
      // 并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise
      this.$refs.loginFormRef.validate(valid => {
        // console.log(valid);
        if (!valid) return;
        let p = new Promise((resolve, reject) => {
          let flag = Math.random();
          setTimeout(() => {
            flag
              ? resolve({
                  id: 1,
                  token: "token123",
                  mobile: "1234567"
                })
              : reject("登录失败");
          }, 1000);
        });
        // this.$message(p);
        p.then(
          // 这里的res就相当于resolve的别名
          res => {
            this.$message.success("登录成功");
            console.log(res);
            window.sessionStorage.setItem("token", res.token);
            this.$router.push("/home");
          },
          reject => {
            this.$message.error(reject);
          }
        );
      });
    },
    resetLoginForm() {
      console.log(this.$refs.loginFormRef);
      // 重制表单
      this.$refs.loginFormRef.resetFields();
    }
  }
};
</script>
<style lang="scss" scoped>
.login_container {
  height: 100%;
  background-color: #2b4b6b;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    .login_form {
      padding: 20px;
    }
    .avatar_box {
      height: 130px;
      width: 130px;
      border: 1px solid #eee;
      padding: 10px;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }
}
</style>
