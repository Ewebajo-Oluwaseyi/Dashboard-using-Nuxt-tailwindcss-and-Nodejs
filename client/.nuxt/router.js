import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1a1c5384 = () => interopDefault(import('..\\pages\\addblog\\index.vue' /* webpackChunkName: "pages/addblog/index" */))
const _e7d09b1e = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _61813d0d = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _10139c50 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _5e219d19 = () => interopDefault(import('..\\pages\\blog\\_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _41277993 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/addblog",
    component: _1a1c5384,
    name: "addblog"
  }, {
    path: "/blog",
    component: _e7d09b1e,
    name: "blog"
  }, {
    path: "/dashboard",
    component: _61813d0d,
    name: "dashboard"
  }, {
    path: "/register",
    component: _10139c50,
    name: "register"
  }, {
    path: "/blog/:id",
    component: _5e219d19,
    name: "blog-id"
  }, {
    path: "/",
    component: _41277993,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
