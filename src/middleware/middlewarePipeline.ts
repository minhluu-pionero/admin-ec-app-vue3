import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

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

  type NextParam = string | RouteLocationNormalized | undefined;

  const nextWrapper: NavigationGuardNext = (param?: NextParam) => {
    if (param) {
      return context.next(param);
    }

    return proceedNext();
  };

  return nextMiddleware({
    ...context,
    next: nextWrapper,
  });
}
