<template>
      <div class="dialog">
        <el-dialog :title="formTitle" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="图标" label-width="7.5rem">
              <!-- :data="upLoadData" -->
              <el-upload class="avatar-uploader" 
              action="111"
              :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            </el-form-item>
             <el-form-item label="分类名" label-width="7.5rem">
            </el-form-item>
            <el-form-item label="中文" label-width="7.5rem">
              <el-input v-model="form.chinese" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="英文" label-width="7.5rem">
              <el-input v-model="form.english" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="sureFormSubmit">确 定</el-button>
          </div>
        </el-dialog>
    </div>
</template>
<script>
  export default {
    name: 'secondaryClassification',
    data () {
      return {
        formTitle: '编辑',//表单标题
        dialogFormVisible:true,//对话框是否可见
        //对话框表单
        form: {
            imageUrl: '',
            chinese: '',
            english: '',
          },
        // upLoadData:{//上传时附带的其他参数
        //     srid:''
        // }
      }
    },
    
    created:{
        setFormDate(){
          debugger;
            let formDate=new FormDate()
            formDate.append("key","value")
            console.log(formDate)
        }
    },
    methods: {
      //图片上传成功实现本地预览
      handleAvatarSuccess(res, file) {
          console.log(res)
          console.log(file)
          debugger;
          let _this = this;
          _this.form.imageUrl = URL.createObjectURL(file.raw);
        },
      //上传之前的钩子函数
      beforeAvatarUpload(file) {
        let fd = new FormData();
        console.log(fd)
        fd.append('file',file);//传文件
        console.log(file)
        debugger;
        // fd.append('srid',this.upLoadData.srid);//传其他参数
        // axios.post('/api/up/file',fd).then(function(res){
        //         console.log('成功');
        // })
        return false//屏蔽了action的默认上传
      },
      //提交表单
      sureFormSubmit(){
       let _this = this;
       let api = '';
       _this.axios.post(api,{}).then(res=>{console.log(res)});
    }
  }
}
</script>
<style>
.dialog{
  height:100%;
}
  .secondaryClassification>>>.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .secondaryClassification>>>.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .secondaryClassification>>>.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .secondaryClassification>>>.avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>