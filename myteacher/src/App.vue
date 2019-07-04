<template>
  <div id="app">
    <el-menu
      :default-active="active"
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="skyblue"
      @select="handleSelect"
      router
    >
      <el-menu-item v-for="item in pages" :key="item.name" :index="item.path">
        
        {{item.title}}
        </el-menu-item>
    
    </el-menu>
    <!-- 路由配置匹配后，渲染对应的组件到router-view -->
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import {Menu,MenuItem} from 'element-ui';
Vue.use(Menu);
Vue.use(MenuItem);
export default {
  name: 'app',
  data(){
    return {
      pages:[
        {
          title:'首页',
          path:'/home',
          name:'Home'
        }, {
          title:'发现',
          path:'/discover',
          name:'Discover'
        }, {
          title:'购物车',
          path:'/cart',
          name:'cart'
        }, {
          title:'我的',
          path:'/mine',
          name:'Mine'
        }
      ],
      active:"/home"
    };
  },
  methods: {
    handleSelect(index,indexPaht){
      console.log(index,indexPaht);
      this.active = index
    }
  },
  created(){
    let hash = window.location.hash;
    this.active = hash;
  }
}
</script>

<style>
.active {
  font-weight: bold;
  color: #f00
}

</style>
