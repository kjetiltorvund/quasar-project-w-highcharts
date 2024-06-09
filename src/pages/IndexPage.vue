<template>
  <q-page class="flex flex-center">
    <MapChart />
  </q-page>
</template>

<script setup>
import StdChart from "components/StdChart.vue";
import StockChart from "components/StockChart.vue";
import MapChart from "components/MapChart.vue";
defineOptions({
  name: "IndexPage",
});
</script>
