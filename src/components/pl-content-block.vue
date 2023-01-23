<template>
  <div class="pl-content-block">
    <h1 class="pl-content-block__title">Start your learning journey now</h1>
    <p class="pl-content-block__description">
      Get a <b><span>Planet</span>Learn</b> plan to rock<br />self-learning
    </p>
    <button @click="onPopupVisible"  class="pl-content-block__button" :class="{'active-button' : popupVisible}">Get my plan</button>
  </div>
</template>

<script>
export default {
  name: "pl-content-block",
  data() {
    return {
        popupVisible:null
    };
  },
  methods: {
    onPopupVisible() {
      this.$emit("popupVisible", this.popupVisible = true);
    },
  },
};
</script>

<style lang="scss">
</style>