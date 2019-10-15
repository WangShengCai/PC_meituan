<template>
    <div>
      <dl class="m-categroy">
        <dt>按拼音首字母选择：</dt>
        <dd v-for="(item,index) in zimu" :key="index + 'item'"><a :href="'#city-' + item">{{ item }}</a></dd>
      </dl>

      <div class="m-categroy-section" v-for="(item,index) in cityGroup" :key="index">
          <div class="left">
            <a href="#">{{ index }}</a>
          </div>
          <div class="right">
            <a href="#" v-for="city in item" :key="city.id" :id="'city-' + city.firstChar" @click="changeCity(city)">{{ city.name }}</a>
          </div>
      </div>
    </div>
</template>


<script>
  export default {
      data() {
        return {
          zimu: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          cityGroup: null,
        }
      },
    created() {
        var data = [
              {
                id: 60,
                name: "青岛",
                pinyin: "qingdao",
                acronym: "qd",
                rank: "B",
                firstChar: "Q"
              },
              {
                id: 81,
                name: "淄博",
                pinyin: "zibo",
                acronym: "zb",
                rank: "C",
                firstChar: "Z"
              },
              {
                id: 96,
                name: "济南",
                pinyin: "jinan",
                acronym: "jn",
                rank: "B",
                firstChar: "J"
              },
              {
                id: 104,
                name: "烟台",
                pinyin: "yantai",
                acronym: "yt",
                rank: "C",
                firstChar: "Y"
              },
              {
                id: 222,
                name: "枣庄",
                pinyin: "zaozhuang",
                acronym: "zaozhuang",
                rank: "D",
                firstChar: "Z"
              },
              {
                id: 223,
                name: "东营",
                pinyin: "dongying",
                acronym: "dy",
                rank: "D",
                firstChar: "D"
              },
              {
                id: 224,
                name: "潍坊",
                pinyin: "weifang",
                acronym: "wf",
                rank: "C",
                firstChar: "W"
              },
              {
                id: 225,
                name: "济宁",
                pinyin: "jining",
                acronym: "jining",
                rank: "C",
                firstChar: "J"
              },
              {
                id: 226,
                name: "泰安",
                pinyin: "taian",
                acronym: "ta",
                rank: "D",
                firstChar: "T"
              },
              {
                id: 227,
                name: "威海",
                pinyin: "weihai",
                acronym: "weihai",
                rank: "C",
                firstChar: "W"
              },
              {
                id: 228,
                name: "日照",
                pinyin: "rizhao",
                acronym: "rizhao",
                rank: "D",
                firstChar: "R"
              },
              {
                id: 229,
                name: "莱芜",
                pinyin: "laiwu",
                acronym: "lw",
                rank: "E",
                firstChar: "L"
              },
              {
                id: 230,
                name: "临沂",
                pinyin: "linyi",
                acronym: "linyi",
                rank: "C",
                firstChar: "L"
              },
              {
                id: 231,
                name: "德州",
                pinyin: "dezhou",
                acronym: "dz",
                rank: "D",
                firstChar: "D"
              },
              {
                id: 232,
                name: "聊城",
                pinyin: "liaocheng",
                acronym: "lc",
                rank: "D",
                firstChar: "L"
              },
              {
                id: 233,
                name: "滨州",
                pinyin: "binzhou",
                acronym: "bz",
                rank: "D",
                firstChar: "B"
              },
              {
                id: 234,
                name: "菏泽",
                pinyin: "heze",
                acronym: "heze",
                rank: "D",
                firstChar: "H"
              },
              {
                id: 453,
                name: "兖州",
                pinyin: "yanzhou",
                acronym: "yanzhou",
                rank: "E",
                firstChar: "Y"
              },
              {
                id: 465,
                name: "章丘区",
                pinyin: "zhangqiuqu",
                acronym: "zhangqiu",
                rank: "E",
                firstChar: "Z"
              },
              {
                id: 492,
                name: "龙口",
                pinyin: "longkou",
                acronym: "lk",
                rank: "E",
                firstChar: "L"
              },
              {
                id: 495,
                name: "寿光",
                pinyin: "shouguang",
                acronym: "shouguang",
                rank: "E",
                firstChar: "S"
              },
              {
                id: 496,
                name: "青州",
                pinyin: "qingzhou",
                acronym: "qingzhou",
                rank: "E",
                firstChar: "Q"
              },
              {
                id: 497,
                name: "荣成",
                pinyin: "rongcheng",
                acronym: "rc",
                rank: "E",
                firstChar: "R"
              },
              {
                id: 498,
                name: "文登",
                pinyin: "wendeng",
                acronym: "wd",
                rank: "E",
                firstChar: "W"
              },
              {
                id: 499,
                name: "乳山",
                pinyin: "rushan",
                acronym: "rs",
                rank: "E",
                firstChar: "R"
              },
              {
                id: 508,
                name: "邹平",
                pinyin: "zouping",
                acronym: "zp",
                rank: "F",
                firstChar: "Z"
              },
              {
                id: 523,
                name: "新泰",
                pinyin: "xintai",
                acronym: "xintai",
                rank: "E",
                firstChar: "X"
              },
              {
                id: 526,
                name: "诸城",
                pinyin: "zhucheng",
                acronym: "zhucheng",
                rank: "E",
                firstChar: "Z"
              },
              {
                id: 527,
                name: "昌邑",
                pinyin: "changyi",
                acronym: "changyi",
                rank: "E",
                firstChar: "C"
              },
              {
                id: 529,
                name: "莱州",
                pinyin: "laizhou",
                acronym: "laizhou",
                rank: "E",
                firstChar: "L"
              },
              {
                id: 537,
                name: "临清",
                pinyin: "linqing",
                acronym: "lq",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 541,
                name: "广饶",
                pinyin: "guangrao",
                acronym: "gr",
                rank: "F",
                firstChar: "G"
              },
              {
                id: 545,
                name: "肥城",
                pinyin: "feicheng",
                acronym: "fc",
                rank: "E",
                firstChar: "F"
              },
              {
                id: 549,
                name: "滕州",
                pinyin: "tengzhou",
                acronym: "tengzhou",
                rank: "E",
                firstChar: "T"
              },
              {
                id: 561,
                name: "莱阳",
                pinyin: "laiyang",
                acronym: "laiyang",
                rank: "E",
                firstChar: "L"
              },
              {
                id: 573,
                name: "海阳",
                pinyin: "haiyang",
                acronym: "haiyang",
                rank: "E",
                firstChar: "H"
              },
              {
                id: 582,
                name: "平度",
                pinyin: "pingdu",
                acronym: "pd",
                rank: "E",
                firstChar: "P"
              },
              {
                id: 583,
                name: "胶州",
                pinyin: "jiaozhou",
                acronym: "jiaozhou",
                rank: "E",
                firstChar: "J"
              },
              {
                id: 586,
                name: "招远",
                pinyin: "zhaoyuan",
                acronym: "zhaoyuan",
                rank: "E",
                firstChar: "Z"
              },
              {
                id: 587,
                name: "蓬莱",
                pinyin: "penglai",
                acronym: "penglai",
                rank: "E",
                firstChar: "P"
              },
              {
                id: 588,
                name: "安丘",
                pinyin: "anqiu",
                acronym: "aq",
                rank: "E",
                firstChar: "A"
              },
              {
                id: 589,
                name: "高密",
                pinyin: "gaomi",
                acronym: "gm",
                rank: "E",
                firstChar: "G"
              },
              {
                id: 608,
                name: "禹城",
                pinyin: "yucheng",
                acronym: "yucheng",
                rank: "F",
                firstChar: "Y"
              },
              {
                id: 611,
                name: "乐陵",
                pinyin: "laoling",
                acronym: "ll",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 620,
                name: "莱西",
                pinyin: "laixi",
                acronym: "laixi",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 664,
                name: "即墨",
                pinyin: "jimo",
                acronym: "jimo",
                rank: "E",
                firstChar: "J"
              },
              {
                id: 727,
                name: "齐河",
                pinyin: "qihe",
                acronym: "qihe",
                rank: "F",
                firstChar: "Q"
              },
              {
                id: 728,
                name: "夏津",
                pinyin: "xiajin",
                acronym: "xiajin",
                rank: "F",
                firstChar: "X"
              },
              {
                id: 737,
                name: "昌乐",
                pinyin: "changlecl",
                acronym: "changlecl",
                rank: "F",
                firstChar: "C"
              },
              {
                id: 738,
                name: "东平",
                pinyin: "dongping",
                acronym: "dongping",
                rank: "F",
                firstChar: "D"
              },
              {
                id: 739,
                name: "临朐",
                pinyin: "linqu",
                acronym: "linqu",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 777,
                name: "平原",
                pinyin: "pingyuan",
                acronym: "pingyuan",
                rank: "F",
                firstChar: "P"
              },
              {
                id: 779,
                name: "宁阳",
                pinyin: "ningyang",
                acronym: "ningyang",
                rank: "F",
                firstChar: "N"
              },
              {
                id: 820,
                name: "宁津",
                pinyin: "ningjinnj",
                acronym: "ningjinnj",
                rank: "F",
                firstChar: "N"
              },
              {
                id: 830,
                name: "单县",
                pinyin: "shanxian",
                acronym: "shanxian",
                rank: "F",
                firstChar: "S"
              },
              {
                id: 834,
                name: "邹城",
                pinyin: "zoucheng",
                acronym: "zoucheng",
                rank: "E",
                firstChar: "Z"
              },
              {
                id: 846,
                name: "牟平",
                pinyin: "muping",
                acronym: "muping",
                rank: "F",
                firstChar: "M"
              },
              {
                id: 852,
                name: "博兴",
                pinyin: "boxing",
                acronym: "boxing",
                rank: "F",
                firstChar: "B"
              },
              {
                id: 877,
                name: "茌平",
                pinyin: "chiping",
                acronym: "chiping",
                rank: "F",
                firstChar: "C"
              },
              {
                id: 878,
                name: "阳谷",
                pinyin: "yanggu",
                acronym: "yanggu",
                rank: "F",
                firstChar: "Y"
              },
              {
                id: 880,
                name: "垦利",
                pinyin: "kenli",
                acronym: "kenli",
                rank: "F",
                firstChar: "K"
              },
              {
                id: 881,
                name: "河口",
                pinyin: "hekou",
                acronym: "hekou",
                rank: "F",
                firstChar: "H"
              },
              {
                id: 882,
                name: "巨野",
                pinyin: "juye",
                acronym: "juye",
                rank: "F",
                firstChar: "J"
              },
              {
                id: 883,
                name: "曹县",
                pinyin: "caoxian",
                acronym: "caoxian",
                rank: "F",
                firstChar: "C"
              },
              {
                id: 884,
                name: "郓城",
                pinyin: "yunchengxian",
                acronym: "yunchengxian",
                rank: "F",
                firstChar: "Y"
              },
              {
                id: 896,
                name: "梁山",
                pinyin: "liangshanxian",
                acronym: "liangshanxian",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 897,
                name: "微山",
                pinyin: "weishan",
                acronym: "weishan",
                rank: "F",
                firstChar: "W"
              },
              {
                id: 898,
                name: "汶上",
                pinyin: "wenshang",
                acronym: "wenshang",
                rank: "F",
                firstChar: "W"
              },
              {
                id: 899,
                name: "嘉祥",
                pinyin: "jiaxiang",
                acronym: "jiaxiang",
                rank: "F",
                firstChar: "J"
              },
              {
                id: 900,
                name: "金乡",
                pinyin: "jinxiang",
                acronym: "jinxiang",
                rank: "F",
                firstChar: "J"
              },
              {
                id: 902,
                name: "利津",
                pinyin: "lijin",
                acronym: "lijin",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 904,
                name: "武城",
                pinyin: "wucheng",
                acronym: "wucheng",
                rank: "F",
                firstChar: "W"
              },
              {
                id: 905,
                name: "临邑",
                pinyin: "linyily",
                acronym: "linyily",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 907,
                name: "石岛",
                pinyin: "shidao",
                acronym: "shidao",
                rank: "F",
                firstChar: "S"
              },
              {
                id: 914,
                name: "栖霞",
                pinyin: "qixia",
                acronym: "qixia",
                rank: "F",
                firstChar: "Q"
              },
              {
                id: 916,
                name: "费县",
                pinyin: "feixian",
                acronym: "feixian",
                rank: "F",
                firstChar: "F"
              },
              {
                id: 920,
                name: "薛城",
                pinyin: "xuecheng",
                acronym: "xuecheng",
                rank: "F",
                firstChar: "X"
              },
              {
                id: 939,
                name: "兰陵",
                pinyin: "lanling",
                acronym: "lanling",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 940,
                name: "沂水",
                pinyin: "yishui",
                acronym: "yishui",
                rank: "F",
                firstChar: "Y"
              },
              {
                id: 941,
                name: "莒南",
                pinyin: "junan",
                acronym: "junan",
                rank: "F",
                firstChar: "J"
              },
              {
                id: 942,
                name: "郯城",
                pinyin: "tancheng",
                acronym: "tancheng",
                rank: "F",
                firstChar: "T"
              },
              {
                id: 943,
                name: "沂南",
                pinyin: "yinan",
                acronym: "yinan",
                rank: "F",
                firstChar: "Y"
              },
              {
                id: 944,
                name: "蒙阴",
                pinyin: "mengyin",
                acronym: "mengyin",
                rank: "F",
                firstChar: "M"
              },
              {
                id: 950,
                name: "平邑",
                pinyin: "pingyi",
                acronym: "pingyi",
                rank: "F",
                firstChar: "P"
              },
              {
                id: 951,
                name: "临沭",
                pinyin: "linshu",
                acronym: "linshu",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 952,
                name: "博山",
                pinyin: "boshan",
                acronym: "boshan",
                rank: "F",
                firstChar: "B"
              },
              {
                id: 998,
                name: "庆云",
                pinyin: "qingyun",
                acronym: "qingyun",
                rank: "F",
                firstChar: "Q"
              },
              {
                id: 1015,
                name: "商河",
                pinyin: "shanghe",
                acronym: "shanghe",
                rank: "F",
                firstChar: "S"
              },
              {
                id: 1017,
                name: "泗水",
                pinyin: "sishui",
                acronym: "sishui",
                rank: "F",
                firstChar: "S"
              },
              {
                id: 1134,
                name: "鄄城县",
                pinyin: "juanchengxian",
                acronym: "juanchengxian",
                rank: "F",
                firstChar: "J"
              },
              {
                id: 1156,
                name: "平阴县",
                pinyin: "pingyinxian",
                acronym: "pingyinxian",
                rank: "F",
                firstChar: "P"
              },
              {
                id: 1157,
                name: "长清区",
                pinyin: "changqingqu",
                acronym: "changqingqu",
                rank: "F",
                firstChar: "C"
              },
              {
                id: 1181,
                name: "鱼台县",
                pinyin: "yutaixian",
                acronym: "yutaixian",
                rank: "F",
                firstChar: "Y"
              },
              {
                id: 1201,
                name: "成武县",
                pinyin: "chengwuxian",
                acronym: "chengwuxian",
                rank: "F",
                firstChar: "C"
              },
              {
                id: 1203,
                name: "东明县",
                pinyin: "dongmingxian",
                acronym: "dongmingxian",
                rank: "F",
                firstChar: "D"
              },
              {
                id: 1204,
                name: "定陶区",
                pinyin: "dingtaoqu",
                acronym: "dingtaoqu",
                rank: "F",
                firstChar: "D"
              },
              {
                id: 1285,
                name: "东阿县",
                pinyin: "dongexian",
                acronym: "dongexian",
                rank: "F",
                firstChar: "D"
              },
              {
                id: 361,
                name: "兰州",
                pinyin: "lanzhou",
                acronym: "lz",
                rank: "C",
                firstChar: "L"
              },
              {
                id: 362,
                name: "金昌",
                pinyin: "jinchang",
                acronym: "jinchang",
                rank: "F",
                firstChar: "J"
              },
              {
                id: 363,
                name: "白银",
                pinyin: "baiyin",
                acronym: "by",
                rank: "E",
                firstChar: "B"
              },
              {
                id: 364,
                name: "天水",
                pinyin: "tianshui",
                acronym: "tianshui",
                rank: "E",
                firstChar: "T"
              },
              {
                id: 365,
                name: "武威",
                pinyin: "wuwei",
                acronym: "wuwei",
                rank: "E",
                firstChar: "W"
              },
              {
                id: 366,
                name: "张掖",
                pinyin: "zhangye",
                acronym: "zhangye",
                rank: "E",
                firstChar: "Z"
              },
              {
                id: 367,
                name: "平凉",
                pinyin: "pingliang",
                acronym: "pl",
                rank: "E",
                firstChar: "P"
              },
              {
                id: 368,
                name: "酒泉",
                pinyin: "jiuquan",
                acronym: "jq",
                rank: "E",
                firstChar: "J"
              },
              {
                id: 369,
                name: "庆阳",
                pinyin: "qingyang",
                acronym: "qingyang",
                rank: "E",
                firstChar: "Q"
              },
              {
                id: 370,
                name: "定西",
                pinyin: "dingxi",
                acronym: "dx",
                rank: "E",
                firstChar: "D"
              },
              {
                id: 371,
                name: "陇南",
                pinyin: "longnan",
                acronym: "ln",
                rank: "Z",
                firstChar: "L"
              },
              {
                id: 372,
                name: "临夏",
                pinyin: "linxia",
                acronym: "linxia",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 373,
                name: "甘南",
                pinyin: "gannan",
                acronym: "gn",
                rank: "Z",
                firstChar: "G"
              },
              {
                id: 409,
                name: "嘉峪关",
                pinyin: "jiayuguan",
                acronym: "jyg",
                rank: "F",
                firstChar: "J"
              },
              {
                id: 434,
                name: "敦煌",
                pinyin: "dunhuang",
                acronym: "dunhuang",
                rank: "Z",
                firstChar: "D"
              },
              {
                id: 856,
                name: "华亭市",
                pinyin: "huatingshi",
                acronym: "huating",
                rank: "F",
                firstChar: "H"
              },
              {
                id: 1169,
                name: "永登县",
                pinyin: "yongdengxian",
                acronym: "yongdengxian",
                rank: "F",
                firstChar: "Y"
              },
              {
                id: 1185,
                name: "环县",
                pinyin: "huanxian",
                acronym: "huanxian",
                rank: "F",
                firstChar: "H"
              },
              {
                id: 1227,
                name: "康县",
                pinyin: "kangxian",
                acronym: "kangxian",
                rank: "F",
                firstChar: "K"
              },
              {
                id: 1228,
                name: "山丹县",
                pinyin: "shandanxian",
                acronym: "shandanxian",
                rank: "F",
                firstChar: "S"
              },
              {
                id: 52,
                name: "无锡",
                pinyin: "wuxi",
                acronym: "wx",
                rank: "B",
                firstChar: "W"
              },
              {
                id: 55,
                name: "南京",
                pinyin: "nanjing",
                acronym: "nj",
                rank: "A",
                firstChar: "N"
              },
              {
                id: 80,
                name: "苏州",
                pinyin: "suzhou",
                acronym: "su",
                rank: "B",
                firstChar: "S"
              },
              {
                id: 82,
                name: "南通",
                pinyin: "nantong",
                acronym: "nt",
                rank: "C",
                firstChar: "N"
              },
              {
                id: 89,
                name: "常州",
                pinyin: "changzhou",
                acronym: "cz",
                rank: "B",
                firstChar: "C"
              },
              {
                id: 119,
                name: "徐州",
                pinyin: "xuzhou",
                acronym: "xz",
                rank: "C",
                firstChar: "X"
              },
              {
                id: 120,
                name: "扬州",
                pinyin: "yangzhou",
                acronym: "yz",
                rank: "C",
                firstChar: "Y"
              },
              {
                id: 179,
                name: "连云港",
                pinyin: "lianyungang",
                acronym: "lyg",
                rank: "C",
                firstChar: "L"
              },
              {
                id: 180,
                name: "淮安",
                pinyin: "huaian",
                acronym: "ha",
                rank: "C",
                firstChar: "H"
              },
              {
                id: 181,
                name: "盐城",
                pinyin: "yancheng",
                acronym: "yancheng",
                rank: "C",
                firstChar: "Y"
              },
              {
                id: 182,
                name: "镇江",
                pinyin: "zhenjiang",
                acronym: "zj",
                rank: "C",
                firstChar: "Z"
              },
              {
                id: 183,
                name: "泰州",
                pinyin: "taizhou",
                acronym: "taizhou",
                rank: "C",
                firstChar: "T"
              },
              {
                id: 184,
                name: "宿迁",
                pinyin: "suqian",
                acronym: "suqian",
                rank: "D",
                firstChar: "S"
              },
              {
                id: 403,
                name: "昆山",
                pinyin: "kunshan",
                acronym: "kunshan",
                rank: "C",
                firstChar: "K"
              },
              {
                id: 404,
                name: "江阴",
                pinyin: "jiangyin",
                acronym: "jiangyin",
                rank: "C",
                firstChar: "J"
              },
              {
                id: 419,
                name: "张家港",
                pinyin: "zhangjiagang",
                acronym: "zjg",
                rank: "D",
                firstChar: "Z"
              },
              {
                id: 422,
                name: "常熟",
                pinyin: "changshu",
                acronym: "changshu",
                rank: "D",
                firstChar: "C"
              },
              {
                id: 431,
                name: "丹阳",
                pinyin: "danyang",
                acronym: "danyang",
                rank: "E",
                firstChar: "D"
              },
              {
                id: 432,
                name: "太仓",
                pinyin: "taicang",
                acronym: "taicang",
                rank: "D",
                firstChar: "T"
              },
              {
                id: 433,
                name: "吴江",
                pinyin: "wujiang",
                acronym: "wj",
                rank: "D",
                firstChar: "W"
              },
              {
                id: 439,
                name: "靖江",
                pinyin: "jingjiang",
                acronym: "jingjiang",
                rank: "E",
                firstChar: "J"
              },
              {
                id: 450,
                name: "溧阳",
                pinyin: "liyang",
                acronym: "liyang",
                rank: "E",
                firstChar: "L"
              },
              {
                id: 454,
                name: "宜兴",
                pinyin: "yixing",
                acronym: "yixing",
                rank: "D",
                firstChar: "Y"
              },
              {
                id: 460,
                name: "金坛",
                pinyin: "jintan",
                acronym: "jintan",
                rank: "E",
                firstChar: "J"
              },
              {
                id: 477,
                name: "大丰",
                pinyin: "dafeng",
                acronym: "df",
                rank: "E",
                firstChar: "D"
              },
              {
                id: 478,
                name: "东台",
                pinyin: "dongtai",
                acronym: "dongtai",
                rank: "E",
                firstChar: "D"
              },
              {
                id: 493,
                name: "邳州",
                pinyin: "pizhou",
                acronym: "pz",
                rank: "E",
                firstChar: "P"
              },
              {
                id: 500,
                name: "启东",
                pinyin: "qidong",
                acronym: "qidong",
                rank: "E",
                firstChar: "Q"
              },
              {
                id: 501,
                name: "如皋",
                pinyin: "rugao",
                acronym: "rg",
                rank: "E",
                firstChar: "R"
              },
              {
                id: 515,
                name: "句容",
                pinyin: "jurong",
                acronym: "jr",
                rank: "E",
                firstChar: "J"
              },
              {
                id: 517,
                name: "兴化",
                pinyin: "xinghua",
                acronym: "xh",
                rank: "E",
                firstChar: "X"
              },
              {
                id: 518,
                name: "泰兴",
                pinyin: "taixing",
                acronym: "taixing",
                rank: "E",
                firstChar: "T"
              },
              {
                id: 519,
                name: "海门",
                pinyin: "haimen",
                acronym: "hm",
                rank: "E",
                firstChar: "H"
              },
              {
                id: 521,
                name: "高邮",
                pinyin: "gaoyou",
                acronym: "gaoyou",
                rank: "E",
                firstChar: "G"
              },
              {
                id: 522,
                name: "仪征",
                pinyin: "yizheng",
                acronym: "yizheng",
                rank: "E",
                firstChar: "Y"
              },
              {
                id: 531,
                name: "沭阳",
                pinyin: "shuyang",
                acronym: "shuyang",
                rank: "E",
                firstChar: "S"
              },
              {
                id: 532,
                name: "射阳",
                pinyin: "sheyang",
                acronym: "sheyang",
                rank: "E",
                firstChar: "S"
              },
              {
                id: 533,
                name: "滨海",
                pinyin: "binhai",
                acronym: "binhai",
                rank: "Z",
                firstChar: "B"
              },
              {
                id: 534,
                name: "响水",
                pinyin: "xiangshui",
                acronym: "xiangshui",
                rank: "F",
                firstChar: "X"
              },
              {
                id: 535,
                name: "阜宁",
                pinyin: "funing",
                acronym: "fn",
                rank: "F",
                firstChar: "F"
              },
              {
                id: 536,
                name: "建湖",
                pinyin: "jianhu",
                acronym: "jianhu",
                rank: "F",
                firstChar: "J"
              },
              {
                id: 548,
                name: "新沂",
                pinyin: "xinyi",
                acronym: "xinyi",
                rank: "E",
                firstChar: "X"
              },
              {
                id: 559,
                name: "扬中",
                pinyin: "yangzhong",
                acronym: "yangzhong",
                rank: "F",
                firstChar: "Y"
              },
              {
                id: 602,
                name: "宝应",
                pinyin: "baoying",
                acronym: "baoying",
                rank: "F",
                firstChar: "B"
              },
              {
                id: 615,
                name: "周庄",
                pinyin: "zhouzhuang",
                acronym: "zhouzhuang",
                rank: "Z",
                firstChar: "Z"
              },
              {
                id: 623,
                name: "海安",
                pinyin: "haian",
                acronym: "haian",
                rank: "E",
                firstChar: "H"
              },
              {
                id: 751,
                name: "灌云",
                pinyin: "guanyun",
                acronym: "guanyun",
                rank: "F",
                firstChar: "G"
              },
              {
                id: 752,
                name: "灌南",
                pinyin: "guannan",
                acronym: "guannan",
                rank: "F",
                firstChar: "G"
              },
              {
                id: 753,
                name: "赣榆",
                pinyin: "ganyu",
                acronym: "ganyu",
                rank: "F",
                firstChar: "G"
              },
              {
                id: 754,
                name: "东海",
                pinyin: "donghai",
                acronym: "donghai",
                rank: "F",
                firstChar: "D"
              },
              {
                id: 760,
                name: "泗阳",
                pinyin: "siyang",
                acronym: "siyang",
                rank: "F",
                firstChar: "S"
              },
              {
                id: 824,
                name: "泗洪",
                pinyin: "sihong",
                acronym: "sihong",
                rank: "F",
                firstChar: "S"
              },
              {
                id: 833,
                name: "沛县",
                pinyin: "peixian",
                acronym: "peixian",
                rank: "E",
                firstChar: "P"
              },
              {
                id: 843,
                name: "盱眙",
                pinyin: "xuyi",
                acronym: "xuyi",
                rank: "F",
                firstChar: "X"
              },
              {
                id: 862,
                name: "丰县",
                pinyin: "fengxian",
                acronym: "fengxian",
                rank: "F",
                firstChar: "F"
              },
              {
                id: 875,
                name: "睢宁",
                pinyin: "suiningxian",
                acronym: "suiningxian",
                rank: "F",
                firstChar: "S"
              },
              {
                id: 948,
                name: "江都",
                pinyin: "jiangdu",
                acronym: "jiangdu",
                rank: "E",
                firstChar: "J"
              },
              {
                id: 956,
                name: "金湖",
                pinyin: "jinhu",
                acronym: "jinhu",
                rank: "F",
                firstChar: "J"
              },
              {
                id: 976,
                name: "涟水",
                pinyin: "lianshui",
                acronym: "lianshui",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 988,
                name: "如东",
                pinyin: "rudong",
                acronym: "rudong",
                rank: "E",
                firstChar: "R"
              },
              {
                id: 1143,
                name: "溧水区",
                pinyin: "lishuiqu",
                acronym: "lishuiqu",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 1,
                name: "北京",
                pinyin: "beijing",
                acronym: "bj",
                rank: "S",
                firstChar: "B"
              },
              {
                id: 1283,
                name: "门头沟区",
                pinyin: "mentougouqu",
                acronym: "mentougouqu",
                rank: "F",
                firstChar: "M"
              },
              {
                id: 114,
                name: "昆明",
                pinyin: "kunming",
                acronym: "km",
                rank: "B",
                firstChar: "K"
              },
              {
                id: 330,
                name: "曲靖",
                pinyin: "qujing",
                acronym: "qj",
                rank: "D",
                firstChar: "Q"
              },
              {
                id: 331,
                name: "玉溪",
                pinyin: "yuxi",
                acronym: "yx",
                rank: "E",
                firstChar: "Y"
              },
              {
                id: 332,
                name: "保山",
                pinyin: "baoshan",
                acronym: "bs",
                rank: "E",
                firstChar: "B"
              },
              {
                id: 333,
                name: "昭通",
                pinyin: "zhaotong",
                acronym: "zt",
                rank: "E",
                firstChar: "Z"
              },
              {
                id: 334,
                name: "丽江",
                pinyin: "lijiang",
                acronym: "lj",
                rank: "E",
                firstChar: "L"
              },
              {
                id: 335,
                name: "普洱",
                pinyin: "puer",
                acronym: "pe",
                rank: "E",
                firstChar: "P"
              },
              {
                id: 336,
                name: "临沧",
                pinyin: "lincang",
                acronym: "lincang",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 337,
                name: "楚雄",
                pinyin: "chuxiong",
                acronym: "cx",
                rank: "F",
                firstChar: "C"
              },
              {
                id: 338,
                name: "红河",
                pinyin: "honghe",
                acronym: "honghe",
                rank: "E",
                firstChar: "H"
              },
              {
                id: 339,
                name: "文山",
                pinyin: "wenshan",
                acronym: "ws",
                rank: "F",
                firstChar: "W"
              },
              {
                id: 340,
                name: "西双版纳",
                pinyin: "xishuangbanna",
                acronym: "bn",
                rank: "E",
                firstChar: "X"
              },
              {
                id: 341,
                name: "大理",
                pinyin: "dali",
                acronym: "dali",
                rank: "E",
                firstChar: "D"
              },
              {
                id: 342,
                name: "德宏",
                pinyin: "dehong",
                acronym: "dh",
                rank: "Z",
                firstChar: "D"
              },
              {
                id: 343,
                name: "怒江",
                pinyin: "nujiang",
                acronym: "nujiang",
                rank: "Z",
                firstChar: "N"
              },
              {
                id: 344,
                name: "迪庆",
                pinyin: "diqing",
                acronym: "diqing",
                rank: "Z",
                firstChar: "D"
              },
              {
                id: 482,
                name: "腾冲",
                pinyin: "tengchong",
                acronym: "tengchong",
                rank: "Z",
                firstChar: "T"
              },
              {
                id: 484,
                name: "香格里拉",
                pinyin: "xianggelila",
                acronym: "xgll",
                rank: "Z",
                firstChar: "X"
              },
              {
                id: 630,
                name: "个旧",
                pinyin: "gejiu",
                acronym: "gj",
                rank: "F",
                firstChar: "G"
              },
              {
                id: 802,
                name: "宣威",
                pinyin: "xuanwei",
                acronym: "xuanwei",
                rank: "F",
                firstChar: "X"
              },
              {
                id: 873,
                name: "安宁",
                pinyin: "anning",
                acronym: "anning",
                rank: "F",
                firstChar: "A"
              },
              {
                id: 1032,
                name: "江川县",
                pinyin: "jiangchuanxian",
                acronym: "jiangchuanxian",
                rank: "F",
                firstChar: "J"
              },
              {
                id: 1034,
                name: "罗平县",
                pinyin: "luopingxian",
                acronym: "luopingxian",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 1051,
                name: "祥云县",
                pinyin: "xiangyunxian",
                acronym: "xiangyunxian",
                rank: "F",
                firstChar: "X"
              },
              {
                id: 1059,
                name: "晋宁区",
                pinyin: "jinningqu",
                acronym: "jinningxian",
                rank: "F",
                firstChar: "J"
              },
              {
                id: 1065,
                name: "会泽县",
                pinyin: "huizexian",
                acronym: "huizexian",
                rank: "F",
                firstChar: "H"
              },
              {
                id: 1066,
                name: "富源县",
                pinyin: "fuyuanxian",
                acronym: "fuyuanxian",
                rank: "F",
                firstChar: "F"
              },
              {
                id: 1085,
                name: "建水县",
                pinyin: "jianshuixian",
                acronym: "jianshuixian",
                rank: "F",
                firstChar: "J"
              },
              {
                id: 1116,
                name: "蒙自市",
                pinyin: "mengzishi",
                acronym: "mengzishi",
                rank: "F",
                firstChar: "M"
              },
              {
                id: 1132,
                name: "通海县",
                pinyin: "tonghaixian",
                acronym: "tonghaixian",
                rank: "F",
                firstChar: "T"
              },
              {
                id: 1138,
                name: "禄丰县",
                pinyin: "lufengxian",
                acronym: "lufengxian",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 1161,
                name: "宁蒗彝族自治县",
                pinyin: "ninglangyizuzizhixian",
                acronym: "ninglangyizuzizh",
                rank: "F",
                firstChar: "N"
              },
              {
                id: 1205,
                name: "澄江县",
                pinyin: "chengjiangxian",
                acronym: "chengjiangxian",
                rank: "F",
                firstChar: "C"
              },
              {
                id: 1210,
                name: "勐腊县",
                pinyin: "menglaxian",
                acronym: "menglaxian",
                rank: "F",
                firstChar: "M"
              },
              {
                id: 1218,
                name: "宜良县",
                pinyin: "yiliangxian",
                acronym: "yiliangxian",
                rank: "F",
                firstChar: "Y"
              },
              {
                id: 1246,
                name: "镇雄县",
                pinyin: "zhenxiongxian",
                acronym: "zhenxiongxian",
                rank: "F",
                firstChar: "Z"
              },
              {
                id: 1252,
                name: "景谷",
                pinyin: "jingguxian",
                acronym: "jingguxian",
                rank: "F",
                firstChar: "J"
              },
              {
                id: 1253,
                name: "富民",
                pinyin: "fuminxian",
                acronym: "fuminxian",
                rank: "F",
                firstChar: "F"
              },
              {
                id: 1254,
                name: "禄劝彝族苗族自治县",
                pinyin: "luquanxian",
                acronym: "luquanxian",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 1255,
                name: "武定",
                pinyin: "wuding",
                acronym: "wuding",
                rank: "F",
                firstChar: "W"
              },
              {
                id: 1262,
                name: "瑞丽",
                pinyin: "ruili",
                acronym: "ruili",
                rank: "F",
                firstChar: "R"
              },
              {
                id: 1270,
                name: "嵩明县",
                pinyin: "songmingxian",
                acronym: "songmingxian",
                rank: "F",
                firstChar: "S"
              },
              {
                id: 1272,
                name: "石林彝族自治县",
                pinyin: "shilinxian",
                acronym: "shilinxian",
                rank: "F",
                firstChar: "S"
              },
              {
                id: 1279,
                name: "景东彝族自治县",
                pinyin: "jingdongyizuzizhixian",
                acronym: "jingdongyizuzizh",
                rank: "F",
                firstChar: "J"
              },
              {
                id: 94,
                name: "海口",
                pinyin: "haikou",
                acronym: "haikou",
                rank: "C",
                firstChar: "H"
              },
              {
                id: 111,
                name: "三亚",
                pinyin: "sanya",
                acronym: "sanya",
                rank: "C",
                firstChar: "S"
              },
              {
                id: 418,
                name: "琼海",
                pinyin: "qionghai",
                acronym: "qh",
                rank: "F",
                firstChar: "Q"
              },
              {
                id: 571,
                name: "儋州",
                pinyin: "danzhou",
                acronym: "danzhou",
                rank: "E",
                firstChar: "D"
              },
              {
                id: 607,
                name: "文昌",
                pinyin: "wenchang",
                acronym: "wenchang",
                rank: "F",
                firstChar: "W"
              },
              {
                id: 680,
                name: "万宁",
                pinyin: "wanning",
                acronym: "wanning",
                rank: "F",
                firstChar: "W"
              },
              {
                id: 686,
                name: "东方",
                pinyin: "dongfang",
                acronym: "dongfang",
                rank: "F",
                firstChar: "D"
              },
              {
                id: 688,
                name: "陵水",
                pinyin: "lingshui",
                acronym: "lingshui",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 1168,
                name: "定安县",
                pinyin: "dinganxian",
                acronym: "dinganxian",
                rank: "F",
                firstChar: "D"
              },
              {
                id: 1170,
                name: "琼中",
                pinyin: "qiongzhong",
                acronym: "qiongzhong",
                rank: "F",
                firstChar: "Q"
              },
              {
                id: 1171,
                name: "乐东",
                pinyin: "ledong",
                acronym: "ledong",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 1183,
                name: "临高县",
                pinyin: "lingaoxian",
                acronym: "lingaoxian",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 1256,
                name: "屯昌县",
                pinyin: "tunchangxian",
                acronym: "tunchangxian",
                rank: "F",
                firstChar: "T"
              },
              {
                id: 1269,
                name: "澄迈县",
                pinyin: "chengmaixian",
                acronym: "cmx",
                rank: "F",
                firstChar: "C"
              },
              {
                id: 50,
                name: "杭州",
                pinyin: "hangzhou",
                acronym: "hz",
                rank: "A",
                firstChar: "H"
              },
              {
                id: 51,
                name: "宁波",
                pinyin: "ningbo",
                acronym: "nb",
                rank: "B",
                firstChar: "N"
              },
              {
                id: 112,
                name: "温州",
                pinyin: "wenzhou",
                acronym: "wz",
                rank: "B",
                firstChar: "W"
              },
              {
                id: 185,
                name: "嘉兴",
                pinyin: "jiaxing",
                acronym: "jx",
                rank: "C",
                firstChar: "J"
              },
              {
                id: 186,
                name: "湖州",
                pinyin: "huzhou",
                acronym: "huzhou",
                rank: "C",
                firstChar: "H"
              },
              {
                id: 187,
                name: "绍兴",
                pinyin: "shaoxing",
                acronym: "sx",
                rank: "C",
                firstChar: "S"
              },
              {
                id: 188,
                name: "金华",
                pinyin: "jinhua",
                acronym: "jh",
                rank: "C",
                firstChar: "J"
              },
              {
                id: 189,
                name: "衢州",
                pinyin: "quzhou",
                acronym: "quzhou",
                rank: "D",
                firstChar: "Q"
              },
              {
                id: 190,
                name: "舟山",
                pinyin: "zhoushan",
                acronym: "zhoushan",
                rank: "D",
                firstChar: "Z"
              },
              {
                id: 191,
                name: "台州",
                pinyin: "taizhoutz",
                acronym: "tz",
                rank: "C",
                firstChar: "T"
              },
              {
                id: 192,
                name: "丽水",
                pinyin: "lishui",
                acronym: "lishui",
                rank: "D",
                firstChar: "L"
              },
              {
                id: 405,
                name: "义乌",
                pinyin: "yiwu",
                acronym: "yiwu",
                rank: "D",
                firstChar: "Y"
              },
              {
                id: 416,
                name: "富阳",
                pinyin: "fuyangfy",
                acronym: "fuyangfy",
                rank: "E",
                firstChar: "F"
              },
              {
                id: 424,
                name: "海宁",
                pinyin: "haining",
                acronym: "haining",
                rank: "E",
                firstChar: "H"
              },
              {
                id: 425,
                name: "桐乡",
                pinyin: "tongxiang",
                acronym: "tx",
                rank: "D",
                firstChar: "T"
              },
              {
                id: 451,
                name: "慈溪",
                pinyin: "cixi",
                acronym: "cixi",
                rank: "D",
                firstChar: "C"
              },
              {
                id: 452,
                name: "长兴",
                pinyin: "changxing",
                acronym: "chx",
                rank: "E",
                firstChar: "C"
              },
              {
                id: 455,
                name: "东阳",
                pinyin: "dongyang",
                acronym: "dongyang",
                rank: "E",
                firstChar: "D"
              },
              {
                id: 456,
                name: "上虞",
                pinyin: "shangyu",
                acronym: "shangyu",
                rank: "E",
                firstChar: "S"
              },
              {
                id: 457,
                name: "温岭",
                pinyin: "wenling",
                acronym: "wenling",
                rank: "D",
                firstChar: "W"
              },
              {
                id: 458,
                name: "永康",
                pinyin: "yongkang",
                acronym: "yongkang",
                rank: "E",
                firstChar: "Y"
              },
              {
                id: 459,
                name: "余姚",
                pinyin: "yuyao",
                acronym: "yuyao",
                rank: "D",
                firstChar: "Y"
              },
              {
                id: 461,
                name: "临海",
                pinyin: "linhai",
                acronym: "linhai",
                rank: "E",
                firstChar: "L"
              },
              {
                id: 467,
                name: "德清",
                pinyin: "deqing",
                acronym: "deqing",
                rank: "F",
                firstChar: "D"
              },
              {
                id: 468,
                name: "诸暨",
                pinyin: "zhuji",
                acronym: "zhuji",
                rank: "D",
                firstChar: "Z"
              },
              {
                id: 469,
                name: "瑞安",
                pinyin: "ruian",
                acronym: "ruian",
                rank: "E",
                firstChar: "R"
              },
              {
                id: 470,
                name: "乐清",
                pinyin: "yueqing",
                acronym: "yueqing",
                rank: "D",
                firstChar: "Y"
              },
              {
                id: 476,
                name: "兰溪",
                pinyin: "lanxi",
                acronym: "lx",
                rank: "E",
                firstChar: "L"
              },
              {
                id: 489,
                name: "嘉善",
                pinyin: "jiashan",
                acronym: "js",
                rank: "E",
                firstChar: "J"
              },
              {
                id: 490,
                name: "安吉",
                pinyin: "anji",
                acronym: "aj",
                rank: "F",
                firstChar: "A"
              },
              {
                id: 510,
                name: "江山",
                pinyin: "jiangshan",
                acronym: "jiangshan",
                rank: "F",
                firstChar: "J"
              },
              {
                id: 512,
                name: "宁海",
                pinyin: "ninghai",
                acronym: "nh",
                rank: "E",
                firstChar: "N"
              },
              {
                id: 524,
                name: "平湖",
                pinyin: "pinghu",
                acronym: "ph",
                rank: "E",
                firstChar: "P"
              },
              {
                id: 530,
                name: "嵊州",
                pinyin: "shengzhou",
                acronym: "shengzhou",
                rank: "E",
                firstChar: "S"
              },
              {
                id: 540,
                name: "奉化",
                pinyin: "fenghua",
                acronym: "fenghua",
                rank: "E",
                firstChar: "F"
              },
              {
                id: 542,
                name: "临安",
                pinyin: "linan",
                acronym: "linan",
                rank: "E",
                firstChar: "L"
              },
              {
                id: 551,
                name: "乌镇",
                pinyin: "wuzhen",
                acronym: "wuzhen",
                rank: "Z",
                firstChar: "W"
              },
              {
                id: 554,
                name: "桐庐",
                pinyin: "tonglu",
                acronym: "tonglu",
                rank: "F",
                firstChar: "T"
              },
              {
                id: 560,
                name: "西塘",
                pinyin: "xitang",
                acronym: "xitang",
                rank: "Z",
                firstChar: "X"
              },
              {
                id: 594,
                name: "建德",
                pinyin: "jiande",
                acronym: "jd",
                rank: "F",
                firstChar: "J"
              },
              {
                id: 624,
                name: "苍南",
                pinyin: "cangnan",
                acronym: "cangnan",
                rank: "E",
                firstChar: "C"
              },
              {
                id: 660,
                name: "淳安",
                pinyin: "chunan",
                acronym: "ca",
                rank: "F",
                firstChar: "C"
              },
              {
                id: 692,
                name: "象山",
                pinyin: "xiangshan",
                acronym: "xiangshan",
                rank: "F",
                firstChar: "X"
              },
              {
                id: 693,
                name: "玉环市",
                pinyin: "yuhuanshi",
                acronym: "yh",
                rank: "F",
                firstChar: "Y"
              },
              {
                id: 726,
                name: "海盐",
                pinyin: "haiyan",
                acronym: "haiyan",
                rank: "F",
                firstChar: "H"
              },
              {
                id: 730,
                name: "浦江",
                pinyin: "pujiang",
                acronym: "pujiang",
                rank: "F",
                firstChar: "P"
              },
              {
                id: 764,
                name: "仙居",
                pinyin: "xianju",
                acronym: "xianju",
                rank: "F",
                firstChar: "X"
              },
              {
                id: 782,
                name: "天台",
                pinyin: "tiantai",
                acronym: "tiantai",
                rank: "F",
                firstChar: "T"
              },
              {
                id: 845,
                name: "三门",
                pinyin: "sanmen",
                acronym: "sanmen",
                rank: "F",
                firstChar: "S"
              },
              {
                id: 851,
                name: "横店",
                pinyin: "hengdian",
                acronym: "hengdian",
                rank: "E",
                firstChar: "H"
              },
              {
                id: 895,
                name: "遂昌",
                pinyin: "suichang",
                acronym: "suichang",
                rank: "F",
                firstChar: "S"
              },
              {
                id: 903,
                name: "新昌",
                pinyin: "xinchang",
                acronym: "xinchang",
                rank: "F",
                firstChar: "X"
              },
              {
                id: 912,
                name: "龙泉",
                pinyin: "longquan",
                acronym: "longquan",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 913,
                name: "缙云",
                pinyin: "jinyun",
                acronym: "jinyun",
                rank: "F",
                firstChar: "J"
              },
              {
                id: 922,
                name: "青田",
                pinyin: "qingtian",
                acronym: "qingtian",
                rank: "F",
                firstChar: "Q"
              },
              {
                id: 938,
                name: "龙游",
                pinyin: "longyou",
                acronym: "longyou",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 972,
                name: "平阳",
                pinyin: "pingyang",
                acronym: "pingyang",
                rank: "E",
                firstChar: "P"
              },
              {
                id: 973,
                name: "武义",
                pinyin: "wuyi",
                acronym: "wuyi",
                rank: "F",
                firstChar: "W"
              },
              {
                id: 990,
                name: "开化",
                pinyin: "kaihua",
                acronym: "kaihua",
                rank: "E",
                firstChar: "K"
              },
              {
                id: 993,
                name: "常山",
                pinyin: "changshan",
                acronym: "changshan",
                rank: "F",
                firstChar: "C"
              },
              {
                id: 1198,
                name: "永嘉县",
                pinyin: "yongjiaxian",
                acronym: "yongjiaxian",
                rank: "F",
                firstChar: "Y"
              },
              {
                id: 10,
                name: "上海",
                pinyin: "shanghai",
                acronym: "sh",
                rank: "S",
                firstChar: "S"
              },
              {
                id: 1164,
                name: "崇明区",
                pinyin: "chongmingqu",
                acronym: "chongmingqu",
                rank: "F",
                firstChar: "C"
              },
              {
                id: 40,
                name: "天津",
                pinyin: "tianjin",
                acronym: "tj",
                rank: "A",
                firstChar: "T"
              },
              {
                id: 42,
                name: "西安",
                pinyin: "xian",
                acronym: "xa",
                rank: "A",
                firstChar: "X"
              },
              {
                id: 352,
                name: "铜川",
                pinyin: "tongchuan",
                acronym: "tc",
                rank: "E",
                firstChar: "T"
              },
              {
                id: 353,
                name: "宝鸡",
                pinyin: "baoji",
                acronym: "baoji",
                rank: "D",
                firstChar: "B"
              },
              {
                id: 354,
                name: "咸阳",
                pinyin: "xianyang",
                acronym: "xianyang",
                rank: "D",
                firstChar: "X"
              },
              {
                id: 355,
                name: "渭南",
                pinyin: "weinan",
                acronym: "wn",
                rank: "D",
                firstChar: "W"
              },
              {
                id: 356,
                name: "延安",
                pinyin: "yanan",
                acronym: "yanan",
                rank: "E",
                firstChar: "Y"
              },
              {
                id: 357,
                name: "汉中",
                pinyin: "hanzhong",
                acronym: "hanzhong",
                rank: "E",
                firstChar: "H"
              },
              {
                id: 358,
                name: "榆林",
                pinyin: "yulinyl",
                acronym: "yl",
                rank: "D",
                firstChar: "Y"
              },
              {
                id: 359,
                name: "安康",
                pinyin: "ankang",
                acronym: "ankang",
                rank: "E",
                firstChar: "A"
              },
              {
                id: 360,
                name: "商洛",
                pinyin: "shangluo",
                acronym: "sl",
                rank: "E",
                firstChar: "S"
              },
              {
                id: 564,
                name: "华阴",
                pinyin: "huayin",
                acronym: "huayin",
                rank: "F",
                firstChar: "H"
              },
              {
                id: 661,
                name: "兴平",
                pinyin: "xingping",
                acronym: "xp",
                rank: "F",
                firstChar: "X"
              },
              {
                id: 772,
                name: "汉阴",
                pinyin: "hanyin",
                acronym: "hanyin",
                rank: "F",
                firstChar: "H"
              },
              {
                id: 796,
                name: "神木市",
                pinyin: "shenmushi",
                acronym: "shenmu",
                rank: "F",
                firstChar: "S"
              },
              {
                id: 799,
                name: "户县",
                pinyin: "huxian",
                acronym: "huxian",
                rank: "F",
                firstChar: "H"
              },
              {
                id: 808,
                name: "临潼",
                pinyin: "lintong",
                acronym: "lintong",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 809,
                name: "蓝田",
                pinyin: "lantian",
                acronym: "lantian",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 819,
                name: "石泉",
                pinyin: "shiquan",
                acronym: "shiquan",
                rank: "F",
                firstChar: "S"
              },
              {
                id: 822,
                name: "阎良",
                pinyin: "yanliang",
                acronym: "yanliang",
                rank: "F",
                firstChar: "Y"
              },
              {
                id: 832,
                name: "韩城",
                pinyin: "hancheng",
                acronym: "hancheng",
                rank: "F",
                firstChar: "H"
              },
              {
                id: 836,
                name: "大荔",
                pinyin: "dalixian",
                acronym: "dalixian",
                rank: "F",
                firstChar: "D"
              },
              {
                id: 837,
                name: "蒲城",
                pinyin: "pucheng",
                acronym: "pucheng",
                rank: "F",
                firstChar: "P"
              },
              {
                id: 848,
                name: "眉县",
                pinyin: "meixian",
                acronym: "meixian",
                rank: "F",
                firstChar: "M"
              },
              {
                id: 861,
                name: "扶风",
                pinyin: "fufeng",
                acronym: "fufeng",
                rank: "F",
                firstChar: "F"
              },
              {
                id: 866,
                name: "高陵",
                pinyin: "gaoling",
                acronym: "gaoling",
                rank: "F",
                firstChar: "G"
              },
              {
                id: 870,
                name: "西乡",
                pinyin: "xixiang",
                acronym: "xixiang",
                rank: "F",
                firstChar: "X"
              },
              {
                id: 908,
                name: "杨陵",
                pinyin: "yangling",
                acronym: "yangling",
                rank: "F",
                firstChar: "Y"
              },
              {
                id: 909,
                name: "城固",
                pinyin: "chenggu",
                acronym: "chenggu",
                rank: "F",
                firstChar: "C"
              },
              {
                id: 915,
                name: "彬州市",
                pinyin: "binzhoushi",
                acronym: "binxian",
                rank: "F",
                firstChar: "B"
              },
              {
                id: 985,
                name: "周至",
                pinyin: "zhouzhi",
                acronym: "zhouzhi",
                rank: "F",
                firstChar: "Z"
              },
              {
                id: 1125,
                name: "南郑区",
                pinyin: "nanzhengxian",
                acronym: "nanzhengxian",
                rank: "F",
                firstChar: "N"
              },
              {
                id: 1139,
                name: "岐山县",
                pinyin: "qishanxian",
                acronym: "qishanxian",
                rank: "F",
                firstChar: "Q"
              },
              {
                id: 1146,
                name: "靖边",
                pinyin: "jingbian",
                acronym: "jingbian",
                rank: "F",
                firstChar: "J"
              },
              {
                id: 1147,
                name: "洛川县",
                pinyin: "luochuanxian",
                acronym: "luochuanxian",
                rank: "F",
                firstChar: "L"
              },
              {
                id: 1152,
                name: "凤翔县",
                pinyin: "fengxiangxian",
                acronym: "fengxiangxian",
                rank: "F",
                firstChar: "F"
              },
              {
                id: 1155,
                name: "绥德县",
                pinyin: "suidexian",
                acronym: "suidexian",
                rank: "F",
                firstChar: "S"
              },
              {
                id: 1206,
                name: "黄陵县",
                pinyin: "huanglingxian",
                acronym: "huanglingxian",
                rank: "F",
                firstChar: "H"
              },
              {
                id: 1208,
                name: "定边县",
                pinyin: "dingbianxian",
                acronym: "dingbianxian",
                rank: "F",
                firstChar: "D"
              },
              {
                id: 1209,
                name: "府谷县",
                pinyin: "fuguxian",
                acronym: "fuguxian",
                rank: "F",
                firstChar: "F"
              },
              {
                id: 1213,
                name: "旬阳县",
                pinyin: "xunyangxian",
                acronym: "xunyangxian",
                rank: "F",
                firstChar: "X"
              },
              {
                id: 1234,
                name: "横山区",
                pinyin: "hengshanqu",
                acronym: "hengshanqu",
                rank: "F",
                firstChar: "H"
              },
              {
                id: 387,
                name: "乌鲁木齐",
                pinyin: "wulumuqi",
                acronym: "xj",
                rank: "C",
                firstChar: "W"
              },
              {
                id: 388,
                name: "克拉玛依",
                pinyin: "kelamayi",
                acronym: "klmy",
                rank: "E",
                firstChar: "K"
              },
              {
                id: 389,
                name: "吐鲁番",
                pinyin: "tulufan",
                acronym: "tlf",
                rank: "Z",
                firstChar: "T"
              },
              {
                id: 390,
                name: "哈密",
                pinyin: "hami",
                acronym: "hami",
                rank: "F",
                firstChar: "H"
              },
              {
                id: 391,
                name: "昌吉",
                pinyin: "changji",
                acronym: "changji",
                rank: "F",
                firstChar: "C"
              },
              {
                id: 392,
                name: "博尔塔拉",
                pinyin: "boertala",
                acronym: "betl",
                rank: "Z",
                firstChar: "B"
              },
              {
                id: 393,
                name: "巴州",
                pinyin: "bazhou",
                acronym: "baz",
                rank: "Z",
                firstChar: "B"
              },
              {
                id: 394,
                name: "阿克苏",
                pinyin: "akesu",
                acronym: "aks",
                rank: "F",
                firstChar: "A"
              },
              {
                id: 395,
                name: "克州",
                pinyin: "kezhou",
                acronym: "kz",
                rank: "Z",
                firstChar: "K"
              },
              {
                id: 396,
                name: "喀什地区",
                pinyin: "kashi",
                acronym: "ks",
                rank: "Z",
                firstChar: "K"
              },
              {
                id: 397,
                name: "和田",
                pinyin: "hetian",
                acronym: "ht",
                rank: "Z",
                firstChar: "H"
              },
              {
                id: 398,
                name: "伊犁",
                pinyin: "yili",
                acronym: "yili",
                rank: "Z",
                firstChar: "Y"
              },
              {
                id: 399,
                name: "塔城",
                pinyin: "tacheng",
                acronym: "tac",
                rank: "Z",
                firstChar: "T"
              },
              {
                id: 400,
                name: "阿勒泰",
                pinyin: "aletai",
                acronym: "alt",
                rank: "Z",
                firstChar: "A"
              },
              {
                id: 408,
                name: "石河子",
                pinyin: "shihezi",
                acronym: "shz",
                rank: "E",
                firstChar: "S"
              },
              {
                id: 603,
                name: "库尔勒",
                pinyin: "kuerle",
                acronym: "krl",
                rank: "E",
                firstChar: "K"
              },
              {
                id: 622,
                name: "伊宁",
                pinyin: "yining",
                acronym: "yn",
                rank: "E",
                firstChar: "Y"
              },
              {
                id: 643,
                name: "奎屯",
                pinyin: "kuitun",
                acronym: "kt",
                rank: "F",
                firstChar: "K"
              },
              {
                id: 689,
                name: "阜康",
                pinyin: "fukang",
                acronym: "fukang",
                rank: "F",
                firstChar: "F"
              },
              {
                id: 747,
                name: "乌苏",
                pinyin: "wusu",
                acronym: "wusu",
                rank: "F",
                firstChar: "W"
              },
              {
                id: 762,
                name: "沙湾",
                pinyin: "shawan",
                acronym: "shawan",
                rank: "F",
                firstChar: "S"
              },
              {
                id: 984,
                name: "库车",
                pinyin: "kuche",
                acronym: "kuche",
                rank: "F",
                firstChar: "K"
              },
              {
                id: 1016,
                name: "阿拉尔",
                pinyin: "alaer",
                acronym: "alaer",
                rank: "F",
                firstChar: "A"
              },
              {
                id: 1077,
                name: "莎车县",
                pinyin: "shachexian",
                acronym: "shachexian",
                rank: "F",
                firstChar: "S"
              },
              {
                id: 1117,
                name: "裕民县",
                pinyin: "yuminxian",
                acronym: "yuminxian",
                rank: "F",
                firstChar: "Y"
              },
              {
                id: 1120,
                name: "鄯善县",
                pinyin: "shanshanxian",
                acronym: "shanshanxian",
                rank: "F",
                firstChar: "S"
              },
              {
                id: 1126,
                name: "阿勒泰市",
                pinyin: "aletaishi",
                acronym: "aletaishi",
                rank: "F",
                firstChar: "A"
              },
              {
                id: 1172,
                name: "额敏县",
                pinyin: "eminxian",
                acronym: "eminxian",
                rank: "F",
                firstChar: "E"
              },
              {
                id: 1173,
                name: "塔城市",
                pinyin: "tachengshi",
                acronym: "tachengshi",
                rank: "F",
                firstChar: "T"
              },
              {
                id: 1190,
                name: "阿图什市",
                pinyin: "atushishi",
                acronym: "atushishi",
                rank: "F",
                firstChar: "A"
              },
              {
                id: 1194,
                name: "精河县",
                pinyin: "jinghexian",
                acronym: "jinghexian",
                rank: "F",
                firstChar: "J"
              },
              {
                id: 1237,
                name: "巴楚县",
                pinyin: "bachuxian",
                acronym: "bachuxian",
                rank: "F",
                firstChar: "B"
              },
              {
                id: 1251,
                name: "沙雅",
                pinyin: "shaya",
                acronym: "shaya",
                rank: "F",
                firstChar: "S"
              },
              {
                id: 1257,
                name: "拜城县",
                pinyin: "baichengxian",
                acronym: "baichengxian",
                rank: "F",
                firstChar: "B"
              },
              {
                id: 107,
                name: "贵阳",
                pinyin: "guiyang",
                acronym: "gy",
                rank: "B",
                firstChar: "G"
              },
              {
                id: 322,
                name: "六盘水",
                pinyin: "liupanshui",
                acronym: "lps",
                rank: "E",
                firstChar: "L"
              },
              {
                id: 323,
                name: "遵义",
                pinyin: "zunyi",
                acronym: "zunyi",
                rank: "D",
                firstChar: "Z"
              },
              {
                id: 324,
                name: "安顺",
                pinyin: "anshun",
                acronym: "anshun",
                rank: "E",
                firstChar: "A"
              },
              {
                id: 325,
                name: "铜仁",
                pinyin: "tongrendiqu",
                acronym: "tr",
                rank: "E",
                firstChar: "T"
              },
              {
                id: 326,
                name: "黔西南",
                pinyin: "qianxinan",
                acronym: "qxn",
                rank: "F",
                firstChar: "Q"
              },
              {
                id: 327,
                name: "毕节",
                pinyin: "bijiediqu",
                acronym: "bijie",
                rank: "E",
                firstChar: "B"
              },
              {
                id: 328,
                name: "黔东南",
                pinyin: "qiandongnan",
                acronym: "qdn",
                rank: "E",
                firstChar: "Q"
              },
              {
                id: 329,
                name: "黔南",
                pinyin: "qiannan",
                acronym: "qn",
                rank: "F",
                firstChar: "Q"
              },
              {
                id: 473,
                name: "凯里",
                pinyin: "kaili",
                acronym: "kl",
                rank: "Z",
                firstChar: "K"
              },
              {
                id: 475,
                name: "仁怀",
                pinyin: "renhuai",
                acronym: "rh",
                rank: "F",
                firstChar: "R"
              },
              {
                id: 842,
                name: "盘州市",
                pinyin: "panzhoushi",
                acronym: "panxian",
                rank: "F",
                firstChar: "P"
              },
              {
                id: 1001,
                name: "金沙",
                pinyin: "jinsha",
                acronym: "jinsha",
                rank: "F",
                firstChar: "J"
              },
              {
                id: 1002,
                name: "开阳",
                pinyin: "kaiyang",
                acronym: "kaiyang",
                rank: "F",
                firstChar: "K"
              },
              {
                id: 1006,
                name: "威宁",
                pinyin: "weining",
                acronym: "weining",
                rank: "F",
                firstChar: "W"
              },
              {
                id: 1007,
                name: "织金",
                pinyin: "zhijin",
                acronym: "zhijin",
                rank: "F",
                firstChar: "Z"
              },
              {
                id: 1018,
                name: "赤水",
                pinyin: "chishui",
                acronym: "chishui",
                rank: "F",
                firstChar: "C"
              },
              {
                id: 1260,
                name: "清镇",
                pinyin: "qingzhen",
                acronym: "qingzhen",
                rank: "F",
                firstChar: "Q"
              },
              {
                id: 56,
                name: "合肥",
                pinyin: "hefei",
                acronym: "hf",
                rank: "B",
                firstChar: "H"
              },
        ];
        var obj = {};
        data.forEach((item,index) => {
            if(!obj[item.firstChar]) {
                obj[item.firstChar] = [];
            }
            obj[item.firstChar].push(item);
        })
        this.cityGroup = obj;
    },
    methods: {
      changeCity(val) {
        this.$store.dispatch('setPosition',val);
        this.$router.push({name:'index'});
      }
    }
  }
</script>


<style lang="scss">
    @import "@/assets/css/changecity/categroy.scss";
</style>