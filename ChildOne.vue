<template>
  <div>
    <div class="Nav d-flex">
      <div class="all hover">全部</div>
      <div class="marg-lrs">精华</div>
      <div class="marg-lrs">分享</div>
      <div class="marg-lrs">问答</div>
      <div class="marg-lrs">招聘</div>
      <div class="marg-lrs">客户端测试</div>
    </div>
    <div>
      <div
        v-for="(item,index) in arr.slice((currentPage-1)*pageSize, currentPage*pageSize)"
        :key="index"
      >
        <div v-if="index < 39">
          <div class="hp-item flex-j-sb">
            <div class="flex-a-c">
              <img :src="item.author.avatar_url" alt width="30" />
              <div class="hp-item1">
                <span class="hp-item2">{{item.reply_count}}</span>
                <span class="hp-item3">/{{item.visit_count}}</span>
              </div>
              <div>
                <div v-if="item.tab==='share'">
                  <div v-if="index < 2">
                    <div class="share">置顶</div>
                  </div>
                  <div v-else>
                    <div class="ask">分享</div>
                  </div>
                </div>
                <div v-else-if="item.tab==='ask'">
                  <div class="ask">问答</div>
                </div>
                <div v-else>
                  <div class="share">精华</div>
                </div>
              </div>
              <div class="hp-item4" @click="detail(item)">{{item.title}}</div>
            </div>
            <div class="hp-item5">
              <div class="hp-item6">{{getDateTimeFormat(item.last_reply_at)}}</div>
            </div>
          </div>
        </div>
      </div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="arr.length"
        class="el-pagination"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  data() {
    return {
      // 默认第几页数
      currentPage: 1,
      // 默认一页多少条
      pageSize: 10,
      arr: []
    };
  },
  components: {},
  methods: {
    // 改变每页的条数
    handleSizeChange(val) {
      this.pageSize = val;
    },
    // 改变页数
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    getData() {
      axios
        .get(`https://cnodejs.org/api/v1/topics`)
        .then(res => {
          this.arr = res.data.data;
        })
        .catch(err => {});
    },
    getDateTimeFormat(times) {
      let currTime = Date.parse(new Date());
      let unixtime = dayjs(times).valueOf();
      let time = parseInt(currTime) / 1000 - parseInt(unixtime) / 1000;
      time = Math.abs(time);
      // 少于一分钟
      if (time < 60) {
        return "刚刚";
      }
      // 秒转分钟
      let minuies = time / 60;
      if (minuies < 60) {
        return Math.ceil(minuies) + "分钟前";
        console.log(Math.ceil(minuies) + "分钟前");
      }
      // 秒转小时
      let hours = time / 3600;
      if (hours < 24) {
        return Math.ceil(hours) + "小时前";
      }
      //秒转天数
      let days = time / 3600 / 24;
      if (days < 30) {
        return Math.ceil(days) + "天前";
      }
      //秒转月
      let months = time / 3600 / 24 / 30;
      if (months < 12) {
        return Math.ceil(months) + "月前";
      }
      //秒转年
      let years = time / 3600 / 24 / 30 / 12;
      return Math.ceil(years) + "年前";
    },
    detail(item) {
      this.$router.push({ name: "Detail", query: { id: item.id } });
    }
  },
  mounted() {
    this.getData();
    this.getDateTimeFormat();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.Nav {
  background: #f6f6f6;
  padding: 10px;
}
.all {
  margin: 0 10px;
  padding: 3px 4px;
  background: #80bd01;
  color: #fff;
  font-size: 14px;
  border-radius: 3px;
}
.marg-lrs {
  font-size: 14px;
  color: #80bd01;
  display: flex;
  align-items: center;
}
.marg-lrs:hover {
  color: black;
  cursor: pointer;
}
.hp-item {
  padding: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
}
.author {
  color: #778087;
  font-size: 12px;
}
.hp-item1 {
  width: 70px;
  display: inline-block;
  text-align: center;
}
.hp-item2 {
  color: #9e78c0;
  font-size: 14px;
}
.hp-item3 {
  font-size: 10px;
  color: #b4b4b4;
}
.share {
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  color: #fff;
  font-size: 12px;
}
.ask {
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  font-size: 12px;
}
.hp-item4 {
  margin-left: 5px;
}
.hp-item5 {
  color: #778087;
  font-size: 12px;
  width: 60px;
  height: 30px;
  position: relative;
}
.hp-item6 {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.hp-item4:hover {
  cursor: pointer;
  text-decoration: underline;
}
.el-pagination {
  padding-left: 10px;
  padding-top: 10px;
}
</style>