<template>
    <div>
        <ul :class="toggleVal==0?'navLis':'navLis on'">
            <li v-for="(nav, index) in navs" :key="index">
                <router-link :to="nav.link">
                    <span class="nav_icon" :style="'background-image:url(' + nav.icon +')'"></span>
                    {{nav.name}}
                </router-link>
            </li>
            <a href="javascript:;" id="open" @click="toggleNav">{{toggleText}}</a>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      toggleText: "导航",
      toggleVal: 0,
      navs: [
        {
          icon: require("@/assets/home.svg"),
          name: "Home / 主页",
          link: "home"
        },
        {
          icon: require("@/assets/index.svg"),
          name: "Index / 首页",
          link: "/"
        },

        {
          icon: require("@/assets/article.svg"),
          name: "Article / 文章集锦",
          link: "article"
        },
        {
          icon: require("@/assets/me.svg"),
          name: "Me / 我",
          link: "me"
        }
      ]
    };
  },
  methods: {
    toggleNav: function() {
      if (this.toggleVal == 1) {
        this.toggleVal = 0;
        this.toggleText = "导航";
        // window.console.log("close the navbar");
      } else {
        this.toggleVal = 1;
        this.toggleText = "关闭";
        // window.console.log("open the navbar");
      }
    }
  }
};
</script>

<style scoped>
.navLis #open {
  color: #666;
  font-size: 12px;
  display: block;
  position: absolute;
  border-radius: 3px;
  top: 5px;
  left: -45px;
  height: 37px;
  line-height: 37px;
  width: 37px;
  background-color: #fff;
  box-shadow: 0 0 2px #ccc;
}
.navLis #close {
  color: #666;
  font-size: 0.8rem;
  display: block;
  position: absolute;
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f0eeee;
  height: 37px;
  line-height: 37px;
  text-align: center;
}
.navLis {
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  height: 100%;
  background-color: #fdfdfd;
  box-shadow: -3px 0 8px #efefef;
  z-index: 99;
  transform: translateX(200px);
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.navLis.on {
  transform: translateX(0);
}
.navLis li {
  position: relative;
  padding-left: 47px;
  line-height: 47px;
  font-size: 0.8rem;
  text-align: left;
  border-bottom: 1px solid #efefef;
}
.navLis li a {
  display: block;
  color: #707070;
}
.nav_icon {
  display: block;
  position: absolute;
  height: 37px;
  width: 37px;
  top: 5px;
  left: 5px;
  background-position: center center;
  background-size: 42% auto;
  background-repeat: no-repeat;
}
</style>