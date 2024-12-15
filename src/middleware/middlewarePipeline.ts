import type { NavigationGuardNext } from 'vue-router'

interface Context {
  to: unknown
  from: unknown
  next: NavigationGuardNext
}

export default async function middlewarePipeline(
  context: Context,
  middleware: Function[],
  index: number
): Promise<void> {
  const nextMiddleware = middleware[index]

  if (!nextMiddleware) {
    return context.next()
  }

  console.log(`Running middleware [${index + 1}/${middleware.length}]: ${nextMiddleware.name}`)

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
