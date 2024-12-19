import {setupWorker} from 'msw/browser'
import { env } from '../../env'
import { signInMock } from './sign-in-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount-mock'
import { getMonthRevenueMock } from './get-month-orders-revenue-mock'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period'
import { getPopularProductsMock } from './get-popular-products-mock'
import { getMonthOrdersAmountMock } from './get-month-orders-amount-mock'


export const worker = setupWorker(
  signInMock, 
  registerRestaurantMock, 
  getDayOrdersAmountMock, 
  getDailyRevenueInPeriodMock,
  getMonthCanceledOrdersAmountMock, 
  getMonthRevenueMock,
  getPopularProductsMock,
  getMonthOrdersAmountMock,
)

export async function enableMSW() {
if(env.MODE !== 'test') {
  return
}

await worker.start()
}