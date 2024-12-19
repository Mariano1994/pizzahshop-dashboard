import {http, HttpResponse} from 'msw'
import {GetDayOrderAmountResponse} from '../getDayOrdersAmount'

export const getDayOrdersAmountMock = http.get<never,never, GetDayOrderAmountResponse>('/metrics/day-orders-amount', ()=> {
  return HttpResponse.json({
    amount: 20,
    diffFromYesterday: 15
  })

})