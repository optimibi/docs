export const redirects = JSON.parse("{\"/api/intro.html\":\"/api/6tPT1m9obCfPwO7kZ/\",\"/documentation/intro.html\":\"/documentation/TK3azSid/\",\"/documentation/Start/20%20%E7%AC%AC%E4%B8%80%E4%B8%AA%E9%A1%B5%E9%9D%A2.html\":\"/documentation/Start/5A5oETQvGt02Hfl3gWid/\",\"/documentation/Update/2024-7%20v6.06.html\":\"/documentation/Update/9GZxGdmid/\"}")

export const routes = Object.fromEntries([
  ["/api/6tPT1m9obCfPwO7kZ/", { loader: () => import(/* webpackChunkName: "api_6tPT1m9obCfPwO7kZ_index.html" */"C:/Users/Administrator/Desktop/workspace/optimibi/docs/docs/.vuepress/.temp/pages/api/6tPT1m9obCfPwO7kZ/index.html.js"), meta: {"title":"Start page"} }],
  ["/documentation/TK3azSid/", { loader: () => import(/* webpackChunkName: "documentation_TK3azSid_index.html" */"C:/Users/Administrator/Desktop/workspace/optimibi/docs/docs/.vuepress/.temp/pages/documentation/TK3azSid/index.html.js"), meta: {"title":"Welcome"} }],
  ["/documentation/", { loader: () => import(/* webpackChunkName: "documentation_index.html" */"C:/Users/Administrator/Desktop/workspace/optimibi/docs/docs/.vuepress/.temp/pages/documentation/index.html.js"), meta: {"title":"Welcome"} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "zh_index.html" */"C:/Users/Administrator/Desktop/workspace/optimibi/docs/docs/.vuepress/.temp/pages/zh/index.html.js"), meta: {"title":""} }],
  ["/documentation/Start/5A5oETQvGt02Hfl3gWid/", { loader: () => import(/* webpackChunkName: "documentation_Start_5A5oETQvGt02Hfl3gWid_index.html" */"C:/Users/Administrator/Desktop/workspace/optimibi/docs/docs/.vuepress/.temp/pages/documentation/Start/5A5oETQvGt02Hfl3gWid/index.html.js"), meta: {"title":"First analysis repor"} }],
  ["/documentation/Update/9GZxGdmid/", { loader: () => import(/* webpackChunkName: "documentation_Update_9GZxGdmid_index.html" */"C:/Users/Administrator/Desktop/workspace/optimibi/docs/docs/.vuepress/.temp/pages/documentation/Update/9GZxGdmid/index.html.js"), meta: {"title":"2024-7 v6.06"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Administrator/Desktop/workspace/optimibi/docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
