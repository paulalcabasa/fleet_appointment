<template>
	<div>
		<Card :title="'Requests'">

			<template v-slot:toolbar>
               <b-col lg="12" class="my-1">
                    <b-form-group
                    label="Filter"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label-size="sm"
                    label-for="filterInput"
                    class="mb-0"
                    >
                    <b-input-group size="sm">
                        <b-form-input
                        v-model="filter"
                        type="search"
                        id="filterInput"
                        placeholder="Type to Search"
                        ></b-form-input>
                        <b-input-group-append>
                        <b-button :disabled="!filter" @click="filter = ''"><i class="fa fa-eraser"></i></b-button>
                        </b-input-group-append>
                    </b-input-group>
                    </b-form-group>
                </b-col>
            </template> 

			<template v-slot:body>
				<b-table 
                    :fields="appointmentHeaders" 
                    :items="appointments"
                    :current-page="currentPage"
                    :per-page="perPage"
                    :filter="filter"
                    :filterIncludedFields="filterOn"
                    :sort-by.sync="sortBy"
                    :sort-desc.sync="sortDesc"
                    :sort-direction="sortDirection"
                    @filtered="onFiltered"
                >
					<template v-slot:cell(actions)="data">
                       <b-link @click="view(data.item)">View</b-link>
					</template>
				</b-table>
			</template>
			<template v-slot:foot>
			
                <b-row>
                    <b-col sm="4" md="4" class="my-1">
                        <b-form-group
                        label="Per page"
                        label-cols-sm="6"
                        label-cols-md="4"
                        label-cols-lg="3"
                        label-align-sm="right"
                        label-size="sm"
                        label-for="perPageSelect"
                        class="mb-0"
                        >
                        <b-form-select
                            v-model="perPage"
                            id="perPageSelect"  
                            size="sm"
                            :options="pageOptions"
                        ></b-form-select>
                        </b-form-group>
                    </b-col>
                    <b-col sm="4" md="4"></b-col>
                    <b-col sm="4" md="4" class="my-1">
                        <b-pagination
                        v-model="currentPage"
                        :total-rows="totalRows"
                        :per-page="perPage"
                        align="fill"
                        size="sm"
                        class="my-0"
                        ></b-pagination>
                    </b-col>  
                </b-row>
           
			</template>
		</Card>
	</div>
</template>

<script>
import Card from '@/view/content/Card';
export default {
	name: "appointments",
	components: {
		Card
	},
    mounted() {
        this.totalRows = this.appointments.length;
    },
	data() {
		return {
			appointmentHeaders : [
				{
					key : 'actions',
					label : 'Actions' 
                },
                	{
					key : 'id',
					label : 'Request #' ,
                    sortable: true,
                },
				{
					key : 'po_no',
					label : 'PO #' ,
                    sortable: true,
                },
                {
					key : 'dealer',
					label : 'Dealer' 
				},
				{
					key : 'location',
					label : 'Location' 
				},
				{
					key : 'date',
					label : 'Date' 
				},
				{
					key : 'time',
					label : 'Time' 
				},
				{
					key : 'status',
					label : 'Status' 
				},
			],
			appointments: [
				{
					id : 9,
					po_no : 'PO10',
					location : 'Site',
					date : 'August 10, 2020',
					time : '9:30 am',
					status : 'Pending',
					dealer : 'Isuzu Pasig',
				},
                {
					id : 10,
					po_no : 'PO11',
					location : 'Site',
					date : 'August 10, 2020',
					time : '9:30 am',
					status : 'Pending',
                    dealer : 'Isuzu Pasig'
                },
             
			],
			totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [5, 10, 15, 20, 25, 30],
            sortBy: '',
            sortDesc: false,
            sortDirection: 'asc',
            filter: null,
            filterOn: []
		}
	},
	computed: {
        sortOptions() {
            // Create an options list from our fields
            return this.fields
                .filter(f => f.sortable)
                .map(f => {
                return { text: f.label, value: f.key }
            })
        },
       
    },
	methods: {
		onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length
            this.currentPage = 1
        },
        view(item){
            this.$router.push({
                name : 'appointment',
                params : { 
                    appointmentId : item.id,
                    action : 'approve' 
                } 
            });
        },
	}  
};
</script>