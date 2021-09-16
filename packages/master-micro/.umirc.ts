import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  qiankun: {
    master: {
      sandbox: true,
      // 注册子应用信息
      apps: [
        {
          name: 'umi-app1-micro', // 唯一 id
          entry: '//localhost:8001', // html entry
        },
        {
          name: 'account-micro', // 唯一 id
          // entry: process.env.NODE_ENV === 'development' ? '//localhost:8002' : '/account/', // html entry
          entry: '//localhost:8002', // html entry
        },
        // {
        //   name: 'vue-v2-micro', // 唯一 id
        //   entry: '//localhost:8003', // html entry
        // }
      ],
    },
  },
  routes: [
    {
      path: '/',
      component: '@/pages/layout',
      routes: [
        {
          path: '/dashboard',
          component: '@/pages/dashboard/index',
        },
        {
          path: '/umi-app1-micro',
          microApp: 'umi-app1-micro',
        },
        // {
        //   path: '/vue-v2-micro',
        //   microApp: 'vue-v2-micro',
        // },
        {
          path: '/account-micro',
          microApp: 'account-micro',
        },
      ]
    },
  ],
  fastRefresh: {},
});
