<template>
    <div>
        <Card :title="'Title'">
            <template v-slot:toolbar>
            </template>

            <template v-slot:body>
            </template>

            <template v-slot:foot>
            </template>
        </Card>
    </div>
</template>

<script>
import Card from '@/view/content/Card';
export default {
    name: "blank",
    components: {
        Card
    },
    data() {
        return {

        }
    },
    mounted() {},
    updated() {},
    created() {},
    methods: {},
    computed: {},
    watch: {}
};
</script>
