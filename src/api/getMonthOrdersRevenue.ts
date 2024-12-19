import { api } from "../lib/axios"

export interface GetMonthOrdersRevenueResponse {
  receipt: number
  diffFromLastMonth: number
}


export async function getMonthOrdersRevenue() {
  const response = await api.get<GetMonthOrdersRevenueResponse>('/metrics/month-receipt')

  return response.data
}