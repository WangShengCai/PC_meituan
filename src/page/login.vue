<template>
    <div class="page-login">
        <!-- 上 -->
        <div class="login-header">
            <a class="logo" href="http://www.meituan.com" style="color:transparent">美团网</a>
        </div>
        <!-- 中 -->
        <div class="login-panel">
            <div class="banner">
                <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" width="480" height="370" alt="美团网">
            </div>
            <div class="form">
                <!-- 错误信息 -->
                <h4 class="tips" v-if="error">{{ error }}</h4>
                <!--  -->
                <p><span>账号登录</span></p>
                <!--  -->
                <el-input :class="{error:error && !userName}" v-model="userName" placeholder="手机号/用户名/邮箱" prefix-icon="profile"></el-input>
                <el-input :class="{error:error && !passWord}" v-model="passWord" type="password" placeholder="密码" prefix-icon="password"></el-input>
                <!--  -->
                <div class="foot"><a href="#">忘记密码?</a></div>
                <!--  -->
                 <el-button type="primary" class="btn-login" v-on:click="submit">登录</el-button>
                 <!--  -->
                 <p class="reg">
                     <span>还没有账号?</span><router-link :to="{name:'register'}">免费注册</router-link>
                 </p>
                 <!--  -->
                 <div class="oauth-wrapper J-oauth-wrapper">
                    <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
                    <div class="oauth cf">
                        <span class="oauth__link oauth__link--qq"></span>
                        <span class="oauth__link oauth__link--weibo"></span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 下 -->
        <footer>
            <ul>
                <li><a href="#">关于美团</a></li>
                <li><a href="#">加入我们</a></li>
                <li><a href="#">商家入驻</a></li>
                <li><a href="#">帮助中心</a></li>
                <li><a href="#">美团手机版</a></li>
            </ul>
            <p>©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
        </footer>
    </div>
</template>


<script>
    import api from '@/api/index.js';
    export default {
        data() {
            return {
                userName: '',
                passWord: '',
                error: '',
            }
        },
        methods: {
            submit() {
                if(!this.userName) {
                    this.error = '请输入手机号 / 账号 / 邮箱！';
                    return;
                }
                if(!this.passWord) {
                    this.error = '请输入密码！';
                    return;
                }
                // 用户登录接口
                api.login({
                    params: {
                        userName: this.userName,
                        password: this.passWord,
                    }
                }).then(res => {
                    if(res.data.status == 'success') {
                        this.$store.dispatch('setUserName', res.data.data)
                        this.$router.push({name: 'index'});
                    } else {
                        this.error = res.data.msg;
                    }
                })
            },
        }
    }
</script>


<style lang="scss">
    @import '@/assets/css/login/index.scss';
</style>


