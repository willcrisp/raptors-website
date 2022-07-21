
// --------------------
// Request: C:/projects/raptos/raptors-website/raptors-frontend/node_modules/nuxt/dist/app/entry
// Parents: 
// - <entry> ($id_x1frnpf8FZ)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/ohmyfetch/dist/index.mjs ($id_eAIXxFjGLW)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/paths.mjs ($id_zaRTkLTJCK)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/css.mjs ($id_HXX6i0MqMJ)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/plugins/server.mjs ($id_IqjynhcOLd)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/root-component.mjs ($id_djKSrJLzLA)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/app-component.mjs ($id_SWmsHyPXCl)
// --------------------
const $id_RRF9KhcA6y = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/paths.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/css.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/plugins/server.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/root-component.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/app-component.mjs");

if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_1__.$fetch.create({
    baseURL: __vite_ssr_import_2__.baseURL()
  });
}
let entry;
const plugins = __vite_ssr_import_3__.normalizePlugins(__vite_ssr_import_5__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp, ssrContext });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_6__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp });
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#__nuxt");
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await __vite_ssr_import_0__.nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - C:/projects/raptos/raptors-website/raptors-frontend/node_modules/nuxt/dist/app/entry ($id_RRF9KhcA6y)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_31ETNgPfBU)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_fYchCJb7XZ)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_QfWuTouFBP)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/components.plugin.mjs ($id_w6cm2kQ5Fb)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_wDImTp8t2G)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_sqKdb79FW5)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_gPQzqsnHwc)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_acUmhqj8VN)
// - /components/Nav.vue ($id_mEigpq54S5)
// - /pages/about/index.vue?macro=true ($id_q71LhSSAOu)
// - /pages/articles/_id.vue?macro=true ($id_zjuNdbrQDn)
// - /components/ArticleCard.vue ($id_41AutBWftU)
// - /pages/articles/index.vue?macro=true ($id_TI2psO9721)
// - /pages/articles/old_id.vue?macro=true ($id_xglqMpLyOu)
// - /pages/events/[_id].vue?macro=true ($id_IC8Nms7DYO)
// - /pages/events/index.vue?macro=true ($id_kXQA6Nm4jd)
// - /pages/gallery/index.vue?macro=true ($id_EhUMlIWZKu)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/teams/index.vue?macro=true ($id_oLGjgDBryD)
// - /pages/about/index.vue ($id_YUHz7k427C)
// - /pages/articles/_id.vue ($id_6zZqnJTPUY)
// - /pages/articles/index.vue ($id_yGWZ45LCN9)
// - /pages/articles/old_id.vue ($id_JALomzFFdC)
// - /pages/events/[_id].vue ($id_HFFyh1TufM)
// - /pages/events/index.vue ($id_iFWastzaXo)
// - /pages/gallery/index.vue ($id_kLPEfMNg78)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/teams/index.vue ($id_lkRZi3tNgS)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_DFcXpE295m)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/imports.mjs ($id_IJcw0GjSy7)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/layouts.mjs ($id_75x0xI9ltS)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_bGEBDyzLuq)
// Dependencies: 

// --------------------
const $id_YPBhX5dq3F = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/projects/raptos/raptors-website/raptors-frontend/node_modules/vue/dist/vue.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/projects/raptos/raptors-website/raptors-frontend/node_modules/vue/dist/vue.cjs.js\".")
  })


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - C:/projects/raptos/raptors-website/raptors-frontend/node_modules/nuxt/dist/app/entry ($id_RRF9KhcA6y)
// Dependencies: 

// --------------------
const $id_eAIXxFjGLW = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/projects/raptos/raptors-website/raptors-frontend/node_modules/ohmyfetch/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/projects/raptos/raptors-website/raptors-frontend/node_modules/ohmyfetch/dist/index.mjs\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/paths.mjs
// Parents: 
// - C:/projects/raptos/raptors-website/raptors-frontend/node_modules/nuxt/dist/app/entry ($id_RRF9KhcA6y)
// Dependencies: 
// - /node_modules/ufo/dist/index.mjs ($id_YU3gYOEqyI)
// --------------------
const $id_zaRTkLTJCK = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const appConfig = {"baseURL":"/","buildAssetsDir":"/_nuxt/","assetsPath":{},"cdnURL":"","head":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[{"rel":"stylesheet","href":"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"}],"style":[],"script":[]}}
const baseURL = () => appConfig.baseURL
Object.defineProperty(__vite_ssr_exports__, "baseURL", { enumerable: true, configurable: true, get(){ return baseURL }});
const buildAssetsDir = () => appConfig.buildAssetsDir
Object.defineProperty(__vite_ssr_exports__, "buildAssetsDir", { enumerable: true, configurable: true, get(){ return buildAssetsDir }});
const buildAssetsURL = (...path) => __vite_ssr_import_0__.joinURL(publicAssetsURL(), buildAssetsDir(), ...path)
Object.defineProperty(__vite_ssr_exports__, "buildAssetsURL", { enumerable: true, configurable: true, get(){ return buildAssetsURL }});
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL
  return path.length ? __vite_ssr_import_0__.joinURL(publicBase, ...path) : publicBase
}
Object.defineProperty(__vite_ssr_exports__, "publicAssetsURL", { enumerable: true, configurable: true, get(){ return publicAssetsURL }});;
}


// --------------------
// Request: /node_modules/ufo/dist/index.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/paths.mjs ($id_zaRTkLTJCK)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_YU3gYOEqyI = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/projects/raptos/raptors-website/raptors-frontend/node_modules/ufo/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/projects/raptos/raptors-website/raptors-frontend/node_modules/ufo/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/index.mjs
// Parents: 
// - C:/projects/raptos/raptors-website/raptors-frontend/node_modules/nuxt/dist/app/entry ($id_RRF9KhcA6y)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_AGPfGxS2fu)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_fYchCJb7XZ)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_xIZrp1mIW8)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_mHG7oNEQOP)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/components.plugin.mjs ($id_w6cm2kQ5Fb)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /pages/articles/old_id.vue?macro=true ($id_xglqMpLyOu)
// - /pages/events/[_id].vue?macro=true ($id_IC8Nms7DYO)
// - /pages/articles/old_id.vue ($id_JALomzFFdC)
// - /pages/events/[_id].vue ($id_HFFyh1TufM)
// - /node_modules/@nuxtjs/strapi/dist/runtime/strapi.plugin.mjs ($id_ewqmcZbdJ2)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiAuth.mjs ($id_xXETftpGKs)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiToken.mjs ($id_XHD0kSJ1u4)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiUser.mjs ($id_7VgrS4TpPD)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiClient.mjs ($id_qteyuqsnYu)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiUrl.mjs ($id_9GyGzo2V6V)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiVersion.mjs ($id_v6gKR9sKcp)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/imports.mjs ($id_IJcw0GjSy7)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiGraphQL.mjs ($id_wvuejfrVt5)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// Dependencies: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_Fhvn5egKy1)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// --------------------
const $id_NpJ0d20vMd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useMeta }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/hookable/dist/index.mjs ($id_osgRxHGQwS)
// - /node_modules/unctx/dist/index.mjs ($id_pWnKLdtXja)
// --------------------
const $id_4GnUEZ7ifE = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/unctx/dist/index.mjs");

const nuxtAppCtx = __vite_ssr_import_2__.getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = true ? options.ssrContext.runtimeConfig : __vite_ssr_import_0__.reactive(nuxtApp.payload.config);
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      if (true || prop === "public" || prop === "app") {
        return false;
      }
      target[prop] = value;
      target.public[prop] = value;
      return true;
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  const unwrappedPlugins = [];
  const legacyInjectPlugins = [];
  const invalidPlugins = [];
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      invalidPlugins.push(plugin);
      return null;
    }
    if (plugin.length > 1) {
      legacyInjectPlugins.push(plugin);
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    if (!isNuxtPlugin(plugin)) {
      unwrappedPlugins.push(plugin);
    }
    return plugin;
  }).filter(Boolean);
  if (true && legacyInjectPlugins.length) {
    console.warn("[warn] [nuxt] You are using a plugin with legacy Nuxt 2 format (context, inject) which is likely to be broken. In the future they will be ignored:", legacyInjectPlugins.map((p) => p.name || p).join(","));
  }
  if (true && invalidPlugins.length) {
    console.warn("[warn] [nuxt] Some plugins are not exposing a function and skipped:", invalidPlugins);
  }
  if (true && unwrappedPlugins.length) {
    console.warn("[warn] [nuxt] You are using a plugin that has not been wrapped in `defineNuxtPlugin`. It is advised to wrap your plugins as in the future this may enable enhancements:", unwrappedPlugins.map((p) => p.name || p).join(","));
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isNuxtPlugin(plugin) {
  return typeof plugin === "function" && NuxtPluginIndicator in plugin;
}
Object.defineProperty(__vite_ssr_exports__, "isNuxtPlugin", { enumerable: true, configurable: true, get(){ return isNuxtPlugin }});
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  if (true) {
    return nuxtAppCtx.callAsync(nuxt, fn);
  } else {
    nuxtAppCtx.set(nuxt);
    return fn();
  }
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.use();
  if (!nuxtAppInstance) {
    const vm = __vite_ssr_import_0__.getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// Dependencies: 

// --------------------
const $id_osgRxHGQwS = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/projects/raptos/raptors-website/raptors-frontend/node_modules/hookable/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/projects/raptos/raptors-website/raptors-frontend/node_modules/hookable/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/unctx/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// Dependencies: 

// --------------------
const $id_pWnKLdtXja = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/projects/raptos/raptors-website/raptors-frontend/node_modules/unctx/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/projects/raptos/raptors-website/raptors-frontend/node_modules/unctx/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// Dependencies: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_AGPfGxS2fu)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_fYchCJb7XZ)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_QfWuTouFBP)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_xIZrp1mIW8)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// --------------------
const $id_sGenmuNLlo = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.refreshNuxtData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.mjs");

Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useError }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLazyFetch }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useCookie }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.mjs");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRouter }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_aSmmIHQt8x)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// --------------------
const $id_UzRZUO1GKq = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt), '$PNC7wCqOwp');
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/imports.mjs ($id_IJcw0GjSy7)
// Dependencies: 

// --------------------
const $id_aSmmIHQt8x = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/projects/raptos/raptors-website/raptors-frontend/node_modules/vue-router/dist/vue-router.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/projects/raptos/raptors-website/raptors-frontend/node_modules/vue-router/dist/vue-router.cjs.js\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_QfWuTouFBP)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_31ETNgPfBU)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_1baiIWALJh = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  options.initialCache = options.initialCache ?? true;
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: __vite_ssr_import_1__.wrapInRef(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(!useInitialCache()),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = __vite_ssr_import_0__.unref(options.default());
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = initialFetch();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating && key in nuxt.payload.data) {
      asyncData.pending.value = false;
    } else if (instance && nuxt.payload.serverRendered && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(initialFetch);
    } else {
      initialFetch();
    }
    if (options.watch) {
      __vite_ssr_import_0__.watch(options.watch, () => asyncData.refresh());
    }
    const off = nuxt.hook("app:data:refresh", (keys) => {
      if (!keys || keys.includes(key)) {
        return asyncData.refresh();
      }
    });
    if (instance) {
      __vite_ssr_import_0__.onUnmounted(off);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [key, handler, options] = args;
  return useAsyncData(key, handler, { ...options, lazy: true }, null);
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  return __vite_ssr_import_2__.useNuxtApp().callHook("app:data:refresh", _keys);
}
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return refreshNuxtData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// --------------------
const $id_31ETNgPfBU = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const wrapInRef = (value) => __vite_ssr_import_0__.isRef(value) ? value : __vite_ssr_import_0__.ref(value);
Object.defineProperty(__vite_ssr_exports__, "wrapInRef", { enumerable: true, configurable: true, get(){ return wrapInRef }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_AGPfGxS2fu = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_fYchCJb7XZ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (__vite_ssr_import_0__.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/error.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_bBQ8Yk34eC = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useError = () => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  return __vite_ssr_import_0__.useState("error", () => true ? nuxtApp.ssrContext.error : nuxtApp.payload.error, '$bWWAMK0bSA');
};
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return useError }});
const throwError = (_err) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  if (true) {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  } else {
    error.value = error.value || err;
  }
  return err;
};
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return throwError }});
const clearError = async (options = {}) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return clearError }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// --------------------
const $id_QfWuTouFBP = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

