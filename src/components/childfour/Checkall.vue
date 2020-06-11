<template>
  <div>
    <div class="flex-j-sb todo">
      <i class="el-icon-arrow-down"></i>
      <div>Todo List</div>
    </div>
    <div>
      <div v-if="todos.length > 0">
        <div v-for="(item,index) in todos" :key="index" class="box1">
          <div class="flex-a-c">
            <div class="check f-dir-mid">
              <i class="el-icon-check"></i>
            </div>
            {{item.title}}
          </div>
          <div @click="clickDel(item,index)" class="dels">x</div>
        </div>
      </div>
      <div v-else>你的任务已经全部完成了，没有任务啦！</div>
    </div>
    <div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      todos: [
        {
          title: "star this repository",
          complete: false
        },
        {
          title: "fork this repository",
          complete: false
        },
        {
          title: "follow author",
          complete: false
        },
        {
          title: "vue-admin",
          complete: false
        },
        {
          title: "vue",
          complete: false
        },
        {
          title: "elment-ui",
          complete: false
        },
        {
          title: "axios",
          complete: true
        },
        {
          title: "webpack",
          complete: true
        }
      ],
    };
  },
  components: {},
  methods: {
    clickDel(item, index) {
      this.$emit("del", index);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.todo {
  font-size: 14px;
  border-bottom: 1px solid #999;
  margin: 0 -20px;
  padding: 0 20px 10px 20px;
  margin-bottom: 20px;
}
.dels {
  color: red;
  visibility: hidden;
}
.box1 {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.box1:hover {
  cursor: pointer;
}
.box1:hover >.dels {
  visibility: visible;
}
.check {
  width: 15px;
  height: 15px;
  border: 1px solid black;
  border-radius: 50%;
  margin-right: 10px;
}
</style>