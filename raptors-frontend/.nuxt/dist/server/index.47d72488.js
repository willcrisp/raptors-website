import { _ as _export_sfc, a as __nuxt_component_0, c as __nuxt_component_1, b as __nuxt_component_2 } from "./server.mjs";
import axios from "axios";
import { withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import "ufo";
import "#internal/nitro";
import "vue-router";
import "qs";
const _sfc_main = {
  name: "App",
  data() {
    return {
      articles: [],
      error: null
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:1337/api/articles?populate=*");
      this.articles = response.data.data;
      console.log(this.articles);
    } catch (error) {
      this.error = error;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nav = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_1;
  const _component_article_card = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-12a2f5b4>`);
  _push(ssrRenderComponent(_component_Nav, null, null, _parent));
  _push(`<div class="container" data-v-12a2f5b4><h1 data-v-12a2f5b4>Welcome to the Raptors floorball team</h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/articles" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`View news!`);
      } else {
        return [
          createTextVNode("View news!")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="container" data-v-12a2f5b4>`);
  if ($data.error) {
    _push(`<div data-v-12a2f5b4>${ssrInterpolate($data.error)}</div>`);
  } else {
    _push(`<ul data-v-12a2f5b4><!--[-->`);
    ssrRenderList($data.articles, (article) => {
      _push(`<li data-v-12a2f5b4>${ssrInterpolate(article.attributes.Title)}</li>`);
    });
    _push(`<!--]--></ul>`);
  }
  _push(`<!--[-->`);
  ssrRenderList($data.articles, (article) => {
    _push(ssrRenderComponent(_component_article_card, {
      key: article.id,
      article
    }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-12a2f5b4"]]);
export { index as default };
