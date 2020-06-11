<template>
  <div>
    <div class="operation">
      <el-button type="danger">查看</el-button>
      <el-button type="primary">发布</el-button>
    </div>
    <div>
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="文章标题" prop="arttitle" :rules="[{required: true,message: '请输入文章标题', }]">
          <el-input v-model="ruleForm.arttitle"></el-input>
        </el-form-item>
        <el-form-item
          label="文章摘要"
          prop="artsummary"
          :rules="[{required: true,message: '请输入文章摘要', }]"
        >
          <el-input v-model="ruleForm.artsummary"></el-input>
        </el-form-item>
        <div class="d-flex">
          <el-form-item label="作者" prop="author" :rules="[{required: true,message: '请输入作者', }]">
            <el-input v-model="ruleForm.artsummary" class="ipt"></el-input>
          </el-form-item>
          <el-form-item label="类目" :rules="[{required: true,}]">
            <el-select v-model="ruleForm.region" placeholder="请选择" class="ipt">
              <el-option
                v-for="(item,index) in region"
                :key="index"
                :label="item.lable"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="来源" prop="source" :rules="[{required: true,}]">
            <el-select v-model="ruleForm.source" placeholder="请选择" class="ipt">
              <el-option
                v-for="(item,index) in source"
                :key="index"
                :label="item.lable"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="重要性" prop="importance" :rules="[{required: true,}]">
            <el-select v-model="ruleForm.importance" placeholder="请选择" class="ipt">
              <el-option
                v-for="(item,index) in importance"
                :key="index"
                :label="item.lable"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发布时间" prop="times">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 150px;"
            ></el-date-picker>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div>
      <mavon-editor v-model="value"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      value: '',
      ruleForm: {
        arttitle: "",
        artsummary: "",
        author: "",
        region: "",
        source: "",
        importance: ""
      },
      region: [
        {
          label: "vue",
          value: "vue"
        },
        {
          label: "React",
          value: "React"
        },
        {
          label: "Node.js",
          value: "Node.js"
        },
        {
          label: "性能优化",
          value: "性能优化"
        },
        {
          label: "JavaScript",
          value: "JavaScript"
        },
        {
          label: "小程序",
          value: "小程序"
        },
        {
          label: "工具类",
          value: "工具类"
        },
        {
          label: "其他",
          value: "其他"
        }
      ],
      source: [
        {
          label: "原创",
          value: "原创"
        },
        {
          label: "转载",
          value: "转载"
        },
        {
          label: "国外",
          value: "国外"
        }
      ],
      importance: [
        {
          label: "1颗星",
          value: "1颗星"
        },
        {
          label: "2颗星",
          value: "2颗星"
        },
        {
          label: "3颗星",
          value: "3颗星"
        },
        {
          label: "4颗星",
          value: "4颗星"
        },
        {
          label: "5颗星",
          value: "5颗星"
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
.operation {
  background: #59a586;
  height: 40px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 30px;
}
.ipt {
  width: 140px;
}
</style>