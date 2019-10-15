<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <!-- 左侧 -->
            <el-col :span="3" class="left">
              <a href="https://bs.meituan.com/" target="_blank">
                <h1>美团网</h1>
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
              </a>
            </el-col>
            <!-- 右侧 -->
            <el-col :span="15" class="center">
                <div class="wrapper">
                     <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur" @input="handleInput"></el-input>
                     <el-button type="primary" icon="el-icon-search"></el-button>
                     <!-- 热门搜索 -->
                     <dl class="hotPlace" v-if="isHotPlace">
                         <dt>热门搜索</dt>
                         <dd v-for="(item,index) in hotPlaceList" :key="index">
                             <router-link :to="{name:'goods',params:{name:item}}">{{ item }}</router-link>
                         </dd>
                     </dl>
                     <!-- 输入框输入之后展示的搜索列表 -->
                     <dl class="searchList" v-if="isSearchList">
                          <dd v-for="(item,index) in searchList" :key="index">
                             <router-link :to="{name:'goods',params:{name:item}}">{{ item }}</router-link>
                         </dd>
                     </dl>
                </div>
                <p class="suggest">
                    <a href="#" v-for="(item,index) in suggestList" :key="index">{{ item }}</a>
                </p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  import api from '@/api/index.js';
  export default {
    // 数据
    data () {
      return {
        searchWord: '',
        isFocus: false,
        hotPlaceList: [],
        searchList: [],
        suggestList: []
      }
    },
    created() {
      // 查询最近热门搜索
      api.getSearchHotWord().then(res => {
        this.suggestList = this.hotPlaceList = res.data.data.slice(0,5);
      })
    },
    // 计算属性
    computed: {
      isHotPlace: function () {
        return this.isFocus && !this.searchWord
      },
      isSearchList: function () {
        return this.isFocus && this.searchWord
      }
    },
    // 方法列表
    methods: {
      focus () {
        this.isFocus = true
      },
      blur () {
        let self = this
        setTimeout(function () {
          self.isFocus = false
        }, 400)
      },
      handleInput() {
        let val = this.searchWord;
        // 搜索框列表数据获取
        api.getSearchList().then(res => {
          this.searchList = res.data.data.list.filter((item,index) => {
            return item.indexOf(val) > - 1;
          });
        })
      },
    }
  }
</script>