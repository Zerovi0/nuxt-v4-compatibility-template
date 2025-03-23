<template>
  <div class="flex flex-col min-h-screen bg-background text-foreground">
    <header class="border-b border-border">
      <nav class="container mx-auto py-4 px-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold text-primary">Portfolio</NuxtLink>
        <div class="flex items-center gap-6">
          <NuxtLink to="/" class="text-foreground hover:text-primary transition-colors">Home</NuxtLink>
          <NuxtLink to="/projects" class="text-foreground hover:text-primary transition-colors">Projects</NuxtLink>
          <NuxtLink to="/about" class="text-foreground hover:text-primary transition-colors">About</NuxtLink>
          <NuxtLink to="/contact" class="text-foreground hover:text-primary transition-colors">Contact</NuxtLink>
          <ThemeToggle />
        </div>
      </nav>
    </header>
    
    <main class="flex-1 container mx-auto py-8 px-4">
      <slot />
    </main>
    
    <footer class="py-6 border-t border-border bg-muted/30">
      <div class="container mx-auto text-center text-muted-foreground">
        <p>&copy; {{ new Date().getFullYear() }} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// We no longer need appConfig for theming since we're using Tailwind classes
</script>
