<template>
  <div id="stockChart" ref="stockChart"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import HighStock from "highcharts/highstock";
import accessabilityInit from "highcharts/es-modules/Accessibility/Accessibility";

const stockChart = ref(null);

onMounted(() => {
  if (stockChart.value) {
    HighStock.stockChart("stockChart", {
      series: [
        {
          data: [1, 2, 3],
        },
      ],
    });
  }
});
</script>
