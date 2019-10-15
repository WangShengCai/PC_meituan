<template>
    <div class="choose-wrap" @click="showWrapper" v-document-click="documentClick">
        <div :class="['choose',disabled ? 'disabled' : '']">
            <span>{{ value }}</span><i class="el-icon-caret-bottom"></i>
            <!-- 展示具体 省份 or 城市 内容 -->
            <div :class="{'mt-content':true,'active':showWrapperActive}">
                <h2>{{ value }}</h2>
                <div :class="['wrapper',className]">
                    <div class="col">
                        <span :class="{'mt-item':true,'active':item.name === value}" v-for="item in list" :key="item.provinceCode" @click="handleClick(item)">{{ item.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props:['list','value','showWrapperActive','disabled','className'],
    methods: {
        showWrapper(e) {
            e.stopPropagation();
            this.$emit('change_active',true);
        },
        documentClick() {
            this.$emit('change_active',false);
        },
        handleClick(val) {
            this.$emit('change',val);
        }
    }
}
</script>


<style lang="scss">
    @import '@/assets/css/changecity/select.scss';
</style>
