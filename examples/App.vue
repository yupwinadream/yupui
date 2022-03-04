<!--
 * @Author: Qiao YuPei
 * @Date: 2022-03-02 10:44:43
 * @LastEditors: Qiao YuPei
 * @LastEditTime: 2022-03-02 16:48:22
 * @Description: file content
-->
<template>
  <div>
    <Demo />
    <div class="m-card-flex">
      <m-card
        :img-src="'https://img2.sycdn.imooc.com/szimg/5ffd1b25092ab63605400306.png'"
        :summary="'React17+Hook+TS4 最佳实践，仿 Jira 企业级项目'"
      ></m-card>

      <m-card
        :img-src="'https://img3.sycdn.imooc.com/szimg/5fc0639609b509a600000000.png'"
        :summary="'Vue3 从入门到实战 进阶式掌握完整知识体系'"
      >
        <template v-slot:footer>
          <div class="footer">
            <div class="level">中级 · 2128人报名</div>
            <div class="price">￥348.00</div>
          </div>
        </template>
      </m-card>

      <m-card 
      :width="370"
      :img-height="90"
      :img-src="'https://img2.sycdn.imooc.com/szimg/5fc097a30997670007360180.png'">
        一举吃透最耗时的数据库，学会数据库的基本使用、业务库的设计与架构，面试收尾升华所学。
        <template v-slot:footer>
          <div class="footer-spring">
            <div class="level">4步骤 · 4门课 </div>
            <div class="level">5805收藏</div>
          </div>
        </template>
      </m-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      cardList: [
        {
          imgSrc: "",
          summary: ""
        },
        {
          imgSrc: "",
          summary: ""
        },
        {
          imgSrc: "",
          summary: ""
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;

  .price {
    color: #f01414;
  }
}
  .level {
    color: #9199a1;
    margin-bottom: 8px;
  }
.footer-spring{
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
