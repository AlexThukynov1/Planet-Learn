<template>
  <div class="pl-border-block">
    <div class="pl-border-block__content-wrapper">
      <div :class="{'margin-bottom' : !isTimerGone}">
        <p class="pl-border-block__best-price">
          3-day trial for <span>$0.99</span>
        </p>
        <p class="pl-border-block__after-price">Then ${{isTimerGone? '9.99' : '39.99'}}</p>
        <strike v-if="isTimerGone" class="pl-border-block__across-price">$39.99/week</strike>
      </div>
      <div v-if="isTimerGone" class="timer-block">
        <div class="timer-block__bar"></div>
        <pl-timer  @timerOFF="timerDone" :timerValue="180"></pl-timer>
      </div>
    </div>
    <ul class="benefits">
      <pl-list-item :lists="lists"></pl-list-item>
    </ul>
    <div class="secure-payment">
      <img
        class="secure-payment__lock-image"
        :src="lockImage"
        alt="Lock image"
      />
      <p class="secure-payment__text">Safe & secure payment</p>
    </div>
    <p class="description">
      $0.99 charged today. If you don't cancel at least 24 hours before the end
      of the 3-day trial period, you will automatically be charged the full
      price of $19.99/Month . You can cancel your subscription at any time. By
      continuing, you indicate that you've read and agree to our Terms &
      Conditions, Privacy Policy , Money Back , and Subscription Terms .
    </p>
  </div>
</template>

<script>
import lockImage from "../assets/media/images/lock-min.png";
import plTimer from "./pl-timer.vue";
import plListItem from "./pl-list-item.vue";

export default {
  name: "pl-border-block",
  components: {
    plListItem,
    plTimer,
  },
  data() {
    return {
      lockImage,
      lists: [
        {
          id: 0,
          listItemText:
            "<span>Exclusive access to <span style='color:#FF8D24;font-weight:600;'>350+</span> learning programs</span>",
        },
        {
          id: 1,
          listItemText: "<span>Personalized course plan</span>",
        },
        {
          id: 2,
          listItemText: "<span>Comfy learning schedule made by you</span>",
        },
        {
          id: 3,
          listItemText:
            "<span><span style='color:#FF8D24;font-weight:600;'>24/7</span> tutor support in a secure chat</span>",
        },
        {
          id: 4,
          listItemText: "<span>Lifetime access to materials</span>",
        },
      ],
      isTimerGone: true
    };
  },

  computed: {

  },
  methods: {
    timerDone(value) {
      return this.isTimerGone = value
    }
  }
    
};
</script>

<style lang="scss">
.pl-border-block {
  z-index: 2;
}
</style>