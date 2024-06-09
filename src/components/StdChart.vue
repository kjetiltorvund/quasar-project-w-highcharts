<template>
    <div id="chart" ref="chart"></div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import Highcharts from "highcharts"

const chart = ref(null)

onMounted(() => {
if(chart.value) {
    Highcharts.chart("chart", {
        series: [{
            data: [1, 2, 3 ,4]
        }]
    })
}
})
</script>