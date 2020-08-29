<template>
  <div style="width: 100%;">
    <div id="stageGraph" style="flex-grow: 1; height: 500px; border: solid 1px black"></div>
  </div>
</template>
<script>
import go, { Size } from 'gojs'
// import icon from '../assets/logo.png'
export default {
  props: {
  },
  data() {
    return {
      myDiagram: null,
      currentGroupkey: 10000,
      lastAlert: null,
      data: {
      	class: 'go.GraphLinksModel',
        linkFromPortIdProperty: 'fromPort',
        linkToPortIdProperty: 'toPort',
        nodeDataArray: [
          {key:1,         name: "Alpha",source: require('../assets/logo.png') },
          {key:2, parent:1,name: "Beta" ,source: require('../assets/logo.png') },
          {}
        ],
        linkDataArray: [
          { from: "Alpha", to: "Beta" }
        ]
      }
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
        // 引用gojs类
        const MAKE = go.GraphObject.make
        // 创建最外层画布
        var container = MAKE(go.Diagram, 'stageGraph',
            {
              layout:MAKE(go.TreeLayout,
                    {angle:270,layerSpacing:88})
            }
        )
        
        // 设置模型&设置属性（属性固定名称）
        var modelDemo = MAKE(go.TreeModel)
        modelDemo.nodeDataArray = this.data.nodeDataArray

        container.nodeTemplate=
          MAKE(go.Node, "Horizontal",
            { 
              background: "#44CCFF" ,
              mouseDrop(e,node){finishDrop(e,node.containingGroup)}
              
            },
            MAKE(go.Picture,
            { margin: 10, width: 50, height: 50, background: 'red' },
            new go.Binding('source'),
            ),
            MAKE(go.TextBlock,
            'wwww',
            {background:'yellow'},
            new go.Binding('text', 'name'),
            )
          )
          container.groupTemplate=MAKE(go.Group,'Auto',
            {
              background:'#000',
              mouseDragEnter(e,grp,pre){highlightGroup(e,grp,true)},
              mouseLeave(e,grp,next){highlightGroup(e,grp,false)},
              mouseDrop:finishDrop,
            }
          )
        
        // 添加至画布
        container.model = modelDemo
    }
  }
}
</script>
