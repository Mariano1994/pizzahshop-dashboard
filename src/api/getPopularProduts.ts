import { api } from "../lib/axios"

type PopularProductsResponse = {
  amount: number,
  product: string

}[]

export async function GetPopularProducts() {
  const response = await api.get<PopularProductsResponse>('/metrics/popular-products')

  return response.data
}