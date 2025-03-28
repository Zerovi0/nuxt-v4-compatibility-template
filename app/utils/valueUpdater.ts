import type { Updater } from '@tanstack/vue-table'
import type { Ref } from 'vue'

/**
 * Updates ref values with support for functional updaters
 * Made available through Nuxt's auto-imports
 */
export function valueUpdater<T extends Updater<any>>(updaterOrValue: T, ref: Ref) {
  ref.value
    = typeof updaterOrValue === 'function'
      ? updaterOrValue(ref.value)
      : updaterOrValue
}
