<template>
  <div>
    <Card v-bind:title="'Consent'" v-show="!form.agree">
      <template v-slot:body>
          <blockquote class="pl-10 pr-10">
            By cliking the button below, I hereby give my consent to Isuzu Philippines Corporation (IPC), its authorized
            representatives, dealerships and agents to the collection, transmission, distribution, retention and destruction 
            of my personal information in full compliance with the Data Privacy Act of 2012 of the Republic of the Philippines.
            Read full data privacy policy at <a href="https://www.isuzuphil.com/about/privacy-policy">https://www.isuzuphil.com/about/privacy-policy</a>
          </blockquote>
         <div class="text-center">
            <b-button variant="success" @click="form.agree = true">Agree</b-button>
        </div>
      </template>
    </Card> 
    
    <div class="card card-custom" v-show="form.agree">
      <div class="card-body p-0">
        <!--begin: Wizard-->
        <div
          class="wizard wizard-3"
          id="kt_wizard_v3"
          data-wizard-state="step-first"
          data-wizard-clickable="true"
        >
          <!--begin: Wizard Nav -->
          <div class="wizard-nav border-bottom mb-1 mb-lg-5">
            <div class="wizard-steps px-8 py-8 px-lg-15 py-lg-3">
              <div
                class="wizard-step"
                data-wizard-type="step"
                data-wizard-state="current">
                <div class="wizard-label">
                  <h3 class="wizard-title"><span>1</span> Dealer</h3>
                  <div class="wizard-bar"></div>
                </div>
              </div>
              <div class="wizard-step" data-wizard-type="step">
                <div class="wizard-label">
                  <h3 class="wizard-title"><span>2</span> Date and Time</h3>
                  <div class="wizard-bar"></div>
                </div>
              </div>
              <div class="wizard-step" data-wizard-type="step">
                <div class="wizard-label">
                  <h3 class="wizard-title"><span>3</span> Vehicle Information</h3>
                  <div class="wizard-bar"></div>
                </div>
              </div>
              <div class="wizard-step" data-wizard-type="step">
                <div class="wizard-label">
                  <h3 class="wizard-title"><span>4</span> Details of Request</h3>
                  <div class="wizard-bar"></div>
                </div>
              </div>
              <div class="wizard-step" data-wizard-type="step">
                <div class="wizard-label">
                  <h3 class="wizard-title"><span>5</span> Review and Submit</h3>
                  <div class="wizard-bar"></div>
                </div>
              </div>
            </div>
          </div>
          <!--end: Wizard Nav -->

          <!--begin: Wizard Body-->
          <div class="row justify-content-center py-12 px-8 py-lg-15 px-lg-10">
            <div class="col-xl-12 col-xxl-7">
              <!--begin: Wizard Form-->
              <form class="form" id="kt_form">
                <!--begin: Wizard Step 1-->
                <div
                  class="pb-5"
                  data-wizard-type="step-content"
                    data-wizard-state="current"
                >
                  <h4 class="mb-10 font-weight-bold text-dark">
                    Choose your preferred dealership
                  </h4>
                   
                  <div class="form-group">
                    <label>Dealer</label>
                    <v-select2 class="custom-select2" v-model="form.dealer" :options="dealerOptions" label="accountName"></v-select2>
                  </div>
                  <div class="form-group">
                    <label>Site location</label>
                    <v-select2 class="custom-select2" v-model="form.location" :options="siteLocations" label="location" size="lg"></v-select2>
                  </div>
               
                </div>
                <!--end: Wizard Step 1-->

                <!--begin: Wizard Step 2-->
                <div class="pb-5" data-wizard-type="step-content">
                  <h4 class="mb-10 font-weight-bold text-dark">
                    Select your date and time
                  </h4>
                   <VueCtkDateTimePicker 
                            v-model="form.datetime" 
                            :inline="true"
                            :no-keyboard="true"
                            :disabledDates="disabledDates"
                    />
                </div>
                <!--end: Wizard Step 2-->

                <!--begin: Wizard Step 3-->
                <div class="pb-5" data-wizard-type="step-content">
                  <h4 class="mb-10 font-weight-bold text-dark">
                    Indicate your vehicles for servicing
                  </h4>
                  <div>
                   
                    <b-card v-for="(row,index) in form.vehicles" :key="index" class="mb-5">
                      <b-row>
                        <b-col sm="6">
                          <h5 class="mb-5">Vehicle information</h5>
                          <b-row class="my-1">
                            <b-col sm="4">
                              <label for="input-small">CS Number:</label>
                            </b-col>
                            <b-col sm="8">
                                <b-input-group>
                                  <b-form-input size="sm" v-model="row.csNo"></b-form-input>
                                  <b-input-group-append>
                                    <b-button variant="outline-primary" type="button" size="sm" @click="searchCsNo(index)"><i class="flaticon2-search icon-sm"></i></b-button>
                                  
                                  </b-input-group-append>
                                </b-input-group>
                            </b-col>
                          </b-row>
                          <b-row class="my-1">
                            <b-col sm="4">
                              <label for="input-small">Unit Model:</label>
                            </b-col>
                            <b-col sm="8">
                              <b-form-input id="input-small" v-model="row.unitModel" size="sm" ></b-form-input>
                            </b-col>
                          </b-row>
                          <b-row class="my-1">
                            <b-col sm="4">
                              <label for="input-small">Engine Number:</label>
                            </b-col>
                            <b-col sm="8">
                              <b-form-input id="input-small" :value="row.engineNo" size="sm"></b-form-input>
                            </b-col>
                          </b-row>
                          <b-row class="my-1">
                            <b-col sm="4">
                              <label for="input-small">VIN:</label>
                            </b-col>
                            <b-col sm="8">
                              <b-form-input id="input-small" :value="row.vin" size="sm"></b-form-input>
                            </b-col>
                          </b-row>
                          <b-row class="my-1">
                            <b-col sm="4">
                              <label for="input-small">Plate Number:</label>
                            </b-col>
                            <b-col sm="8">
                              <b-form-input id="input-small" size="sm" v-model="row.plateNo" placeholder="Enter the plate number..."></b-form-input>
                            </b-col>
                          </b-row>
                          <b-row class="my-1">
                            <b-col sm="4">
                              <label for="input-small">Purchase Order No:</label>
                            </b-col>
                            <b-col sm="8">
                              <b-form-input id="input-small" size="sm" v-model="row.poNo" placeholder="Enter the purchase order no..."></b-form-input>
                            </b-col>
                          </b-row>
                          <b-row class="my-1">
                            <b-col sm="4">
                              <label for="input-small">Purchase order:</label>
                            </b-col>
                            <b-col sm="8">
                               <b-form-file id="file-small" size="sm" ></b-form-file>
                            </b-col>
                          </b-row>
                          <b-row class="my-1">
                            <b-col sm="4">
                              <label for="input-small">Actual Mileage:</label>
                            </b-col>
                            <b-col sm="8">
                              <b-form-input id="input-small" size="sm" v-model="row.actualMileage" placeholder="Enter the actual mileage..."></b-form-input>
                            </b-col>
                          </b-row>
                        </b-col>
                        <b-col sm="6">
                            <h5>Job order</h5>
                            <table class="table">
                              
                              <thead>
                              <tr>
                                <th>Type</th>
                                <th>Description</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(jo, joIndex) in row.jobOrders" :key="joIndex">
                                <td>
                                  <b-form-select :options="joTypes" size="sm" v-model="jo.type"></b-form-select>
                                </td>
                                <td>
                                  <b-form-input size="sm" placeholder="Kindly tell us what to do..." v-model="jo.description"/>
                                </td>
                                <td><b-link @click.prevent="removeJo(index, joIndex)"><i class="flaticon2-delete icon-sm text-danger"></i></b-link></td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colspan="2" align="right">
                                  <a href="#" @click.prevent="addJo(index)" class="card-link text-right">Add job order</a>
                                </td>
                              </tr>
                            </tfoot>
                            </table>
                            
                        </b-col>
                      </b-row>
                     
                      <div class="mt-5 text-right">
                        <b-link @click.prevent="removeVehicle(index)">Remove this item</b-link>
                      </div>
                    </b-card>

                    <div class="mt-5">
                      <b-link @click.prevent="addVehicle">Add another vehicle</b-link>
                    </div>
                  </div>
                  
                 
                </div>
                <!--end: Wizard Step 3-->

                <!--begin: Wizard Step 5-->
                <div class="pb-5" data-wizard-type="step-content">
                  <h4 class="mb-10 font-weight-bold text-dark">
                    Details of Request
                  </h4>
                  <b-row class="my-1">
                    <b-col sm="4">
                      <label for="input-small">Requestor</label>
                    </b-col>
                    <b-col sm="8">
                      <b-form-input  disabled="disabled" size="lg" value="John Doe" ></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row class="my-1">
                    <b-col sm="4">
                      <label for="input-small">Site Location</label>
                    </b-col>
                    <b-col sm="8">
                      <b-form-input  disabled="disabled" size="lg" value="Laguna" ></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row class="my-1">
                    <b-col sm="4">
                      <label for="input-small">Contact Person</label>
                    </b-col>
                    <b-col sm="8">
                      <b-form-input v-model="form.contactPerson" size="lg" placeholder="Complete name"></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row class="my-1">
                    <b-col sm="4">
                      <label for="input-small">Contact Number</label>
                    </b-col>
                    <b-col sm="8">
                      <b-form-input v-model="form.contactNumber" size="lg" placeholder="Mobile number"></b-form-input>
                    </b-col>
                  </b-row>


                </div>
                <!--end: Wizard Step 5-->

                <!--begin: Wizard Step 5-->
                <div class="pb-5" data-wizard-type="step-content">
                  <h4 class="mb-10 font-weight-bold text-dark">
                    Review your Details and Submit
                  </h4>
                  <div class="border-bottom mb-5 pb-5">
                    <div class="font-weight-bold mb-3">
                      Dealer
                    </div>
                    <div class="line-height-md">
                      {{ form.dealer.accountName }}
                      <br />
                      {{ form.location.location }}<br />
                    </div>
                  </div>
                  <div class="border-bottom mb-5 pb-5">
                    <div class="font-weight-bold mb-3">
                      Date and Time
                    </div>
                    <div class="line-height-md">
                      {{ form.datetime | formatDate }}
                    </div>
                  </div>
                  <div class="border-bottom mb-5 pb-5">
                    <div class="font-weight-bold mb-3">
                      Vehicle Information
                    </div>
                    <div class="line-height-md">
                     <b-table :items="form.vehicles" :fields="fields" responsive="sm">
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
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="(job, index) in form.vehicles[row.index].jobOrders" :key="index">
                                  <td>{{ job.type }}</td>
                                  <td>{{ job.description }}</td>
                                </tr>
                              </tbody>
                            </table>
                            <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
                          </b-card>
                        </template>
                      </b-table>
                    </div>
                  </div>
                  <div class="mb-5">
                    <div class="font-weight-bold mb-3">
                      Details of Request
                    </div>
                    <div class="line-height-md">
                      John Doe
                      <br />
                      Laguna
                      <br />
                      {{ form.contactPerson }}
                      <br />
                      {{ form.contactNumber }}
                      <br />
                    </div>
                  </div>
                </div>
                <!--end: Wizard Step 5-->

                <!--begin: Wizard Actions -->
                <div class="d-flex justify-content-between border-top pt-10">
                  <div class="mr-2">
                    <button
                      class="btn btn-light-primary font-weight-bold text-uppercase px-9 py-4"
                      data-wizard-type="action-prev"
                    >
                      Previous
                    </button>
                  </div>
                  <div>
                    <button
                      v-on:click="submit"
                      class="btn btn-success font-weight-bold text-uppercase px-9 py-4"
                      data-wizard-type="action-submit"
                    >
                      Submit
                    </button>
                    <button
                      class="btn btn-primary font-weight-bold text-uppercase px-9 py-4"
                      data-wizard-type="action-next"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
                <!--end: Wizard Actions -->
              </form>
              <!--end: Wizard Form-->
            </div>
          </div>
          <!--end: Wizard Body-->
        </div>
        <!--end: Wizard-->
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-3.scss";
</style>
<style >
  .custom-select2 .vs__search::placeholder,
  .custom-select2 .vs__dropdown-toggle,
  .custom-select2 .vs__dropdown-menu {
    text-transform: lowercase;
    font-variant: small-caps;
    font-size:1.5em;
  }

  .custom-select2 .vs__clear,
  .custom-select2 .vs__open-indicator {
    fill: #394066;
  }

