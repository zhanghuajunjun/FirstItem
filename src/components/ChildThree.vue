<template>
  <div>
    <el-row :gutter="9">
      <el-col :span="8">
        <el-card shadow="always">
          <radar></radar>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always">
          <ring></ring>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always">
          <home-chat></home-chat>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Radar from "./childthree/Radar";
import Ring from "./childthree/Ring";
import HomeChat from "./childthree/HomeChat";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    Radar,
    Ring,
    HomeChat
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>