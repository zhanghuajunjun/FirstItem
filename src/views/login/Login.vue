<template>
  <div class="container pos-re">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="150px"
      class="demo-ruleForm"
    >
      <div class="title">欢迎来到小爱后台管理系统</div>
      <el-form-item label="请输入用户名" prop="userName">
        <el-input v-model="ruleForm.userName" autocomplete="off" class="el-input"></el-input>
      </el-form-item>
      <el-form-item label="请输入密码" prop="passWord">
        <el-input
          type="password"
          v-model="ruleForm.passWord"
          autocomplete="off"
          class="el-input"
        ></el-input>
      </el-form-item>  
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" class="submit">立即登录</el-button>
        <el-button type="primary" @click="regForm('ruleForm')" class="reg">立即注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {},
  data() {
    return {
      ruleForm: {
        uesrName: "",
        passWord: "",
      },
      rules: {
        uesrName: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          },
          {
            min: 2,
            max: 10,
            message: "用户名在2-10位之间",
            trigger: "blur"
          }
        ],
        passWord: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            min: 6,
            max: 15,
            message: "密码在6-10位之间",
            trigger: "blur"
          }
        ],
      }
    };
  },
  components: {},
  methods: {
    regForm() {
      this.$router.push("/register");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  background: url("../../../loginbg.png") #2e98fb 50% 50% no-repeat;
  background-size: cover;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.title {
  height: 60px;
  border-bottom: 1px solid rgb(241, 243, 248);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.demo-ruleForm {
  position: absolute;
  left: 100px;
  top: 180px;
  width: 600px;
  height: 350px;
  background: #fff;
  border-radius: 5px;
}
.el-input {
  width: 300px;
}
.submit {
  margin-right: 50px;
}
.reg {
  margin-left: 50px;
}
</style>