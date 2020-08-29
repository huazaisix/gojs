<template>
	<div class="componets1">
		<!-- <p>this is componets1</p> -->
		<slot v-bind:userText="user">{{ user.lastName }}</slot>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				user:{
					lastName:'小花',
					firstName:'陈'
				}
			}
		}
	}
</script>
<style>
/* .height{
	height:1000px;	
} */
</style>