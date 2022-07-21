import { _ as _export_sfc, a as __nuxt_component_0$1, c as __nuxt_component_1, b as __nuxt_component_2 } from './server.mjs';
import axios from 'axios';
import { s as serverRenderer, v as vue_cjs_prod } from './renderer.mjs';
import 'ufo';
import 'qs';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'h3';
import 'ohmyfetch';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';
import 'unenv/runtime/mock/proxy';
import 'stream';

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
  const _component_Nav = __nuxt_component_0$1;
  const _component_NuxtLink = __nuxt_component_1;
  const _component_article_card = __nuxt_component_2;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)} data-v-12a2f5b4>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Nav, null, null, _parent));
  _push(`<div class="container" data-v-12a2f5b4><h1 data-v-12a2f5b4>Welcome to the Raptors floorball team</h1>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: "/articles" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`View news!`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("View news!")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="container" data-v-12a2f5b4>`);
  if ($data.error) {
    _push(`<div data-v-12a2f5b4>${serverRenderer.exports.ssrInterpolate($data.error)}</div>`);
  } else {
    _push(`<ul data-v-12a2f5b4><!--[-->`);
    serverRenderer.exports.ssrRenderList($data.articles, (article) => {
      _push(`<li data-v-12a2f5b4>${serverRenderer.exports.ssrInterpolate(article.attributes.Title)}</li>`);
    });
    _push(`<!--]--></ul>`);
  }
  _push(`<!--[-->`);
  serverRenderer.exports.ssrRenderList($data.articles, (article) => {
    _push(serverRenderer.exports.ssrRenderComponent(_component_article_card, {
      key: article.id,
      article
    }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-12a2f5b4"]]);

export { index as default };
//# sourceMappingURL=index.47d72488.mjs.map
