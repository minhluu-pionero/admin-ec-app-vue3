import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

interface Context {
  to: RouteLocationNormalized
  from: RouteLocationNormalized
  next: NavigationGuardNext
}

type Middleware = (context: Context & { next: (param?: any) => void }) => Promise<void> | void

export default async function middlewarePipeline(
  context: Context,
  middleware: Middleware[],
  index: number
): Promise<void> {
  const nextMiddleware = middleware[index]

  if (!nextMiddleware) {
    return context.next()
  }

  const proceedNext = () => {
    return middlewarePipeline(context, middleware, index + 1)
  }

  const nextWrapper = (param?: any) => {
    if (param) {
      return context.next(param)
    }
    return proceedNext()
  }

  return nextMiddleware({
    ...context,
    next: nextWrapper,
  })
}
