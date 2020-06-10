<template>
  <div class="childtwo">
    <el-row>
      <el-col>
        <el-card shadow="always">
          <div>
            <ve-line :data="chartData"></ve-line>
          </div>
        </el-card>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      chartData: {
        columns: [],
        rows: []
      },
      
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/homeChat", {})
        .then(response => {
          if (response.data.code === 0) {
            this.chartData.rows = response.data.data;
            this.chartData.columns = Object.keys(response.data.data[0])
          }
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
.childtwo {
  background: white;
  box-shadow: 1px 3px 3px 0 #dddddd;
  border-radius: 6px;
}
</style>