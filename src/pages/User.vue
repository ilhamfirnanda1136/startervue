<template>
  <div class="c">
      <h1>User</h1>
    <CRow>
      <CCol sm="12">
          <div class="float-right mb-2">  
            <CButton
                @click="warningModal = true"
                color="primary"
                >
                Open modal
            </CButton>
          </div>
        <CInput
          label="Name"
          placeholder="Enter your name"
        />
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="12">
        <CInput
          label="Credit Card Number"
          placeholder="0000 0000 0000 0000"
        />
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="4">
        <CSelect
          label="Month"
          :options="[1,2,3,4,5,6,7,8,9,10,11,12]"
        />
      </CCol>
      <CCol sm="4">
        <CSelect
          label="Year"
          :options="[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]"
        />
      </CCol>
      <CCol sm="4">
        <CInput
          label="CVV/CVC"
          placeholder="123"
        />
      </CCol>
    </CRow>

    <CModal
      title="Modal title"
      color="warning" 
      borderColor="warning"
      :backdrop="true"
      :show.sync="warningModal"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
     <CFooter>erer</CFooter>
    </CModal>


  </div>
</template>

<script>
export default {
    name:'User',
    data () {
    return {
      warningModal: false
    }
  }
}
</script>

<style>
    .c {
        padding: 0.5rem 3rem;
    }
</style>