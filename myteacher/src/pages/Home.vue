<template>
  <div>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import Vue from 'vue';
import {Carousel,CarouselItem} from 'element-ui';
Vue.use(Carousel);
Vue.use(CarouselItem);
export default {
    beforeRouteEnter(to,from,next){
        console.log('Home: beforeRouteEnter');
        next();
    },
    beforeRouteUpdate(to,from,next){
        console.log('Home: beforeRouteUpdate');
        next();
    },
    beforeRouteLeave(to,from,next){
        console.log('Home: beforeRouteLeave');
        next();
    }
};
</script>

<style scoped>
  a{color:#f00 !important}
</style>