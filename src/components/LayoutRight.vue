<template>
  <div>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="rgb(52,64,85)"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <div v-for="(item,index) in arr" :key="index">
            <el-menu-item :index="item.index">
              <i :class="item.log"></i>
              {{item.name}}
            </el-menu-item>
          </div>
          <br />
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: [
        {
          name: "首页",
          log: "el-icon-location",
          index: "1"
        },
        {
          name: "已发布",
          log: "el-icon-menu",
          index: "2"
        },
        {
          name: "统计",
          log: "el-icon-menu",
          index: "3"
        },
        {
          name: "发表文章",
          log: "el-icon-check",
          index: "4"
        },
        {
          name: "标签页",
          log: "el-icon-setting",
          index: "5"
        },
        {
          name: "导出excel",
          log: "el-icon-setting",
          index: "6"
        },
        {
          name: "图片上传",
          log: "el-icon-setting",
          index: "7"
        },
        {
          name: "退出系统",
          log: "el-icon-delete",
          index: "8"
        }
      ]
    };
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-col-12 {
  width: 100%;
}
</style>