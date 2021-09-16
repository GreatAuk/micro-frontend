import { defineConfig } from 'umi';
import { join } from 'path'

const resolvePackage = (relativePath: string) => join(__dirname, relativePath);

const extraBabelIncludes = [resolvePackage('../api')];

export default defineConfig({
  base: '/umi-app1-micro',
  publicPath: '/umi-app1-micro/',
  devServer: {
    port: 8001
  },
  qiankun: {
    slave: {},
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  openAPI: [
    {
      requestLibPath: "import { request } from 'umi'",
      schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
      projectName: 'swagger',
    },
  ],
  chainWebpack($) {
    $.module.rules.get('ts-in-node_modules').include.add(extraBabelIncludes);
  },
});
