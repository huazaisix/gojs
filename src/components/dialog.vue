<template>
	<div id="dialog" v-if="false">
		<el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>
		<span ref="initBtn" @click="scrollTop" id="initBtn">按钮</span>
		<input v-model.number="msg"/>
		<p>{{msg}}</p>
		<el-dialog
		  title="提示"
		  :visible.sync="centerDialogVisible"
		  width="30%"
		  center
		  v-if='centerDialogVisible' @close="resetForm('formTable')">
		  <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" ref="formTable">
			  <el-form-item label="名称">
			    <el-input v-model="formLabelAlign.name"></el-input>
			  </el-form-item>
			  <el-form-item label="活动区域">
			    <el-input v-model="formLabelAlign.region"></el-input>
			  </el-form-item>
			  <el-form-item label="活动形式">
			    <el-input v-model="formLabelAlign.type"></el-input>
			  </el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>
<script>
	import {scroll} from '../assets/js/click_keydown.js'
	export default{
		data(){
			return {
				msg:'',
				centerDialogVisible: false,
				labelPosition: 'right',
		        formLabelAlign: {
		          name: '',
		          region: '',
		          type: ''
		        }
			}
		},
		created(){
				var startTime = Date.now();
				var handler = new Promise(function (resolve, reject) {
				    setTimeout(function () {
				        resolve('success', Date.now() - startTime);
				    }, 500);
				}); 

				handler.then(function (val) {
					console.log(val)
				    console.log('then resolve', val, Date.now() - startTime);
				}, function (e) {
					debugger;
				    console.log('then reject', e, Date.now() - startTime);
				});
		},
		mounted(){
			let arrObj=[{'feature':"1111",'options':'0000'}]
			Object.keys(arrObj[0]).forEach((key,value)=>{
				// console.log(key)
				// console.log(value)
			})
		},
		methods:{
	        resetForm(formName) {
			  this.$refs[formName].resetFields();
			},
			scrollTop(){
				//this.keydownFun()
				// console.log(new ActiveXObject())
				// let WsShell = new ActiveXObject('WScript.Shell') 
				// WsShell.SendKeys('{F5}'); 
				// scroll(this.$refs.initBtn,'keydown',116)
				// console.log(document.getElementById(initBtn))
				
				// window.onkeydown=116
				// console.log(window)

			},
			keydownFun(){
				let el=document;
				// console.log(el)

			}
			// this.$refs.initBtn.keydown:(e){
			// 		console.log(e)
			// }
		}
	}

</script>
<style>
	
</style>