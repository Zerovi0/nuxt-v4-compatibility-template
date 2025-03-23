<template>
  <Button
    variant="ghost"
    size="icon"
    @click="toggleTheme"
    :title="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
    class="theme-toggle"
  >
    <Icon
      :name="isDark ? 'lucide:sun' : 'lucide:moon'" 
      class="h-[1.2rem] w-[1.2rem] transition-all"
      aria-hidden="true"
    />
    <span class="sr-only">{{ isDark ? 'Switch to light theme' : 'Switch to dark theme' }}</span>
  </Button>
</template>

<script setup lang="ts">

// Use our theme composable
const { isDark, toggleTheme } = useTheme()
</script>
