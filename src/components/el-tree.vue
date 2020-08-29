<template>
  <div class="">
    <el-input
      placeholder="输入关键字进行过滤"
      v-model="filterText">
    </el-input>

    
    <el-tree
      class="filter-tree"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :indent="indent"
      icon-class="el-icon-paperclip"
      :filter-node-method="filterNode"
      ref="tree">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <i class="el-icon-paperclip"></i>
        <span>{{ node.label }}</span>
        <span>
          <el-button
            type="text"
            size="mini"
            @click="append(data)">
            add
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="remove(node, data)">
            Del
          </el-button>
        </span>
      </span>
    </el-tree>

  </div>
  
</template>

<script>
  import treeData from "@/data/el-tree-data.json"
  export default {
    data () {
      return {
        filterText: '',
        data:null,
        indent:30,
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    created(){
      this.data = treeData.data
    },
    methods: {
      filterNode(value, data) {
        console.log(value)
        console.log(data)
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      append(data){

      },
      remove(node, data){
        console.log(this.$refs.tree.store)
        this.$refs.tree.append({id:110,label:'xxsxs'})
        console.log(this.$refs.tree.append({id:110,label:'xxsxs'}))
        console.log(this.$refs.tree.getCurrentNode())
      }
    },
    watch: {
      filterText(val) {
        console.log(val)
        this.$refs.tree.filter(val);
      }
    },
  }
</script>