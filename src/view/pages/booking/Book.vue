<template>
  <div>
    <Card v-bind:title="'Consent'" v-show="!agree">
      <template v-slot:body>
          <blockquote class="pl-10 pr-10">
            By cliking the button below, I hereby give my consent to Isuzu Philippines Corporation (IPC), its authorized
            representatives, dealerships and agents to the collection, transmission, distribution, retention and destruction 
            of my personal information in full compliance with the Data Privacy Act of 2012 of the Republic of the Philippines.
            Read full data privacy policy at <a href="https://www.isuzuphil.com/about/privacy-policy">https://www.isuzuphil.com/about/privacy-policy</a>
          </blockquote>
         <div class="text-center">
            <b-button variant="success" @click="agree = true">Agree</b-button>
        </div>
      </template>
    </Card> 
    
    <div class="card card-custom" v-show="agree">
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
                    <v-select2 :options="options" size="lg"></v-select2>
                  </div>
                  <div class="form-group">
                    <label>Site location</label>
                    <v-select2 :options="['Dealer', 'On-site']" size="lg"></v-select2>
                  </div>
               
                </div>
                <!--end: Wizard Step 1-->

                <!--begin: Wizard Step 2-->
                <div class="pb-5" data-wizard-type="step-content">
                  <h4 class="mb-10 font-weight-bold text-dark">
                    Select your date and time
                  </h4>
                   <VueCtkDateTimePicker 
                            v-model="yourValue" 
                            :inline="true"
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
                    <b-card v-for="(row,index) in vehicles" :key="index" class="mb-5">
                      <b-row>
                        <b-col sm="6">
                          <h5 class="mb-5">Vehicle information</h5>
                          <b-row class="my-1">
                            <b-col sm="4">
                              <label for="input-small">CS Number:</label>
                            </b-col>
                            <b-col sm="8">
                                <b-input-group>
                                  <b-form-input size="sm"></b-form-input>
                                  <b-input-group-append>
                                    <b-button variant="outline-primary" size="sm"><i class="flaticon2-search icon-sm"></i></b-button>
                                  
                                  </b-input-group-append>
                                </b-input-group>
                            </b-col>
                          </b-row>
                          <b-row class="my-1">
                            <b-col sm="4">
                              <label for="input-small">Unit Model:</label>
                            </b-col>
                            <b-col sm="8">
                              <b-form-input id="input-small" disabled="disabled" size="sm" ></b-form-input>
                            </b-col>
                          </b-row>
                          <b-row class="my-1">
                            <b-col sm="4">
                              <label for="input-small">Engine Number:</label>
                            </b-col>
                            <b-col sm="8">
                              <b-form-input id="input-small" disabled="disabled" size="sm"></b-form-input>
                            </b-col>
                          </b-row>
                          <b-row class="my-1">
                            <b-col sm="4">
                              <label for="input-small">VIN:</label>
                            </b-col>
                            <b-col sm="8">
                              <b-form-input id="input-small" disabled="disabled" size="sm"></b-form-input>
                            </b-col>
                          </b-row>
                          <b-row class="my-1">
                            <b-col sm="4">
                              <label for="input-small">Plate Number:</label>
                            </b-col>
                            <b-col sm="8">
                              <b-form-input id="input-small" size="sm" placeholder="Enter the plate number..."></b-form-input>
                            </b-col>
                          </b-row>
                          <b-row class="my-1">
                            <b-col sm="4">
                              <label for="input-small">Purchase Order No:</label>
                            </b-col>
                            <b-col sm="8">
                              <b-form-input id="input-small" size="sm" placeholder="Enter the purchase order no..."></b-form-input>
                            </b-col>
                          </b-row>
                          <b-row class="my-1">
                            <b-col sm="4">
                              <label for="input-small">Purchase order:</label>
                            </b-col>
                            <b-col sm="8">
                               <b-form-file id="file-small" size="sm"></b-form-file>
                            </b-col>
                          </b-row>
                          <b-row class="my-1">
                            <b-col sm="4">
                              <label for="input-small">Actual Mileage:</label>
                            </b-col>
                            <b-col sm="8">
                              <b-form-input id="input-small" size="sm" placeholder="Enter the actual mileage..."></b-form-input>
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
                              <tr>
                                <td>
                                  <b-form-select :options="joTypes" size="sm"></b-form-select>
                                </td>
                                <td>
                                  <b-form-input size="sm" placeholder="Kindly tell us what to do..." />
                                </td>
                                <td><b-link href="#foo"><i class="flaticon2-delete icon-sm text-danger"></i></b-link></td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colspan="2" align="right">
                                  <a href="#" class="card-link text-right">Add job order</a>
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
                <div class="pb-5" data-wizard-type="step-content" >
                  <h4 class="mb-10 font-weight-bold text-dark">
                    Review your Details and Submit
                  </h4>
                  <div class="border-bottom mb-5 pb-5">
                    <div class="font-weight-bold mb-3">
                      Current Address:
                    </div>
                    <div class="line-height-md">
                      Address Line 1
                      <br />
                      Address Line 2 <br />
                      Melbourne 3000, VIC, Australia
                    </div>
                  </div>
                  <div class="border-bottom mb-5 pb-5">
                    <div class="font-weight-bold mb-3">
                      Delivery Details:
                    </div>
                    <div class="line-height-md">
                      Package: Complete Workstation (Monitor, Computer, Keyboard &
                      Mouse)
                      <br />
                      Weight: 25kg <br />
                      Dimensions: 110cm (w) x 90cm (h) x 150cm (L)
                    </div>
                  </div>
                  <div class="border-bottom mb-5 pb-5">
                    <div class="font-weight-bold mb-3">
                      Delivery Service Type:
                    </div>
                    <div class="line-height-md">
                      Overnight Delivery with Regular Packaging
                      <br />
                      Preferred Morning (8:00AM - 11:00AM) Delivery
                    </div>
                  </div>
                  <div class="mb-5">
                    <div class="font-weight-bold mb-3">
                      Delivery Address:
                    </div>
                    <div class="line-height-md">
                      Address Line 1
                      <br />
                      Address Line 2 <br />
                      Preston 3072, VIC, Australia
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

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import KTUtil from "@/assets/js/components/util";
import KTWizard from "@/assets/js/components/wizard";
import Swal from "sweetalert2";
import Card from '@/view/content/Card';
export default {
  name: "Book",
  components: {
      Card,
  },
  data() {
    return {
        options: [
            'foo',
            'bar',
            'baz'
        ],
        agree : true,
        disabledDates: [ "2020-08-05", "2020-08-07" ], 
        yourValue : "",
        enabledDates: [ "2021-02-21", "2021-02-22", "2021-02-23" ] ,
        joTypes: [
         { value: 1, text: 'PMS' },
         { value: 2, text: 'Repair' },
         { value: 3, text: 'Other' },
       ],
       vehicles : [
         {
           cs_no : '',
         }
       ]
    }
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Wizard", route: "wizard-1" },
      { title: "Wizard-3" }
    ]);

    // Initialize form wizard
    const wizard = new KTWizard("kt_wizard_v3", {
      startStep: 1, // initial active step number
      clickableSteps: true // allow step clicking
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
      this.vehicles.push({
        cs_no : ''
      });
    },
    removeVehicle(index){
      this.vehicles.splice(index,1);
    }
  }
};
</script>
