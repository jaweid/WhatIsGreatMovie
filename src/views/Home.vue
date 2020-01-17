<template>
  <q-page style="padding-top:10px">

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in homeData" :key="index">
          <img :src="item.imgUrl" />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
      <div class="swiper-button-next"></div>
      <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
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
            "https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1971044.jpg?max_age=2592000"
        },
        {
          imgUrl:
            "https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1973133.jpg?max_age=2592000"
        },
        {
          imgUrl:
            "https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1973144.jpg?max_age=2592000"
        }
      ]
    };
  },
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay:true,
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
</style>
