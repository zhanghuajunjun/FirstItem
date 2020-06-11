<template>
  <div>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          router
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
          index: "/"
        },
        {
          name: "分页表格",
          log: "el-icon-menu",
          index: "/paging"
        },
        {
          name: "标签页",
          log: "el-icon-document",
          index: "/tab"
        },
        {
          name: "图片上传",
          log: "el-icon-check",
          index: "/uploadImg"
        },
        {
          name: "已发表",
          log: "el-icon-shopping-bag-2",
          index: "/released"
        },
        {
          name: "发布文章",
          log: "el-icon-message",
          index: "/publish"
        },
        {
          name: "统计",
          log: "el-icon-orange",
          index: "/statistics"
        },
        {
          name: "导出excel",
          log: "el-icon-setting",
          index: "/exportEX"
        },
        {
          name: "退出系统",
          log: "el-icon-delete",
          index: "/out"
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