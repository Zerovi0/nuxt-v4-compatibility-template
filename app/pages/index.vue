<template>
  <div class="container mx-auto px-8 py-8">
    <h1 class="text-4xl font-bold mb-4">Welcome to my Portfolio</h1>
    <p class="text-lg">This is a Nuxt 3 application with a custom directory structure.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <div class="bg-card/10 rounded-lg p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1">
        <h2 class="text-2xl font-semibold mb-2">Projects</h2>
        <p class="text-muted-foreground">Check out my latest work.</p>
      </div>
      <div class="bg-card/10 rounded-lg p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1">
        <h2 class="text-2xl font-semibold mb-2">Skills</h2>
        <p class="text-muted-foreground">Technologies I work with.</p>
      </div>
      <div class="bg-card/10 rounded-lg p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1">
        <h2 class="text-2xl font-semibold mb-2">Contact</h2>
        <p class="text-muted-foreground">Get in touch with me.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Home',
  layout: 'default'
})
</script>
