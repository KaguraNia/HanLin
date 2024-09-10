// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/shielder/shielder/%E5%89%8D%E7%AB%AF/vue/Demo1.0/node_modules/.store/vite@5.1.3/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/shielder/shielder/%E5%89%8D%E7%AB%AF/vue/Demo1.0/node_modules/.store/@vitejs+plugin-vue@5.0.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueSetupExtend from "file:///D:/shielder/shielder/%E5%89%8D%E7%AB%AF/vue/Demo1.0/node_modules/.store/vite-plugin-vue-setup-extend@0.4.0/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import AutoImport from "file:///D:/shielder/shielder/%E5%89%8D%E7%AB%AF/vue/Demo1.0/node_modules/.store/unplugin-auto-import@0.17.5/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/shielder/shielder/%E5%89%8D%E7%AB%AF/vue/Demo1.0/node_modules/.store/unplugin-vue-components@0.26.0/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/shielder/shielder/%E5%89%8D%E7%AB%AF/vue/Demo1.0/node_modules/.store/unplugin-vue-components@0.26.0/node_modules/unplugin-vue-components/dist/resolvers.js";
import ElementPlus from "file:///D:/shielder/shielder/%E5%89%8D%E7%AB%AF/vue/Demo1.0/node_modules/.store/unplugin-element-plus@0.8.0/node_modules/unplugin-element-plus/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/shielder/shielder/%E5%89%8D%E7%AB%AF/vue/Demo1.0/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    // vue(),
    VueSetupExtend(),
    ElementPlus(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    vue()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://e.dxy.net",
        // 后台接口域名
        ws: true,
        //如果要代理 websockets，配置这个参数
        secure: false,
        // 如果是https接口，需要配置这个参数
        changeOrigin: true
        //是否跨域
      }
    }
  }
  // module.exports = {
  //   devServer: {
  //     proxy: {
  //       //为所有的服务器接口起一个别名前缀，为了和vue脚手架中其他页面的路由地址区分
  //       '/api': {
  //         target: 'http://localhost:3000/',//自己的服务器端口3000
  //         changeOrigin: true,//打开跨域
  //         pathRewrite: {
  //           "^/api": ""
  //           //因为真实的服务器端的地址中不包含/api ，所以应该将程序中的/api删除（替换空字符串），再和target中的基础路径拼接起来作为发送到服务器端的最终请求地址
  //         }
  //       }
  //     }
  //   }
  // }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxzaGllbGRlclxcXFxzaGllbGRlclxcXFxcdTUyNERcdTdBRUZcXFxcdnVlXFxcXERlbW8xLjBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHNoaWVsZGVyXFxcXHNoaWVsZGVyXFxcXFx1NTI0RFx1N0FFRlxcXFx2dWVcXFxcRGVtbzEuMFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovc2hpZWxkZXIvc2hpZWxkZXIvJUU1JTg5JThEJUU3JUFCJUFGL3Z1ZS9EZW1vMS4wL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBWdWVTZXR1cEV4dGVuZCBmcm9tICd2aXRlLXBsdWdpbi12dWUtc2V0dXAtZXh0ZW5kJ1xuXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG5cbmltcG9ydCBFbGVtZW50UGx1cyBmcm9tICd1bnBsdWdpbi1lbGVtZW50LXBsdXMvdml0ZSdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICAvLyB2dWUoKSxcbiAgICBWdWVTZXR1cEV4dGVuZCgpLFxuICAgIEVsZW1lbnRQbHVzKCksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxuICAgIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgICB2dWUoKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfSxcbiAgZGV2U2VydmVyOiB7XG4gICAgcHJveHk6IHtcbiAgICAgICAgJy9hcGknOiB7XG4gICAgICAgICAgICB0YXJnZXQ6ICdodHRwOi8vZS5keHkubmV0JywgIC8vIFx1NTQwRVx1NTNGMFx1NjNBNVx1NTNFM1x1NTdERlx1NTQwRFxuICAgICAgICAgICAgd3M6IHRydWUsICAgICAgICAvL1x1NTk4Mlx1Njc5Q1x1ODk4MVx1NEVFM1x1NzQwNiB3ZWJzb2NrZXRzXHVGRjBDXHU5MTREXHU3RjZFXHU4RkQ5XHU0RTJBXHU1M0MyXHU2NTcwXG4gICAgICAgICAgICBzZWN1cmU6IGZhbHNlLCAgLy8gXHU1OTgyXHU2NzlDXHU2NjJGaHR0cHNcdTYzQTVcdTUzRTNcdUZGMENcdTk3MDBcdTg5ODFcdTkxNERcdTdGNkVcdThGRDlcdTRFMkFcdTUzQzJcdTY1NzBcbiAgICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSwgIC8vXHU2NjJGXHU1NDI2XHU4REU4XHU1N0RGXG4gICAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vICAgZGV2U2VydmVyOiB7XG4gIC8vICAgICBwcm94eToge1xuICAvLyAgICAgICAvL1x1NEUzQVx1NjI0MFx1NjcwOVx1NzY4NFx1NjcwRFx1NTJBMVx1NTY2OFx1NjNBNVx1NTNFM1x1OEQ3N1x1NEUwMFx1NEUyQVx1NTIyQlx1NTQwRFx1NTI0RFx1N0YwMFx1RkYwQ1x1NEUzQVx1NEU4Nlx1NTQ4Q3Z1ZVx1ODExQVx1NjI0Qlx1NjdCNlx1NEUyRFx1NTE3Nlx1NEVENlx1OTg3NVx1OTc2Mlx1NzY4NFx1OERFRlx1NzUzMVx1NTczMFx1NTc0MFx1NTMzQVx1NTIwNlxuICAvLyAgICAgICAnL2FwaSc6IHtcbiAgLy8gICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJywvL1x1ODFFQVx1NURGMVx1NzY4NFx1NjcwRFx1NTJBMVx1NTY2OFx1N0FFRlx1NTNFMzMwMDBcbiAgLy8gICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsLy9cdTYyNTNcdTVGMDBcdThERThcdTU3REZcbiAgLy8gICAgICAgICBwYXRoUmV3cml0ZToge1xuICAvLyAgICAgICAgICAgXCJeL2FwaVwiOiBcIlwiXG4gIC8vICAgICAgICAgICAvL1x1NTZFMFx1NEUzQVx1NzcxRlx1NUI5RVx1NzY4NFx1NjcwRFx1NTJBMVx1NTY2OFx1N0FFRlx1NzY4NFx1NTczMFx1NTc0MFx1NEUyRFx1NEUwRFx1NTMwNVx1NTQyQi9hcGkgXHVGRjBDXHU2MjQwXHU0RUU1XHU1RTk0XHU4QkU1XHU1QzA2XHU3QTBCXHU1RThGXHU0RTJEXHU3Njg0L2FwaVx1NTIyMFx1OTY2NFx1RkYwOFx1NjZGRlx1NjM2Mlx1N0E3QVx1NUI1N1x1N0IyNlx1NEUzMlx1RkYwOVx1RkYwQ1x1NTE4RFx1NTQ4Q3RhcmdldFx1NEUyRFx1NzY4NFx1NTdGQVx1Nzg0MFx1OERFRlx1NUY4NFx1NjJGQ1x1NjNBNVx1OEQ3N1x1Njc2NVx1NEY1Q1x1NEUzQVx1NTNEMVx1OTAwMVx1NTIzMFx1NjcwRFx1NTJBMVx1NTY2OFx1N0FFRlx1NzY4NFx1NjcwMFx1N0VDOFx1OEJGN1x1NkM0Mlx1NTczMFx1NTc0MFxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxufSlcblxuXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVULFNBQVMsZUFBZSxXQUFXO0FBRTFWLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLG9CQUFvQjtBQUUzQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQUVwQyxPQUFPLGlCQUFpQjtBQVZpSyxJQUFNLDJDQUEyQztBQWExTyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUE7QUFBQSxJQUVQLGVBQWU7QUFBQSxJQUNmLFlBQVk7QUFBQSxJQUNaLFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLElBQ25DLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLElBQ25DLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxFQUNOO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1QsT0FBTztBQUFBLE1BQ0gsUUFBUTtBQUFBLFFBQ0osUUFBUTtBQUFBO0FBQUEsUUFDUixJQUFJO0FBQUE7QUFBQSxRQUNKLFFBQVE7QUFBQTtBQUFBLFFBQ1IsY0FBYztBQUFBO0FBQUEsTUFDbEI7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdCRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
