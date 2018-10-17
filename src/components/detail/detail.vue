<template>
    <div class="bgF7" style="margin-bottom:1rem;">
        <div class="container clearfix bgFFF">
            <div class="detail-img clearfix">
                <!-- 返回的图标 -->
                <a href=""></a>
                <div class="main-img">
                    <div class="swiper-container swiper-container-horizontal">
                        <ul class="swiper-wrapper">
                            <li class="swiper-slide">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: []
        }
    },
    watch: {
        $route (to, from) {
            this.product_id = to.params.id
        }
    },
    computed: {
        product_id: {
            get () {
                return this.$route.params.id
            },
            set (newValue) {
                this.$route.params.id = newValue
            }
        }
    },
    created () {
        console.log(this.product_id + 'test');
    }
}
</script>
<style>
    .bgF7 {
        background: #F7F7F7;
    }
    .bgFFF {
        background: #FFFFFF;
    }
    mb10 {
        margin-bottom: 10px;
    }
</style>