</style>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import KTUtil from "@/assets/js/components/util";
import KTWizard from "@/assets/js/components/wizard";
import Swal from "sweetalert2";
import Card from '@/view/content/Card';
export default {
  name: "Book",
  props: ['appointmentId'],
  components: {
      Card,
  },
  data() {
    return {
        csNo:  '',
        form: {
          agree : this.appointmentId != null ? true : false,
          dealer : '',
          location : '',
          datetime : '',
          contactPerson : '',
          contactNumber : '',
          vehicles : [{
            csNo : '',
            plateNo :'',
            poNo : '',
            poFile : '',
            actualMileage : '',
            unitModel : '',
            engineNo : '',
            vin : '',
            showDetails:false,
            jobOrders : [
              {
                id : '',
                type : '',
                description : ''
              }
            ],
          }]
        },
        disabledDates: [ "2020-08-05", "2020-08-07" ], 
        enabledDates: [ "2021-02-21", "2021-02-22", "2021-02-23" ] ,
        joTypes: [
         { value: 1, text: 'PMS' },
         { value: 2, text: 'Repair' },
         { value: 3, text: 'Other' },
       ],
       dealerOptions : [
         {
           id : 1,
           accountName : 'Isuzu Sta. Rosa'
         },
         {
           id : 2,
           accountName : 'Isuzu Alabang'
         },
         {
           id : 3,
           accountName : 'Isuzu Pasig'
         },
       ],
      siteLocations : [
        {
          id : 1,
          location : 'Dealer'
        },
        {
          id : 2,
          location : 'On-site'
        }
      ],
      fields: ['csNo', 'unitModel', 'engineNo', 'vin', 'plateNo', 'poNo', 'poFile', 'actualMileage', 'job_order'],  
    }
  },
  mounted() {
  
    console.log(this.appointmentId);
    // Initialize form wizard
    const wizard = new KTWizard("kt_wizard_v3", {
      startStep: 1, // initial active step number
     // clickableSteps: true // allow step clicking
    });

    // Validation before going to next page
    wizard.on("beforeNext", function(/*wizardObj*/) {
      // validate the form and use below function to stop the wizard's step
      // wizardObj.stop();
    });

    // Change event
    wizard.on("change", function(/*wizardObj*/) {
      setTimeout(() => {
        KTUtil.scrollTop();
      }, 500);
    });
  },
  created() {
    //this.form.vehicles.push(this.defaultVehicle);
  },
  methods: {
    
    submit: function(e) {
      e.preventDefault();
      Swal.fire({
        title: "",
        text: "The application has been successfully submitted!",
        icon: "success",
        confirmButtonClass: "btn btn-secondary"
      });
    },
    addVehicle(){
      this.form.vehicles.push({
            csNo : '',
            plateNo :'',
            poNo : '',
            poFile : '',
            actualMileage : '',
            unitModel : '',
            engineNo : '',
            vin : '',
            jobOrders : [
              {
                id : '',
                type : '',
                description : ''
              }
            ],
          });
    },
    removeVehicle(index){
      this.form.vehicles.splice(index,1);
    },
    removeJo(vehicleIndex, joIndex){
      this.form.vehicles[vehicleIndex].jobOrders.splice(joIndex,1);
    },
    addJo(vehicleIndex){
      this.form.vehicles[vehicleIndex].jobOrders.push({
        id : 0,
        type : '',
        description : ''
      });
    },
    searchCsNo(index){
    // perform axios call
      this.form.vehicles[index].unitModel = "Mu-X 4X4 LS-A AT";
      this.form.vehicles[index].engineNo = "12345";
      this.form.vehicles[index].vin = "12345";
    }
  }
};
</script>