function useFetch(request, arg1, arg2) {
  const [opts, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _key = opts.key || autoKey;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = "$f" + _key;
  const _request = __vite_ssr_import_0__.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return __vite_ssr_import_0__.isRef(r) ? r.value : r;
  });
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch,
    initialCache,
    ...fetchOptions
  } = opts;
  const _fetchOptions = {
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    initialCache,
    watch: [
      _request,
      ...watch || []
    ]
  };
  const asyncData = __vite_ssr_import_1__.useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions, '$Y1nhoWDLED');
  return asyncData;
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(request, arg1, arg2) {
  const [opts, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  return useFetch(request, {
    ...opts,
    lazy: true
  }, autoKey, '$UrmC2vrBKq');
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/cookie-es/dist/index.mjs ($id_9JdSYd7S59)
// - /node_modules/h3/dist/index.mjs ($id_V9fe1no0d6)
// - /node_modules/destr/dist/index.mjs ($id_A9FezTYJBC)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_xIZrp1mIW8)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_31ETNgPfBU)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_URtEHTJ6vX = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const CookieDefaults = {
  path: "/",
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_5__.wrapInRef(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const nuxtApp = __vite_ssr_import_6__.useNuxtApp();
    const writeFinalCookieValue = () => {
      if (cookie.value !== cookies[name]) {
        writeServerCookie(__vite_ssr_import_4__.useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(__vite_ssr_import_4__.useRequestEvent()?.req.headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    __vite_ssr_import_2__.appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 

// --------------------
const $id_9JdSYd7S59 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/projects/raptos/raptors-website/raptors-frontend/node_modules/cookie-es/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/projects/raptos/raptors-website/raptors-frontend/node_modules/cookie-es/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_V9fe1no0d6 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/projects/raptos/raptors-website/raptors-frontend/node_modules/h3/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/projects/raptos/raptors-website/raptors-frontend/node_modules/h3/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 

// --------------------
const $id_A9FezTYJBC = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/projects/raptos/raptors-website/raptors-frontend/node_modules/destr/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/projects/raptos/raptors-website/raptors-frontend/node_modules/destr/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_xIZrp1mIW8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.event.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
function useRequestEvent(nuxtApp = __vite_ssr_import_0__.useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return useRequestEvent }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/router.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/h3/dist/index.mjs ($id_V9fe1no0d6)
// - /node_modules/ufo/dist/index.mjs ($id_YU3gYOEqyI)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_202QqPjMtu = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_2__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const useActiveRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._activeRoute;
};
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return useActiveRoute }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_2__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  if (false && isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  if (true) {
    const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = __vite_ssr_import_1__.joinURL(__vite_ssr_import_2__.useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => __vite_ssr_import_0__.sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 302));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// --------------------
const $id_Fhvn5egKy1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtLink }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-link.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_Fhvn5egKy1)
// - /components/Nav.vue ($id_mEigpq54S5)
// - /components/ArticleCard.vue ($id_41AutBWftU)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/ufo/dist/index.mjs ($id_YU3gYOEqyI)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_6yHtfHy3cx = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if (true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  return __vite_ssr_import_0__.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = __vite_ssr_import_2__.useRouter();
      const to = __vite_ssr_import_0__.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = __vite_ssr_import_0__.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || __vite_ssr_import_1__.hasProtocol(to.value, true);
      });
      return () => {
        if (!isExternal.value) {
          return __vite_ssr_import_0__.h(__vite_ssr_import_0__.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          }, slots.default);
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => __vite_ssr_import_2__.navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            route: router.resolve(href),
            rel,
            target,
            isActive: false,
            isExactActive: false
          });
        }
        return __vite_ssr_import_0__.h("a", { href, rel, target }, slots.default?.());
      };
    }
  });
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return defineNuxtLink }});
__vite_ssr_exports__.default = defineNuxtLink({ componentName: "NuxtLink" });
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/imports.mjs ($id_IJcw0GjSy7)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// --------------------
const $id_tzUUgT5kx6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_sqKdb79FW5)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_hSsGoupXYm)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_BOqVBAGCOv = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useHead(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useHead(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
function useMeta(meta) {
  return useHead(meta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// Dependencies: 

// --------------------
const $id_hSsGoupXYm = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/projects/raptos/raptors-website/raptors-frontend/node_modules/@vue/shared/dist/shared.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/projects/raptos/raptors-website/raptors-frontend/node_modules/@vue/shared/dist/shared.cjs.js\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/css.mjs
// Parents: 
// - C:/projects/raptos/raptors-website/raptors-frontend/node_modules/nuxt/dist/app/entry ($id_RRF9KhcA6y)
// Dependencies: 

// --------------------
const $id_HXX6i0MqMJ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/* empty */;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/plugins/server.mjs
// Parents: 
// - C:/projects/raptos/raptors-website/raptors-frontend/node_modules/nuxt/dist/app/entry ($id_RRF9KhcA6y)
// Dependencies: 
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_mHG7oNEQOP)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/components.plugin.mjs ($id_w6cm2kQ5Fb)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /node_modules/@nuxtjs/strapi/dist/runtime/strapi.plugin.mjs ($id_ewqmcZbdJ2)
// --------------------
const $id_IqjynhcOLd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/components.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/plugin.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/router.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@nuxtjs/strapi/dist/runtime/strapi.plugin.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default
];
}


// --------------------
// Request: /node_modules/nuxt/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/plugins/server.mjs ($id_IqjynhcOLd)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_mHG7oNEQOP = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/components.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/plugins/server.mjs ($id_IqjynhcOLd)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_w6cm2kQ5Fb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");


const components = {}

__vite_ssr_exports__.default = __vite_ssr_import_1__.defineNuxtPlugin(nuxtApp => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
})
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/plugins/server.mjs ($id_IqjynhcOLd)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_wDImTp8t2G)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/defu/dist/defu.mjs ($id_16rZclLIWW)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_5vEgA2Fgrh = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/defu/dist/defu.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  let headReady = false;
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    headReady = true;
  });
  const titleTemplate = __vite_ssr_import_1__.ref();
  nuxtApp._useHead = (_meta) => {
    const meta = __vite_ssr_import_1__.ref(_meta);
    if ("titleTemplate" in meta.value) {
      titleTemplate.value = meta.value.titleTemplate;
    }
    const headObj = __vite_ssr_import_1__.computed(() => {
      const overrides = { meta: [] };
      if (titleTemplate.value && "title" in meta.value) {
        overrides.title = typeof titleTemplate.value === "function" ? titleTemplate.value(meta.value.title) : titleTemplate.value.replace(/%s/g, meta.value.title);
      }
      if (meta.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta.value.charset });
      }
      if (meta.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta.value.viewport });
      }
      return __vite_ssr_import_2__.default(overrides, meta.value);
    });
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    if (headReady) {
      __vite_ssr_import_1__.watchEffect(() => {
        head.updateDOM();
      });
    }
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// --------------------
const $id_wDImTp8t2G = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/defu/dist/defu.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// Dependencies: 

// --------------------
const $id_16rZclLIWW = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/projects/raptos/raptors-website/raptors-frontend/node_modules/defu/dist/defu.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/projects/raptos/raptors-website/raptors-frontend/node_modules/defu/dist/defu.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/plugins/server.mjs ($id_IqjynhcOLd)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_sqKdb79FW5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/meta.config.mjs ($id_AubK7dl9vx)
// --------------------
const $id_omUDQe4IGe = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/meta.config.mjs");

const metaMixin = {
  created() {
    const instance = __vite_ssr_import_0__.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
    __vite_ssr_import_2__.useHead(source);
  }
};
__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useHead(__vite_ssr_import_0__.markRaw({ title: "", ...__vite_ssr_import_4__.default.globalMeta }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// --------------------
const $id_sqKdb79FW5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default?.()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => ctx.slots.default?.()
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// Dependencies: 

// --------------------
const $id_AubK7dl9vx = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[{"rel":"stylesheet","href":"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"}],"style":[],"script":[]}};
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/plugins/server.mjs ($id_IqjynhcOLd)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_aSmmIHQt8x)
// - /node_modules/h3/dist/index.mjs ($id_V9fe1no0d6)
// - /node_modules/ufo/dist/index.mjs ($id_YU3gYOEqyI)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/routes.mjs ($id_AtJ6vZJSeO)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/router.options.mjs ($id_F1DNNK9yle)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/middleware.mjs ($id_m1daQiBx4F)
// --------------------
const $id_oJCXe6nyyh = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/page.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/routes.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/router.options.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/middleware.mjs");

function createCurrentLocation(base, location) {
  const { pathname, search, hash } = location;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    const slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/") {
      pathFromHash = "/" + pathFromHash;
    }
    return __vite_ssr_import_3__.withoutBase(pathFromHash, "");
  }
  const path = __vite_ssr_import_3__.withoutBase(pathname, base);
  return path + search + hash;
}
__vite_ssr_exports__.default = __vite_ssr_import_5__.defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_4__.default);
  const baseURL = __vite_ssr_import_5__.useRuntimeConfig().app.baseURL;
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory(baseURL) : __vite_ssr_import_1__.createMemoryHistory(baseURL);
  const initialURL = true ? nuxtApp.ssrContext.url : createCurrentLocation(baseURL, window.location);
  const router = __vite_ssr_import_1__.createRouter({
    ...__vite_ssr_import_7__.default,
    history: routerHistory,
    routes: __vite_ssr_import_6__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = __vite_ssr_import_0__.computed(() => router.currentRoute.value[key]);
  }
  const _activeRoute = __vite_ssr_import_0__.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _activeRoute.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
      syncCurrentRoute();
    }
  });
  const activeRoute = {};
  for (const key in _activeRoute.value) {
    activeRoute[key] = __vite_ssr_import_0__.computed(() => _activeRoute.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_0__.reactive(route);
  nuxtApp._activeRoute = __vite_ssr_import_0__.reactive(activeRoute);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  const error = __vite_ssr_import_5__.useError();
  try {
    if (true) {
      await router.push(initialURL);
    }
    await router.isReady();
  } catch (error2) {
    __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    to.meta = __vite_ssr_import_0__.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...__vite_ssr_import_8__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_8__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (!middleware) {
        if (true) {
          throw new Error(`Unknown route middleware: '${entry}'. Valid middleware: ${Object.keys(__vite_ssr_import_8__.namedMiddleware).map((mw) => `'${mw}'`).join(", ")}.`);
        }
        throw new Error(`Unknown route middleware: '${entry}'.`);
      }
      const result = await __vite_ssr_import_5__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (true) {
        if (result === false || result instanceof Error) {
          const error2 = result || __vite_ssr_import_2__.createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (false && !nuxtApp.isHydrating && error.value) {
      await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.clearError);
    }
    if (to.matched.length === 0) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [__vite_ssr_import_2__.createError({
        statusCode: 404,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (true && to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    } else if (true) {
      const currentURL = to.fullPath || "/";
      if (!__vite_ssr_import_3__.isEqual(currentURL, initialURL)) {
        await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
    }
  });
  return { provide: { router } };
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/page.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_aSmmIHQt8x)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_gPQzqsnHwc)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_acUmhqj8VN)
// --------------------
const $id_X8FM3AG1sA = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const isNestedKey = Symbol("isNested");
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const isNested = __vite_ssr_import_0__.inject(isNestedKey, false);
    __vite_ssr_import_0__.provide(isNestedKey, true);
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => routeProps.Component && __vite_ssr_import_4__._wrapIf(__vite_ssr_import_0__.Transition, routeProps.route.meta.pageTransition ?? defaultPageTransition, __vite_ssr_import_2__.wrapInKeepAlive(routeProps.route.meta.keepalive, isNested && nuxtApp.isHydrating ? __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) : __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
          onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
          onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
        }, { default: () => __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) }))).default()
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// --------------------
const $id_gPQzqsnHwc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// --------------------
const $id_acUmhqj8VN = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default?.();
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? __vite_ssr_import_0__.h(component, props === true ? {} : props, slots) : __vite_ssr_import_0__.h(Fragment, {}, slots) };
};
Object.defineProperty(__vite_ssr_exports__, "_wrapIf", { enumerable: true, configurable: true, get(){ return _wrapIf }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 
// - /pages/about/index.vue?macro=true ($id_q71LhSSAOu)
// - /pages/articles/_id.vue?macro=true ($id_zjuNdbrQDn)
// - /pages/articles/index.vue?macro=true ($id_TI2psO9721)
// - /pages/articles/old_id.vue?macro=true ($id_xglqMpLyOu)
// - /pages/events/[_id].vue?macro=true ($id_IC8Nms7DYO)
// - /pages/events/index.vue?macro=true ($id_kXQA6Nm4jd)
// - /pages/gallery/index.vue?macro=true ($id_EhUMlIWZKu)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/teams/index.vue?macro=true ($id_oLGjgDBryD)
// - /pages/about/index.vue ($id_YUHz7k427C)
// - /pages/articles/_id.vue ($id_6zZqnJTPUY)
// - /pages/articles/index.vue ($id_yGWZ45LCN9)
// - /pages/articles/old_id.vue ($id_JALomzFFdC)
// - /pages/events/[_id].vue ($id_HFFyh1TufM)
// - /pages/events/index.vue ($id_iFWastzaXo)
// - /pages/gallery/index.vue ($id_kLPEfMNg78)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/teams/index.vue ($id_lkRZi3tNgS)
// --------------------
const $id_AtJ6vZJSeO = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/about/index.vue?macro=true");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/pages/articles/_id.vue?macro=true");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/articles/index.vue?macro=true");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/pages/articles/old_id.vue?macro=true");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/pages/events/[_id].vue?macro=true");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/pages/events/index.vue?macro=true");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/pages/gallery/index.vue?macro=true");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/pages/index.vue?macro=true");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/pages/teams/index.vue?macro=true");

