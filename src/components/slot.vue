<template>
	<div class="scrollTop">
		<!-- <component1 >
			<template v-slot:default="slotProps">
				{{ slotProps.userText.firstName }}
			</template>
				
		</component1>
		<div class="masonry">
			<div class="item" style="height:100px">0001</div>
			<div class="item" style="height:150px">0002</div>
			<div class="item" style="height:180px">0003</div>
			<div class="item" style="height:180px">0004</div>
			<div class="item" style="height:100px">0005</div>
			<div class="item" style="height:160px">0006</div>
			<div class="item" style="height:110px">0007</div>
			<div class="item" style="height:190px">0008</div>
			<div class="item" style="height:100px">009</div>
			<div class="item" style="height:109px">010</div>
		</div>
		<hr>
		<div class="parent">
			<div class="left">left</div>
			<div class="center">center</div>
			<div class="right">right</div>
		</div>
		<hr> -->
		<div>
			<el-input v-model="input" placeholder="请输入内容" ref="input" v-if="isShow"></el-input>

			<!-- <input type="text" /> -->
		</div>
	</div>
</template>
<script>
	import component1 from "./component1"
	export default{
		data(){
			return{
				mag:"xxxx",
				input:null,
				isShow:false
			}
		},
		components:{
			component1
		},
		created(){
			// for (var i = 0; i < 5; i++) {
			// 	console.log(i)
			//     setTimeout(function() {
			//         console.log(new Date, i);
			//     }, 1000);
			// }

			// console.log(new Date, i);

			// var array = [1, 2, 1, 1, '1',9];

			// function unique(array) {
			// 	console.log(array.concat())
			// }

			// console.log(unique(array));
			var array = [1, 2, 1, 1, '1'];
			array.reduce((x,y)=>{
				console.log(x)
				console.log(y)
				return x+y
			})
			// function unique(array) {
			//     var obj = {};
			//     return array.filter(function(item, index, array){
			//     	console.log(obj)
			//         return obj.hasOwnProperty(item) ? false : (obj[item] = true)
			//     })
			// }

			// console.log(unique(array)); // [1, 2]
		},
		mounted(){
			this.isShow = true
			this.$refs.input.focus()
			// this.$nextTick(_=>{
			// 	this.$refs.input.focus()
			// })
		}
	}
</script>
<style>
	/*.masonry{
		column-count:3;
		column-gap:10px;
	}
	.masonry .item{
		paddig:10px;
		border:1px solid #000;
		box-sizing:border-box;
		break-inside: avoid;
	}*/

	.masonry{
		display:flex;
		flex-direction:row;
		flex-wrap:wrap;
		width:100%;
		height:100vh;
	}
	.masonry .item{
		border:1px solid #ccc;
		box-sizing:border-box;
		display: flex;
		flex-direction: column;
		width:calc(100%/3);
	}
	.parent{
		min-width:320px;
	}
	.left{
		background-color: #f40;
		height: 500px;
		width:200px;
		float:left;
	}
	.center{
		background-color: green;
		height:500px;
		width:100px;
		float:left;
		margin-right: 10px;
	}
	.right{
		margin-left:30px;
		background-color: #ccc;
		height:500px;
		overflow: hidden;
	}
</style>