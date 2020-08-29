<template>
	<div >
		<h4>{{city}}</h4>
		<router-link @click="modifyAName(msg)" to="/bCom">获取城市列表</router-link>
    <el-input v-model="input" placeholder="请输入内容" :min="10" :max="100" type="number"></el-input>
    <input v-model="input" placeholder="请输入内容" :min="10" :max="100" type="number"/>

	</div>
</template>
<script>
export default {
  
  data () {
    return {
    	input:null
    }
  },
  computed: {
  	city(){
  		return this.$store.getters.getCityFn
  	}
  }
 }
</script>
<style>
	
</style>