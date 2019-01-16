<template>
  <v-layout>
    <v-flex
      >
      <MapVenezuela />
    </v-flex>
  </v-layout>
</template>

<script>
import MapVenezuela from '~/components/MapVenezuela.vue'
import MapStatePreview from '~/components/MapStatePreview.vue'

export default {
  components: {
    MapVenezuela,
    MapStatePreview
  },
}
</script>
