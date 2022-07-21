import { _ as _export_sfc, u as useRoute, a as __nuxt_component_0$1 } from './server.mjs';
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
      article: Object,
      error: null
    };
  },
  async mounted() {
    const route = useRoute();
    try {
      const response = await axios.get("http://localhost:1337/api/articles?populate=*");
      this.article = response.data.data[route.params._id - 1].attributes;
      console.log(this.article);
    } catch (error) {
      console.log(error);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nav = __nuxt_component_0$1;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Nav, null, null, _parent));
  _push(`<h1 class="font-bold text-xl mb-2">Super awesome article for: ${serverRenderer.exports.ssrInterpolate($data.article.Title)}</h1><div class="img-cont h-full overflow-hidden rounded-xl col-start-1 col-end-3"><img${serverRenderer.exports.ssrRenderAttr("src", _ctx.coverImageUrl)} alt=""></div><p>${serverRenderer.exports.ssrInterpolate($data.article.Content)}</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles/[_id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __id_ as default };
//# sourceMappingURL=__id_.45d537ac.mjs.map
