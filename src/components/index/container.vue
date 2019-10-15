<template>
  <div class="m-istyle">
      <!-- 有格调区域 -->
    <dl @mouseover="over" :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd v-for="(item,index) in nav.list" :key="index" :class="{active: kind == item.tab}" :data-type="item.tab">
        {{ item.text }}
      </dd>
    </dl>
    <!-- 图片列表区域 -->
    <ul class="ibody">
      <li v-for="(item,index) in list" :key="index">
        <el-card :body-style="{ padding: '0px' }">
            <a :href="item.href" target="_blank">
                <!-- 图片 -->
                <div><img :src="item.image"></div>
                <!-- 信息 -->
                <div class="poi-info">
                    <div class="title" :title="item.title">{{ item.title }}</div>
                    <div class="sub-title" :title="item.sub_title">{{ item.sub_title }}</div>
                    <!-- if -->
                    <div v-if="item.rentNum && item.price_info.current_price">
                        <span class="current-price-wrapper">
                            <span class="price-symbol">¥</span><span>{{ item.price_info.current_price }}</span>
                        </span>
                        <span class="old-price">{{ item.price_info.old_price }}</span>
                        <span class="address">{{ item.address }}</span>
                    </div>
                    <!-- else if -->
                    <div v-else-if="!item.rentNum">
                        <span class="current-price-wrapper">
                            <span class="price-symbol">¥ </span><span>抢光了</span>
                        </span>
                        <span class="address">{{ item.address }}</span>
                    </div>
                    <!-- else -->
                    <div v-else>
                        <span class="current-price-wrapper">
                            <span class="price-symbol">¥</span><span class="ubits">{{ item.price_info.avg_price }} / {{ item.price_info.ubits }}</span>
                        </span>
                        <span class="address">{{ item.address }}</span>
                    </div>
                </div>
            </a>
        </el-card>
      </li>
    </ul>
  </div>
</template>


<script>
    export default {
        data() {
            return {
                kind: 'all',
                list: [
                    {
                        href: '//www.meituan.com/meishi/683873/',
                        image: '//p1.meituan.net/msmerchant/bfe262afe900dc84e2de9902d1eb8e222117414.jpg@368w_208h_1e_1c',
                        title: '必胜客（剧院店）',
                        sub_title: '【人气】重磅拼盘饮料组合（A012）1份',
                        price_info: {
                            current_price: 88,
                            old_price:'门市价¥113',
                            avg_price: null,
                            ubits: null,
                        },
                        rentNum: 20,
                        address: '武林广场'
                    },
                    {
                        href: '//www.meituan.com/xiuxianyule/160406430/',
                        image: '//p0.meituan.net/msmerchant/ef194649d015b998f876221038ad77722355786.jpg@368w_208h_1e_1c',
                        title: '纳德食尚自助餐厅',
                        sub_title: '饕餮盛宴5人自助',
                        price_info: {
                            current_price: 150,
                            old_price:'门市价¥113',
                            avg_price: null,
                            ubits: null,
                        },
                        rentNum: 20,
                        address: '武林广场'
                    },
                    {
                        href: '//www.meituan.com/meishi/96674502/',
                        image: '//p1.meituan.net/deal/d336b9908512a579d6b817db454ad6d11197469.jpg@368w_208h_1e_1c',
                        title: '纯味烘焙开心手工蛋糕（西湖文化广场店）',
                        sub_title: 'A款~I款9种款式1个，约6英寸，圆形',
                        price_info: {
                            current_price: 138,
                            old_price:'门市价¥218',
                            avg_price: null,
                            ubits: null,
                        },
                        rentNum: 20,
                        address: '西湖文化广场'
                    },
                    {
                        href: '//www.meituan.com/jiudian/2436225/',
                        image: '//p1.meituan.net/msmerchant/40f9a41e07595e024720709a7ea2dbde620856.jpg@368w_208h_1e_1c',
                        title: '星都宾馆星樂自助餐厅',
                        sub_title: '单人星级自助晚餐',
                        price_info: {
                            current_price: 198,
                            old_price:'门市价¥368',
                            avg_price: null,
                            ubits: null,
                        },
                        rentNum: 20,
                        address: '湖墅南路'
                    },
                    {
                        href: '//www.meituan.com/meishi/108361308/',
                        image: '//p0.meituan.net/bbia/4476c225f6e072204042288f83e512c353303.jpg@368w_208h_1e_1c',
                        title: '储缘创意蛋糕',
                        sub_title: '8英寸欧式水果生日蛋糕--领先推出蛋糕店送货上门贴心服务的理念,同城3公里可免费配送到家！1个，约8英寸，圆型',
                        price_info: {
                            current_price: null,
                            old_price: null,
                            avg_price: 198,
                            ubits: '人均',
                        },
                        rentNum: 20,
                        address: '北景园'
                    },
                    {
                        href: '//www.meituan.com/meishi/698773/',
                        image: '//p1.meituan.net/msmerchant/cc1abdf3eb74572217cb6cad114ec0ee116305.jpg@368w_208h_1e_1c',
                        title: '四季风情餐厅（天目山路店）',
                        sub_title: '6-8人餐，提供免费WiFi',
                        price_info: {
                            current_price: null,
                            old_price: null,
                            avg_price: null,
                            ubits: null,
                        },
                        rentNum: 0,
                        address: '西湖北线/黄龙'
                    },

                ]
            }
        },
        props: ['nav'],
        methods: {
            over(e) {
                let dom = e.target;
                let tagName = dom.tagName.toLowerCase();
                if(tagName != 'dd') {
                    return false;
                }
                this.kind = dom.getAttribute('data-type');
            }
        },
    };
</script>


<style lang="scss">
    @import "@/assets/css/index/artistic.scss";
</style>