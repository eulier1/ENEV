<template>
    <map-state-preview :name="nameParam" ></map-state-preview>
</template>

<script>
import MapStatePreview from "@/components/MapStatePreview.vue";

export default {
    data () {
    return {
        nameParam : this.$route.params.index
        }
    },
    components: {
        MapStatePreview
    }
}
</script>
