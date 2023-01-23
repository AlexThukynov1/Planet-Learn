<template>
  <div v-if="!isClosedForm" class="pl-popup-overlay">
  <form @submit.prevent="onSubmitForm" class="pl-popup">
    <h2 class="pl-popup__title" >Payment method</h2>
    <a class="pl-popup__paypal-btn"><img :src="payPalImg" alt="PayPal logo"/>Buy now</a>
    <a class="pl-popup__g-pay-btn"> <img :src="gPayImg" alt="PayPal logo"/>pay</a>
    <div class="pl-popup__dividers-block dividers-block">
      <div class="dividers-block__divider"></div>
      or
      <div class="dividers-block__divider"></div>
    </div>
    <div class="card-number-wrapper">
      <label for="cardNumber" class="hidden-label">Card number</label>
      <input
        v-model="cardNumber"
        ref='focus'
        id="cardNumber" required="true"
        class="card-number form-group"
        v-cardformat:formatCardNumber
        placeholder="&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;"
      />
      <img :src="typeCard" alt="Payment system icon" />
    </div>
    <div class="pl-popup__card-values card-values">
      <div class="card-values__month-select-wrapper">
        <label for="monthSelect" class="hidden-label">Months select</label>
        <select v-model="months" required="true" for="cardNumber" class="card-values__months" name="" id="monthSelect">
          <option selected disabled="true">Selected</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <div class="card-values__years-select-wrapper">
        <label for="yearsSelect" class="hidden-label">Years select</label>
        <select v-model="years" required="true" class="card-values__years" name="" id="yearsSelect">
          <option selected disabled="true">Selected</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
          <option value="2030">2030</option>
        </select>
      </div>
      <div class="card-values__cvv-wrapper">
        <label class="hidden-label">Card CVC</label>
        <input v-model="cvv" required="true" class="card-values__cvv form-group" v-cardformat:formatCardCVC placeholder="&bull;&bull;&bull;" />
      </div>
    </div>
    <button class="pl-popup__submit-button" :class="{'add-shadow' : !isDisables}" :disabled="isDisables" type="submit">Submit</button>
    <button @click="closeForm" class="pl-popup__close-button">Close</button>
  </form>
</div>
</template>
<script>
import payPalImg from '../assets/media/images/PayPal.png'
import gPayImg from "../assets/media/images/google-pay-min.png"
import typeCard from "../assets/media/images/card-type.png";
export default {
  name: "pl-popup",
  data() {
    return {
      payPalImg,
      gPayImg,
      typeCard,
      cvv: null,
      years:null,
      months:null,
      cardNumber:null,
      isClosedForm: false
    }
  },
  computed: {
    isDisables() {
      if(this.cvv && this.years && this.months && this.cardNumber){
        return false
      } else return true
    }
  },
  mounted () {
    this.$nextTick(() => this.$refs.focus.focus())
  },
  methods: {
      onSubmitForm() {
        this.cvv = null, 
        this.years = null, 
        this.months = null,
        this.cardNumber = null
      },
      closeForm() {
      this.isClosedForm = true
    },
    },
};
</script>