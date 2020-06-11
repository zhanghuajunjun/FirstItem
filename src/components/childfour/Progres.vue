<template>
  <div>
    <div class="pro">
      <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt />
    </div>
    <div>
      <div class="pro_a" v-for="(item,index) in jd" :key="index">
        <div>{{item.name}}</div>
        <el-progress
          v-if="item.progress*100 == 100"
          :percentage="item.progress*100"
          status="success"
        ></el-progress>
        <el-progress v-else :percentage="item.progress*100"></el-progress>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      jd: []
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/progress")
        .then(res => {
          this.jd = res.data.data;
        })
        .catch(err => {});
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.pro img {
  width: 100%;
}
.pro_a {
  margin-bottom: 23px;
  margin-top: 22px;
}
</style>