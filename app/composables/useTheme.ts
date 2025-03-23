export const useTheme = () => {
  // Initialize from local storage (if available) or system preference
  const colorMode = useState<'light' | 'dark'>('colorMode', () => {
    // Check if we're on the client-side using Nuxt's built-in utility
    if (typeof window !== 'undefined') {
      // Check for stored preference
      const storedTheme = localStorage.getItem('theme')
      if (storedTheme) {
        return storedTheme as 'light' | 'dark'
      }
      
      // Otherwise use system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
    }
    
    // Default to light
    return 'light'
  })
  
  // Computed property for dark mode
  const isDark = computed(() => colorMode.value === 'dark')
  
  // Update DOM when theme changes
  watchEffect(() => {
    // Only run this in the browser
    if (typeof window !== 'undefined') {
      // Store the user preference
      localStorage.setItem('theme', colorMode.value)
      
      // Apply or remove dark class from document
      if (colorMode.value === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  })
  
  // Theme toggle function
  const toggleTheme = () => {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
  }
  
  // Function to set a specific theme
  const setTheme = (theme: 'light' | 'dark') => {
    colorMode.value = theme
  }
  
  return {
    colorMode,
    isDark,
    toggleTheme,
    setTheme
  }
}
