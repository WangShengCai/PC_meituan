<template>
    <div>
        <span>省份选择：</span>
        <m-select :className="province1" :list="provinceList" :value="province" title="省份" :showWrapperActive="provinceActive" @change_active="changeProvinceActive" @change="changeProvince"  />
        <m-select :className="city1" :list="cityList" :value="city" title="城市" :showWrapperActive="cityActive" @change_active="changeCityActive" @change="changeCity" :disabled="cityDisabled" />
        <span>直接搜索：</span>
        <el-select v-model="searchWord" multiple filterable remote reserve-keyword placeholder="请输入城市名称" :loading="loading">
            <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
        </el-select>
    </div>
</template>


<script>
    import api from '@/api/index.js';
    import MSelect from './select.vue';
    export default {
        data() {
            return {
                province: '省份',
                province1: 'province',
                provinceList: [],
                city: '城市',
                city1: 'city',
                cityList: [],
                cityDisabled: true,

                provinceActive: false,
                cityActive: false,

                searchList: ["青岛", "淄博", "济南", "烟台", "枣庄", "东营", "潍坊", "济宁", "泰安", "威海", "日照", "莱芜", "临沂", "德州", "聊城", "滨州", "菏泽", "兖州", "章丘区", "龙口", "寿光", "青州", "荣成", "文登", "乳山", "邹平", "新泰", "诸城", "昌邑", "莱州", "临清", "广饶", "肥城", "滕州", "莱阳", "海阳", "平度", "胶州", "招远", "蓬莱", "安丘", "高密", "禹城", "乐陵", "莱西", "即墨", "齐河", "夏津", "昌乐", "东平", "临朐", "平原", "宁阳", "宁津", "单县", "邹城", "牟平", "博兴", "茌平", "阳谷", "垦利", "河口", "巨野", "曹县", "郓城", "梁山", "微山", "汶上", "嘉祥", "金乡", "利津", "武城", "临邑", "石岛", "栖霞", "费县", "薛城", "兰陵", "沂水", "莒南", "郯城", "沂南", "蒙阴", "平邑", "临沭", "博山", "庆云", "商河", "泗水", "鄄城县", "平阴县", "长清区", "鱼台县", "成武县", "东明县", "定陶区","兰州", "金昌", "白银", "天水", "武威", "张掖", "平凉", "酒泉", "庆阳", "定西", "陇南", "临夏", "甘南", "嘉峪关", "敦煌", "华亭", "永登县", "环县", "康县", "山丹县","无锡", "南京", "苏州", "南通", "常州", "徐州", "扬州", "连云港", "淮安", "盐城", "镇江", "泰州", "宿迁", "昆山", "江阴", "张家港", "常熟", "丹阳", "太仓", "吴江", "靖江", "溧阳", "宜兴", "金坛", "大丰", "东台", "邳州", "启东", "如皋", "句容", "兴化", "泰兴", "海门", "高邮", "仪征", "沭阳", "射阳", "滨海", "响水", "阜宁", "建湖", "新沂", "扬中", "宝应", "周庄", "海安", "灌云", "灌南", "赣榆", "东海", "泗阳", "泗洪", "沛县", "盱眙", "丰县", "睢宁", "江都", "金湖", "涟水", "如东", "溧水区"],
                searchWord: '',
                loading: false,
            }
        },
        created() {
            // 获取省份列表
            api.getProvince().then(res => {
                this.provinceList = res.data.data.map(item => {
                    item.name = item.provinceName;
                    return item;
                });
            })
        },
        components: {
            MSelect: MSelect,
        },
        methods: {
            changeProvinceActive(flag) {
                this.provinceActive = flag;
                if(flag) {
                    this.cityActive = false;
                }
            },
            changeCityActive(flag) {
                this.cityActive = flag;
                if(flag) {
                    this.provinceActive = false;
                }
            },
            changeProvince(value) {
                this.province = value.name;
                this.cityDisabled = false;
                this.cityList = value.cityInfoList;
            },
            changeCity(value) {
                this.city = value.name;
                // 两个组件之间的通信
                this.$store.dispatch('setPosition',value);
                this.$router.push({name:'index'});
            },
        }
    }
</script>
