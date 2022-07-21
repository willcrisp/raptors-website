import { _ as _export_sfc, u as useRoute, a as __nuxt_component_0 } from "./server.mjs";
import { useSSRContext } from "vue";
import "vue-router";
import axios from "axios";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "ufo";
import "#internal/nitro";
import "qs";
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
  const _component_Nav = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Nav, null, null, _parent));
  _push(`<h1 class="font-bold text-xl mb-2">Super awesome article for: ${ssrInterpolate($data.article.Title)}</h1><div class="img-cont h-full overflow-hidden rounded-xl col-start-1 col-end-3"><img${ssrRenderAttr("src", _ctx.coverImageUrl)} alt=""></div><p>${ssrInterpolate($data.article.Content)}</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles/[_id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __id_ as default };
