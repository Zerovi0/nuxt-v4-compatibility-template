// Import CSS
import '@/assets/css/main.css'

/**
 * Main plugin that handles theme initialization and other global setup
 */
export default defineNuxtPlugin((nuxtApp) => {
  // The theme initialization is now handled directly in the useTheme composable
  // via the onMounted hook, so we don't need to manually initialize it here.
  // We're still calling useTheme() to make sure the composable is instantiated
  // and its watchers are registered
  useTheme()
  
  // Additional plugin setup can go here
})
