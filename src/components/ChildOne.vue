<template>
  <div>
    <el-row :gutter="9" class="el-row">
      <el-col :span="6">
        <el-card shadow="always">
          <div class="bg-purple">
            <i class="iconfont icon-renqunfenxi"></i>
            <div>
              <div class="color">New Visits</div>
              <div class="countTo">
                <countTo :startVal="startVal" :endVal="obj.visits" :duration="duration"></countTo>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
          <div class="bg-purple">
            <i class="iconfont icon-xiaoxi"></i>
            <div>
              <div class="color">Messages</div>
              <div class="countTo">
                <countTo :startVal="startVal" :endVal="obj.messages" :duration="duration"></countTo>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
          <div class="bg-purple">
            <i class="iconfont icon-qian"></i>
            <div>
              <div class="color">Purchases</div>
              <div class="countTo">
                <countTo :startVal="startVal" :endVal="obj.purchases" :duration="duration"></countTo>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
          <div class="bg-purple">
            <i class="iconfont icon-gouwuche"></i>
            <div>
              <div class="color">Shoppings</div>
              <div>
                <countTo :startVal="startVal" :endVal="obj.shopping" :duration="duration"></countTo>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import countTo from "vue-count-to";
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      startVal: 0,
      obj: {},
      duration: 5000
    };
  },
  components: {
    countTo
  },
  methods: {
    getData() {
      axios
        .get(`/api/homeData`)
        .then(res => {
          this.obj = res.data.data;
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
.el-col {
  border-radius: 4px;
  flex: 1;
}
.bg-purple {
  background-color: white;
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  border-radius: 6px;
}
.icon-renqunfenxi {
  font-size: 44px;
  color: #51ccc9;
}
.icon-xiaoxi {
  font-size: 40px;
  color: #3ba2f4;
}
.icon-qian {
  font-size: 44px;
  color: #f3637b;
}
.icon-gouwuche {
  font-size: 44px;
  color: #feba85;
}
.color {
  color: #888888;
  font-weight: 100;
  margin-bottom: 10px;
}
</style>