<template>
  <div class="louthead">
    <div class="welcome">欢迎 {{obj1.username}} 来到小爱后台管理系统</div>
    <div class="dear">{{hello}}，亲爱的 {{obj1.username}} 登录时间：{{time}}</div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  data() {
    return {
      obj: {},
      obj1: {},
      time: "",
      hello: "",
      hours: ""
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.obj = JSON.parse(localStorage.getItem("time"));
    this.obj1 = JSON.parse(localStorage.getItem("user"));
    this.time = dayjs(this.obj.date).format("YYYY年MM月DD日HH时mm分ss秒");
    let hours = dayjs(this.obj.date).format("HH");
    if (hours > 5 && hours <= 11) {
      this.hello = "早上好";
    } else if (hours > 11 && hours <= 13) {
      this.hello = "中午好";
    } else if (hours > 13 && hours <= 17) {
      this.hello = "下午好";
    } else if (hours > 17 && hours <= 23) {
      this.hello = "晚上好";
    } else {
      this.hello = "该睡觉了";
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.louthead {
  width: 100%;
  background: #2e5e85;
  height: 30px;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.welcome {
  padding: 0 20px;
  font-size: 14px;
  color: white;
}
.dear {
  padding: 0 20px;
  font-size: 14px;
  color: white;
}
</style>