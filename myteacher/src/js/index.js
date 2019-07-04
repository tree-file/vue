    
/**
 * Bus总线传输
 */
import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter)

import  home from '../pages/Home.vue'
import  Discover from '../pages/Discover.vue';
import  Cart from '../pages/Cart.vue';
import  Mine from '../pages/Mine.vue';
import Login from '../pages/Login.vue';
import Reg from '../pages/Reg.vue';




let Phone = {
    template:`<div>手机</div>`
}
let Computer = {
    template:`<div>电脑</div>`
}
let Tablet = {
    template:`<div>平板</div>`
}
let Acc = {
    template:`<div>配件</div>`
}


let router = new VueRouter({
    // mode:"hash",
    routes:[
        {   
            path:'/home',
            name:'Home',
            // component:home

            components:{
                default:home,
                bottom:{template:'<h4>Bottom</h4>'}
            }
        },
        {
            path: '/',
            // component:{template:'<div>404</div>'}
            redirect: {name:'Home'}
        },
        {
            name: 'Discover',
            path: '/discover',
            component: Discover,

            children:[{
                name:'Phone',
                path:'phone',
                component:Phone
            },{
                name:'Computer',
                path:'computer',
                component:Computer
            },{
                name:'Tablet',
                path:'tablet',
                component:Tablet
            },{
                name:'Acc',
                path:'acc',
                component:Acc
            },
        ]
        },
        {
            name: 'Cart',
            path: '/cart',
            component: Cart,
            meta:{requresAuth:true},
            beforeEnter(to,from,next){
                console.log('Cart路由独享：beforeEnter')
                next();
            }
        },
        {
            name: 'Mine',
            path: '/mine',
            component: Mine,
            meta: { requiresAuth: true }
        },
        {
            name: 'Login',
            path: '/login',
            component: Login,
            props: true
        },
        {
            name: 'Reg',
            path: '/reg',
            component: Reg,
            props: function (route) {
                if (route.query.username) {
                    return {
                        username: route.query.username.toUpperCase()
                    }
                }
                return {
                    className: '1904'
                }
            }
        },

    ]
});

router.beforeEach((to,from,next)=>{
    console.log('全局：beforeEach',to);
    if(to.matched.some(item=>item.meta.requiresAuth)){
        let username = localStorage.getItem('username');

        if(username){
            next();
        }

        else{
            next({
                path:'/login',
                query:{
                    redirectTo:to.fullPath
                }
            })
        }
    }else{
        next();
    }
})

router.afterEach((to,from)=>{
    console.log('全局：afterEach');
})

export default router;