<template>
    <div>
        <div @click="setState">click test</div>
        <div class="banner">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="@/components/home/1.jpg"/></div>
                    <div class="swiper-slide"><img src="@/components/home/2.jpg"/></div>
                    <div class="swiper-slide"><img src="@/components/home/3.jpg"/></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <div class="content-list">
                <template v-for="(item, key, index) in data.module">
                    <!-- <template v-if="item.type_id == 19 && item.sub_type == 1">
                        <div class="banner" :key="index">
                            <div v-for="(imgs, imgkey, imgindex) in item.value.nhotzone" :key="imgindex">
                                <img :src="imgs.url" :index="imgindex" />
                            </div>
                        </div>
                    </template> -->
                    <template v-if="item.type_id == 1 && item.sub_type == 1">
                        <div class="banner" :key="index">
                            <img :src="item.value.imgurl" />
                        </div>
                    </template>
                    <template v-if="item.type_id == 5 && item.sub_type == 5">
                        <div v-for="(pro, keypro, index) in item.cct_product_list" :key="index">
                            <!-- <router-link :to="'/detail/'+ pro.product_id"> -->
                                <div class="product" :index="index" @click="detailClick(pro)">
                                    <img :src="pro.image_urls_head" />
                                    <div class="product-info">
                                        <div class="product-info-name">
                                            {{pro.ad_name}}
                                        </div>
                                        <div class="product-info-price">
                                            ￥{{pro.ad_coupon_price}}
                                        </div>
                                    </div>
                                </div>
                            <!-- </router-link> -->
                        </div>
                    </template>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from '../../../static/js/swiper-3.4.2.min.js'
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'

const ERR_OK = 0

export default {
    data () {
        return {
            data: [],
            stateFlag: 'test111',
            state2: '30',
            amount: {
                a: 'first',
                b: 'second'
            },
            isLoading: true
        }
    },
    computed: {
        author () {
            return this.$store.state.author
        },
        age () {
            return this.$store.state.age
        },
        // ...mapState([
        //     'stateList'
        // ])
        stateList () {
            return this.$store.state.stateList
        }
    },
    mounted () {
        let deviceWidth = document.documentElement.clientWidth
            if (deviceWidth > 750) deviceWidth = 750
            document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px'
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
        console.log(this.stateList);
    },
    created () {
        var that = this;
        setTimeout(() => {
            this.isLoading = false;
        }, 500)
        this.$server.getShopApi('products', {params: {title: 'test01'}}, function (res) {
            that.data = res.data
        }, function (res) {
            console.log('接口返回失败');
        }, 'GET');
    },
    methods: {
        detailClick: function (item) {
            this.$router.push({name: 'detail', query: {id: item.product_id}});
        },
        // 测试vuex使用
        setAuthor: function () {
            this.$store.commit('newAuthor', this.stateFlag);
            alert(this.author + this.age);
        },
        setAge: function () {
            this.$store.commit('newAge', this.state2);
            alert(this.author + this.age);
        },
        // ...mapMutations(['stateList'])
        setState: function () {
            this.$store.commit('stateList', this.amount)
            console.log(this.stateList);
        }
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
    .content-list {
        width: 100%;
        margin-bottom: 40px;
    }
    .banner img {
        width: 100%;
    }
    .product-info {
        padding: 10px;
    }
    .product-info-name {
        padding: 5px 0;
        font-size: 0.3rem;
        color: #333;
    }
    .product-info-price {
        width: 100%;
        padding: 5px 0;
        font-size: 0.4rem;
        color: crimson;
    }
</style>