__vite_ssr_exports__.default = [
  {
    name: "about",
    path: "/about",
    file: "C:/projects/raptos/raptors-website/raptors-frontend/pages/about/index.vue",
    children: [],
    meta: __vite_ssr_import_0__.meta,
    alias: __vite_ssr_import_0__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/about/index.vue')
  },
  {
    name: "articles-_id",
    path: "/articles/_id",
    file: "C:/projects/raptos/raptors-website/raptors-frontend/pages/articles/_id.vue",
    children: [],
    meta: __vite_ssr_import_1__.meta,
    alias: __vite_ssr_import_1__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/articles/_id.vue')
  },
  {
    name: "articles",
    path: "/articles",
    file: "C:/projects/raptos/raptors-website/raptors-frontend/pages/articles/index.vue",
    children: [],
    meta: __vite_ssr_import_2__.meta,
    alias: __vite_ssr_import_2__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/articles/index.vue')
  },
  {
    name: "articles-old_id",
    path: "/articles/old_id",
    file: "C:/projects/raptos/raptors-website/raptors-frontend/pages/articles/old_id.vue",
    children: [],
    meta: __vite_ssr_import_3__.meta,
    alias: __vite_ssr_import_3__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/articles/old_id.vue')
  },
  {
    name: "events-_id",
    path: "/events/:_id",
    file: "C:/projects/raptos/raptors-website/raptors-frontend/pages/events/[_id].vue",
    children: [],
    meta: __vite_ssr_import_4__.meta,
    alias: __vite_ssr_import_4__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/events/[_id].vue')
  },
  {
    name: "events",
    path: "/events",
    file: "C:/projects/raptos/raptors-website/raptors-frontend/pages/events/index.vue",
    children: [],
    meta: __vite_ssr_import_5__.meta,
    alias: __vite_ssr_import_5__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/events/index.vue')
  },
  {
    name: "gallery",
    path: "/gallery",
    file: "C:/projects/raptos/raptors-website/raptors-frontend/pages/gallery/index.vue",
    children: [],
    meta: __vite_ssr_import_6__.meta,
    alias: __vite_ssr_import_6__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/gallery/index.vue')
  },
  {
    name: "index",
    path: "/",
    file: "C:/projects/raptos/raptors-website/raptors-frontend/pages/index.vue",
    children: [],
    meta: __vite_ssr_import_7__.meta,
    alias: __vite_ssr_import_7__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/index.vue')
  },
  {
    name: "teams",
    path: "/teams",
    file: "C:/projects/raptos/raptors-website/raptors-frontend/pages/teams/index.vue",
    children: [],
    meta: __vite_ssr_import_8__.meta,
    alias: __vite_ssr_import_8__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/teams/index.vue')
  }
];
}


// --------------------
// Request: /pages/about/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/routes.mjs ($id_AtJ6vZJSeO)
// Dependencies: 
// - /components/Nav.vue ($id_mEigpq54S5)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_q71LhSSAOu = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Nav.vue");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Nav = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<h1>Hello this is the about us page</h1></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/about/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/pages/about/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/Nav.vue
// Parents: 
// - /pages/about/index.vue?macro=true ($id_q71LhSSAOu)
// - /pages/articles/_id.vue?macro=true ($id_zjuNdbrQDn)
// - /pages/articles/index.vue?macro=true ($id_TI2psO9721)
// - /pages/articles/old_id.vue?macro=true ($id_xglqMpLyOu)
// - /pages/events/[_id].vue?macro=true ($id_IC8Nms7DYO)
// - /pages/events/index.vue?macro=true ($id_kXQA6Nm4jd)
// - /pages/gallery/index.vue?macro=true ($id_EhUMlIWZKu)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/teams/index.vue?macro=true ($id_oLGjgDBryD)
// - /pages/about/index.vue ($id_YUHz7k427C)
// - /pages/articles/_id.vue ($id_6zZqnJTPUY)
// - /pages/articles/index.vue ($id_yGWZ45LCN9)
// - /pages/articles/old_id.vue ($id_JALomzFFdC)
// - /pages/events/[_id].vue ($id_HFFyh1TufM)
// - /pages/events/index.vue ($id_iFWastzaXo)
// - /pages/gallery/index.vue ($id_kLPEfMNg78)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/teams/index.vue ($id_lkRZi3tNgS)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /components/Nav.vue?vue&type=style&index=0&scoped=true&lang.css ($id_LFDkqkBlmk)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_mEigpq54S5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<nav${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "navbar navbar-expand-lg navbar-dark bg-dark" }, _attrs))} data-v-738fae98><div class="container-fluid" data-v-738fae98><a class="navbar-brand" href="/" data-v-738fae98>Raptors</a><div class="collapse navbar-collapse" id="navbarNavAltMarkup" data-v-738fae98><div class="navbar-nav ml-auto" data-v-738fae98>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    to: "/gallery",
    class: "nav-link",
    activeClass: "active"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Gallery`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("Gallery")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    to: "/teams",
    class: "nav-link",
    activeClass: "active"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Teams`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("Teams")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    to: "/events",
    class: "nav-link",
    activeClass: "active"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Events`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("Events")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    to: "/articles",
    class: "nav-link",
    activeClass: "active"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`News`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("News")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "nav-link",
    activeClass: "active"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`About us`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("About us")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div></nav>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Nav.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Nav.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-738fae98"],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/components/Nav.vue"]]);
}


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /components/Nav.vue ($id_mEigpq54S5)
// - /pages/about/index.vue?macro=true ($id_q71LhSSAOu)
// - /pages/articles/_id.vue?macro=true ($id_zjuNdbrQDn)
// - /components/ArticleCard.vue ($id_41AutBWftU)
// - /pages/articles/index.vue?macro=true ($id_TI2psO9721)
// - /pages/articles/old_id.vue?macro=true ($id_xglqMpLyOu)
// - /pages/events/[_id].vue?macro=true ($id_IC8Nms7DYO)
// - /pages/events/index.vue?macro=true ($id_kXQA6Nm4jd)
// - /pages/gallery/index.vue?macro=true ($id_EhUMlIWZKu)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/teams/index.vue?macro=true ($id_oLGjgDBryD)
// - /pages/about/index.vue ($id_YUHz7k427C)
// - /pages/articles/_id.vue ($id_6zZqnJTPUY)
// - /pages/articles/index.vue ($id_yGWZ45LCN9)
// - /pages/articles/old_id.vue ($id_JALomzFFdC)
// - /pages/events/[_id].vue ($id_HFFyh1TufM)
// - /pages/events/index.vue ($id_iFWastzaXo)
// - /pages/gallery/index.vue ($id_kLPEfMNg78)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/teams/index.vue ($id_lkRZi3tNgS)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_bGEBDyzLuq)
// Dependencies: 

// --------------------
const $id_shX6HK8fbb = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/projects/raptos/raptors-website/raptors-frontend/node_modules/vue/server-renderer/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/projects/raptos/raptors-website/raptors-frontend/node_modules/vue/server-renderer/index.js\".")
  })


// --------------------
// Request: /components/Nav.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /components/Nav.vue ($id_mEigpq54S5)
// Dependencies: 

// --------------------
const $id_LFDkqkBlmk = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.ml-auto[data-v-738fae98] {\r\n  margin-left: auto;\n}\r\n";
}


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /components/Nav.vue ($id_mEigpq54S5)
// - /pages/about/index.vue?macro=true ($id_q71LhSSAOu)
// - /pages/articles/_id.vue?macro=true ($id_zjuNdbrQDn)
// - /components/ArticleCard.vue ($id_41AutBWftU)
// - /pages/articles/index.vue?macro=true ($id_TI2psO9721)
// - /pages/articles/old_id.vue?macro=true ($id_xglqMpLyOu)
// - /pages/events/[_id].vue?macro=true ($id_IC8Nms7DYO)
// - /pages/events/index.vue?macro=true ($id_kXQA6Nm4jd)
// - /pages/gallery/index.vue?macro=true ($id_EhUMlIWZKu)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/teams/index.vue?macro=true ($id_oLGjgDBryD)
// - /pages/about/index.vue ($id_YUHz7k427C)
// - /pages/articles/_id.vue ($id_6zZqnJTPUY)
// - /pages/articles/index.vue ($id_yGWZ45LCN9)
// - /pages/articles/old_id.vue ($id_JALomzFFdC)
// - /pages/events/[_id].vue ($id_HFFyh1TufM)
// - /pages/events/index.vue ($id_iFWastzaXo)
// - /pages/gallery/index.vue ($id_kLPEfMNg78)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/teams/index.vue ($id_lkRZi3tNgS)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_bGEBDyzLuq)
// Dependencies: 

// --------------------
const $id_u7hjwQB3Fl = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /pages/articles/_id.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/routes.mjs ($id_AtJ6vZJSeO)
// Dependencies: 
// - /components/Nav.vue ($id_mEigpq54S5)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_zjuNdbrQDn = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Nav.vue");


const _sfc_main = {
  async asyncData({ store, route }) {
    console.log(route.params.id)
  },
  data() {
    return {
      article: Object,
      error: null,
    };
  },
  async mounted() {
    // const route = useRoute()
    // try {
    //   // this is some hacked together shit because I don't know what I am doing
    //   const response = await axios.get('http://localhost:1337/api/articles?populate=*')
    //   this.article = response.data.data[route.params._id-1].attributes;
    //   console.log(this.article)
    // } catch (error) {
    //   console.log(error)
    // }
  },
};

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nav = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<h1 class="font-bold text-xl mb-2"> Super awesome article for: ${
    __vite_ssr_import_2__.ssrInterpolate($data.article.Title)
  }</h1><div class="img-cont h-full overflow-hidden rounded-xl col-start-1 col-end-3"><!-- fetch media from strapi using the STRAPI_URL + relative image URL --><img${
    __vite_ssr_import_2__.ssrRenderAttr("src", _ctx.coverImageUrl)
  } alt=""></div><p>${
    __vite_ssr_import_2__.ssrInterpolate($data.article.Content)
  }</p></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/articles/_id.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/pages/articles/_id.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/articles/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/routes.mjs ($id_AtJ6vZJSeO)
// Dependencies: 
// - /components/Nav.vue ($id_mEigpq54S5)
// - /components/ArticleCard.vue ($id_41AutBWftU)
// - /node_modules/axios/index.js ($id_mg2sFjNRNK)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /pages/articles/index.vue?vue&type=style&index=0&scoped=true&lang.css ($id_Ej3m5V3bSo)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_TI2psO9721 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Nav.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/ArticleCard.vue");


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/axios/index.js");


const _sfc_main = {
  name: 'App',
  data () {
    return {
      articles: [],
      error: null,
    }
  },
  async mounted () {
    try {
      const response = await __vite_ssr_import_2__.default.get('http://localhost:1337/api/articles?populate=*')
      this.articles = response.data.data //fkn really... had to do data.data... fuck this shiiiiiiiiiiiit.. this took me forever to figure out

      console.log(this.articles)
    } catch (error) {
      this.error = error;
    }
  }
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nav = __vite_ssr_import_0__.default
  const _component_article_card = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(_attrs)} data-v-34a51f39>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<div class="container" data-v-34a51f39><h1 data-v-34a51f39>This is the super awesome news/articles page</h1></div><div class="container" data-v-34a51f39>`)
  if ($data.error) {
    _push(`<div data-v-34a51f39>${__vite_ssr_import_4__.ssrInterpolate($data.error)}</div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`<!-- <ul v-else>
      <li v-for="article in articles" :key="article.id">
        {{ article.attributes.Title }}
      </li>
    </ul> --><!--[-->`)
  __vite_ssr_import_4__.ssrRenderList($data.articles, (article) => {
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_article_card, {
      key: article.id,
      article: article
    }, null, _parent))
  })
  _push(`<!--]--></div></div>`)
}

const __vite_ssr_import_5__ = await __vite_ssr_import__("/pages/articles/index.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/articles/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-34a51f39"],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/pages/articles/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/ArticleCard.vue
// Parents: 
// - /pages/articles/index.vue?macro=true ($id_TI2psO9721)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/articles/index.vue ($id_yGWZ45LCN9)
// - /pages/index.vue ($id_zKWOlz8EPO)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_41AutBWftU = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");


  const _sfc_main = {
    props: ['article'],
    computed: {
      // computed property to obtain new absolute image URL
      coverImageUrl(){
        //const url = this.$store.state.url
        const url = "http://localhost:1337";
        //const imagePath = this.article.Image.data.attributes.url
        const imagePath = this.article.attributes.Image.data.attributes.formats.small.url
        return url + imagePath
      }
    }
  }

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<li${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "article md:grid gap-6 grid-cols-7 items-center mb-6 md:mb-0" }, _attrs))
  }><header class="col-start-3 col-end-8"><div class="img-cont h-full overflow-hidden rounded-xl col-start-1 col-end-3"><!-- fetch media from strapi using the STRAPI_URL + relative image URL --><img${
    __vite_ssr_import_2__.ssrRenderAttr("src", $options.coverImageUrl)
  } alt=""></div>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    to: `/articles/${$props.article.id}`
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<h1 class="font-bold text-xl mb-2"${
          _scopeId
        }>${
          __vite_ssr_import_2__.ssrInterpolate($props.article.attributes.Title)
        }</h1>`)
      } else {
        return [
          __vite_ssr_import_1__.createVNode("h1", { class: "font-bold text-xl mb-2" }, __vite_ssr_import_1__.toDisplayString($props.article.attributes.Title), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</header></li>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/ArticleCard.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/components/ArticleCard.vue"]]);
}


// --------------------
// Request: /node_modules/axios/index.js
// Parents: 
// - /pages/articles/index.vue?macro=true ($id_TI2psO9721)
// - /pages/articles/old_id.vue?macro=true ($id_xglqMpLyOu)
// - /pages/events/[_id].vue?macro=true ($id_IC8Nms7DYO)
// - /pages/articles/index.vue ($id_yGWZ45LCN9)
// - /pages/articles/old_id.vue ($id_JALomzFFdC)
// - /pages/events/[_id].vue ($id_HFFyh1TufM)
// Dependencies: 

// --------------------
const $id_mg2sFjNRNK = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/projects/raptos/raptors-website/raptors-frontend/node_modules/axios/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/projects/raptos/raptors-website/raptors-frontend/node_modules/axios/index.js\".")
  })


