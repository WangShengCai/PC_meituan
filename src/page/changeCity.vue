<template>
    <div class="page-changeCity">
        <!-- 省份选择 -->
        <el-row>
            <province />            
        </el-row>
        <!-- 热门城市 -->
        <el-row>
            <hot title="热门城市：" :list="hotList" />
        </el-row>
        <!-- 最近访问 -->
        <el-row>
            <hot title="最近访问：" :list="recentList" />            
        </el-row>
        <!-- 城市列表 -->
        <el-row>
            <category />
        </el-row>
    </div>
</template>


<script>
import api from '@/api/index.js'
import Province from '@/components/changeCity/province.vue'
import hot from '@/components/changeCity/hot.vue'
import Category from '@/components/changeCity/category.vue'
export default {
    data() {
        return {
            hotList: [],
            recentList: [],
        }
    },
    created() {
        // 获取热门城市
        api.getHotCity().then(res => {
            this.hotList = res.data.data.map(item => item.name);
        });
        //  最近搜索城市
        api.getRecentCity().then(res => {
            this.recentList = res.data.data.map(item => item.name);
        })
    },
    components: {
        hot: hot,
        Province: Province,
        Category: Category,
    },
}
</script>


<style lang="scss">
    @import '@/assets/css/changecity/iselect.scss';
</style>

