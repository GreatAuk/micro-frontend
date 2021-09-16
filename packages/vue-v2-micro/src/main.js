import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import routes from "./router";

import "./public-path";

Vue.config.productionTip = false;

let router = null;
let vueInstance = null;

function render(props = {}) {
  const { container } = props;
  // props 组件通信
  router = new VueRouter({
    mode: "history",
    base: window.__POWERED_BY_QIANKUN__ ? "/vue-v2-micro" : "/",
    routes,
  });

  vueInstance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app"); // 这里是挂载到自己的HTML中，基座会拿到这个挂载后的HTML，将其插入进去
}

function storeTest(props) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) =>
        console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true
    );
  props.setGlobalState &&
    props.setGlobalState({
      ignore: props.name,
      user: {
        name: props.name,
      },
    });
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log("vue-v2-micro app bootstraped");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log(`props from parent`, props);
  render(props);
  storeTest(props);
  // ReactDOM.render(<App />, document.getElementById("react15Root"));
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  vueInstance.$destroy();
  vueInstance.$el.innerHTML = "";
  vueInstance = null;
  router = null;
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log("vue-v2-micro update props", props);
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
