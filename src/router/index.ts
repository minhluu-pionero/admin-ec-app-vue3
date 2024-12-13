import middlewarePipeline from '@/middleware/middlewarePipeline'
import routes from '@/router/routes'
import NProgress from 'nprogress'
import { trackRouter } from 'vue-gtag-next'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }

  const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : []

  if (middleware.length === 0) {
    return next()
  }

  const context = { to, from, next }

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  })
})

router.afterEach(() => {
  NProgress.done()
})

trackRouter(router)

export default router
