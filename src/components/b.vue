<template>
  <div class="cityList">
      <h4>列表详情：</h4>
      <ul>
        <li v-for="(item,index) in cityArr" @click="backFn(index)">{{item}}</li>
      </ul>
  </div>
  
</template>

<script>
  export default {
    data () {
      return {
        cityArr:['北京','上海','广州','深圳','茂名','张家界','清远','汕头','佛山']
      }
    },
    methods: {
      backFn(index){
        this.$store.dispatch("setCityName",this.cityArr[index])
        console.log(this.$store.getters.getCityFn)
         this.$router.push("/");
      }
    }
  }
</script>