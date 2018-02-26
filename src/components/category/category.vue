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
        <div class="category-content">
            <div class="cateitem" v-for="(group,key,index) in data.catalogBranch" :index="index" :key="key">
                <div class="cate-titel">{{group.name}}</div>
                <!-- <div class="item-box">
                    <div class="cate-item">
                        <img :src="" />
                    </div>
                </div> -->
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'

const ERR_OK = 0
export default {
    data () {
        return {
            data: []
        }
    },
    created () {
        this.$http.get('/api/category').then((response) => {
            response = response.body
            if (response.errno === ERR_OK) {
                this.data = response.data
                var catalogBranch = JSON.parse(this.data.catalogBranch)
                this.data.catalogBranch = catalogBranch.data
            }
        })
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
    .category-content .cate-titel {
        padding-left: 14px;
        height: 26px;
        line-height: 26px;
        border-left: 2px solid #d9dde1;
        font-size: 12px;
        color: rgb(147, 153, 159);
        background-color: #f3f5f7;
    }
</style>

