<template>
  <div>
    <el-container>
      <el-header class="el-header">
        <layout-head></layout-head>
      </el-header>
      <div class="zhanwei1"></div>
      <el-container>
        <el-aside width="180px" class="el-aside">
          <layout-left></layout-left>
        </el-aside>
        <div class="zhanwei"></div>
        <el-main class="el-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LayoutHead from "../../components/LayoutHead";
import LayoutLeft from "../../components/LayoutLeft";
export default {
  name: "Layout",
  props: {},
  data() {
    return {};
  },
  components: {
    LayoutHead,
    LayoutLeft
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-header {
  width: 100%;
  background: #2e5e85;
  height: 30px;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 99999;
}
.el-aside {
  background: #344055;
  height: 660px;
  position: fixed;
}
.zhanwei {
  width: 180px;
}
.zhanwei1 {
  height: 60px;
  width: 100%;
}
.el-main {
  background: #f6f6f6;
  padding-top: 30px;
}
</style>