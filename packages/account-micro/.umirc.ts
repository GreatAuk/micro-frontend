import { defineConfig } from 'umi';

export default defineConfig({
  base: '/account-micro',
  publicPath: '/account/',
  devServer: {
    port: 8002
  },
  qiankun: {
    slave: {},
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/success', component: '@/pages/success' },
  ],
  fastRefresh: {},
});
