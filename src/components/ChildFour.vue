<template>
  <div>
    <el-row :gutter="9">
      <el-col :span="12">
        <el-card shadow="always">
          <div class="bg-purple">
            <order></order>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
          <div class="bg-purple">
            <checkall></checkall>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
          <div class="bg-purple">
            <progres></progres>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Order from './childfour/Order';
import Checkall from './childfour/Checkall';
import Progres from './childfour/Progres';
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    Order,
    Checkall,
    Progres
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.bg-purple {
  background: white;
  height: 500px;
}
</style>