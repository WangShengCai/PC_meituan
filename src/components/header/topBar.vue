<template>
    <el-row class="m-header-topbar m-header">
        <!-- 地理位置区域 -->
        <el-col :span='10'>
            <geo />
        </el-col>
        <!-- 导航条区域 -->
        <el-col :span='14'>
            <m-nav />
        </el-col>
    </el-row>
</template>

<script>
  import geo from './geo.vue'
  import MNav from './nav.vue'
  export default {
    components: {
      geo: geo,
      MNav: MNav
    }
  }
</script>