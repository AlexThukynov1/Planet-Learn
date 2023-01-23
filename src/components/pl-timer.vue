<template>
  <div class="timer">{{ prettyTime }}</div>
</template>
<script>
export default {
  name: "pl-timer",
  props: {
    timerValue: {
      type: Number,
    },
  },
  data() {
    return {
      isRunning: false,
      minutes: 0,
      secondes: 0,
      time: this.timerValue,
      timer: null,
    };
  },
  mounted: function () {
    this.$nextTick(function () {
      this.isRunning = true;
      if (!this.timer) {
        this.timer = setInterval(() => {
          if (this.time > 0) {
            this.time--;
          } else {
            clearInterval(this.timer);
            this.reset();
          }
        }, 1000);
      }
    });
  },
  computed: {
    prettyTime() {
      let time = this.time / 60;
      let minutes = parseInt(time);
      let secondes = Math.round((time - minutes) * 60);
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (secondes < 10) {
        secondes = "0" + secondes;
      }
      return minutes + ":" + secondes;
    },
  },
  methods: {
    stop() {
      this.isRunning = false;
      this.timerGone();
      clearInterval(this.timer);
      this.timer = null;
    },
    reset() {
      this.stop();
      this.time = 0;
      this.secondes = 0;
      this.minutes = 0;
    },
    timerGone() {
      this.$emit("timerOFF", this.isRunning);
    },
  },
};
</script>
