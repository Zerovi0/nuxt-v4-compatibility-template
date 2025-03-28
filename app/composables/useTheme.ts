// Define theme type for consistency
type Theme = 'light' | 'dark'

// The key used for localStorage
const THEME_STORAGE_KEY = 'nuxt-theme-preference'

/**
 * Composable for theme management with localStorage persistence
 */
export const useTheme = () => {
  // Create the theme state with a shared key for persistence across components
  // Use a SSR-safe default value (light) - we'll set the real value on client-side
  const themeState = useState<Theme>('nuxt-theme', () => 'light')
  // Check if client-side
  const isClient = typeof window !== 'undefined'

  // Computed property for dark mode
  const isDark = computed(() => themeState.value === 'dark')

  /**
   * Apply theme to document (client-side only)
   */
  const applyTheme = (theme: Theme) => {
    if (!isClient) return
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  
  /**
   * Save theme to localStorage (client-side only)
   */
  const saveTheme = (theme: Theme) => {
    if (!isClient) return
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }
  
  /**
   * Get theme from localStorage or system preference (client-side only)
   */
  const getThemePreference = (): Theme => {
    if (!isClient) return 'light'
    
    // Try localStorage first
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY)
    if (storedTheme === 'dark' || storedTheme === 'light') {
      return storedTheme
    }
    
    // Fall back to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  
  /**
   * Initialize theme from storage on mount
   */
  if (isClient) {
    // Use immediate function to ensure this runs as soon as possible on hydration
    const initialize = () => {
      // Get and set theme from preference
      const preferredTheme = getThemePreference()
      themeState.value = preferredTheme
      
      // Apply theme to document
      applyTheme(preferredTheme)
    }
    
    // Run initialization on client-side
    onMounted(initialize)
    
    // For immediate initialization during hydration
    initialize()
    
    // Watch for theme changes and update DOM/localStorage
    watch(themeState, (newTheme) => {
      applyTheme(newTheme)
      saveTheme(newTheme)
    }, { immediate: true })
  }
  
  /**
   * Toggle between light and dark themes
   */
  const toggleTheme = () => {
    themeState.value = themeState.value === 'dark' ? 'light' : 'dark'
  }
  
  /**
   * Set a specific theme
   */
  const setTheme = (theme: Theme) => {
    themeState.value = theme
  }
  
  return {
    colorMode: themeState,
    isDark,
    toggleTheme,
    setTheme
  }
}
