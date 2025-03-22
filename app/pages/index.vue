<template>
  <div class="container">
    <h1>Welcome to my Portfolio</h1>
    <p>This is a Nuxt 3 application with a custom directory structure.</p>
    
    <div class="cards">
      <div class="card">
        <h2>Projects</h2>
        <p>Check out my latest work.</p>
      </div>
      <div class="card">
        <h2>Skills</h2>
        <p>Technologies I work with.</p>
      </div>
      <div class="card">
        <h2>Contact</h2>
        <p>Get in touch with me.</p>
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

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.card {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
</style>
