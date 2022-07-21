import { _ as _export_sfc, a as __nuxt_component_0$1, b as __nuxt_component_2 } from './server.mjs';
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
  const _component_article_card = __nuxt_component_2;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)} data-v-777b2730>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Nav, null, null, _parent));
  _push(`<div class="container" data-v-777b2730><h1 data-v-777b2730>This is the super awesome news/articles page</h1></div><div class="container" data-v-777b2730>`);
  if ($data.error) {
    _push(`<div data-v-777b2730>${serverRenderer.exports.ssrInterpolate($data.error)}</div>`);
  } else {
    _push(`<!---->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-777b2730"]]);

export { index as default };
//# sourceMappingURL=index.cd2a6b35.mjs.map
