<template lang="pug">
div
  //- header
  header(class="l-header" :class="{ 'hide-header' : headerStatus }")
    div.l-header__inner.l-container
      nav(class="l-header__nav" :class="{ 'show-nav' : navStatus }")
        ul.l-header__links
          li.l-header__linksItem
              a(href="#" @click="toggleNav" v-scroll-to="'#blockMv'") TOP
          li.l-header__linksItem
            a(href="#" @click="toggleNav" v-scroll-to="{el: '#blockAbout', offset: -65}") ABOUT
          li.l-header__linksItem
            a(href="#" @click="toggleNav" v-scroll-to="{el: '#blockIntro', offset: -65}") INTRODUCTION
          li.l-header__linksItem
            a(href="#" @click="toggleNav" v-scroll-to="{el: '#blockSkills', offset: -65}") SKILL SET
      div(class="l-header__hum" @click="toggleNav" :class="{ 'is-active' : navStatus }")
        span
        span
        span

  //- main
  div.l-main
    div.p-mv#blockMv
      div.p-mv__content
        div.p-mv__logo
          img(src="/assets/img/common/logo.svg" alt="onestech")
        div.p-mv__text
          h1.p-mv__title ONESTECH<br class="u-hideSm"> PROFILE
          p.p-mv__prof TAKUMA ONISHI,<br class="u-hideSm"> WEB ENGINEER
      MvParticle

    //- about
    div.p-about.p-topStyle#blockAbout
      div.l-container
        h2.c-h2 ABOUT
        div.p-about__text
          p ご覧いただきありがとうございます。<br>このサイトはWebエンジニア 大西巧真の<br class="u-hideXs">プロフィールページです。<br>経歴、詳細、これまでに習得した<br class="u-hideXs">スキルセットをまとめています。<br>どうぞごゆっくりご覧くださいませ。

    //- introduce
    div.p-intro.p-topStyle--even#blockIntro
      div.l-container
        div.u-center
          h2.c-h2 INTRODUCTION
        div.p-intro__wrap
          figure.p-intro__img
            img(src="/assets/img/top/im-intro-01.jpg" alt="")
          div.p-intro__content
            div.p-intro__block
              p.p-intro__kana オオニシ タクマ
              p.p-intro__name 大西 巧真
            div.p-intro__block
              p 1998年7月生まれ、岐阜県出身同県在住のWebエンジニア。活動拠点は名古屋。<br>高校卒業後、専門学校でWebデザイン&クリエイティブを2年間専攻、その後新卒でWebコンサルティング会社に入社し4年間勤務。
              p 企画、デザイン、制作、運用まで幅広く携わってきた経験による職種に囚われないマルチな働き方が強み。得意分野はフロントエンド。
              p 几帳面な性格のため、デスクはいつも綺麗。
              p <i class="c-icoGithub"></i> GitHub：<a href="https://github.com/onestech-net" target="_blank">https://github.com/onestech-net</a>
        div.p-intro__tips
          h3.c-h3
            span.u-fmEn What is onestech ?
          p onestech（ワンステック）は、僕がこのサイトを立ち上げる際に考えたシンボルネームです。<br>自身の名前をベースにアレンジしたもので、ひとつひとつの技術（Ones + Technique）をワンステップ（One step）させたいという意味も込めてこの名前を採用しました。<br>このプロフィールページはその第一歩目です。

    div.p-skills.p-topStyle#blockSkills
      div.p-skills__intro
        div.l-container
          h2.c-h2 SKILL SET
          p これまでに習得してきたスキルを<br class="u-hideXs">分野ごとにまとめました。
          p 上流工程や前後の作業（デザイン・動的組込）も意識した<br class="u-showXs">柔軟かつ精度の高いフロントエンドスキルが長所です。
          p バックエンドの作業はフロントとの連携やパーツ作成が多く根幹部分に携わることが少なかったので、<br class="u-showXs">徐々にこちらの実務にも取り組み力を伸ばしていきたいと考えています。
      div.p-skills--front.p-topStyle--even
        div.l-container
          h3.c-h3 フロントエンドスキル
          div.p-skills__wrap
            div.p-skills__chart
              div.p-skills__CanvasWrap
                div.p-skills__chartCanvas
                  FrontChart
              div.p-skills__chartText
                p 1: 実務経験はないが個人で勉強中<br>2: 実務経験はあるが習熟が必要<br>3: 実務レベルで自由に扱える
            div.p-skills__content
              div.p-skills__contentBlock
                h4.p-skills__title 実務使用経験
                table
                  tbody
                    tr
                      th テンプレートエンジン
                      td Pug / Nunjucks
                    tr
                      th 開発環境構築
                      td Webpack / Gulp
                    tr
                      th CMS
                      td WordPress / EC-CUBE / Shopify / futureshop
              div.p-skills__contentBlock
                h4.p-skills__title 個人使用経験
                table
                  tbody
                    tr
                      th Vue関連
                      td Vue CLI / Vuex / Vue Router / Vuetify / Nuxt.js
      div.p-skills--back.p-topStyle
        div.l-container
          h3.c-h3 バックエンドスキル
          div.p-skills__wrap
            div.p-skills__chart
              div.p-skills__CanvasWrap
                div.p-skills__chartCanvas
                  BackChart
              div.p-skills__chartText
                p 1: 実務経験はないが個人で勉強中<br>2: 実務経験はあるが習熟が必要<br>3: 実務レベルで自由に扱える
            div.p-skills__content
              div.p-skills__contentBlock
                h4.p-skills__title 個人使用経験
                table
                  tbody
                    tr
                      th サーバー構築
                      td VPS / Rental Server
                    tr
                      th サーバー利用
                      td Amazon Web Service / Firebase / Heroku
      div.p-skills--other.p-topStyle--even
        div.l-container
          h3.c-h3 その他スキル
          div.p-skills__wrap
            div.p-skills__chart
              div.p-skills__CanvasWrap
                div.p-skills__chartCanvas
                  OtherChart
              div.p-skills__chartText
                p 1: 実務経験はないが個人で勉強中<br>2: 実務経験はあるが習熟が必要<br>3: 実務レベルで自由に扱える
            div.p-skills__content
              div.p-skills__contentBlock
                h4.p-skills__title 実務使用経験
                table
                  tbody
                    tr
                      th デザインツール
                      td Photoshop / Illustrator
                    tr
                      th Git開発プラットフォーム
                      td Bitbucket / GitHub
                    tr
                      th プロトタイプツール
                      td Axure / Adobe XD
                    tr
                      th タスク管理ツール
                      td Wrike
                    tr
                      th コミュニケーションツール
                      td Slack / Chatwork / Skype

  //- scrollTop
  a(href="#" class="c-linkScrolltTop" @click="scrollTop" :class="{ 'show-scroll' : scrollTopStatus }")
    i.c-icoArrowUp

  //- footer
  footer.l-footer
    p.l-footer__copy &copy;2023 Takuma Onishi