// --------------------
// Request: /pages/articles/index.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /pages/articles/index.vue?macro=true ($id_TI2psO9721)
// - /pages/articles/index.vue ($id_yGWZ45LCN9)
// Dependencies: 

// --------------------
const $id_Ej3m5V3bSo = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.container[data-v-34a51f39] {\r\n  text-align: center;\r\n  margin-top: 5rem;\n}\r\n";
}


// --------------------
// Request: /pages/articles/old_id.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/routes.mjs ($id_AtJ6vZJSeO)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /components/Nav.vue ($id_mEigpq54S5)
// - /node_modules/axios/index.js ($id_mg2sFjNRNK)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_xglqMpLyOu = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Nav.vue");


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/axios/index.js");


const _sfc_main = {
    name: 'App',
  data () {
    return {
      article: Object,
      error: null,
    }
  },
  async mounted() {
    const route = __vite_ssr_import_0__.useRoute()
    try {
      // this is some hacked together shit because I don't know what I am doing
      const response = await __vite_ssr_import_2__.default.get('http://localhost:1337/api/articles?populate=*')
      this.article = response.data.data[route.params._id-1].attributes;
      console.log(this.article)
    } catch (error) {
      console.log(error)
    }
  }
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nav = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<h1 class="font-bold text-xl mb-2">Super awesome article for: ${
    __vite_ssr_import_4__.ssrInterpolate($data.article.Title)
  }</h1><div class="img-cont h-full overflow-hidden rounded-xl col-start-1 col-end-3"><!-- fetch media from strapi using the STRAPI_URL + relative image URL --><img${
    __vite_ssr_import_4__.ssrRenderAttr("src", _ctx.coverImageUrl)
  } alt=""></div><p>${
    __vite_ssr_import_4__.ssrInterpolate($data.article.Content)
  }</p></div>`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/articles/old_id.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/pages/articles/old_id.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/events/[_id].vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/routes.mjs ($id_AtJ6vZJSeO)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /components/Nav.vue ($id_mEigpq54S5)
// - /node_modules/axios/index.js ($id_mg2sFjNRNK)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_IC8Nms7DYO = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Nav.vue");


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/axios/index.js");


const _sfc_main = {
    name: 'App',
  data () {
    return {
      article: Object,
      error: null,
    }
  },
  async mounted() {
    const route = __vite_ssr_import_0__.useRoute()
    try {
      // this is some hacked together shit because I don't know what I am doing
      console.log(route.params._id)
      const response = await __vite_ssr_import_2__.default.get('http://localhost:1337/api/articles?populate=*')
      this.article = response.data.data[route.params._id-1].attributes;
      console.log(this.article)
    } catch (error) {
      console.log(error)
    }
  }
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nav = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<h1 class="font-bold text-xl mb-2">Super awesome article for: ${__vite_ssr_import_4__.ssrInterpolate($data.article.Title)}</h1></div>`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/events/[_id].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/pages/events/[_id].vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/events/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/routes.mjs ($id_AtJ6vZJSeO)
// Dependencies: 
// - /components/Nav.vue ($id_mEigpq54S5)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_kXQA6Nm4jd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Nav.vue");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Nav = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<h1>Hello this is the events page</h1></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/events/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/pages/events/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/gallery/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/routes.mjs ($id_AtJ6vZJSeO)
// Dependencies: 
// - /components/Nav.vue ($id_mEigpq54S5)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_EhUMlIWZKu = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Nav.vue");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Nav = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<h1>Hello this is the gallery page</h1></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/gallery/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/pages/gallery/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/routes.mjs ($id_AtJ6vZJSeO)
// Dependencies: 
// - /components/Nav.vue ($id_mEigpq54S5)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /components/ArticleCard.vue ($id_41AutBWftU)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /pages/index.vue?vue&type=style&index=0&scoped=true&lang.css ($id_SqnmXgZXcZ)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_XdcCQB7w7V = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Nav.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/ArticleCard.vue");


const _sfc_main = {
  name: 'App',
  data () {
    return {
      articles: [],
      error: null,
    }
  },
  methods: {
    test() {
     console.log("hey", this.$store.state.articlesStore.articles)
    }
  },
 mounted () {
    // try {
    //   const response = await axios.get('http://localhost:1337/api/articles?populate=*')
    //   this.articles = response.data.data //fkn really... had to do data.data... fuck this shiiiiiiiiiiiit.. this took me forever to figure out

    //   console.log(this.articles)
    // } catch (error) {
    //   this.error = error;
    // }
  }
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nav = __vite_ssr_import_0__.default
  const _component_NuxtLink = __vite_ssr_import_1__.default
  const _component_article_card = __vite_ssr_import_2__.default

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(_attrs)} data-v-2a183b29>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<div class="container" data-v-2a183b29><h1 data-v-2a183b29>Welcome to the Raptors floorball team</h1>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtLink, { to: "/articles" }, {
    default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`View news!`)
      } else {
        return [
          __vite_ssr_import_3__.createTextVNode("View news!")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div><div class="container" data-v-2a183b29><button type="button" class="btn btn-primary" data-v-2a183b29>Primary</button>`)
  if ($data.error) {
    _push(`<div data-v-2a183b29>${__vite_ssr_import_4__.ssrInterpolate($data.error)}</div>`)
  } else {
    _push(`<ul data-v-2a183b29><!--[-->`)
    __vite_ssr_import_4__.ssrRenderList($data.articles, (article) => {
      _push(`<li data-v-2a183b29>${__vite_ssr_import_4__.ssrInterpolate(article.attributes.Title)}</li>`)
    })
    _push(`<!--]--></ul>`)
  }
  _push(`<!--[-->`)
  __vite_ssr_import_4__.ssrRenderList($data.articles, (article) => {
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_article_card, {
      key: article.id,
      article: article
    }, null, _parent))
  })
  _push(`<!--]--></div></div>`)
}

const __vite_ssr_import_5__ = await __vite_ssr_import__("/pages/index.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-2a183b29"],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/pages/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/index.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/index.vue ($id_zKWOlz8EPO)
// Dependencies: 

// --------------------
const $id_SqnmXgZXcZ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.container[data-v-2a183b29] {\r\n  text-align: center;\r\n  margin-top: 5rem;\n}\r\n";
}


// --------------------
// Request: /pages/teams/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/routes.mjs ($id_AtJ6vZJSeO)
// Dependencies: 
// - /components/Nav.vue ($id_mEigpq54S5)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_oLGjgDBryD = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Nav.vue");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Nav = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<h1>Hello this is the teams page</h1></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/teams/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/pages/teams/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/about/index.vue
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/routes.mjs ($id_AtJ6vZJSeO)
// Dependencies: 
// - /components/Nav.vue ($id_mEigpq54S5)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_YUHz7k427C = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Nav.vue");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Nav = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<h1>Hello this is the about us page</h1></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/about/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/pages/about/index.vue"]]);
}


// --------------------
// Request: /pages/articles/_id.vue
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/routes.mjs ($id_AtJ6vZJSeO)
// Dependencies: 
// - /components/Nav.vue ($id_mEigpq54S5)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_6zZqnJTPUY = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Nav.vue");


const _sfc_main = {
  async asyncData({ store, route }) {
    console.log(route.params.id)
  },
  data() {
    return {
      article: Object,
      error: null,
    };
  },
  async mounted() {
    // const route = useRoute()
    // try {
    //   // this is some hacked together shit because I don't know what I am doing
    //   const response = await axios.get('http://localhost:1337/api/articles?populate=*')
    //   this.article = response.data.data[route.params._id-1].attributes;
    //   console.log(this.article)
    // } catch (error) {
    //   console.log(error)
    // }
  },
};

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nav = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<h1 class="font-bold text-xl mb-2"> Super awesome article for: ${
    __vite_ssr_import_2__.ssrInterpolate($data.article.Title)
  }</h1><div class="img-cont h-full overflow-hidden rounded-xl col-start-1 col-end-3"><!-- fetch media from strapi using the STRAPI_URL + relative image URL --><img${
    __vite_ssr_import_2__.ssrRenderAttr("src", _ctx.coverImageUrl)
  } alt=""></div><p>${
    __vite_ssr_import_2__.ssrInterpolate($data.article.Content)
  }</p></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/articles/_id.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/pages/articles/_id.vue"]]);
}


// --------------------
// Request: /pages/articles/index.vue
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/routes.mjs ($id_AtJ6vZJSeO)
// Dependencies: 
// - /components/Nav.vue ($id_mEigpq54S5)
// - /components/ArticleCard.vue ($id_41AutBWftU)
// - /node_modules/axios/index.js ($id_mg2sFjNRNK)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /pages/articles/index.vue?vue&type=style&index=0&scoped=true&lang.css ($id_Ej3m5V3bSo)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_yGWZ45LCN9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Nav.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/ArticleCard.vue");


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/axios/index.js");


const _sfc_main = {
  name: 'App',
  data () {
    return {
      articles: [],
      error: null,
    }
  },
  async mounted () {
    try {
      const response = await __vite_ssr_import_2__.default.get('http://localhost:1337/api/articles?populate=*')
      this.articles = response.data.data //fkn really... had to do data.data... fuck this shiiiiiiiiiiiit.. this took me forever to figure out

      console.log(this.articles)
    } catch (error) {
      this.error = error;
    }
  }
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nav = __vite_ssr_import_0__.default
  const _component_article_card = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(_attrs)} data-v-34a51f39>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<div class="container" data-v-34a51f39><h1 data-v-34a51f39>This is the super awesome news/articles page</h1></div><div class="container" data-v-34a51f39>`)
  if ($data.error) {
    _push(`<div data-v-34a51f39>${__vite_ssr_import_4__.ssrInterpolate($data.error)}</div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`<!-- <ul v-else>
      <li v-for="article in articles" :key="article.id">
        {{ article.attributes.Title }}
      </li>
    </ul> --><!--[-->`)
  __vite_ssr_import_4__.ssrRenderList($data.articles, (article) => {
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_article_card, {
      key: article.id,
      article: article
    }, null, _parent))
  })
  _push(`<!--]--></div></div>`)
}

const __vite_ssr_import_5__ = await __vite_ssr_import__("/pages/articles/index.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/articles/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-34a51f39"],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/pages/articles/index.vue"]]);
}


// --------------------
// Request: /pages/articles/old_id.vue
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/routes.mjs ($id_AtJ6vZJSeO)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /components/Nav.vue ($id_mEigpq54S5)
// - /node_modules/axios/index.js ($id_mg2sFjNRNK)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_JALomzFFdC = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Nav.vue");


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/axios/index.js");


const _sfc_main = {
    name: 'App',
  data () {
    return {
      article: Object,
      error: null,
    }
  },
  async mounted() {
    const route = __vite_ssr_import_0__.useRoute()
    try {
      // this is some hacked together shit because I don't know what I am doing
      const response = await __vite_ssr_import_2__.default.get('http://localhost:1337/api/articles?populate=*')
      this.article = response.data.data[route.params._id-1].attributes;
      console.log(this.article)
    } catch (error) {
      console.log(error)
    }
  }
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nav = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<h1 class="font-bold text-xl mb-2">Super awesome article for: ${
    __vite_ssr_import_4__.ssrInterpolate($data.article.Title)
  }</h1><div class="img-cont h-full overflow-hidden rounded-xl col-start-1 col-end-3"><!-- fetch media from strapi using the STRAPI_URL + relative image URL --><img${
    __vite_ssr_import_4__.ssrRenderAttr("src", _ctx.coverImageUrl)
  } alt=""></div><p>${
    __vite_ssr_import_4__.ssrInterpolate($data.article.Content)
  }</p></div>`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/articles/old_id.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/pages/articles/old_id.vue"]]);
}


// --------------------
// Request: /pages/events/[_id].vue
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/routes.mjs ($id_AtJ6vZJSeO)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /components/Nav.vue ($id_mEigpq54S5)
// - /node_modules/axios/index.js ($id_mg2sFjNRNK)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_HFFyh1TufM = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Nav.vue");


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/axios/index.js");


const _sfc_main = {
    name: 'App',
  data () {
    return {
      article: Object,
      error: null,
    }
  },
  async mounted() {
    const route = __vite_ssr_import_0__.useRoute()
    try {
      // this is some hacked together shit because I don't know what I am doing
      console.log(route.params._id)
      const response = await __vite_ssr_import_2__.default.get('http://localhost:1337/api/articles?populate=*')
      this.article = response.data.data[route.params._id-1].attributes;
      console.log(this.article)
    } catch (error) {
      console.log(error)
    }
  }
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nav = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<h1 class="font-bold text-xl mb-2">Super awesome article for: ${__vite_ssr_import_4__.ssrInterpolate($data.article.Title)}</h1></div>`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/events/[_id].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/pages/events/[_id].vue"]]);
}


// --------------------
// Request: /pages/events/index.vue
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/routes.mjs ($id_AtJ6vZJSeO)
// Dependencies: 
// - /components/Nav.vue ($id_mEigpq54S5)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_iFWastzaXo = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Nav.vue");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Nav = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<h1>Hello this is the events page</h1></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/events/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/pages/events/index.vue"]]);
}


// --------------------
// Request: /pages/gallery/index.vue
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/routes.mjs ($id_AtJ6vZJSeO)
// Dependencies: 
// - /components/Nav.vue ($id_mEigpq54S5)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_kLPEfMNg78 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Nav.vue");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Nav = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<h1>Hello this is the gallery page</h1></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/gallery/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/pages/gallery/index.vue"]]);
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/routes.mjs ($id_AtJ6vZJSeO)
// Dependencies: 
// - /components/Nav.vue ($id_mEigpq54S5)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /components/ArticleCard.vue ($id_41AutBWftU)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /pages/index.vue?vue&type=style&index=0&scoped=true&lang.css ($id_SqnmXgZXcZ)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_zKWOlz8EPO = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Nav.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/ArticleCard.vue");


const _sfc_main = {
  name: 'App',
  data () {
    return {
      articles: [],
      error: null,
    }
  },
  methods: {
    test() {
     console.log("hey", this.$store.state.articlesStore.articles)
    }
  },
 mounted () {
    // try {
    //   const response = await axios.get('http://localhost:1337/api/articles?populate=*')
    //   this.articles = response.data.data //fkn really... had to do data.data... fuck this shiiiiiiiiiiiit.. this took me forever to figure out

    //   console.log(this.articles)
    // } catch (error) {
    //   this.error = error;
    // }
  }
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nav = __vite_ssr_import_0__.default
  const _component_NuxtLink = __vite_ssr_import_1__.default
  const _component_article_card = __vite_ssr_import_2__.default

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(_attrs)} data-v-2a183b29>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<div class="container" data-v-2a183b29><h1 data-v-2a183b29>Welcome to the Raptors floorball team</h1>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtLink, { to: "/articles" }, {
    default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`View news!`)
      } else {
        return [
          __vite_ssr_import_3__.createTextVNode("View news!")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div><div class="container" data-v-2a183b29><button type="button" class="btn btn-primary" data-v-2a183b29>Primary</button>`)
  if ($data.error) {
    _push(`<div data-v-2a183b29>${__vite_ssr_import_4__.ssrInterpolate($data.error)}</div>`)
  } else {
    _push(`<ul data-v-2a183b29><!--[-->`)
    __vite_ssr_import_4__.ssrRenderList($data.articles, (article) => {
      _push(`<li data-v-2a183b29>${__vite_ssr_import_4__.ssrInterpolate(article.attributes.Title)}</li>`)
    })
    _push(`<!--]--></ul>`)
  }
  _push(`<!--[-->`)
  __vite_ssr_import_4__.ssrRenderList($data.articles, (article) => {
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_article_card, {
      key: article.id,
      article: article
    }, null, _parent))
  })
  _push(`<!--]--></div></div>`)
}

