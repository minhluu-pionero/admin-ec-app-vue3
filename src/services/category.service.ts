import type { CategoryFormType, CategoryListResponse, CategoryType } from '@/types/category.type'
import api, { ApiPath } from '.'

export const getCategoriesApi = (): Promise<CategoryListResponse> => {
  return api(ApiPath.categoryList).then((response) => response as CategoryListResponse)
}

export const createCategoryApi = (payload: CategoryFormType): Promise<CategoryType> => {
  return api(ApiPath.categoryForm).then(() => ({ ...payload, id: new Date().getTime() }))
}

export const updateCategoryApi = (id: number, payload: CategoryFormType): Promise<CategoryType> => {
  return api(ApiPath.categoryForm).then(() => ({ ...payload, id }))
}

export const deleteCategoryApi = (id: number): Promise<number> => {
  return api(ApiPath.categoryForm).then(() => id)
}
