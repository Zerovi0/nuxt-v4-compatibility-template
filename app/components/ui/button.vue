<template>
  <component
    :is="component"
    :class="[
      buttonVariants({
        variant,
        size,
        class: className
      }),
      { 'pointer-events-none opacity-50': loading || disabled }
    ]"
    v-bind="buttonAttrs"
    @click="handleClick"
  >
    <span
      v-if="loading"
      class="mr-2 h-4 w-4 animate-spin"
      aria-hidden="true"
    >
      <Icon name="lucide:loader-2" />
    </span>
    <slot v-if="!loading" />
    <span v-else>{{ loadingText }}</span>
  </component>
</template>

<script setup lang="ts">
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

import { cn } from '@components/lib/utils'

const props = withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset'
    component?: any
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
    size?: 'default' | 'sm' | 'lg' | 'icon'
    className?: string
    disabled?: boolean
    loading?: boolean
    loadingText?: string
  }>(),
  {
    type: 'button',
    component: 'button',
    variant: 'default',
    size: 'default',
    className: '',
    disabled: false,
    loading: false,
    loadingText: 'Loading...'
  }
)

const emit = defineEmits<{
  (e: 'click', value: MouseEvent): void
}>()

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

const buttonAttrs = computed(() => {
  // Extract everything except what we'll handle separately
  const { component, type, disabled, loading, ...rest } = props
  return {
    type: component === 'button' ? type : undefined,
    disabled: disabled || loading, // Explicitly calculate disabled state
    ...rest
  }
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>
