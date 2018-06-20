<template>
    <div>
        detail
        {{product_id}}
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
