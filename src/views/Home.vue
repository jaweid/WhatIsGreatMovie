<template>
  <q-page>

    <div class="mod-bg mod-slide">
      <div class="section-inner">
        <div class="title text-h5">每周推荐</div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in homeData" :key="index">
              <img :src="item.imgUrl" />
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>

    <!-- 影单推荐 -->
    <div class="mod-bg mod-slide">
      <div class="section-inner">

        <div class="title text-h5">影单推荐</div>
        <div class="row q-gutter-md" style="padding:0 60px">
          <div class="col" v-for="(item, index) in collectionsList" :key="index">
            <q-card flat bordered class="collection-card">
              <q-img class="img" :src="item.imgUrl" style="height:250px">
                <div class="absolute-bottom text-subtitle2 text-center">
                  {{item.title}}
                </div>
              </q-img>
              <i class="mod_cover__mask"></i>
            </q-card>
          </div>
        </div>
      </div>
    </div>

    <!-- 影奖榜 -->
    <div class="mod-bg mod-slide">
      <div class="section-inner">

        <div class="title text-h5">影奖榜</div>
        <div class="list-country">
          <span @click="changeListCountry(item.value)" class="text-subtitle1"
            :class="currentListCountry===item.value?'text-purple-14':null" v-for="(item, index) in listCountry"
            :key="index">{{item.label}}</span>
        </div>
        <div class="list-card-row">
          <div class="awards-card" v-for="(item, index) in listData" :key="index">
            <q-card flat bordered class="text-white" v-bind:style="{'background-color':item.bgColor}">
              <q-card-section>
                <div class="text-h5 ">{{item.title}}</div>
              </q-card-section>

              <q-card-section class="text-caption ">
                {{item.desc}}
              </q-card-section>

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar rounded text-color="white">
                    <img src="http://img31.mtime.cn/pi/2014/03/07/093949.17156161_220X220.jpg">
                  </q-avatar>
                </q-item-section>
                <q-item-section>《霸王别姬》</q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar rounded text-color="white">
                    <img src="http://img31.mtime.cn/pi/2014/03/06/092807.29533181_220X220.jpg">
                  </q-avatar>
                </q-item-section>
                <q-item-section>《英雄本色》</q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar rounded text-color="white">
                    <img src="http://img31.mtime.cn/mg/2015/01/20/154028.66013953.jpg">
                  </q-avatar>
                </q-item-section>
                <q-item-section>《甜蜜蜜》</q-item-section>
              </q-item>

              <q-card-actions>
                <q-btn flat label="更多获奖影片 >" />
              </q-card-actions>

            </q-card>

          </div>
        </div>
      </div>
    </div>

    <!-- 评分排行 -->
    <div class="mod-bg mod-slide">
      <div class="section-inner">

        <h5 class="title text-h5">评分排行</h5>

        <div class="list-country">
          <span @click="currentPointSites=item.value" class="text-subtitle1"
            :class="currentPointSites===item.value?'text-purple-14':null" v-for="(item, index) in pointsSite"
            :key="index">{{item.label}}</span>

          <q-btn class="more" flat color="primary" label="更多 >" />
        </div>

        <div class="row q-gutter-md " style="padding:0 60px">
          <div class="col" v-for="(item, index) in pointsList.slice(0,5)" :key="index">
            <q-card flat bordered class="collection-card points-card">
              <q-img class="img" :src="item.imgUrl" style="height:224px">
                <i class="mod_cover__mask"></i>
              </q-img>

              <q-card-section>
                <div class="text-h6 q-mt-sm q-mb-xs">{{item.title}}</div>
                <!-- <div class="text-subtitle1">
                {{item.point}}分
              </div> -->
                <div class="text-caption text-grey">
                  导演：{{item.director}}
                </div>
              </q-card-section>

            </q-card>
          </div>
        </div>

        <div class="row q-gutter-md " style="padding:0 60px;margin-top:20px">
          <div class="col" v-for="(item, index) in pointsList.slice(5,10)" :key="index">
            <q-card flat bordered class="collection-card points-card">
              <q-img class="img" :src="item.imgUrl" style="height:250px">
                <i class="mod_cover__mask"></i>
              </q-img>

              <q-card-section>
                <div class="text-h6 q-mt-sm q-mb-xs">{{item.title}}</div>
                <!-- <div class="text-subtitle1">
                {{item.point}}分
              </div> -->
                <div class="text-caption text-grey">
                  导演：{{item.director}}
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  components: {},
  name: "PageHome",
  data() {
    return {
      homeData: [
        {
          imgUrl:
            "http://img5.mtime.cn/pi/2019/12/05/151116.35103774_1000X1000.jpg"
        },
        {
          imgUrl:
            "http://img5.mtime.cn/pi/2019/12/10/164925.83015162_1000X1000.jpg"
        },
        {
          imgUrl:
            "http://img5.mtime.cn/pi/2019/12/18/101608.68616529_1000X1000.jpg"
        }
      ],
      listData: [],
      chinaListData: [
        {
          bgColor: "#CB6F8A",
          title: "中国电影金鸡奖",
          desc:
            "中国电影金鸡奖（Golden Rooster Award）是由中国电影家协会和中国文学艺术界联合会联合主办的电影奖项。创办于1981年，是中国大陆电影界权威、专业的电影奖。"
        },
        {
          bgColor: "#6E97B3",
          title: "中国电影华表奖",
          desc:
            "中国电影华表奖简称华表奖，创办于1994年，由国家新闻出版广播电影电视总局主办，是中国（内地）电影界的政府奖，体现党和国家对电影事业的热情鼓励和大力扶持。"
        },
        {
          bgColor: "#6DBBB5",
          title: "香港电影金像奖",
          desc:
            "香港电影金像奖（Hong Kong Film Awards，HKFA）是香港及大中华电影界最重要的奖项之一，旨在鼓励优秀香港电影的创作与发展的奖项，是香港电影业界年度最重要的活动。"
        },
        {
          bgColor: "#4F8C90",
          title: "台湾电影金马奖",
          desc:
            "台湾电影金马奖（Golden Horse Award）是台湾地区主办的电影奖项，创办于1962年，当年主要是为了促进台湾地区电影制作事业和表扬对华语电影文化有杰出贡献的电影人。"
        }
      ],
      americaListData: [
        {
          bgColor: "#518E93",
          title: "奥斯卡金像奖",
          desc:
            " 奥斯卡金像奖是美国一项表彰电影业成就的年度奖项，有20多个不同的奖项，也是世界历史最悠久的媒体奖项，已成为全世界最具影响力的电影奖项。"
        },
        {
          bgColor: "#6DC2BA",
          title: "金球奖",
          desc:
            "金球奖（Golden Globe Awards），是美国的一个电影与电视奖项，以正式晚宴的方式举行，举办方是好莱坞外国记者协会。"
        }
      ],
      koreanListData: [
        {
          bgColor: "#3B78E7",
          title: "韩国青龙电影奖",
          desc:
            "为韩国电影的振兴和大众文化的发展于1963年创立了青龙电影节，青龙电影节继承了过去的辉煌传统，今日已经成为名副其实的银幕大盛典 。"
        },
        {
          bgColor: "#F9AB02",
          title: "韩国电影大钟奖",
          desc:
            "韩国电影大钟奖在韩国电影历史上具有最权威的地位，是为促进韩国电影不断发展而设立的韩国电影艺术大奖。韩国三大电影奖之一。"
        },
        {
          bgColor: "#5AB974",
          title: "百想艺术大赏",
          desc:
            "该奖项是韩国代表性、历史最为悠久的综合艺术奖项，被誉为“韩国金球奖”，该奖项颁奖典礼是韩国最具影响力和权威的电视电影颁奖典礼之一。"
        }
      ],
      europeListData: [
        {
          bgColor: "#E37400",
          title: "戛纳国际电影节",
          desc:
            "戛纳国际电影（亦译作坎城国际电影节），最高奖为“金棕榈奖”。他们致力于发现电影行业新人并且为电影节创造一个交流与创造的平台。"
        },
        {
          bgColor: "#659DF6",
          title: "柏林国际电影节",
          desc:
            "柏林国际电影节，世界三大电影节之一。50年代初由[[阿尔弗雷德·鲍尔]]发起筹划，得到了当时的联邦德国政府和电影界的支持和帮助。最高奖项为“金熊奖”。"
        },
        {
          bgColor: "#B366F5",
          title: "威尼斯电影节",
          desc:
            "威尼斯国际电影节，创办于1932年，是世界上历史最悠久的电影节，即世界上第一个国际电影节，被誉为“国际电影节之父”。最高奖项为“金狮奖”。"
        }
      ],
      japanListData: [
        {
          bgColor: "#4285F4",
          title: "日本电影旬报奖",
          desc:
            "《电影旬报》是1919年7月创刊的日本电影杂志，也是日本最古老的电影杂志，电影旬报奖就是该杂志主办的一个电影奖项，设立于1924年。"
        }
      ],
      listCountry: [
        {
          label: "中国",
          value: "china"
        },
        {
          label: "美国",
          value: "america"
        },
        {
          label: "欧洲",
          value: "europe"
        },
        {
          label: "韩国",
          value: "korean"
        },
        {
          label: "日本",
          value: "japan"
        }
      ],
      pointsSite: [
        {
          label: "豆瓣",
          value: "douban"
        },
        {
          label: "时光网",
          value: "time"
        },
        {
          label: "烂番茄",
          value: "tomatoes"
        },
        {
          label: "IMDb",
          value: "imdb"
        }
      ],
      collectionsList: [
        {
          imgUrl:
            "http://img5.mtime.cn/pi/2019/08/08/104847.11059369_235X235.jpg",
          title: "2019年美国上映影片50佳 "
        },
        {
          imgUrl:
            "http://img5.mtime.cn/pi/2018/01/02/110320.96180299_235X235.jpg",
          title: "2019年十佳恐怖片"
        },
        {
          imgUrl:
            "http://img31.mtime.cn/pi/2014/02/27/213602.15649791_220X220.jpg",
          title: "热血竞技电影时光网评分TOP100"
        },
        {
          imgUrl:
            "http://img31.mtime.cn/pi/2013/09/17/184520.25650180_220X220.jpg",
          title: "动画电影全球票房Top25 "
        },
        {
          imgUrl:
            "http://img31.mtime.cn/pi/2014/03/06/095257.23224743_220X220.jpg",
          title: "追忆香港'四大恶人'李兆基"
        }
      ],
      pointsList: [
        {
          imgUrl:
            "http://img31.mtime.cn/pi/2014/03/06/094935.20275866_220X220.jpg",
          title: "肖申克的救赎",
          point: 9.2,
          director: "弗兰克·德拉邦特"
        },
        {
          imgUrl:
            "http://img21.mtime.cn/pi/2010/05/13/115058.54701524_220X220.jpg",
          title: "盗梦空间 ",
          point: 9.1,
          director: " 克里斯托弗·诺兰"
        },
        {
          imgUrl:
            "http://img31.mtime.cn/pi/2014/03/07/094848.71679415_220X220.jpg",
          title: "阿甘正传 ",
          point: 9.1,
          director: "罗伯特·泽米吉斯"
        },
        {
          imgUrl:
            "http://img31.mtime.cn/pi/2014/03/06/094436.10925961_220X220.jpg",
          title: "辛德勒的名单 ",
          point: 9.1,
          director: "史蒂文·斯皮尔伯格"
        },
        {
          imgUrl:
            "http://img21.mtime.cn/pi/2010/12/20/003714.41452094_220X220.jpg",
          title: "海豚湾 ",
          point: 9.1,
          director: "路易·西霍尤斯"
        },
        {
          imgUrl:
            "http://img31.mtime.cn/pi/2014/03/01/131631.49260328_220X220.jpg",
          title: "机器人总动员 WALL·E ",
          point: 9.0,
          director: "安德鲁·斯坦顿"
        },
        {
          imgUrl:
            "http://img31.mtime.cn/pi/2014/03/06/091842.99828746_220X220.jpg",
          title: "这个杀手不太冷",
          point: 9.0,
          director: " 吕克·贝松"
        },
        {
          imgUrl:
            "http://img31.mtime.cn/pi/2014/03/01/141110.56563867_220X220.jpg",
          title: "蝙蝠侠：黑暗骑士",
          point: 9.0,
          director: "克里斯托弗·诺兰"
        },
        {
          imgUrl:
            "http://img5.mtime.cn/pi/2017/03/16/175837.28903962_220X220.jpg",
          title: "霸王别姬",
          point: 9.0,
          director: "陈凯歌"
        },
        {
          imgUrl:
            "http://img31.mtime.cn/pi/2014/03/07/082035.28707800_220X220.jpg",
          title: "教父",
          point: 9.0,
          director: "弗朗西斯·福特·科波拉"
        }
      ],
      currentListCountry: "china",
      currentPointSites: "douban"
    };
  },
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });

    this.changeListCountry(this.currentListCountry);
  },

  methods: {
    changeListCountry(value) {
      this.currentListCountry = value;
      this.listData = this[`${value}ListData`];
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 200px;
  --swiper-pagination-color: #000000; /* 两种都可以 */
  --swiper-navigation-color: #000000; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 20px; /* 设置按钮大小 */

  &:hover {
    .swiper-button-prev,
    .swiper-button-next {
      visibility: visible;
    }
  }
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;
  transform: scale(0.8);
  img {
    width: 100%;
    height: 100%;
  }
}
.swiper-slide-prev,
.swiper-slide-next {
  opacity: 0.5;
}
.swiper-button-prev,
.swiper-button-next {
  visibility: hidden;
}
.swiper-slide-active {
  z-index: 1000;
}

.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1.8, 1.6);
}

