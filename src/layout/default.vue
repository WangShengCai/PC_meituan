<template>
<!-- 顶部导航条 和 底部footer 自定义模板 -->
    <div class="layout-default">
        <el-container>
            <!-- 顶部 => 加height属性是为了消除element组件自身所带的height -->
            <el-header height="">
                <my-header />
            </el-header>
            <!-- 中间 -->
            <el-main>
                <router-view></router-view>
            </el-main>
            <!-- 底部 => 加height属性是为了消除element组件自身所带的height -->
            <el-footer height="">
                <my-footer />
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import MyHeader from '@/components/header/index.vue'
    import MyFooter from '@/components/footer/index.vue'
    export default {
        components: {
            MyHeader: MyHeader,
            MyFooter: MyFooter
        }
    }
</script>

<style lang="scss">
    @import '@/assets/css/public/layout.scss';
</style>
