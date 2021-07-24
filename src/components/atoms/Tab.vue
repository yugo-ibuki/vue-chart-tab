<template>
  <span
      class="tab"
      :class="{ 'active': active }"
      :id="'tab-' + id"
      @click="onClick"
  >
    {{ label }}
  </span>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue'

export default defineComponent({
  name: 'tab',
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    }
  },
  setup (props, context: SetupContext) {
    return {
      onClick: () => {
        context.emit('select-tab', props.id)
      }
    }
  }
})
</script>

<style scoped>
  span {
    cursor: pointer;
    padding: 10px;
    border: 1px solid rgba(191, 191, 191, 1);
  }

  span:hover {
    opacity: .5;
    transition: .3s;
  }

  .active {
    background: rgba(191, 191, 191, 1);
  }
</style>
