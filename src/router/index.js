import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import downList from '@/components/downList'
import dialog from '@/components/dialog'
import scrollTop from '@/components/scrollTop'
import aCom from '@/components/a'
import bCom from '@/components/b'
import allSelected from '@/components/allselected'
import selectInnerTable from '@/components/selectInnerTable'  
import stableCheckbox from '@/components/stableCheckbox'
import slot from '@/components/slot'
import echarts from '@/components/echarts'
import elTree from '@/components/el-tree'
import selectLoadMore from '@/components/selectLoadMore'
import gojsExample from '@/components/gojsExample'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: dialog
    }
    ,
    {
      path: '/scrollTop',
      name: 'scrollTop',
      component: scrollTop
    },
    {
      path: '/elTree',
      name: 'elTree',
      component: elTree
    },
    {
      path: '/aCom',
      name: 'aCom',
      component: aCom
    },
    {
      path: '/bCom',
      name: 'bCom',
      component: bCom
    },
    {
      path: '/allSelected',
      name: 'allSelected',
      component: allSelected
    },
    {
      path: '/selectInnerTable',
      name: 'selectInnerTable',
      component: selectInnerTable
    },
    {
      path: '/stableCheckbox',
      name: 'stableCheckbox',
      component: stableCheckbox
    },
    {
      path: '/slot',
      name: 'slot',
      component: slot
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: echarts
    },
    {
      path: '/selectLoadMore',
      name: 'selectLoadMore',
      component: selectLoadMore
    },
    {
      path: '/',
      name: 'gojsExample',
      component: gojsExample
    }
  ]
})
