<template>
  <div>
    <h1>棒グラフと線グラフ</h1>
    <Tabs
      @switch-tab="switchTab"
    ></Tabs>
    <div class="chart-box">
      <Chart
        :chartData="chartData"
        :chartType="chartType"
      ></Chart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import Chart from '@/components/Chart.vue'
import Tabs from '@/components/Tabs.vue'
import { data, TData } from '@/data/data'

export default defineComponent({
  name: 'Home',
  components: {
    Chart,
    Tabs
  },
  setup () {
    const chartType: Ref = ref(1)
    const test = 'test' as string
    const chartData = data as TData

    return {
      chartType,
      test,
      chartData,
      switchTab: (id: number) => {
        chartType.value = id
      }
    }
  }
})
</script>

<style>
h1 {
  text-align: center;
}

.chart-box {
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
}
</style>
