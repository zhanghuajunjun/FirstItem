<template>
  <div class="f-dir-mid">
    <h3>期待您的下次光临</h3>
    <el-button type="primary" @click="Out">确认退出</el-button>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    Out() {
      this.$confirm("您正在退出小爱后台系统，是否确认退出", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "期待您的下次光临"
          });
          localStorage.removeItem('user');
          this.$router.push('/login')
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
h3 {
  margin-bottom: 50px;
}
.f-dir-mid {
  padding: 50px 0;
}
</style>