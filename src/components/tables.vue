<template>
<div>
	<el-table :data="formData.tableData" border stripe style="width: 100%;">
      <el-table-column prop="name" label="姓名">
        <template slot-scope="scope">
          <el-form-item v-if="scope.row.edit" :prop="'tableData.' + scope.$index + '.name'" :rules='rules.name'>
            <el-input v-model="scope.row.name" placeholder="姓名"></el-input>
          </el-form-item>
          <span v-else>{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="sex" label="性别">
        <template slot-scope="scope">
          <el-form-item v-if="scope.row.edit" :prop="'tableData.' + scope.$index + '.sex'" :rules='rules.sex'>
            <el-select v-model="scope.row.sex" placeholder="请选择">
              <el-option label="男" value="1">男</el-option>
              <el-option label="女" value="2">女</el-option>
            </el-select>
          </el-form-item>
          <span v-else>
            <p v-if="scope.row.sex==1">男</p>
            <p v-if="scope.row.sex==2">女</p>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button v-if="scope.row.edit" type="text" size="medium" @click="confirmAdd(scope.row,'formData')">
            <i class="el-icon-check" aria-hidden="true"></i>
          </el-button>
          <div v-else>
            <el-button type="text" size="medium" @click="editData(scope.row)">
              <i class="el-icon-edit" aria-hidden="true"></i>
            </el-button>
            <el-button type="text" size="medium" @click="deleteData(scope.row,scope.$index)">
              <i class="el-icon-delete" aria-hidden="true"></i>
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

</div>
</template>
<script>
  export default {
    name: "demo",
    props:{
    	formData:{
    		type:Object,
    		default:()=>{}
    	},
    	rules:{
    		default:Object,
    		default:()=>{}
    	}
    },
    data() {
      return {
        
        }
        
    },
    computed:{
    	// rules:{
    	// 	age:{
	    //     	required: true,
	    //         message: '请输入age',
	    //     },
	    //      name: {
	    //         required: true,
	    //         message: '请输入名字',
	    //     },
	    //     sex: {
	    //         required: true,
	    //         message: '请选择性别',
	    //       },
	    // }
    },
    methods: {}
     
  }

</script>