<!--
 * @Author: Qiao YuPei
 * @Date: 2022-03-08 13:51:54
 * @LastEditors: Qiao YuPei
 * @LastEditTime: 2022-03-08 13:52:23
 * @Description: file content
-->
<template>
    <div class="m-card" :style="width ? { width: width + 'px' } : {}">
        <div class="m-card-img" :style="imgHeight ? { height: imgHeight + 'px' } : {}">
            <img :src="imgSrc" alt="img" />
        </div>
        <div class="m-card-summary" v-if="summary">{{ summary }}</div>
        <div class="m-card-summary" v-else>
            <slot></slot>
        </div>
        <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
    name: "m-card",
    props: {
        width: { //卡片的宽度
            type: Number,
            default: 0
        },
        imgSrc: { //卡片图片的资源地址
            type: String,
            default: "",
            require: true
        },
        imgHeight: {//卡片图片的高度
            type: Number,
            default: 0
        },
        summary: {//卡片的概要
            type: String,
            default: ""
        }

    }
}
</script>
<style lang="sass" scoped>
@import './card.scss';
</style>