const __vite_ssr_import_5__ = await __vite_ssr_import__("/pages/index.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-2a183b29"],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/pages/index.vue"]]);
}


// --------------------
// Request: /pages/teams/index.vue
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/routes.mjs ($id_AtJ6vZJSeO)
// Dependencies: 
// - /components/Nav.vue ($id_mEigpq54S5)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_lkRZi3tNgS = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Nav.vue");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Nav = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<h1>Hello this is the teams page</h1></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/teams/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/pages/teams/index.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/router.options.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_F1DNNK9yle = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const configRouterOptions = {}
__vite_ssr_exports__.default = {
...configRouterOptions,
};
}


// --------------------
// Request: /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_m1daQiBx4F = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const globalMiddleware = []
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /node_modules/@nuxtjs/strapi/dist/runtime/strapi.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/plugins/server.mjs ($id_IqjynhcOLd)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiAuth.mjs ($id_xXETftpGKs)
// --------------------
const $id_ewqmcZbdJ2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiAuth.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin(async () => {
  const { fetchUser } = __vite_ssr_import_1__.useStrapiAuth();
  await fetchUser();
});
;
}


// --------------------
// Request: /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiAuth.mjs
// Parents: 
// - /node_modules/@nuxtjs/strapi/dist/runtime/strapi.plugin.mjs ($id_ewqmcZbdJ2)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/imports.mjs ($id_IJcw0GjSy7)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiToken.mjs ($id_XHD0kSJ1u4)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiUser.mjs ($id_7VgrS4TpPD)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiClient.mjs ($id_qteyuqsnYu)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiUrl.mjs ($id_9GyGzo2V6V)
// --------------------
const $id_xXETftpGKs = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiToken.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiUser.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiClient.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiUrl.mjs");

const useStrapiAuth = () => {
  const url = __vite_ssr_import_4__.useStrapiUrl();
  const token = __vite_ssr_import_1__.useStrapiToken();
  const user = __vite_ssr_import_2__.useStrapiUser();
  const client = __vite_ssr_import_3__.useStrapiClient();
  const config = __vite_ssr_import_0__.useRuntimeConfig();
  const setToken = (value) => {
    token.value = value;
  };
  const setUser = (value) => {
    user.value = value;
  };
  const fetchUser = async () => {
    if (token.value && !user.value) {
      try {
        user.value = await client("/users/me", { params: config.strapi.auth });
      } catch (e) {
        setToken(null);
      }
    }
    return user;
  };
  const login = async (data) => {
    setToken(null);
    const { jwt } = await client("/auth/local", { method: "POST", body: data });
    setToken(jwt);
    const user2 = await fetchUser();
    return {
      user: user2,
      jwt
    };
  };
  const logout = () => {
    setToken(null);
    setUser(null);
  };
  const register = async (data) => {
    setToken(null);
    const { jwt } = await client("/auth/local/register", { method: "POST", body: data });
    setToken(jwt);
    const user2 = await fetchUser();
    return {
      user: user2,
      jwt
    };
  };
  const forgotPassword = async (data) => {
    setToken(null);
    await client("/auth/forgot-password", { method: "POST", body: data });
  };
  const resetPassword = async (data) => {
    setToken(null);
    const { jwt } = await client("/auth/reset-password", { method: "POST", body: data });
    setToken(jwt);
    const user2 = await fetchUser();
    return {
      user: user2,
      jwt
    };
  };
  const sendEmailConfirmation = async (data) => {
    await client("/auth/send-email-confirmation", { method: "POST", body: data });
  };
  const getProviderAuthenticationUrl = (provider) => {
    return `${url}/connect/${provider}`;
  };
  const authenticateProvider = async (provider, access_token) => {
    setToken(null);
    const { jwt } = await client(`/auth/${provider}/callback`, { method: "GET", params: { access_token } });
    setToken(jwt);
    const user2 = await fetchUser();
    return {
      user: user2,
      jwt
    };
  };
  return {
    setToken,
    setUser,
    fetchUser,
    login,
    logout,
    register,
    forgotPassword,
    resetPassword,
    sendEmailConfirmation,
    getProviderAuthenticationUrl,
    authenticateProvider
  };
};
Object.defineProperty(__vite_ssr_exports__, "useStrapiAuth", { enumerable: true, configurable: true, get(){ return useStrapiAuth }});
;
}


// --------------------
// Request: /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiToken.mjs
// Parents: 
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiAuth.mjs ($id_xXETftpGKs)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiClient.mjs ($id_qteyuqsnYu)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/imports.mjs ($id_IJcw0GjSy7)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_XHD0kSJ1u4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useStrapiToken = () => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const config = __vite_ssr_import_0__.useRuntimeConfig();
  nuxtApp._cookies = nuxtApp._cookies || {};
  if (nuxtApp._cookies[config.strapi.cookieName]) {
    return nuxtApp._cookies[config.strapi.cookieName];
  }
  const cookie = __vite_ssr_import_0__.useCookie(config.strapi.cookieName, config.strapi.cookie);
  nuxtApp._cookies[config.strapi.cookieName] = cookie;
  return cookie;
};
Object.defineProperty(__vite_ssr_exports__, "useStrapiToken", { enumerable: true, configurable: true, get(){ return useStrapiToken }});
;
}


// --------------------
// Request: /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiUser.mjs
// Parents: 
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiAuth.mjs ($id_xXETftpGKs)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/imports.mjs ($id_IJcw0GjSy7)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_7VgrS4TpPD = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useStrapiUser = () => __vite_ssr_import_0__.useState("strapi_user", '$14qUKg9Civ');
Object.defineProperty(__vite_ssr_exports__, "useStrapiUser", { enumerable: true, configurable: true, get(){ return useStrapiUser }});
;
}


// --------------------
// Request: /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiClient.mjs
// Parents: 
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiAuth.mjs ($id_xXETftpGKs)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapi3.mjs ($id_VQTYT7TaXT)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapi4.mjs ($id_ejgU2wlOsT)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiGraphQL.mjs ($id_wvuejfrVt5)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/imports.mjs ($id_IJcw0GjSy7)
// Dependencies: 
// - /node_modules/qs/lib/index.js ($id_ukPp6sv8V6)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiUrl.mjs ($id_9GyGzo2V6V)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiVersion.mjs ($id_v6gKR9sKcp)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiToken.mjs ($id_XHD0kSJ1u4)
// --------------------
const $id_qteyuqsnYu = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/qs/lib/index.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiUrl.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiVersion.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiToken.mjs");

const defaultErrors = (err) => ({
  v4: {
    error: {
      status: 500,
      name: "UnknownError",
      message: err.message,
      details: err
    }
  },
  v3: {
    error: "UnknownError",
    message: err.message,
    statusCode: 500
  }
});
const useStrapiClient = () => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const baseURL = __vite_ssr_import_2__.useStrapiUrl();
  const version = __vite_ssr_import_3__.useStrapiVersion();
  const token = __vite_ssr_import_4__.useStrapiToken();
  return async (url, fetchOptions = {}) => {
    const headers = {};
    if (token && token.value) {
      headers.Authorization = `Bearer ${token.value}`;
    }
    if (version === "v4" && fetchOptions.params) {
      const params = __vite_ssr_import_0__.stringify(fetchOptions.params, { encodeValuesOnly: true });
      if (params) {
        url = `${url}?${params}`;
      }
      delete fetchOptions.params;
    }
    try {
      return await $fetch(url, {
        retry: 0,
        baseURL,
        ...fetchOptions,
        headers: {
          ...headers,
          ...fetchOptions.headers
        }
      });
    } catch (err) {
      const e = err.data || defaultErrors(err)[version];
      nuxt.hooks.callHook("strapi:error", e);
      throw e;
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "useStrapiClient", { enumerable: true, configurable: true, get(){ return useStrapiClient }});
;
}


// --------------------
// Request: /node_modules/qs/lib/index.js
// Parents: 
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiClient.mjs ($id_qteyuqsnYu)
// Dependencies: 

