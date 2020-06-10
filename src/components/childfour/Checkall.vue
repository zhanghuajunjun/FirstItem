<template>
 <div>
   <div class=" flex-j-sb todo">
     <i class="el-icon-arrow-down"></i>
     <div>Todo List</div>
   </div>
   <div>

   </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {

   },
   data () {
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
          complete: false
        },
        {
          title: "webpack",
          complete: false
        }
      ]
     }
   },
   components: {

   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.todo {
  font-size: 14px;
  border-bottom: 1px solid #999;
  margin: 0 -20px;
  padding: 0 20px 10px 20px;
}
</style>