// Import CSS
import '@/assets/css/main.css'

/**
 * Main plugin that handles theme initialization and other global setup
 */
export default defineNuxtPlugin((nuxtApp) => {
  // Set up theme initialization
  nuxtApp.hook('app:mounted', () => {
    // Initialize theme from localStorage or system preference
    const { colorMode } = useTheme()
    
    // This will trigger the watchEffect in useTheme that applies the dark class
    // to the HTML element based on the current colorMode value
    const currentTheme = colorMode.value
  })
  
  // Additional plugin setup can go here
})
