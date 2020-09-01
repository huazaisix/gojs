<template>
  <div style="width: 100%;">
    <div id="stageGraph" style="flex-grow: 1; height: 500px; border: solid 1px black"></div>
  </div>
</template>
<script>
import go, { Size } from 'gojs'
// import icon from '../assets/logo.png'
// 引用gojs类
const MAKE = go.GraphObject.make
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
        nodeData: [
          {"key":3, "isGroup":true, "text":"Group A"},
          {"key":4, "isGroup":true, "text":"Group B"},
          {"key":5, "isGroup":true, "text":"Group C"},
          {"text":"first A", "group":3, "key":-7},
          {"text":"second A", "group":3, "key":-8},
          {"text":"first B", "group":4, "key":-9},
          {"text":"second B", "group":4, "key":-10},
          {"text":"third B", "group":4, "key":-11},
          {"text":"first C", "group":5, "key":-12},
          {"text":"second C", "group":5, "key":-13},
          ],
        linkData: [
          {from: 3, to: 4},
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
    makeLayout (horiz) {  // a Binding conversion function
      if (horiz) {
        return MAKE(go.GridLayout,
          {
            wrappingWidth: Infinity, alignment: go.GridLayout.Position,
            cellSize: new go.Size(1, 1), spacing: new go.Size(4, 4)
          })
      } else {
        return MAKE(go.GridLayout,
          {
            wrappingColumn: 1, alignment: go.GridLayout.Position,
            cellSize: new go.Size(1, 1), spacing: new go.Size(4, 4)
          })
      }
    },
    highlightGroup (e, grp, isShow) {
      console.log(e, grp, show, '=====highlightGroup=======>>>>')
    },
    finishDrop (e, grp) {
      console.log(e, grp, '======???')
      var ok = (grp !== null
        ? grp.addMembers(grp.diagram.selection, true)
        : e.diagram.commandHandler.addTopLevelParts(e.diagram.selection, true));
      if (!ok) e.diagram.currentTool.doCancel();
    },
    defaultColor(horiz) {  // a Binding conversion function
      return horiz ? "#FFDD33" : "#33D3E5";
    },
    defaultFont(horiz) {  // a Binding conversion function
      return horiz ? "bold 18px sans-serif" : "bold 16px sans-serif";
    },
    init(){
        // 创建最外层画布
        var container = MAKE(go.Diagram, 'stageGraph',
          {
            "draggingTool.isGridSnapEnabled": true,
            "draggingTool.dragsLink": true,
            "relinkingTool.isUnconnectedLinkValid": true,
            "relinkingTool.portGravity": 20,
            "relinkingTool.fromHandleArchetype":
              MAKE(go.Shape, "Diamond", { segmentIndex: 0, cursor: "pointer", desiredSize: new go.Size(8, 8), fill: "tomato", stroke: "darkred" }),
            "relinkingTool.toHandleArchetype":
              MAKE(go.Shape, "Diamond", { segmentIndex: -1, cursor: "pointer", desiredSize: new go.Size(8, 8), fill: "darkred", stroke: "tomato" }),
            "linkReshapingTool.handleArchetype":
              MAKE(go.Shape, "Diamond", { desiredSize: new go.Size(7, 7), fill: "lightblue", stroke: "deepskyblue" }),
            "rotatingTool.handleAngle": 270,
            "rotatingTool.handleDistance": 30,
            "rotatingTool.snapAngleMultiple": 15,
            "rotatingTool.snapAngleEpsilon": 15,
            // "commandHandler.archetypeGroupData": { isGroup: true, category: "ok" },
          }
        )
        // 设置模型&设置属性（属性固定名称）
        var modelDemo = MAKE(go.GraphLinksModel)
        modelDemo.nodeDataArray = this.data.nodeData
        modelDemo.linkDataArray = this.data.linkData
        container.layout = MAKE(go.GridLayout, {
          wrappingWidth: Infinity, alignment: go.GridLayout.Position,
          cellSize: new go.Size(1, 1), spacing: new go.Size(50, 50),
        })

        var _this = this
        // container.groupTemplateMap.add('ok', ..)
        container.groupTemplate =
          MAKE(go.Group, 'Auto',
            {
              background: "transparent",
              computesBoundsAfterDrag: true,
              // handlesDragDropForMembers: true,
              layout: MAKE(go.GridLayout, {
                // sorting: go.GridLayout.Descending,
                wrappingWidth: 1, alignment: go.GridLayout.Position,
                cellSize: new go.Size(1, 1), spacing: new go.Size(6, 6)
              }),
              mouseDrop: function (e, grp) {
                var ok = (grp !== null
                  ? grp.addMembers(grp.diagram.selection, true)
                  : e.diagram.commandHandler.addTopLevelParts(e.diagram.selection, true))
                if (!ok) e.diagram.currentTool.doCancel()
              },
            },
            // Horizontal
            MAKE(go.Shape, 'Rectangle',
              {
                fromSpot: go.Spot.AllSides,
                toSpot: go.Spot.AllSides,
                portId: '',
                fromLinkable: true,
                toLinkable: true,
                fill: null, 
                stroke: "#E69900", 
                strokeWidth: 2,
              },
            ),
            MAKE(go.Panel, 'Vertical',
              {
                gridCellSize: new go.Size(1,1),
              },
              MAKE(go.Panel, 'Horizontal',
                { 
                  stretch: go.GraphObject.Fill, 
                  background: "#33D3E5", 
                  margin: 1,
                },
                // MAKE("SubGraphExpanderButton",
                // { alignment: go.Spot.Right, margin: 5 }),
                MAKE(go.TextBlock,
                {
                  alignment: go.Spot.Left,
                  editable: true,
                  margin: 5,
                  font: "bold 16px sans-serif",
                  stroke: "#006080"
                },
                new go.Binding("text", "text").makeTwoWay())
              ),
              MAKE(go.Placeholder, {padding: 10, alignment:go.Spot.TopLeft}),
            ),
          )
        var nodeSelectionAdornmentTemplate =
          MAKE(go.Adornment, "Auto",
            MAKE(go.Shape, { fill: null, stroke: "deepskyblue", strokeWidth: 2.5, strokeDashArray: [4, 2] }),
            MAKE(go.Placeholder)
          )
        container.nodeTemplate=
          MAKE(go.Node, "Auto",
            { 
              mouseDrop: function (e, node) {
                // 需要查询到对应的组群;然后添加
                var grp = node.containingGroup
                var ok = (grp !== null
                  ? grp.addMembers(grp.diagram.selection, true)
                  : e.diagram.commandHandler.addTopLevelParts(e.diagram.selection, true))
                if (!ok) e.diagram.currentTool.doCancel()
              },
              // fromLinkable: true,
              // toLinkable: true,
            },
            MAKE(go.Shape, 'RoundedRectangle',
              {
                fill: 'cyan', 
                stroke: "#558000",
                strokeWidth: 2,
              },
            ),
            MAKE(go.TextBlock, 'wwww',
            { 
              margin: 8,
              // stroke: 'white',
            },
            new go.Binding('text', 'text').makeTwoWay(),
            )
          )
        // 添加至画布
        container.model = modelDemo
        container.grid.visible = true
        console.log(go.Shape.getArrowheadGeometries().toKeySet().toArray())
        container.linkTemplate = 
          MAKE(go.Link,
            { 
              selectable: true,
              relinkableFrom: true,
              relinkableTo: true,
              selectionAdornmentTemplate: nodeSelectionAdornmentTemplate
              // routing: go.Link.Normal,
            },
            MAKE(go.Shape, { fromArrow: '' }),
            MAKE(go.Shape, { toArrow: "Standard" }),
          )
    }
  }
}
</script>