</template>

<script>
import { onMounted, ref } from 'vue';
import MvParticle from './components/MvParticle.vue';
import FrontChart from './components/FrontChart.vue';
import BackChart from './components/BackChart.vue';
import OtherChart from './components/OtherChart.vue';

function scroll_control(event) {
  event.preventDefault();
}

export default {
  name: 'Profile',
  setup() {
    //- showHeader
    const headerStatus = ref(false)
    const beforePos = ref(0)
    function showHeader() {
      if(window.scrollY <= (window.outerHeight * .5)
      || 0 > window.scrollY - beforePos.value) {
        headerStatus.value = false
      } else {
        headerStatus.value = true
      }
      beforePos.value = window.scrollY
    }

    //- scrollTop
    const scrollTopStatus = ref(false)
    function showScrollTop() {
      if(window.scrollY >= (window.outerHeight * .5)) {
        scrollTopStatus.value = true
      } else {
        scrollTopStatus.value = false
      }
    }
    function scrollTop() {
      if(window.scrollY >= 560) {
          window.scrollTo({
            top: 0,
          behavior:'smooth'
        })
      }
    }

    onMounted(() => {
      window.addEventListener("scroll", showHeader, { passive: true })
      window.addEventListener("scroll", showScrollTop, { passive: true })
    })

    return {
      scrollTop,
      headerStatus,
      scrollTopStatus,
      beforePos,
      showHeader,
      showScrollTop,
    }
  },
  data() {
    return {
      navStatus: false
    }
  },
  components: {
    MvParticle,
    FrontChart,
    BackChart,
    OtherChart
  },
  methods: {
    toggleNav() {
      if(window.innerWidth <= 768) {
        this.navStatus = !this.navStatus;
        if (this.navStatus === true) {
          document.addEventListener("mousewheel", scroll_control, {
            passive: false,
          });
          document.addEventListener("touchmove", scroll_control, {
            passive: false,
          });
        } else {
          document.removeEventListener("mousewheel", scroll_control, {
            passive: false,
          });
          document.removeEventListener("touchmove", scroll_control, {
            passive: false,
          });
        }
      }
    }
  }
}
</script>
