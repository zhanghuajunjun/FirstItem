<template>
  <div>
    <el-container>
      <el-header class="el-header">
        <layout-head></layout-head>
      </el-header>
      <el-container>
        <el-aside width="180px" class="el-aside">
          <layout-right></layout-right>
        </el-aside>
        <el-main class="el-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LayoutHead from "../../components/LayoutHead";
import LayoutRight from "../../components/LayoutRight";
export default {
  name: "Layout",
  props: {},
  data() {
    return {};
  },
  components: {
    LayoutHead,
    LayoutRight
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
}
.el-aside {
  background: #344055;
  height: 660px;
  position: fixed;
}
.el-main {
  position: absolute;
  left: 180px;
  top: 60px;
  
}
</style>