<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt><dt>全部</dt>
      <dd v-for="(item) in classicList" :key="item.type">
        <m-select :name="item.title" v-bind:list="item.subList" />
      </dd>
    </dl>

    <dl class="classic">
      <dt>区域</dt><dt>全部</dt>
      <dd v-for="(item) in areaList" :key="item.title">
        <m-select :name="item.title" v-bind:list="item.subList" />
      </dd>
    </dl>
  </div>
</template>


<script>
  import api from '@/api/index.js';
  import MSelect from "./select.vue";
  export default {
    data() {
      return {
        classicList: [
          // {
          //   title: "美食",
          //   type: "food",
          //   sub_list: [
          //     {
          //       name: "日本菜",
          //       id: "Japan"
          //     },
          //     {
          //       name: "温泉酒店",
          //       id: "hot_spring"
          //     }
          //   ]
          // },
          // {
          //   title: "酒店住宿",
          //   type: "hotal",
          //   sub_list: [
          //     {
          //       name: "温泉酒店",
          //       id: "hot_spring"
          //     },
          //     {
          //       name: "日本菜",
          //       id: "Japan"
          //     }
          //   ]
          // }
        ],
        areaList: [
          {
            title: "推荐商圈",
            subList: [
              {
                name: "望京",
                id: 120000
              },
              {
                name: "昌平",
                id: 12222
              },
              {
                name: "望京",
                id: 120000
              },
              {
                name: "昌平",
                id: 12222
              },
              {
                name: "望京",
                id: 120000
              },
              {
                name: "昌平",
                id: 12222
              },
              {
                name: "望京",
                id: 120000
              }
            ]
          },
          {
            title: "隆阳区",
            subList: [
              {
                name: "望京",
                id: 120000
              },
              {
                name: "昌平",
                id: 12222
              },
              {
                name: "望京",
                id: 120000
              },
              {
                name: "昌平",
                id: 12222
              }
            ]
          },
          {
            title: "腾冲县",
            subList: [
              {
                name: "望京",
                id: 120000
              },
              {
                name: "昌平",
                id: 12222
              },
              {
                name: "望京",
                id: 120000
              },
              {
                name: "昌平",
                id: 12222
              }
            ]
          },
          {
            title: "施甸县",
            subList: [
              {
                name: "望京",
                id: 120000
              },
              {
                name: "昌平",
                id: 12222
              },
              {
                name: "望京",
                id: 120000
              },
              {
                name: "昌平",
                id: 12222
              }
            ]
          },
          {
            title: "昌宁县",
            subList: [
              {
                name: "望京",
                id: 120000
              },
              {
                name: "昌平",
                id: 12222
              },
              {
                name: "望京",
                id: 120000
              },
              {
                name: "昌平",
                id: 12222
              }
            ]
          },
          {
            title: "龙陵县",
            subList: [
              {
                name: "望京",
                id: 120000
              },
              {
                name: "昌平",
                id: 12222
              },
              {
                name: "望京",
                id: 120000
              },
              {
                name: "昌平",
                id: 12222
              }
            ]
          },
          {
            title: "昆明市",
            subList: [
              {
                name: "望京",
                id: 120000
              },
              {
                name: "昌平",
                id: 12222
              },
              {
                name: "望京",
                id: 120000
              },
              {
                name: "昌平",
                id: 12222
              }
            ]
          }
        ]
      };
    },
    created() {
      // 获取分类列表
      api.getClassify().then(res => {
        this.classicList = res.data.data;
      })
    },
    components: {
      MSelect: MSelect
    }
  };
</script>
