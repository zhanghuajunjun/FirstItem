<template>
  <div>
    <div class="marg-boss">
      <child-one></child-one>
    </div>
    <div class="marg-boss">
      <child-two></child-two>
    </div>
    <div class="marg-boss">
      <child-three></child-three>
    </div>
    <div>
      <child-four></child-four>
    </div>
  </div>
</template>

<script>
import ChildOne from "../components/ChildOne";
import ChildTwo from '../components/ChildTwo';
import ChildThree from '../components/ChildThree';
import ChildFour from '../components/ChildFour';
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    ChildOne,
    ChildTwo,
    ChildThree,
    ChildFour
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.childone {
  margin-bottom: 30px;
}
</style>
