import { api } from "../lib/axios"

interface GetMonthOrdersRevenueResponse {
  receipt: number
  diffFromLastMonth: number
}


export async function getMonthOrdersRevenue() {
  const response = await api.get<GetMonthOrdersRevenueResponse>('/metrics/month-receipt')

  return response.data
}