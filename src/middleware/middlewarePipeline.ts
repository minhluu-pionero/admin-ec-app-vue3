export default async function middlewarePipeline(
  context: any,
  middleware: string[],
  index: number,
) {
  const nextMiddleware = middleware[index]

  if (!nextMiddleware) {
    return context.next()
  }

  const middlewareModule = await import(`@/middleware/${nextMiddleware}`)
  const middlewareFunc = middlewareModule.default

  if (typeof middlewareFunc === 'function') {
    return async (params: any) => {
      if (params) {
        return context.next(params)
      }

      await middlewareFunc({
        ...context,
        next: async (params: any) => {
          const result = await middlewarePipeline(context, middleware, index + 1)(params)
          return result
        },
      })
    }
  } else {
    throw new Error(`Middleware at index ${index} is not a valid function.`)
  }
}
