<template>
<li v-for="list in lists" :key="list.id"  class="benefits__item"><span v-html="list.listItemText"></span></li>
</template>

<script>
export default {
    name: "pl-list-item",
    props: {
       lists: {
        type: Array
       }
    }
}
</script>