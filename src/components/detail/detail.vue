<template>
    <div class="detail clearfix bgF7">
        <div class="detail-img clearfix mb10">
            <!-- 返回的图标 -->
            <a href=""></a>
            <div class="main-img">
                <div class="swiper-container swiper-container-horizontal">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide">
                            <img src="@/components/detail/1.jpeg"/>
                        </li>
                        <li class="swiper-slide">
                            <img src="@/components/detail/2.jpeg"/>
                        </li>
                    </ul>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <div class="main-desc">
                <p class="price"><span>¥</span>298</p>
                <p class="title"><span>退货免运费</span>商品的信息描述冬季工装加厚羽绒服男士2019上新款</p>
                <p class="tips">
                    <span>包邮</span>
                    <span>退货免运费</span>
                    <span>988人已购买</span>
                </p>
            </div>
        </div>
        <div class="evaluate bgFFF mb10">
            <div class="e-title clearfix">
                <span class="t-left">买家评价 81</span>
                <span class="t-right">好评95.1%<i>></i></span>
            </div>
            <div class="list">
                <div class="name">
                    <img src="./132.jpeg"/>
                    <span class="buyerNick">小橙01</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
export default {
    data () {
        return {
            data: []
        }
    },
    // watch: {
    //     $route (to, from) {
    //         this.product_id = this.$route.query.id;
    //     }
    // },
    // computed: {
    //     product_id: {
    //         get () {
    //             return this.$route.query.id
    //         },
    //         set (newValue) {
    //             this.$route.query.id = newValue
    //         }
    //     }
    // },
    created () {
        var that = this;
        console.log(this.$route.query.id + 'test');
    },
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
<style scoped>
@import '../../../static/css/swiper-3.4.2.min.css';
    .detail {
        background: #F7F7F7;
        margin-bottom: 40px;
    }
    .detail-img {background: #fff;}
    .bgF7 {
        background: #F7F7F7;
    }
    .bgFFF {
        background: #FFFFFF;
    }
    .mb10 {
        margin-bottom: 10px;
    }
    .pd10 {
        padding-bottom: 10px;
    }
    .swiper-slide {
        width: 100%;
    }
    .swiper-slide img {
        width: 100%;
    }
    .main-desc {
        padding: 0 10px;
    }
    .price {
        height: 40px;
        line-height: 40px;
        font-size: 26px;
        color: #333;
    }
    .price span {
        font-size: 16px;
    }
    .title {
        line-height: 25px;
        font-size: 16px;
        color: #333;
    }
    .title span {
        background: #feeff1;
        border: 1px solid #ee7286;
        color: #ba0a0a;
        font-size: 12px;
        margin-right: 5px;
    }
    .tips {
        line-height: 30px;
        color: #666;
        font-size: 14px;
    }
    .tips {
        margin-right: 5px;
    }
    .evaluate {
        padding: 10px;
        height: 200px;
    }
    .e-title {
        line-height: 40px;
        font-size: 14px;
        color: #333;
    }
    .t-left {
        float: left;
    }
    .t-right {
        float: right;
    }
    .t-right i {
        margin-left: 5px;
    }
    .name {
        line-height: 40px;
    }
    .name img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        vertical-align: middle;
        border-radius: 50%;
    }
    .name .buyerNick {
        line-height: 40px;
        font-size: 12px;
    }
</style>