// --------------------
const $id_ukPp6sv8V6 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/projects/raptos/raptors-website/raptors-frontend/node_modules/qs/lib/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/projects/raptos/raptors-website/raptors-frontend/node_modules/qs/lib/index.js\".")
  })


// --------------------
// Request: /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiUrl.mjs
// Parents: 
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiClient.mjs ($id_qteyuqsnYu)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiAuth.mjs ($id_xXETftpGKs)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/imports.mjs ($id_IJcw0GjSy7)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_9GyGzo2V6V = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useStrapiUrl = () => {
  const config = __vite_ssr_import_0__.useRuntimeConfig();
  const version = config.strapi.version;
  return version === "v3" ? config.strapi.url : `${config.strapi.url}${config.strapi.prefix}`;
};
Object.defineProperty(__vite_ssr_exports__, "useStrapiUrl", { enumerable: true, configurable: true, get(){ return useStrapiUrl }});
;
}


// --------------------
// Request: /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiVersion.mjs
// Parents: 
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiClient.mjs ($id_qteyuqsnYu)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapi3.mjs ($id_VQTYT7TaXT)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapi4.mjs ($id_ejgU2wlOsT)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/imports.mjs ($id_IJcw0GjSy7)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_v6gKR9sKcp = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useStrapiVersion = () => {
  const config = __vite_ssr_import_0__.useRuntimeConfig();
  return config.strapi.version;
};
Object.defineProperty(__vite_ssr_exports__, "useStrapiVersion", { enumerable: true, configurable: true, get(){ return useStrapiVersion }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/root-component.mjs
// Parents: 
// - C:/projects/raptos/raptors-website/raptors-frontend/node_modules/nuxt/dist/app/entry ($id_RRF9KhcA6y)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// --------------------
const $id_djKSrJLzLA = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/root-component.mjs ($id_djKSrJLzLA)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/error-component.mjs ($id_ttUrFYAAYm)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_6btoGdWLJh = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

// @ts-ignore
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/error-component.mjs");



const _sfc_main = {
  __name: 'nuxt-root',
  setup(__props, { expose }) {
  expose();

const nuxtApp = __vite_ssr_import_1__.useNuxtApp()
const onResolve = () => nuxtApp.callHook('app:suspense:resolve')

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
if (true && results && results.some(i => i && 'then' in i)) {
  console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
}

// error handling
const error = __vite_ssr_import_1__.useError()
__vite_ssr_import_0__.onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
  if (true) {
    __vite_ssr_import_1__.callWithNuxt(nuxtApp, __vite_ssr_import_1__.throwError, [err])
  }
})

const __returned__ = { nuxtApp, onResolve, results, error, onErrorCaptured: __vite_ssr_import_0__.onErrorCaptured, callWithNuxt: __vite_ssr_import_1__.callWithNuxt, throwError: __vite_ssr_import_1__.throwError, useError: __vite_ssr_import_1__.useError, useNuxtApp: __vite_ssr_import_1__.useNuxtApp, ErrorComponent: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_3__.resolveComponent("App")

  __vite_ssr_import_4__.ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.error) {
        _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorComponent"], { error: $setup.error }, null, _parent))
      } else {
        _push(__vite_ssr_import_4__.ssrRenderComponent(_component_App, null, null, _parent))
      }
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/node_modules/nuxt/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/error-component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// --------------------
const $id_ttUrFYAAYm = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-error-page.vue
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/error-component.mjs ($id_ttUrFYAAYm)
// Dependencies: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_jMbXP0vyaY = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue");



const _sfc_main = {
  __name: 'nuxt-error-page',
  props: {
  error: Object
},
  setup(__props, { expose }) {
  expose();

const props = __props



const error = props.error

// TODO: extract to a separate utility
const stacktrace = (error.stack || '')
  .split('\n')
  .splice(1)
  .map((line) => {
    const text = line
      .replace('webpack:/', '')
      .replace('.vue', '.js') // TODO: Support sourcemap
      .trim()
    return {
      text,
      internal: (line.includes('node_modules') && !line.includes('.cache')) ||
          line.includes('internal') ||
          line.includes('new Promise')
    }
  }).map(i => `<span class="stack${i.internal ? ' internal' : ''}">${i.text}</span>`).join('\n')

// Error page props
const statusCode = String(error.statusCode || 500)
const is404 = statusCode === '404'

const statusMessage = error.statusMessage ?? (is404 ? 'Page Not Found' : 'Internal Server Error')
const description = error.message || error.toString()
const stack = true && !is404 ? error.description || `<pre>${stacktrace}</pre>` : undefined

const ErrorTemplate = is404 ? __vite_ssr_import_0__.default : true ? __vite_ssr_import_2__.default : __vite_ssr_import_1__.default

const __returned__ = { props, error, stacktrace, statusCode, is404, statusMessage, description, stack, ErrorTemplate, Error404: __vite_ssr_import_0__.default, Error500: __vite_ssr_import_1__.default, ErrorDev: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorTemplate"], __vite_ssr_import_3__.mergeProps({ statusCode: $setup.statusCode, statusMessage: $setup.statusMessage, description: $setup.description, stack: $setup.stack }, _attrs), null, _parent))
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/imports.mjs ($id_IJcw0GjSy7)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css ($id_5otrOPr3UP)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_uQ1ND2iuUo = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-404',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "404"
  },
  statusMessage: {
    type: String,
    default: "Not Found"
  },
  description: {
    type: String,
    default: "Sorry, the page you are looking for could not be found."
  },
  backHome: {
    type: String,
    default: "Go back home"
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_1__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: ``
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_1__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-573335c0><div class="fixed left-0 right-0 spotlight z-10" data-v-573335c0></div><div class="max-w-520px text-center z-20" data-v-573335c0><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-573335c0>${
    __vite_ssr_import_3__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-573335c0>${
    __vite_ssr_import_3__.ssrInterpolate($props.description)
  }</p><div class="w-full flex items-center justify-center" data-v-573335c0>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`${__vite_ssr_import_3__.ssrInterpolate($props.backHome)}`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($props.backHome), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-573335c0"],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/imports.mjs
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_qBEL58R1ls)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapi3.mjs ($id_VQTYT7TaXT)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapi4.mjs ($id_ejgU2wlOsT)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiAuth.mjs ($id_xXETftpGKs)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiToken.mjs ($id_XHD0kSJ1u4)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiGraphQL.mjs ($id_wvuejfrVt5)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiClient.mjs ($id_qteyuqsnYu)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiUrl.mjs ($id_9GyGzo2V6V)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiUser.mjs ($id_7VgrS4TpPD)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiVersion.mjs ($id_v6gKR9sKcp)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_27UVWcb1VH)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_aSmmIHQt8x)
// --------------------
const $id_IJcw0GjSy7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.useMeta }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.isVue2 }});
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.isVue3 }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.refreshNuxtData }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.defineNuxtComponent }});
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useNuxtApp }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.defineNuxtPlugin }});
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useRuntimeConfig }});
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useState }});
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useLazyFetch }});
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useCookie }});
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useRequestEvent }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useRouter }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useError }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.defineNuxtLink }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

Object.defineProperty(__vite_ssr_exports__, "withCtx", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.withCtx }});
Object.defineProperty(__vite_ssr_exports__, "withDirectives", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.withDirectives }});
Object.defineProperty(__vite_ssr_exports__, "withKeys", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.withKeys }});
Object.defineProperty(__vite_ssr_exports__, "withMemo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.withMemo }});
Object.defineProperty(__vite_ssr_exports__, "withModifiers", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.withModifiers }});
Object.defineProperty(__vite_ssr_exports__, "withScopeId", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.withScopeId }});
Object.defineProperty(__vite_ssr_exports__, "onActivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onActivated }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeMount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onBeforeMount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUnmount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onBeforeUnmount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUpdate", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onBeforeUpdate }});
Object.defineProperty(__vite_ssr_exports__, "onDeactivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onDeactivated }});
Object.defineProperty(__vite_ssr_exports__, "onErrorCaptured", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onErrorCaptured }});
Object.defineProperty(__vite_ssr_exports__, "onMounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onMounted }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTracked", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onRenderTracked }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTriggered", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onRenderTriggered }});
Object.defineProperty(__vite_ssr_exports__, "onServerPrefetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onServerPrefetch }});
Object.defineProperty(__vite_ssr_exports__, "onUnmounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onUnmounted }});
Object.defineProperty(__vite_ssr_exports__, "onUpdated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onUpdated }});
Object.defineProperty(__vite_ssr_exports__, "computed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.computed }});
Object.defineProperty(__vite_ssr_exports__, "customRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.customRef }});
Object.defineProperty(__vite_ssr_exports__, "isProxy", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.isProxy }});
Object.defineProperty(__vite_ssr_exports__, "isReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.isReactive }});
Object.defineProperty(__vite_ssr_exports__, "isReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.isReadonly }});
Object.defineProperty(__vite_ssr_exports__, "isRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.isRef }});
Object.defineProperty(__vite_ssr_exports__, "markRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.markRaw }});
Object.defineProperty(__vite_ssr_exports__, "proxyRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.proxyRefs }});
Object.defineProperty(__vite_ssr_exports__, "reactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.reactive }});
Object.defineProperty(__vite_ssr_exports__, "readonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.readonly }});
Object.defineProperty(__vite_ssr_exports__, "ref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.ref }});
Object.defineProperty(__vite_ssr_exports__, "shallowReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.shallowReactive }});
Object.defineProperty(__vite_ssr_exports__, "shallowReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.shallowReadonly }});
Object.defineProperty(__vite_ssr_exports__, "shallowRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.shallowRef }});
Object.defineProperty(__vite_ssr_exports__, "toRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.toRaw }});
Object.defineProperty(__vite_ssr_exports__, "toRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.toRef }});
Object.defineProperty(__vite_ssr_exports__, "toRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.toRefs }});
Object.defineProperty(__vite_ssr_exports__, "triggerRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.triggerRef }});
Object.defineProperty(__vite_ssr_exports__, "unref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.unref }});
Object.defineProperty(__vite_ssr_exports__, "watch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.watch }});
Object.defineProperty(__vite_ssr_exports__, "watchEffect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.watchEffect }});
Object.defineProperty(__vite_ssr_exports__, "isShallow", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.isShallow }});
Object.defineProperty(__vite_ssr_exports__, "effect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.effect }});
Object.defineProperty(__vite_ssr_exports__, "effectScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.effectScope }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.getCurrentScope }});
Object.defineProperty(__vite_ssr_exports__, "onScopeDispose", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onScopeDispose }});
Object.defineProperty(__vite_ssr_exports__, "defineComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.defineComponent }});
Object.defineProperty(__vite_ssr_exports__, "defineAsyncComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.defineAsyncComponent }});
Object.defineProperty(__vite_ssr_exports__, "resolveComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.resolveComponent }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentInstance", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.getCurrentInstance }});
Object.defineProperty(__vite_ssr_exports__, "h", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.h }});
Object.defineProperty(__vite_ssr_exports__, "inject", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.inject }});
Object.defineProperty(__vite_ssr_exports__, "nextTick", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.nextTick }});
Object.defineProperty(__vite_ssr_exports__, "provide", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.provide }});
Object.defineProperty(__vite_ssr_exports__, "useAttrs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useAttrs }});
Object.defineProperty(__vite_ssr_exports__, "useCssModule", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useCssModule }});
Object.defineProperty(__vite_ssr_exports__, "useCssVars", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useCssVars }});
Object.defineProperty(__vite_ssr_exports__, "useSlots", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useSlots }});
Object.defineProperty(__vite_ssr_exports__, "useTransitionState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useTransitionState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapi3.mjs");

Object.defineProperty(__vite_ssr_exports__, "useStrapi3", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useStrapi3 }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapi4.mjs");

Object.defineProperty(__vite_ssr_exports__, "useStrapi4", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useStrapi4 }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiAuth.mjs");

Object.defineProperty(__vite_ssr_exports__, "useStrapiAuth", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useStrapiAuth }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiToken.mjs");

Object.defineProperty(__vite_ssr_exports__, "useStrapiToken", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useStrapiToken }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiGraphQL.mjs");

Object.defineProperty(__vite_ssr_exports__, "useStrapiGraphQL", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useStrapiGraphQL }});
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiClient.mjs");

Object.defineProperty(__vite_ssr_exports__, "useStrapiClient", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useStrapiClient }});
const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiUrl.mjs");

Object.defineProperty(__vite_ssr_exports__, "useStrapiUrl", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_10__.useStrapiUrl }});
const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiUser.mjs");

Object.defineProperty(__vite_ssr_exports__, "useStrapiUser", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_11__.useStrapiUser }});
const __vite_ssr_import_12__ = await __vite_ssr_import__("/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiVersion.mjs");

Object.defineProperty(__vite_ssr_exports__, "useStrapiVersion", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_12__.useStrapiVersion }});
const __vite_ssr_import_13__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.definePageMeta }});
const __vite_ssr_import_14__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

