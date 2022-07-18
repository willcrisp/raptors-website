import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/Luke/dev/New folder/raptors-frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}