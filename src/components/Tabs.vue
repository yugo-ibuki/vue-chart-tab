<template>
  <div class='tabs'>
    <Tab
      v-for='tab in tabs'
      :label='tab.label'
      :key='tab.id'
      :id='tab.id'
      @select-tab='onClick'
      :active='tab.active'
    ></Tab>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue'
import Tab from './atoms/Tab.vue'

type TTab = {
  id: number;
  label: string;
  active: boolean;
}

type TTabs = {
  tab1: TTab;
  tab2: TTab;
  tab3: TTab;
}

export default defineComponent({
  name: 'tabs',
  components: {
    Tab
  },
  setup (props, context) {
    // Tabの設定
    const tabs = reactive<TTabs>({
      tab1: {
        id: 1,
        label: 'TAB1',
        active: true
      },
      tab2: {
        id: 2,
        label: 'TAB2',
        active: false
      },
      tab3: {
        id: 3,
        label: 'TAB3',
        active: false
      }
    })
    const tabsArray: Array = Object.entries(tabs)

    onMounted(() => {
      // 最初のactiveを1つ目のタブに設定
      tabsArray.forEach((tab, index: number) => {
        tab[1].active = false
        if (index === 0) tab[1].active = true
      })
    })

    return {
      tabs,
      tabsArray,
      onClick: (propsId: number) => {
        const id = propsId
        tabsArray.map(tab => {
          tab[1].id === id ? tab[1].active = true : tab[1].active = false
        })
        context.emit('switch-tab', propsId)
      }
    }
  }
})
</script>

<style scoped>
.tabs {
  width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
</style>
