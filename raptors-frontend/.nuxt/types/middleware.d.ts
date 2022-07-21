import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/projects/raptos/raptors-website/raptors-frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}