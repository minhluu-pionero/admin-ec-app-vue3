import type { NavigationGuardNext, RouteLocationNormalized, RouteLocationRaw, NavigationGuardNextCallback } from 'vue-router';

interface Context {
  to: RouteLocationNormalized;
  from: RouteLocationNormalized;
  next: NavigationGuardNext;
}

type Middleware = (context: Context & { next: NavigationGuardNext }) => Promise<void> | void;

export default async function middlewarePipeline(
  context: Context,
  middleware: Middleware[],
  index: number
): Promise<void> {
  const nextMiddleware = middleware[index];

  if (!nextMiddleware) {
    return context.next();
  }

  const proceedNext = () => {
    return middlewarePipeline(context, middleware, index + 1);
  };

  type NextParam = RouteLocationRaw | boolean | undefined | NavigationGuardNextCallback;

  const nextWrapper: NavigationGuardNext = (param?: NextParam) => {
    if (param instanceof Error) {
      return context.next(param);
    }

    if (typeof param === 'boolean' || param === undefined) {
      return context.next(param);
    }

    if (param) {
      return context.next(param as RouteLocationRaw);
    }

    proceedNext();
  };

  return nextMiddleware({
    ...context,
    next: nextWrapper,
  });
}
