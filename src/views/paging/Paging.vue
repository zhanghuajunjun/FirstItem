<template>
  <div>
    <input type="text" placeholder="请输入你想搜索的商品名称" class="ipt" v-model="value" />
    <div>
      <el-card shadow="always">
        <el-table
          :data="tableData.slice((currentPage-1)*pageSize, currentPage*pageSize)"
          style="width: 100%"
        >
          <el-table-column label="名称" width="450" align="center">
            <template slot-scope="scope">{{ scope.row.NAME }}</template>
          </el-table-column>
          <el-table-column label="商品编号" width="250" align="center">
            <template slot-scope="scope">{{ scope.row.GOODS_SERIAL_NUMBER}}</template>
          </el-table-column>
          <el-table-column label="原价" width="150" align="center">
            <template slot-scope="scope">{{ scope.row.ORI_PRICE }}</template>
          </el-table-column>
          <el-table-column label="现价" width="150" align="center">
            <template slot-scope="scope">{{ scope.row.PRESENT_PRICE }}</template>
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="dialogVisible = true">
                <i class="el-icon-edit"></i>
                修改
              </el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
                <i class="el-icon-delete"></i>
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-dialog title :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
          <el-form>
            <el-form-item label="名称">
              <el-input v-model="value1" class="eipt"></el-input>
            </el-form-item>
            <el-form-item label="原价">
              <el-input v-model="value2" class="eipt"></el-input>
            </el-form-item>
            <el-form-item label="现价">
              <el-input v-model="value3" class="eipt"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
          class="el-pagination"
        ></el-pagination>
      </el-card>
    </div>
  </div>
</template>inp

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      tableData: [],
      value: "",
      currentPage: 1,
      pageSize: 10,
      dialogVisible: false,
      value1: '',
      value2: '',
      value3: ''
    };
  },
  components: {

  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    getData() {
      axios
        .get(`/api//tableData`)
        .then(res => {
          this.tableData = res.data.data;
        })
        .catch(err => {});
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleDelete(index, row) {
      this.tableData.splice(index, 1);
    }
  },
  mounted() {
    this.getData();
  },
  watch: {
    value(val) {
      this.tableData = this.tableData.filter(item => {
        return JSON.stringify(item).includes(val) === true;
      });
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.ipt {
  width: 300px;
  height: 30px;
  border-color: skyblue;
  border-width: 1px;
  border-radius: 5px;
  padding-left: 10px;
  margin-bottom: 10px;
}
.eipt {
  width: 350px;
}
</style>