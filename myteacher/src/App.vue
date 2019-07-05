<template>
  <div class="app">
    <el-row>
      <el-col :span="18">
        <el-menu
      :default-active="active"
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="#58bc58"
      @select="handleSelect"
      router
    >
      <el-menu-item v-for="item in pages" :key="item.name" :index="item.path">{{item.title}}</el-menu-item>
    </el-menu>
      </el-col>
      <el-col :span="6" class="login" v-if="!logined">
         <el-link href="#" @click.native.prevent.stop="goto('Reg')">注册</el-link>
         <el-link href="#" @click.native.prevent.stop="goto('Login')">登录</el-link>
      </el-col>
      <el-col :span="6" class="login" v-else>
        <el-link href="#" @click.native.prevent.stop="logout()">退出</el-link>
      </el-col>
    </el-row>
    
    <router-view/>
    <router-view name="bottom"/>
  </div>
</template>

<script>
import Vue from 'vue';
import {Menu, MenuItem, Row,Col,Link,Container,Header,Aside,Main,Form,FormItem,Button,Input} from 'element-ui';
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Link);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Input);
import 'element-ui/lib/theme-chalk/index.css'
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
      active:"/home",
      logined:false,
    };
  },
  methods: {
    handleSelect(index,indexPaht){
      console.log(index,indexPaht);
      this.active = index
    },
    goto(name){
      this.$router.push({
        name,
        query:{username:'pangzi',paw:123456},
        params:{a:100,b:200}
      })
    },
    logout(){
      this.logined = false;
      localStorage.removeItem('username');
    }
  },
  created(){
    let hash = window.location.hash.slice(1);
    this.active = hash;

    let username = localStorage.getItem('username');
    this.logined = username ? true :false;
  }
}
</script>

<style>
.active {
  font-weight: bold;
  color: rgb(0, 55, 28)
}
.login {
  text-align:right;line-height:60px;
  a{margin-right:10px};
}
</style>
