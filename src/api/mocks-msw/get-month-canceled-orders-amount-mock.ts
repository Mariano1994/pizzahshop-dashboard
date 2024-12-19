
import {http, HttpResponse} from 'msw'
import { GetMonthCanceledOrdersAmountResponse } from '../getMonthCanceledOrdersAmount'

export const getMonthCanceledOrdersAmountMock =  http.get<never, never,GetMonthCanceledOrdersAmountResponse>('/metrics/month-canceled-orders-amount', ()=> {
  return HttpResponse.json({
    amount: 30,
    diffFromLastMonth: 80
  })
})