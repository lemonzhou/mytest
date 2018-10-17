<template>
  <div>
    <div class="category">
        <div class="menu-wrapper" ref="menuWrapper">
            <ul>
                <li v-for="(cate,key,index) in data.catelogyList" class="menu-item" :index="index" :key="key">
                    <span class="text">
                        {{cate.name}}
                    </span>
                </li>
            </ul>
        </div>
        <div class="category-content" ref="categoryWrapper">
            <div class="cateoutter">
                <div class="cate-group cate-list-hook" v-for="(group,key,index) in data.catalogBranch" :key="index">
                    <div class="cate-titel">{{group.name}}</div>
                    <div class="item-box">
                        <div class="cate-item" v-for="(cateitem,key,index) in group.catelogyList" :key="index">
                            <div class="inner" @click="searchResult(cateitem.action)">
                                <img :src="cateitem.icon" />
                                {{cateitem.name}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import axios from 'axios'

const ERR_OK = 0
export default {
    data () {
        return {
            data: [],
            listHeight: []
        }
    },
    methods: {
        initScroll () {
            this.menuScroll = new BScroll(this.$refs.menuWrapper, {
                click: true
            })
            this.menuScroll.on('scroll', (pos) => {
                this.scrollY = Math.abs(Math.round(pos.y))
            })
            this.categoryScroll = new BScroll(this.$refs.categoryWrapper, {
                click: true,
                probeType: 3
            })
            console.log(this.categoryScroll)
            this.categoryScroll.on('scroll', (pos) => {
                this.scrollY = Math.abs(Math.round(pos.y))
            })
        },
        calcHeight () {
            let categoryList = this.$refs.categoryWrapper.getElementsByClassName('cate-list-hook')
            let height = 0
            this.listHeight.push(height)
            for (let i = 0; i < categoryList.length; i++) {
                let item = categoryList[i]
                height += item.clientHeight
                this.listHeight.push(height)
            }
        },
        searchResult (action) {
            if (action) {
                window.location.href = action
            }
        }
    },
    created () {
        var that = this;
        that.$server.getShopApi('category', {}, function (res) {
            that.data = res.data
            var catalogBranch = JSON.parse(that.data.catalogBranch)
            that.data.catalogBranch = catalogBranch.data
            console.log(that.data.catalogBranch)
            document.getElementsByClassName('menu-wrapper')[0].style.height = (document.body.clientHeight || document.documentElement.clientHeight) + 'px'
            document.getElementsByClassName('category-content')[0].style.height = (document.body.clientHeight || document.documentElement.clientHeight) + 'px'
            that.$nextTick(() => {
                that.calcHeight()
                setTimeout(function () {
                    that.initScroll()
                }, 300);
            })
        }, function (res) {
            console.log('接口返回失败');
        }, 'GET')
    }
}
</script>
<style>
    .category {
        position: absolute;
        display: flex;
        width: 100%;
        margin-bottom: 40px;
        overflow: hidden;
    }
    .menu-wrapper {
        flex: 0 0 80px;
        width: 80px;
        background-color: #f3f5f7;
    }
    .menu-item {
        display: table;
        width: 56px;
        height: 54px;
        line-height: 14px;
        padding: 0 12px;
    }
    .menu-item .text {
        font-size: 12px;
        display: table-cell;
        vertical-align: middle;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    }
    .category-content {
        flex: 1;
    }
    .cate-group {
        width: 100%;
    }
    .cate-group .cate-titel {
        padding-left: 14px;
        height: 30px;
        line-height: 30px;
        border-left: 2px solid #d9dde1;
        font-size: 12px;
        color: rgb(147, 153, 159);
        background-color: #f3f5f7;
    }
    .cate-group .cate-item {
        display: inline-block;
        width: 33.3%;
        text-align: center;
    }
    .cate-group .cate-item .inner {
        padding: 5px;
    }
    .cate-group .cate-item img{
        width: 100%;
    }
</style>

