<style> 

</style>
<template>
  <div class="selectInnerTable">
     <el-select v-model="value" placeholder="请选择" @change="onTableSelect">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled">
              </el-option>
      </el-select>
  </div>
  
</template>

<script>
  export default {
    data () {
      return {
            options: [{
              value: '选项1',
                  company: '腾讯',
                  label: '马化腾',
                  school: '深圳大学'

                }, {
                  value: '选项2',
                  company: '美团',
                  label: '王兴',
                  school: '清华大学'

                }, {
                  value: '选项3',
                  company: '小米',
                  label: '雷军',
                  school: '武汉大学'

                }, {
                  value: '选项4',
                  company: '今日头条',
                  label: '张一鸣',
                  school: '南开大学'

                }, {
                  value: '选项5',
                  company: '红杉资本',
                  label: '沈南鹏',
                  school: '耶鲁大学'

            }],
            value: ''
      }
    },
    methods: {
        onTableSelect(row){
            console.log(row)
        }
    }
  }
</script>