<template>
    <div class="page-register">
        <!-- 上 -->
        <div class="header">
            <header>
                <a class="site-logo" href="http://www.meituan.com"></a>
                <div class="login">
                    <span>已有美团账号</span><router-link :to="{name: 'login'}">登录</router-link>
                </div>
            </header>
        </div>
        <!-- 中 -->
        <div class="content">
            <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm" label-width="100px" class="demo-registerForm">
                <el-form-item label="用户名" prop="userName">
                    <el-input class="input" type="text" v-model="registerForm.userName" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="密码" prop="password">
                    <el-input class="input" type="password" v-model="registerForm.password" autocomplete="off" @input="passwordInput"></el-input>
                </el-form-item>
                <div class="pw-strength">
                    <div :class="['bar',strengthClass]"></div>
                    <div class="letter"><span>弱</span><span>中</span><span>强</span></div>
                </div>

                <el-form-item label="确认密码" prop="rePassword">
                    <el-input class="input" type="password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!-- 下 -->
        <footer>
            <p class="copyright">
                ©<a class="f1" href="https://www.meituan.com">meituan.com</a>&nbsp;
                <a class="f1" target="_blank" href="http://www.miibeian.gov.cn/">京ICP证070791号</a>&nbsp;
                <span class="f1">京公网安备11010502025545号</span>
            </p>
        </footer>
    </div>
</template>


<script>
import api from '@/api/index.js';
export default {
    data() {
        // 用户名
        var validateUser = (rule, value, callback) => {
            if(value == '') {
                callback(new Error('请输入用户名'));
            } else if(value.length < 4 || value.length > 16) {
                callback(new Error('用户名必须为4-16位的字母数字下划线组成!'));
            } else {
                callback();
            }
        };
        // 一次确认密码
        var validatePass = (rule, value, callback) => {
            if (value == '') {
                callback(new Error('请输入密码'));
            } else if(value.length < 6 || value.length > 16) {
                callback(new Error('密码必须为6-16位的字母数字下划线组成!'));
            } else {
                callback();
            }
        };
        // 二次确认密码
        var validatePass2 = (rule, value, callback) => {
                if (value == '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.registerForm.password) {
                    callback(new Error('两次输入密码不一致，请重新输入!'));
                } else {
                    callback();
                }
            };
            return {
                // 校验数据
                registerForm: {
                    userName: '',
                    password: '',
                    rePassword: '',
                },
                // 强度类型
                strengthClass: '',
                // 校验规则
                rules: {
                    userName: [{validator: validateUser, trigger: 'blur'}],
                    password: [{ validator: validatePass, trigger: 'blur' }],
                    rePassword: [{ validator: validatePass2, trigger: 'blur' }],
                }
        };
    },
    methods: {
        submitForm(val) {
            this.$refs[val].validate((valid) => {
                if (valid) {                //有效的
                    api.register({          // 用户注册接口
                        params: this.registerForm,
                    }).then(res => {
                        if(res.data.status == 'success') {
                            this.$router.push({name: 'login'});
                        } else {
                            alert(res.data.msg);
                        }
                    })
                } else {                    //没有效的
                    return;
                }
            });
        },
        passwordInput() {
            var regStr = /(\w)+/ig;
            var regNum = /(\d)+/ig;
            var reg = /_/ig;
            var strongth = this.registerForm.password.match(reg) && this.registerForm.password.match(regNum) && this.registerForm.password.match(regStr);
            if(this.registerForm.password.length > 20 || (this.registerForm.password.length > 6 && strongth)) {
                this.strengthClass = 'strong';
            } else if(this.registerForm.password.length < 6) {
                this.strengthClass = 'week';
            } else if(!this.registerForm.password) {
                this.strengthClass = '';
            } else {
                this.strengthClass = 'normal';
            }
        },
    }
}
</script>


<style lang="sass">
    @import '@/assets/css/register/index.scss';
</style>

