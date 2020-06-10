<template>
  <div class="bg-purple">
    <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    this.chartSettings = {
        roseType: 'radius'
      }
    return {
      chartData: {
        columns: [],
        rows: []
      }
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get(`/api/ringChat`)
        .then(res => {
          this.chartData.rows = res.data.data;
          this.chartData.columns = Object.keys(res.data.data[0]);
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
.bg-purple {
  background: white;
  width: 337px;
  height: 400px;
}
</style>