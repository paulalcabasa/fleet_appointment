<template>
	<div>
        <Card :title="'Filter'">
            <template v-slot:toolbar>
                <b-button variant="primary">Search</b-button>
            </template>

            <template v-slot:body>
                <b-row class="my-1">
                    <b-col sm="2">
                        <label for="input-small">Request date from:</label>
                    </b-col>
                    <b-col sm="4">
                        <b-form-input id="input-small" type="date" size="sm" ></b-form-input>
                    </b-col>
                    <b-col sm="2">
                        <label for="input-small">Request date to:</label>
                    </b-col>
                    <b-col sm="4">
                        <b-form-input id="input-small" type="date" size="sm" ></b-form-input>
                    </b-col>
                </b-row>

                
                
            </template>

            <template v-slot:foot>
            </template>
        </Card>

		<Card :title="'Requests'">
			<template v-slot:toolbar>
               <b-col lg="12" class="my-1">
                    <b-form-group
                    label=""
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
                    responsive
                    :tbody-tr-class="rowClass"
                >
					<template v-slot:cell(actions)="data">
                        <b-dropdown size="sm" left variant="primary">
                            <template v-slot:button-content>
                                <i class="fas fa-bars fa-1x"></i>
                            </template>
                            <b-dropdown-item href="#" @click.prevent="view(data.item)"><i class="fa fa-search"></i> <span class="ml-2">View</span></b-dropdown-item>
                            <b-dropdown-item href="#" @click.prevent="edit(data.item)"><i class="fa fa-edit "></i> <span class="ml-2">Edit</span></b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item href="#"><i class="fa fa-trash"></i> <span class="ml-2">Cancel</span></b-dropdown-item>
                        </b-dropdown>
					</template>

                    <template v-slot:head()="scope">
                        <div class="text-nowrap">
                        {{ scope.label }}
                        </div>
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
					key : 'status',
					label : 'Status' 
				},
				{
					key : 'dealer_remarks',
					label : 'Dealer Remarks' 
				},
                {
					key : 'id',
					label : 'Request No',
                    sortable: true,
                },
				{
					key : 'po_no',
					label : 'PO Number' ,
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
					key : 'contact_person',
					label : 'Contact Person' 
                },
                {
					key : 'contact_number',
					label : 'Contact Number' 
				},
			],
			appointments: [
				{
					id : 1,
					po_no : 'PO101',
					location : 'Site',
					date : 'August 10, 2020',
					time : '9:30 am',
					status : 'Confirmed',
					dealer_remarks : '',
					dealer : 'Isuzu Pasig',
                    contact_number : '0946060552323',
                    contact_person : 'John Doe'
				},
                {
					id : 2,
					po_no : 'PO102',
					location : 'Site',
					date : 'August 10, 2020',
					time : '9:30 am',
					status : 'Ongoing',
                    dealer_remarks : 'Reschedule to August 11 same time.',
                    dealer : 'Isuzu Pasig',
                    contact_number : '0946060552323',
                    contact_person : 'John Doe'
                },
                {
					id : 3,
					po_no : 'PO102',
					location : 'Dealer',
					date : 'August 10, 2020',
					time : '9:30 am',
					status : 'Completed',
                    dealer_remarks : '',
                    dealer : 'Isuzu Alabang',
                    contact_number : '0946060552323',
                    contact_person : 'John Doe'
                },
                {
					id : 4,
					po_no : 'PO103',
					location : 'Dealer',
					date : 'August 10, 2020',
					time : '9:30 am',
					status : 'Cancelled',
                    dealer_remarks : 'Will create new request.',
                    dealer : 'Isuzu Pasig',
                    contact_number : '0946060552323',
                    contact_person : 'John Doe'
                },
                {
					id : 5,
					po_no : 'PO102',
					location : 'Dealer',
					date : 'August 10, 2020',
					time : '9:30 am',
					status : 'No appearance',
                    dealer_remarks : 'Vehicle did not arrive.',
                    dealer : 'Isuzu Pasig',
                    contact_number : '0946060552323',
                    contact_person : 'John Doe'
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
                params : { appointmentId : item.id } 
            });
        },
        edit(item){
            this.$router.push({
                name : 'update-booking',
                params : { appointmentId : item.id } 
            });
        },
        rowClass(){
            return 'text-nowrap';
        }

	}  
};
</script>