Object.defineProperty(__vite_ssr_exports__, "useLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.useLink }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/vue-demi.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/imports.mjs ($id_IJcw0GjSy7)
// Dependencies: 
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_DFcXpE295m)
// --------------------
const $id_qBEL58R1ls = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/capi.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const Vue2 = void 0;
Object.defineProperty(__vite_ssr_exports__, "Vue2", { enumerable: true, configurable: true, get(){ return Vue2 }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/capi.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_qBEL58R1ls)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// --------------------
const $id_DFcXpE295m = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const install = () => {
};
Object.defineProperty(__vite_ssr_exports__, "install", { enumerable: true, configurable: true, get(){ return install }});
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
Object.defineProperty(__vite_ssr_exports__, "set", { enumerable: true, configurable: true, get(){ return set }});
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
Object.defineProperty(__vite_ssr_exports__, "del", { enumerable: true, configurable: true, get(){ return del }});
;
}


// --------------------
// Request: /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapi3.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/imports.mjs ($id_IJcw0GjSy7)
// Dependencies: 
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiVersion.mjs ($id_v6gKR9sKcp)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiClient.mjs ($id_qteyuqsnYu)
// --------------------
const $id_VQTYT7TaXT = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiVersion.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiClient.mjs");

const useStrapi3 = () => {
  const client = __vite_ssr_import_1__.useStrapiClient();
  const version = __vite_ssr_import_0__.useStrapiVersion();
  if (version !== "v3") {
    console.warn("useStrapi3 is only available for v3");
  }
  const count = (contentType, params) => {
    return client(`/${contentType}/count`, { method: "GET", params });
  };
  const find = (contentType, params) => {
    return client(`/${contentType}`, { method: "GET", params });
  };
  const findOne = (contentType, id, params) => {
    return client(`/${contentType}/${id}`, { method: "GET", params });
  };
  const create = (contentType, data) => {
    return client(`/${contentType}`, { method: "POST", body: data });
  };
  const update = (contentType, id, data) => {
    if (typeof id === "object") {
      data = id;
      id = void 0;
    }
    const path = [contentType, id].filter(Boolean).join("/");
    return client(path, { method: "PUT", body: data });
  };
  const _delete = (contentType, id) => {
    const path = [contentType, id].filter(Boolean).join("/");
    return client(path, { method: "DELETE" });
  };
  return {
    count,
    find,
    findOne,
    create,
    update,
    delete: _delete
  };
};
Object.defineProperty(__vite_ssr_exports__, "useStrapi3", { enumerable: true, configurable: true, get(){ return useStrapi3 }});
;
}


// --------------------
// Request: /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapi4.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/imports.mjs ($id_IJcw0GjSy7)
// Dependencies: 
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiVersion.mjs ($id_v6gKR9sKcp)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiClient.mjs ($id_qteyuqsnYu)
// --------------------
const $id_ejgU2wlOsT = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiVersion.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiClient.mjs");

const useStrapi4 = () => {
  const client = __vite_ssr_import_1__.useStrapiClient();
  const version = __vite_ssr_import_0__.useStrapiVersion();
  if (version !== "v4") {
    console.warn("useStrapi4 is only available for v4");
  }
  const find = (contentType, params) => {
    return client(`/${contentType}`, { method: "GET", params });
  };
  const findOne = (contentType, id, params) => {
    return client(`/${contentType}/${id}`, { method: "GET", params });
  };
  const create = (contentType, data) => {
    return client(`/${contentType}`, { method: "POST", body: { data } });
  };
  const update = (contentType, id, data) => {
    if (typeof id === "object") {
      data = id;
      id = void 0;
    }
    const path = [contentType, id].filter(Boolean).join("/");
    return client(path, { method: "PUT", body: { data } });
  };
  const _delete = (contentType, id) => {
    const path = [contentType, id].filter(Boolean).join("/");
    return client(path, { method: "DELETE" });
  };
  return {
    find,
    findOne,
    create,
    update,
    delete: _delete
  };
};
Object.defineProperty(__vite_ssr_exports__, "useStrapi4", { enumerable: true, configurable: true, get(){ return useStrapi4 }});
;
}


// --------------------
// Request: /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiGraphQL.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/imports.mjs ($id_IJcw0GjSy7)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/graphql/index.mjs ($id_IbseLxSkQR)
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiClient.mjs ($id_qteyuqsnYu)
// --------------------
const $id_wvuejfrVt5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/graphql/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiClient.mjs");

const useStrapiGraphQL = () => {
  const client = __vite_ssr_import_2__.useStrapiClient();
  const config = __vite_ssr_import_0__.useRuntimeConfig();
  return (query, variables) => {
    const queryAsString = typeof query === "string" ? query : __vite_ssr_import_1__.print(query);
    return client("/graphql", {
      method: "POST",
      body: {
        query: queryAsString,
        variables
      },
      headers: {
        accept: "application/json"
      },
      baseURL: config.strapi.url
    });
  };
};
Object.defineProperty(__vite_ssr_exports__, "useStrapiGraphQL", { enumerable: true, configurable: true, get(){ return useStrapiGraphQL }});
;
}


// --------------------
// Request: /node_modules/graphql/index.mjs
// Parents: 
// - /node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiGraphQL.mjs ($id_wvuejfrVt5)
// Dependencies: 

// --------------------
const $id_IbseLxSkQR = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/projects/raptos/raptors-website/raptors-frontend/node_modules/graphql/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/projects/raptos/raptors-website/raptors-frontend/node_modules/graphql/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/composables.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/imports.mjs ($id_IJcw0GjSy7)
// Dependencies: 

// --------------------
const $id_27UVWcb1VH = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const warnRuntimeUsage = (method) => console.warn(`${method}() is a compiler-hint helper that is only usable inside the script block of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
const definePageMeta = (meta) => {
  if (true) {
    warnRuntimeUsage("definePageMeta");
  }
};
Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return definePageMeta }});
;
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// Dependencies: 

// --------------------
const $id_5otrOPr3UP = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-573335c0]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);filter:blur(20vh);height:40vh;bottom:-30vh}.gradient-border[data-v-573335c0]{position:relative;border-radius:0.5rem;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}@media (prefers-color-scheme: light){.gradient-border[data-v-573335c0]{background-color:rgba(255, 255, 255, 0.3)}.gradient-border[data-v-573335c0]::before{background:linear-gradient(90deg, #e2e2e2 0%, #e2e2e2 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%)}}@media (prefers-color-scheme: dark){.gradient-border[data-v-573335c0]{background-color:rgba(20, 20, 20, 0.3)}.gradient-border[data-v-573335c0]::before{background:linear-gradient(90deg, #303030 0%, #303030 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%)}}.gradient-border[data-v-573335c0]::before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:0.5rem;padding:2px;width:100%;background-size:400% auto;opacity:0.5;transition:background-position 0.3s ease-in-out, opacity 0.2s ease-in-out;-webkit-mask:linear-gradient(#fff 0 0) content-box,\n            linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,\n                    linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude}.gradient-border[data-v-573335c0]:hover::before{background-position:-50% 0;opacity:1}*[data-v-573335c0],[data-v-573335c0]:before,[data-v-573335c0]:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*[data-v-573335c0]{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}[data-v-573335c0]:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a[data-v-573335c0]{color:inherit;text-decoration:inherit}body[data-v-573335c0]{margin:0;font-family:inherit;line-height:inherit}html[data-v-573335c0]{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\";line-height:1.5}h1[data-v-573335c0],p[data-v-573335c0]{margin:0}h1[data-v-573335c0]{font-size:inherit;font-weight:inherit}.bg-white[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer[data-v-573335c0]{cursor:pointer}.flex[data-v-573335c0]{display:flex}.grid[data-v-573335c0]{display:grid}.place-content-center[data-v-573335c0]{place-content:center}.items-center[data-v-573335c0]{align-items:center}.justify-center[data-v-573335c0]{justify-content:center}.font-sans[data-v-573335c0]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-573335c0]{font-weight:500}.font-light[data-v-573335c0]{font-weight:300}.text-8xl[data-v-573335c0]{font-size:6rem;line-height:1}.text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-573335c0]{line-height:1.25}.mb-8[data-v-573335c0]{margin-bottom:2rem}.mb-16[data-v-573335c0]{margin-bottom:4rem}.max-w-520px[data-v-573335c0]{max-width:520px}.min-h-screen[data-v-573335c0]{min-height:100vh}.overflow-hidden[data-v-573335c0]{overflow:hidden}.px-8[data-v-573335c0]{padding-left:2rem;padding-right:2rem}.py-2[data-v-573335c0]{padding-top:.5rem;padding-bottom:.5rem}.px-4[data-v-573335c0]{padding-left:1rem;padding-right:1rem}.fixed[data-v-573335c0]{position:fixed}.left-0[data-v-573335c0]{left:0px}.right-0[data-v-573335c0]{right:0px}.text-center[data-v-573335c0]{text-align:center}.text-black[data-v-573335c0]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-573335c0]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-573335c0]{width:100%}.z-10[data-v-573335c0]{z-index:10}.z-20[data-v-573335c0]{z-index:20}@media (min-width: 640px){.sm\\:text-4xl[data-v-573335c0]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.sm\\:text-10xl[data-v-573335c0]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-573335c0]{padding-left:0;padding-right:0}.sm\\:py-3[data-v-573335c0]{padding-top:.75rem;padding-bottom:.75rem}.sm\\:px-6[data-v-573335c0]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-573335c0]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/imports.mjs ($id_IJcw0GjSy7)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css ($id_orO3Ccf7NQ)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_FMi1dBhUQk = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-500',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "This page is temporarily unavailable."
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: ``
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-0914425d><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-0914425d></div><div class="max-w-520px text-center" data-v-0914425d><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-0914425d>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-0914425d>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-0914425d"],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// Dependencies: 

// --------------------
const $id_orO3Ccf7NQ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-0914425d]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);filter:blur(20vh)}*[data-v-0914425d],[data-v-0914425d]:before,[data-v-0914425d]:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*[data-v-0914425d]{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}[data-v-0914425d]:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body[data-v-0914425d]{margin:0;font-family:inherit;line-height:inherit}html[data-v-0914425d]{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\";line-height:1.5}h1[data-v-0914425d],p[data-v-0914425d]{margin:0}h1[data-v-0914425d]{font-size:inherit;font-weight:inherit}.bg-white[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.grid[data-v-0914425d]{display:grid}.place-content-center[data-v-0914425d]{place-content:center}.font-sans[data-v-0914425d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-0914425d]{font-weight:500}.font-light[data-v-0914425d]{font-weight:300}.h-1\\/2[data-v-0914425d]{height:50%}.text-8xl[data-v-0914425d]{font-size:6rem;line-height:1}.text-xl[data-v-0914425d]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-0914425d]{line-height:1.25}.mb-8[data-v-0914425d]{margin-bottom:2rem}.mb-16[data-v-0914425d]{margin-bottom:4rem}.max-w-520px[data-v-0914425d]{max-width:520px}.min-h-screen[data-v-0914425d]{min-height:100vh}.overflow-hidden[data-v-0914425d]{overflow:hidden}.px-8[data-v-0914425d]{padding-left:2rem;padding-right:2rem}.fixed[data-v-0914425d]{position:fixed}.left-0[data-v-0914425d]{left:0px}.right-0[data-v-0914425d]{right:0px}.-bottom-1\\/2[data-v-0914425d]{bottom:-50%}.text-center[data-v-0914425d]{text-align:center}.text-black[data-v-0914425d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-0914425d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (min-width: 640px){.sm\\:text-4xl[data-v-0914425d]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-10xl[data-v-0914425d]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-0914425d]{padding-left:0;padding-right:0}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-0914425d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/imports.mjs ($id_IJcw0GjSy7)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css ($id_JpEWTLBcMj)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_vC10oUHchO = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-dev',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."
  },
  stack: {
    type: String,
    default: ""
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: ``
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col" }, _attrs))
  } data-v-1da4697d><div class="fixed left-0 right-0 spotlight" data-v-1da4697d></div><h1 class="text-6xl sm:text-8xl font-medium mb-6" data-v-1da4697d>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight" data-v-1da4697d>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto" data-v-1da4697d><pre class="text-xl font-light leading-tight z-10 p-8" data-v-1da4697d>${
    $props.stack
  }</pre></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-1da4697d"],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// Dependencies: 

// --------------------
const $id_JpEWTLBcMj = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-1da4697d]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*[data-v-1da4697d],[data-v-1da4697d]:before,[data-v-1da4697d]:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*[data-v-1da4697d]{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}[data-v-1da4697d]:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body[data-v-1da4697d]{margin:0;font-family:inherit;line-height:inherit}html[data-v-1da4697d]{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\";line-height:1.5}h1[data-v-1da4697d],p[data-v-1da4697d],pre[data-v-1da4697d]{margin:0}h1[data-v-1da4697d]{font-size:inherit;font-weight:inherit}pre[data-v-1da4697d]{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.bg-white[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5[data-v-1da4697d]{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md[data-v-1da4697d]{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex[data-v-1da4697d]{display:flex}.flex-col[data-v-1da4697d]{flex-direction:column}.flex-1[data-v-1da4697d]{flex:1 1 0%}.font-sans[data-v-1da4697d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-1da4697d]{font-weight:500}.font-light[data-v-1da4697d]{font-weight:300}.h-auto[data-v-1da4697d]{height:auto}.text-xl[data-v-1da4697d]{font-size:1.25rem;line-height:1.75rem}.text-6xl[data-v-1da4697d]{font-size:3.75rem;line-height:1}.leading-tight[data-v-1da4697d]{line-height:1.25}.mb-8[data-v-1da4697d]{margin-bottom:2rem}.mb-6[data-v-1da4697d]{margin-bottom:1.5rem}.min-h-screen[data-v-1da4697d]{min-height:100vh}.overflow-y-auto[data-v-1da4697d]{overflow-y:auto}.p-8[data-v-1da4697d]{padding:2rem}.px-10[data-v-1da4697d]{padding-left:2.5rem;padding-right:2.5rem}.pt-14[data-v-1da4697d]{padding-top:3.5rem}.fixed[data-v-1da4697d]{position:fixed}.left-0[data-v-1da4697d]{left:0px}.right-0[data-v-1da4697d]{right:0px}.text-black[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-1da4697d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10[data-v-1da4697d]{z-index:10}@media (min-width: 640px){.sm\\:text-8xl[data-v-1da4697d]{font-size:6rem;line-height:1}.sm\\:text-2xl[data-v-1da4697d]{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10[data-v-1da4697d]{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/app-component.mjs
// Parents: 
// - C:/projects/raptos/raptors-website/raptors-frontend/node_modules/nuxt/dist/app/entry ($id_RRF9KhcA6y)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_bGEBDyzLuq)
// --------------------
const $id_SWmsHyPXCl = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/app.vue
// Parents: 
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/app-component.mjs ($id_SWmsHyPXCl)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_bGEBDyzLuq = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtPage = __vite_ssr_import_1__.resolveComponent("NuxtPage")

  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtPage, null, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_1__.createVNode(_component_NuxtPage)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/pages/runtime/app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/projects/raptos/raptors-website/raptors-frontend/node_modules/nuxt/dist/pages/runtime/app.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/layout.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_bGEBDyzLuq)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_acUmhqj8VN)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/layouts.mjs ($id_75x0xI9ltS)
// --------------------
const $id_OQA4gz7rLc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/layouts.mjs");

const defaultLayoutTransition = { name: "layout", mode: "out-in" };
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = __vite_ssr_import_2__.useRoute();
    return () => {
      const layout = (__vite_ssr_import_0__.isRef(props.name) ? props.name.value : props.name) ?? route.meta.layout ?? "default";
      const hasLayout = layout && layout in __vite_ssr_import_3__.default;
      if (true && layout && !hasLayout && layout !== "default") {
        console.warn(`Invalid layout \`${layout}\` selected.`);
      }
      return __vite_ssr_import_1__._wrapIf(__vite_ssr_import_0__.Transition, hasLayout && (route.meta.layoutTransition ?? defaultLayoutTransition), __vite_ssr_import_1__._wrapIf(__vite_ssr_import_3__.default[layout], hasLayout, context.slots)).default();
    };
  }
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// --------------------
const $id_75x0xI9ltS = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

