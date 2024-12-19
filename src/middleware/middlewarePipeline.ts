import type {
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteLocationRaw,
  NavigationGuardNextCallback,
} from 'vue-router'

type ContextType = {
  to: RouteLocationNormalized
  from: RouteLocationNormalized
  next: NavigationGuardNext
}

type MiddlewareType = (context: ContextType) => Promise<void> | void

type NextParamType = RouteLocationRaw | boolean | undefined | NavigationGuardNextCallback

export default async function middlewarePipeline(
  context: ContextType,
  middleware: MiddlewareType[],
  index: number,
): Promise<void> {
  const nextMiddleware = middleware[index]

  if (!nextMiddleware) {
    return context.next()
  }

  const proceedNext = () => {
    return middlewarePipeline(context, middleware, index + 1)
  }

  const nextWrapper: NavigationGuardNext = (param?: NextParamType) => {
    if (param instanceof Error || typeof param === 'boolean' || param === undefined || param) {
      return context.next(param as RouteLocationRaw);
    }
    proceedNext();
  };

  return nextMiddleware({
    ...context,
    next: nextWrapper,
  })
}
