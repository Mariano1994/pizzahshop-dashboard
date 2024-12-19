import {http, HttpResponse } from 'msw'
import { GetMonthOrdersRevenueResponse } from '../getMonthOrdersRevenue'


export const getMonthRevenueMock = http.get<never, never,GetMonthOrdersRevenueResponse>('/metrics/month-receipt', ()=> {
  return HttpResponse.json({
    receipt: 300,
    diffFromLastMonth: 28,
  })
})