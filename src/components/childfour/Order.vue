<template>
  <div>
    <el-table ref="filterTable" :data="tableData" style="width: 100%">
      <el-table-column prop="num" label="Order_No" width="280" align="center"></el-table-column>
      <el-table-column prop="price" label="Price" width="150" align="center">

      </el-table-column>
      <el-table-column prop="status" label="Status" width="120" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.status=='0'">
            <el-tag type="danger">pending</el-tag>
          </div>
          <div v-if="scope.row.status=='1'">
            <el-tag type="success">success</el-tag>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      tableData: []
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get(`/api/orderData`)
        .then(res => {
          this.tableData = res.data.data;
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
.el-table_1_column_1  {
  padding: 5px 0;
}
</style>