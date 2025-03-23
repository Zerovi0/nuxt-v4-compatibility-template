<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'

// No need for appConfig anymore as we're using Tailwind classes

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary', 'outline', 'text'].includes(value)
  },
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button'
  },
  full: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])

const buttonType = computed(() => props.type)

// Generate classes based on variant
const buttonClasses = computed(() => {
  const classes = ['inline-flex items-center justify-center py-2 px-4 rounded-md font-medium transition-colors']
  
  switch (props.variant) {
    case 'primary':
      classes.push('bg-primary text-primary-foreground hover:bg-primary/90')
      break
    case 'secondary':
      classes.push('bg-secondary text-secondary-foreground hover:bg-secondary/80')
      break
    case 'outline':
      classes.push('border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground')
      break
    case 'text':
      classes.push('bg-transparent text-primary py-1 px-2 hover:underline')
      break
  }
  
  if (props.full) {
    classes.push('w-full')
  }
  
  return classes.join(' ')
})
</script>

<template>
  <button 
    :class="buttonClasses" 
    :type="buttonType"
    @click="$emit('click', $event)">
    <slot />
  </button>
</template>
