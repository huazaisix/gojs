<template>
	<div class="main">
		<div ref="echarts1" style="width:40%;height:20rem;"></div>
		<div ref="echarts2"></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
			}
		},
		components:{
			
		},
		mounted(){
			let firtsEahrts = this.$echarts.init(this.$refs.echarts1)
			firtsEahrts.setOption({
			    title: {
			        text: 'ECharts 入门示例'
			    },
			    tooltip: {
			    	trigger: 'axis'
			    },
			    legend:{
			    	// type:'plain',
			    	// show:true,
			    	data:['name1','name2'],
			    	right:0,
			    	icon:'arrow'
			    },
			    dataZoom:[
			    	{
			            show: true,
			            realtime: true,
			            start: 0,
			            end: 50
			        },
			        {
			            type: 'inside',
			            realtime: true,
			            start: 0,
			            end: 50
			        }
			    ],
			    xAxis: {
			    	type:'category',
			    	boundaryGap:false,
			        data: ['mon', 'tue', 'web', 'thu', 'fri', 'sat','sun'],
			        nameGap:30,
			         nameRotate:45,
			    },
			    yAxis: {
			    	type:'value',
			    	// max:120
			    	max:function(data){
			    		return data.max + 20
			    	}
			    },
			    series: [{
			    	name:'name1',
			        type: 'line',
			        // stack:'总量',
			        data: [5, 20, 36, 10, 10, 20,100],
			        // areaStyle: {},
			        symbol:'triangle',
			        symbolSize:20,
			    },{
			    	name:'name2',
			        type: 'line',
			        // stack:'总量',
			        data: [15, 4, 46, 100, 80, 20,90],
			        // areaStyle: {},
			        lineStyle:{
			        	color:'green',
			        	width:4,
			        	type:'dashed'
			        },
			        itemStyle:{
			        	borderWidth:3,
			        	borderColor:'yellow',
			        	color:'blue'
			        }
			    }]
			});
		},
		methods:{

		},
	}
</script>
<style>
.height:{
	height:1000px;	
}
</style>