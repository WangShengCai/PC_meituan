<template>
    <div class="m-header shadow">
        <!-- 导航条区域 -->
        <el-row>
            <top-bar />
        </el-row>
        <!-- 搜索区域 -->
        <el-row>
            <search-bar />
        </el-row>
    </div>
</template>

<script>
    import topBar from './topBar.vue'
    import searchBar from './searchBar.vue'

    export default {
        components: {
            topBar: topBar,
            searchBar: searchBar
        }
    }
</script>

<style lang="scss">
    // 此css文件包含了两个文件 topbar 的样式 和 search 的样式
    @import '@/assets/css/public/header/index.scss';
</style>
