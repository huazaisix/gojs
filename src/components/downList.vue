<template>
  <div id="content" v-if="false">
      <el-dropdown>
        <span class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          
        </el-dropdown-menu>
      </el-dropdown>
      <button @click="clickFunc">点击触发调用minix文件中的函数</button>
  </div>
</template>>

<script>  
  import MinixsFunction from './mixins.vue'
  export default{
    mixins:[MinixsFunction],
    data(){
        return{

        }
    },
    methods:{
      clickFunc(){
        console.log(this.miniFunction())
      }
    }
}
</script>
<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>