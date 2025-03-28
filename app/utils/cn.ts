import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines class names with Tailwind merge
 * Made available through Nuxt's auto-imports
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
