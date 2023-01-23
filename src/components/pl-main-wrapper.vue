<template>
    <main class="pl-main-wrapper">
        <pl-content-block @popupVisible="popupVisible"></pl-content-block>
        <pl-border-block></pl-border-block>
        <pl-popup v-if="isPopupVisible"></pl-popup>
    </main>
</template>

<script>
import plBorderBlock from '@/components/pl-border-block'
import plContentBlock from '@/components/pl-content-block'
import plPopup from './pl-popup.vue'


    export default {
        name: "pl-main-wrapper",
        components: {
            plBorderBlock,
            plContentBlock,
            plPopup
            
        },
        data() {
            return {
                isPopupVisible:false
            }
        },
        methods: {
            popupVisible(value) {
                this.isPopupVisible = value
            }
        }
    }

</script>

<style lang="scss">

</style>