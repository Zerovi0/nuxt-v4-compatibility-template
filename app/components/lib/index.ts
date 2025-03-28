/**
 * Minimal shadcn-vue compatibility layer
 * 
 * This file contains only the core utilities required by shadcn components.
 * It's kept minimal to leverage Nuxt's auto-import system where possible.
 */

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * cn - A utility for merging Tailwind CSS classes conditionally
 * This is the only essential function needed by most shadcn components
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
