<template>
    <div>
        <Card :title="'Appointment'">
            <template v-slot:toolbar>
                <b-button variant="primary" v-b-modal.confirm-modal v-if="acceptFlag">Accept</b-button>
            </template>

            <template v-slot:body>
                <b-row>
                    <b-col md="6">
                        <b-row>
                            <b-col md="4"><span class="font-weight-bolder">Request No:</span></b-col>
                            <b-col md="8">0001</b-col>
                        </b-row>
                        <b-row>
                            <b-col md="4"><span class="font-weight-bolder">Dealer:</span></b-col>
                            <b-col md="8">Isuzu Pasig</b-col>
                        </b-row>
                        <b-row>
                            <b-col md="4"><span class="font-weight-bolder">Location:</span></b-col>
                            <b-col md="8">Dealer</b-col>
                        </b-row>
                        <b-row>
                            <b-col md="4"><span class="font-weight-bolder">Date:</span></b-col>
                            <b-col md="8">August 10, 2020</b-col>
                        </b-row>
                        <b-row>
                            <b-col md="4"><span class="font-weight-bolder">Time:</span></b-col>
                            <b-col md="8">9:30 am</b-col>
                        </b-row>
                        <b-row>
                            <b-col md="4"><span class="font-weight-bolder">Date Requested:</span></b-col>
                            <b-col md="8">August 9, 2020 10:30 am</b-col>
                        </b-row>
                      
                    </b-col>
                    <b-col md="6">
                        <b-row>
                            <b-col md="4"><span class="font-weight-bolder">Contact Person:</span></b-col>
                            <b-col md="8">John Doe</b-col>
                        </b-row>
                        <b-row>
                            <b-col md="4"><span class="font-weight-bolder">Contact Number:</span></b-col>
                            <b-col md="8">09466055244</b-col>
                        </b-row>
                        <b-row>
                            <b-col md="4"><span class="font-weight-bolder">Requested by</span></b-col>
                            <b-col md="8">John Doe</b-col>
                        </b-row>
                        <b-row>
                            <b-col md="4"><span class="font-weight-bolder">Site Location:</span></b-col>
                            <b-col md="8">Tagum</b-col>
                        </b-row>
                       
                         <b-row>
                            <b-col md="4"><span class="font-weight-bolder">Status:</span></b-col>
                            <b-col md="8"><b-badge class="mr-1" variant="warning">Pending</b-badge></b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </template>

            <template v-slot:foot>
            </template>
        </Card>
        <Card :title="'Vehicle'">
            <template v-slot:toolbar>
            </template>

            <template v-slot:body>
                <b-table :items="vehicles" :fields="fields" responsive="sm">
                    <template v-slot:cell(job_order)="row">
                        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                        {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
                        </b-button>
                    </template>
                    <template v-slot:row-details="row">
                        <b-card>
                        <table class="table">
                            <thead>
                            <tr>
                                <th>Type</th>
                                <th>Description</th>
                                <th>Repair Date</th>
                                <th>Completion Date</th>
                                <th>Status</th>
                                <th>Remarks</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(job, index) in vehicles[row.index].jobOrders" :key="index">
                                <td>{{ job.type }}</td>
                                <td>{{ job.description }}</td>
                                <td>{{ job.repair_date }}</td>
                                <td>{{ job.completion_date }}</td>
                                <td>{{ job.status }}</td>
                                <td>{{ job.remarks }}</td>
                            </tr>
                            </tbody>
                        </table>
                        <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
                        </b-card>
                    </template>
                    </b-table>
            </template>

            <template v-slot:foot>
            </template>
        </Card>

        <b-modal id="confirm-modal" title="Confirm Appointment" @ok="makeToast('success','You have successfully accepted the request.')">
         
            <b-form-group
                id="input-group-1"
                label="Remarks"
                label-for="input-1"
            >
                <b-form-textarea
                    id="textarea-rows"
                    placeholder="Remarks..."
                    rows="5"
                ></b-form-textarea>
            </b-form-group>
            <b-form-group
                id="input-group-1"
                label="Suggested date and time"
                label-for="input-1"
            >
                <VueCtkDateTimePicker v-model="datetime"></VueCtkDateTimePicker>
            </b-form-group>
            
        </b-modal>
    </div>
</template>

<script>
import Card from '@/view/content/Card';
export default {
    name: "appointment",
    props: ['appointmentId', 'action'],
    components: {
        Card
    },
    data() {
        return {
            acceptFlag : this.action == 'approve' ? true : false,
            vehicles : [{
                csNo : 'CS1234',
                plateNo :'',
                poNo : 'PO101',
                poFile : '',
                actualMileage : '10,000',
                unitModel : 'FRR266',
                engineNo : '1234',
                vin : '12345',
                showDetails:false,
                jobOrders : [
                    {
                        id : '1',
                        type : 'PMS',
                        description : '15,000 kms',
                        remarks : '',
                        repair_date : 'August 10, 2020',
                        completion_date : 'August 10, 2020',
                        status : 'Completed'
                    },
                    {
                        id : '2',
                        type : 'Repair',
                        description : 'Injector replacement',
                        repair_date : 'August 10, 2020',
                        remarks : '',
                        completion_date : 'August 10, 2020',
                        status : 'Completed'
                    }
                ],
            }],
            datetime: '',
            fields: ['csNo', 'unitModel', 'engineNo', 'vin', 'plateNo', 'poNo', 'poFile', 'actualMileage', 'job_order'],  
        }
    },
    mounted() {
        console.log(this.action);
    },
    updated() {},
    created() {},
    methods: {
        makeToast(variant = null, content = null) {
            this.$bvToast.toast(content, {
                title: 'System message',
                variant: variant,
                solid: true
            })
        }
    },
    computed: {},
    watch: {}
};
</script>
