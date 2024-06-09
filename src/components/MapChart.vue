<template>
  <!-- This is the way -->
  <div id="myMap" ref="myMap"></div>

  <!-- This is not the way, but the docs says otherwise... Works this way on plain Vue.js -->
  <!--highcharts
    :constructorType="'mapChart'"
    :options="chartOptions"
  ></highcharts-->
</template>
<script setup>
import { onMounted, ref } from "vue";
import Highcharts from "highcharts";
import HighchartsMapModule from "highcharts/highmaps";
import accessabilityInit from "highcharts/es-modules/Accessibility/Accessibility";

import topology from "../assets/nor-topo.json";

const data = [
  ["no-vf", 10],
  ["no-te", 11],
  ["no-ro", 12],
  ["no-of", 13],
  ["no-os", 14],
  ["no-ak", 15],
  ["no-fi", 16],
  ["no-td", 17],
  ["no-mr", 18],
  ["no-tr", 19],
  ["no-no", 20],
  ["no-bu", 21],
  ["no-ag", 22],
  ["no-in", 23],
  ["no-vl", 24],
];

const chartOptions = {
  chart: {
    map: topology,
  },

  title: {
    text: "Highcharts Maps basic demo",
  },

  subtitle: {
    text: 'Source map: <a href="https://code.highcharts.com/mapdata/countries/no/no-all.topo.json">Norway</a>',
  },

  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: "bottom",
    },
  },

  colorAxis: {
    min: 0,
  },

  series: [
    {
      data: data,
      name: "Random data",
      states: {
        hover: {
          color: "#BADA55",
        },
      },
      dataLabels: {
        enabled: true,
        format: "{point.name}",
      },
    },
  ],
};

const myMap = ref(null);
onMounted(() => {
  if (myMap.value) {
    //accessabilityInit(Highcharts);
    HighchartsMapModule.mapChart("myMap", chartOptions);
  }
});
</script>
<style></style>
