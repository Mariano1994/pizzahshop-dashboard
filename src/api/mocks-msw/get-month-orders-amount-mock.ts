import {http, HttpResponse} from 'msw'
import {GetMonthOrdersAmountResponse} from '../getMonthOrdersAmount'


export const getMonthOrdersAmountMock = http.get<never, never, GetMonthOrdersAmountResponse>('/metrics/month-orders-amount', ()=> {
  return HttpResponse.json({
    amount: 50,
    diffFromLastMonth: 10
  })
})