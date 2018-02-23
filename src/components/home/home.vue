<template>
    <div>
        <div class="banner">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="@/components/home/1.jpg"/></div>
                    <div class="swiper-slide"><img src="@/components/home/2.jpg"/></div>
                    <div class="swiper-slide"><img src="@/components/home/3.jpg"/></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from '../../../static/js/swiper-3.4.2.min.js'
export default {
    mounted () {
        this.$nextTick(() => {
            let myswiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                width: window.innerWidth,
                loop: true,
                updateTranslate: true,
                autoplayDisableOnInteraction: false, // 用户操作swiper后，是否禁止autoplay，默认是true
                observer: true,
                observeParents: true
            })
        })
    }
}
</script>
<style>
    @import '../../../static/css/swiper-3.4.2.min.css';
    .swiper-slide {
        width: 100%;
    }
    .swiper-slide img {
        width: 100%;
    }
</style>
