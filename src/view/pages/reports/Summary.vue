<template>
    <div>
        <b-row>
            <b-col sm="6">
                <Card :title="'Summary'">
                    <template v-slot:toolbar>
                        <b-button type="button" variant="primary">Submit</b-button>
                    </template>

                    <template v-slot:body>
                        <b-form>
                            <b-form-group
                                label="Start Date"
                            >
                                <b-form-input
                                    type="date"
                                    required
                                    placeholder="Start Date"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-2" label="End Date" label-for="input-2">
                                <b-form-input
                                type="date"
                                required
                                placeholder="End Date"
                                ></b-form-input>
                            </b-form-group>

                       

                 
                        </b-form>
                    </template>
                </Card>
            </b-col>
        </b-row>
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
