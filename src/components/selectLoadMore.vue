<template>
	<div>
		<el-select v-model="value" placeholder="请选择" v-el-select-loadmore="loadmore">
		    <el-option
		      v-for="item in selectOption"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value">
		    </el-option>
		  </el-select>
	</div>
</template>
<script>
	export default{
		directives: {
	        'el-select-loadmore': {
	            bind(el, binding) {
	                // 获取element-ui定义好的scroll盒子
	                const SELECTWRAP_DOM = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap');
	                console.log(SELECTWRAP_DOM)
	                SELECTWRAP_DOM.addEventListener('scroll', function () {
	                    /**
	                    * scrollHeight 获取元素内容高度(只读)
	                    * scrollTop 获取或者设置元素的偏移值,常用于, 计算滚动条的位置, 当一个元素的容器没有产生垂直方向的滚动条, 那它的scrollTop的值默认为0.
	                    * clientHeight 读取元素的可见高度(只读)
	                    * 如果元素滚动到底, 下面等式返回true, 没有则返回false:
	                    * ele.scrollHeight - ele.scrollTop === ele.clientHeight;
	                    */
	                    const condition = this.scrollHeight - this.scrollTop <= this.clientHeight;
	                    if (condition) {
	                        binding.value();
	                    }
	                });
	            }
	        }
	    },
		data(){
			return{
				value:null,
				selectOption:[],
				formData: {
	                pageIndex: 1,
	                pageSize: 20,
	            }
			}
		},
		created(){
			this.getSelectData()
		},
		methods:{
			loadmore() {
	            this.formData.pageIndex++;
	            this.getSelectData();
	        },
			getSelectData(){
				let options=[]
				for(let i=0;i<10000;i++){
					options.push({value:i,name:'name--'+i,label:'label--'+i})
				}
				this.selectOption=[this.selectOption,...options]
			}
		}
	}

</script>
<style>
	
</style>