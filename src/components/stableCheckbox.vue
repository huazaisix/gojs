<style>
	.p_sty{
		font-size:1rem;
	}
</style>
<template>
	<div>
	  <!-- <div style="width:10%;height:2rem;border:1px solid #ccc" v-if="statusList.length===0"></div>
	  <div style="width:10%;border:1px solid #ccc" v-else>
	  		<span v-for="(item,index) in statusList" :key=index style="border:1px solid #ccc;margin:0 0.5rem;display:inline-block;height:2rem;">{{item.label}}ee</span>
	  </div> -->
	  <el-table :data="filterTable"  border ref="table" style="width: 100%"
	    @selection-change ="onTableSelect" :row-key="getRowKeys"
	    :span-method="objectSpanMethod">
	    <el-table-column type="selection" :selectable="checkboxT" disabled width="55" :reserve-selection="true">
	    </el-table-column>
	    <el-table-column prop="name" label="姓名" width="120">
	    </el-table-column>
	    <el-table-column prop="ip" label="ip" width="120">
	    </el-table-column>
	    <el-table-column prop="address" label="地址" show-overflow-tooltip>
	    	<!-- <i slot="suffix" class="el-icon-document-copy"></i> -->
	    </el-table-column>
	  </el-table>
	 <!--  <el-input
	    placeholder="请选择日期"
	    >
	    <i slot="suffix" class="el-input__icon el-icon-date"></i>
	  </el-input> -->
		<el-pagination :total="total" :page-size.sync="pageSize" :current-page.sync="currentPage"
                        class="pagination" 
                        :page-sizes="[4, 30, 50]"
                        v-if="currentTableData && currentTableData.length > 0">
        </el-pagination>
	  <!-- <el-button type="primary" @click="updateStatus">ajax</el-button> -->
	  	<el-input v-model="modify" type="text"></el-input>	
	  	<p class="p_sty">hhhh</p><p style="font-size:12px;">hhh</p>
	</div>			
</template>
<script>
	export default{
		data(){
			return{
				tableData3: [{
			          date: '2016-05-80',
			          name: '0',
			          address: '上海市普陀区金沙江路 1518 弄',
			          ip:'0'
			        },{
			          date: '2016-05-03',
			          name: '1',
			          address: '11111111111',
			          ip:'1'
			        }, {
			          date: '2016-05-02',
			          name: '2',
			          address: '22222222222',
			          ip:'2'
			        }, {
			          date: '2016-05-04',
			          name: '3',
			          address: '3333333333333333',
			          ip:'3'
			        }, {
			          date: '2016-05-01',
			          name: '4',
			          address: '44444444444444',
			          ip:'4'
			        }, {
			          date: '2016-05-08',
			          name: '5',
			          address: '上海市普陀区金沙江路 1518 弄',
			          ip:'5'
			        }, {
			          date: '2016-05-06',
			          name: '6',
			          address: '上海市普陀区金沙江路 1518 弄',
			          ip:'6'
			        }, {
			          date: '2016-05-07',
			          name: '7',
			          address: '上海市普陀区金沙江路 1518 弄',
			          ip:'7'
		        }, {
			          date: '2016-05-10',
			          name: '8',
			          address: '888888888888888',
			          ip:'8'
		        }],
		        // multipleSelection: []
		        pageSize:6,
		        currentPage: 1,
		        statusList:[],
		        count:0,
		        modify:null,
		        filterTable:[]
			}
		},
		computed:{
			total () {
                return this.tableData3.length;
            },
            currentTableData () {
                const offset = (this.currentPage - 1) * this.pageSize;
                return this.tableData3.slice(offset, offset + this.pageSize);
            },
		},
		created(){

			let arr=[]
			for(let i=1;i<101;i++){
			    arr.push(i)
			}
			let new_arr=arr.map((item,index)=>{
			    if(item%3==0 && item%5!=0){
			        console.log(item)
			        return '#'
			    }else if(item%3!=0 && item%5==0){
			        console.log(item)
			        return '%'
			    }else if(item%3==0 && item%5==0){
			        console.log(item)
			        return "#%"
			    }else{
			        console.log(item)
			        return item
			    }
			})
			console.log(new_arr)
			
            this.resetCurrentPage();

        },
		methods: {
			updateStatus(){
				this.$refs.table.toggleRowSelection(this.tableData3[0],false)
			},
			onTableSelect(){
				 
				 
			},
			getRowKeys(row){
				return row.date
			},
			resetCurrentPage () {
                this.currentPage = 1;
            },
            checkboxT(row,index){
		        return 0
		    },
		    objectSpanMethod({ row, column, rowIndex, columnIndex }){
		    	console.log('xxx')
		    	if (columnIndex === 1 ) { //|| columnIndex === 2
		          if (rowIndex % 2 === 0) {
		            return {
		              rowspan: 2,
		              colspan: 1
		            };
		          } else {
		            return {
		              rowspan: 0,
		              colspan: 0
		            };
		          }
		        }
		    }

           
		},
		watch:{
			pageSize (pageSize) {
                if (!pageSize || !this.currentPage || !this.total) return;
                if (pageSize * this.currentPage > this.total) this.resetCurrentPage();
            },
            modify:{
            	// immediate: true,
                handler (value){
                	this.filterTable=this.currentTableData.filter(item=>{
                		if(item.ip===value){
                			return item
                		}
                	})
                }

            }
		}
	}
</script>
