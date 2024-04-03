import { defineModule } from '@directus/extensions-sdk';
import { defineComponent, resolveComponent, openBlock, createBlock, withCtx, createTextVNode } from 'vue';

var _sfc_main = defineComponent({});

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_private_view = resolveComponent("private-view");
  return openBlock(), createBlock(_component_private_view, { title: "My Custom Module" }, {
    default: withCtx(() => [
      createTextVNode("Content goes here... \u4E48\u4E48\u54D2")
    ]),
    _: 1
    /* STABLE */
  });
}
var ModuleComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "module.vue"]]);

var e0 = defineModule({
  id: "custom",
  name: "Custom",
  icon: "box",
  routes: [
    {
      path: "",
      component: ModuleComponent
    }
  ]
});

const interfaces = [];const displays = [];const layouts = [];const modules = [e0];const panels = [];const themes = [];const operations = [];

export { displays, interfaces, layouts, modules, operations, panels, themes };