__vite_ssr_exports__.default = {};
}


const __modules__ = {
  "C:/projects/raptos/raptors-website/raptors-frontend/node_modules/nuxt/dist/app/entry": $id_RRF9KhcA6y,
  "/node_modules/vue/dist/vue.cjs.js": $id_YPBhX5dq3F,
  "/node_modules/ohmyfetch/dist/index.mjs": $id_eAIXxFjGLW,
  "/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/paths.mjs": $id_zaRTkLTJCK,
  "/node_modules/ufo/dist/index.mjs": $id_YU3gYOEqyI,
  "/node_modules/nuxt/dist/app/index.mjs": $id_NpJ0d20vMd,
  "/node_modules/nuxt/dist/app/nuxt.mjs": $id_4GnUEZ7ifE,
  "/node_modules/hookable/dist/index.mjs": $id_osgRxHGQwS,
  "/node_modules/unctx/dist/index.mjs": $id_pWnKLdtXja,
  "/node_modules/nuxt/dist/app/composables/index.mjs": $id_sGenmuNLlo,
  "/node_modules/nuxt/dist/app/composables/component.mjs": $id_UzRZUO1GKq,
  "/node_modules/vue-router/dist/vue-router.cjs.js": $id_aSmmIHQt8x,
  "/node_modules/nuxt/dist/app/composables/asyncData.mjs": $id_1baiIWALJh,
  "/node_modules/nuxt/dist/app/composables/utils.mjs": $id_31ETNgPfBU,
  "/node_modules/nuxt/dist/app/composables/hydrate.mjs": $id_AGPfGxS2fu,
  "/node_modules/nuxt/dist/app/composables/state.mjs": $id_fYchCJb7XZ,
  "/node_modules/nuxt/dist/app/composables/error.mjs": $id_bBQ8Yk34eC,
  "/node_modules/nuxt/dist/app/composables/fetch.mjs": $id_QfWuTouFBP,
  "/node_modules/nuxt/dist/app/composables/cookie.mjs": $id_URtEHTJ6vX,
  "/node_modules/cookie-es/dist/index.mjs": $id_9JdSYd7S59,
  "/node_modules/h3/dist/index.mjs": $id_V9fe1no0d6,
  "/node_modules/destr/dist/index.mjs": $id_A9FezTYJBC,
  "/node_modules/nuxt/dist/app/composables/ssr.mjs": $id_xIZrp1mIW8,
  "/node_modules/nuxt/dist/app/composables/router.mjs": $id_202QqPjMtu,
  "/node_modules/nuxt/dist/app/components/index.mjs": $id_Fhvn5egKy1,
  "/node_modules/nuxt/dist/app/components/nuxt-link.mjs": $id_6yHtfHy3cx,
  "/node_modules/nuxt/dist/head/runtime/index.mjs": $id_tzUUgT5kx6,
  "/node_modules/nuxt/dist/head/runtime/composables.mjs": $id_BOqVBAGCOv,
  "/node_modules/@vue/shared/dist/shared.cjs.js": $id_hSsGoupXYm,
  "/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/css.mjs": $id_HXX6i0MqMJ,
  "/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/plugins/server.mjs": $id_IqjynhcOLd,
  "/node_modules/nuxt/dist/app/plugins/preload.server.mjs": $id_mHG7oNEQOP,
  "/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/components.plugin.mjs": $id_w6cm2kQ5Fb,
  "/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs": $id_5vEgA2Fgrh,
  "/node_modules/@vueuse/head/dist/index.mjs": $id_wDImTp8t2G,
  "/node_modules/defu/dist/defu.mjs": $id_16rZclLIWW,
  "/node_modules/nuxt/dist/head/runtime/plugin.mjs": $id_omUDQe4IGe,
  "/node_modules/nuxt/dist/head/runtime/components.mjs": $id_sqKdb79FW5,
  "/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/meta.config.mjs": $id_AubK7dl9vx,
  "/node_modules/nuxt/dist/pages/runtime/router.mjs": $id_oJCXe6nyyh,
  "/node_modules/nuxt/dist/pages/runtime/page.mjs": $id_X8FM3AG1sA,
  "/node_modules/nuxt/dist/pages/runtime/utils.mjs": $id_gPQzqsnHwc,
  "/node_modules/nuxt/dist/app/components/utils.mjs": $id_acUmhqj8VN,
  "/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/routes.mjs": $id_AtJ6vZJSeO,
  "/pages/about/index.vue?macro=true": $id_q71LhSSAOu,
  "/components/Nav.vue": $id_mEigpq54S5,
  "/node_modules/vue/server-renderer/index.js": $id_shX6HK8fbb,
  "/components/Nav.vue?vue&type=style&index=0&scoped=true&lang.css": $id_LFDkqkBlmk,
  "/@id/plugin-vue:export-helper": $id_u7hjwQB3Fl,
  "/pages/articles/_id.vue?macro=true": $id_zjuNdbrQDn,
  "/pages/articles/index.vue?macro=true": $id_TI2psO9721,
  "/components/ArticleCard.vue": $id_41AutBWftU,
  "/node_modules/axios/index.js": $id_mg2sFjNRNK,
  "/pages/articles/index.vue?vue&type=style&index=0&scoped=true&lang.css": $id_Ej3m5V3bSo,
  "/pages/articles/old_id.vue?macro=true": $id_xglqMpLyOu,
  "/pages/events/[_id].vue?macro=true": $id_IC8Nms7DYO,
  "/pages/events/index.vue?macro=true": $id_kXQA6Nm4jd,
  "/pages/gallery/index.vue?macro=true": $id_EhUMlIWZKu,
  "/pages/index.vue?macro=true": $id_XdcCQB7w7V,
  "/pages/index.vue?vue&type=style&index=0&scoped=true&lang.css": $id_SqnmXgZXcZ,
  "/pages/teams/index.vue?macro=true": $id_oLGjgDBryD,
  "/pages/about/index.vue": $id_YUHz7k427C,
  "/pages/articles/_id.vue": $id_6zZqnJTPUY,
  "/pages/articles/index.vue": $id_yGWZ45LCN9,
  "/pages/articles/old_id.vue": $id_JALomzFFdC,
  "/pages/events/[_id].vue": $id_HFFyh1TufM,
  "/pages/events/index.vue": $id_iFWastzaXo,
  "/pages/gallery/index.vue": $id_kLPEfMNg78,
  "/pages/index.vue": $id_zKWOlz8EPO,
  "/pages/teams/index.vue": $id_lkRZi3tNgS,
  "/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/router.options.mjs": $id_F1DNNK9yle,
  "/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/middleware.mjs": $id_m1daQiBx4F,
  "/node_modules/@nuxtjs/strapi/dist/runtime/strapi.plugin.mjs": $id_ewqmcZbdJ2,
  "/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiAuth.mjs": $id_xXETftpGKs,
  "/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiToken.mjs": $id_XHD0kSJ1u4,
  "/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiUser.mjs": $id_7VgrS4TpPD,
  "/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiClient.mjs": $id_qteyuqsnYu,
  "/node_modules/qs/lib/index.js": $id_ukPp6sv8V6,
  "/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiUrl.mjs": $id_9GyGzo2V6V,
  "/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiVersion.mjs": $id_v6gKR9sKcp,
  "/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/root-component.mjs": $id_djKSrJLzLA,
  "/node_modules/nuxt/dist/app/components/nuxt-root.vue": $id_6btoGdWLJh,
  "/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/error-component.mjs": $id_ttUrFYAAYm,
  "/node_modules/nuxt/dist/app/components/nuxt-error-page.vue": $id_jMbXP0vyaY,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": $id_uQ1ND2iuUo,
  "/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/imports.mjs": $id_IJcw0GjSy7,
  "/node_modules/nuxt/dist/app/compat/vue-demi.mjs": $id_qBEL58R1ls,
  "/node_modules/nuxt/dist/app/compat/capi.mjs": $id_DFcXpE295m,
  "/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapi3.mjs": $id_VQTYT7TaXT,
  "/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapi4.mjs": $id_ejgU2wlOsT,
  "/node_modules/@nuxtjs/strapi/dist/runtime/composables/useStrapiGraphQL.mjs": $id_wvuejfrVt5,
  "/node_modules/graphql/index.mjs": $id_IbseLxSkQR,
  "/node_modules/nuxt/dist/pages/runtime/composables.mjs": $id_27UVWcb1VH,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css": $id_5otrOPr3UP,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": $id_FMi1dBhUQk,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css": $id_orO3Ccf7NQ,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue": $id_vC10oUHchO,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css": $id_JpEWTLBcMj,
  "/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/app-component.mjs": $id_SWmsHyPXCl,
  "/node_modules/nuxt/dist/pages/runtime/app.vue": $id_bGEBDyzLuq,
  "/node_modules/nuxt/dist/app/components/layout.mjs": $id_OQA4gz7rLc,
  "/@id/virtual:nuxt:C:/projects/raptos/raptors-website/raptors-frontend/.nuxt/layouts.mjs": $id_75x0xI9ltS
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  const cjsModule = {
    get exports () {
      return stubModule.default
    },
    set exports (v) {
      stubModule.default = v
    },
  }

  await mod(
    __ssrContext__.global,
    cjsModule,
    stubModule.default,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("C:/projects/raptos/raptors-website/raptors-frontend/node_modules/nuxt/dist/app/entry")