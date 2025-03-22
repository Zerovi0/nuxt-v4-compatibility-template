<template>
  <div class="layout">
    <header>
      <nav>
        <NuxtLink to="/" class="logo">Portfolio</NuxtLink>
        <div class="nav-links">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/projects">Projects</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </div>
      </nav>
    </header>
    
    <main>
      <slot />
    </main>
    
    <footer>
      <p>&copy; {{ new Date().getFullYear() }} My Portfolio. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: v-bind('appConfig.theme.colors.background');
  color: v-bind('appConfig.theme.colors.text');
}

header {
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: v-bind('appConfig.theme.colors.primary');
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: v-bind('appConfig.theme.colors.text');
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-links a:hover, .nav-links a.router-link-active {
  color: v-bind('appConfig.theme.colors.primary');
}

main {
  flex: 1;
}

footer {
  padding: 1.5rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>