.list-country {
  padding-bottom: 40px;
  margin: 10px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    cursor: pointer;
    width: 150px;
    text-align: center;
  }
  .more {
    position: absolute;
    right: 60px;
    top: 0;
  }
}
.list-card-row {
  width: 100%;
  padding: 0 60px;
  display: flex;
  justify-content: center;
}
.awards-card {
  flex: 0.3;
  margin: 0 10px;
}
.collection-card {
  overflow: hidden;
}
.collection-card:hover {
  .mod_cover__mask {
    opacity: 0.2;
    filter: alpha(opacity=20);
    -webkit-transition: opacity 0.5s;
    transition: opacity 0.5s;
  }
  .img {
    transform: scale(1.07) translateZ(0);
    transition: transform 0.75s cubic-bezier(0, 1, 0.75, 1);
  }
}
.mod_cover__mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0;
  filter: alpha(opacity=0);
  transition: opacity 0.5s;
}

.mod-bg {
  background: url(http://y.gtimg.cn/mediastyle/yqq/img/bg_detail.jpg) 50% 0
    repeat-x;
  padding: 0 20vw;
}
.section-inner {
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.mod-slide {
  padding: 20px 0;
  .title {
    text-align: center;
    margin: 20px auto 30px auto;
  }
}
</style>
