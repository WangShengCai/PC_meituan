<template>
    <div class="page-product">
        <!-- 第一行 -->
        <el-row class="m-crumbs">
            <crumbs />
        </el-row>
        <!-- 第二行 -->
        <el-row>
            <!-- 第一列 -->
            <el-col :span="19">
                <el-row>
                    <categroy />
                </el-row>
                <!--  -->
                <el-row>
                    <list />
                </el-row>
            </el-col>
            <!-- 第二列 -->
            <el-col :span="5">
                <a href="#" style="margin-left:30px;"><img src="./map.png" alt=""></a>
            </el-col>
        </el-row>
    </div>
</template>


<script>
    import crumbs from '@/components/products/crumbs.vue';
    import Categroy from '@/components/products/categroy.vue';
    import List from '@/components/products/list.vue';
    export default {
        components: {
            crumbs: crumbs,
            Categroy: Categroy,
            List: List,
        }
    }
</script>


<style lang="scss">
    @import '@/assets/css/products/index.scss';
</style>