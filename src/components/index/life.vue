<template>
    <div class="m-life">
        <!-- 第一行 -->
        <el-row>
            <ul class="nav">
                <li><router-link to="/" class="takeout">美团外卖</router-link></li>
                <li><router-link to="/">猫眼电影</router-link></li>
                <li><router-link to="/">美团酒店</router-link></li>
                <li><router-link to="/" class="apartment">民宿 / 公寓</router-link></li>
                <li><router-link to="/" class="business">商家入驻</router-link></li>
                <li><router-link to="/">美团公益</router-link></li>
            </ul>
        </el-row>
        <!-- 第二行 -->
        <el-row>
            <!-- 第一列 -->
            <el-col :span="14">
                <slider />
            </el-col>
            <!-- 第二列 -->
            <el-col :span="4">
                <div class="m-life-pic"></div>
            </el-col>
            <!-- 第三列 -->
            <el-col :span="6">
                <div class="m-life-login">
                    <h4>
                        <router-link :to="{name:'login'}">
                            <img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt="">
                        </router-link>
                    </h4>
                    <p class="m-life-logon-name">Hi！{{ $store.state.userName ? $store.state.userName : '你好' }}</p>
                    <p v-if="!$store.state.userName">
                        <router-link :to="{name:'register'}"><el-button round>注册</el-button></router-link>
                        <router-link :to="{name:'login'}"><el-button round>立即登录</el-button></router-link>
                    </p>
                </div>
            </el-col>
        </el-row>
        <!-- 第三行 -->
        <el-row>
            <el-col :span="7"><div class="m-life-hotel"></div></el-col>
            <el-col :span="7"><div class="m-life-music"></div></el-col>
             <el-col :span="4"><div class="m-life-coop"></div></el-col>

             <el-col :span="6">
                <div class="m-life-downapp">
                    <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP">
                    <p class="last-p">美团APP手机版<br>
                        <span class="red">1元起</span><span>吃喝玩乐</span>
                    </p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>


<script>
    import Slider from './slider.vue'
    export default {
        components: {
            Slider: Slider
        }
    }
</script>


<style lang="scss">
    @import '@/assets/css/index/life.scss'
</style>


