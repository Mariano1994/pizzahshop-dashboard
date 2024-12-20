import {http, HttpResponse} from 'msw'
import {GetDailyRevenueInPeriodResponse } from '../getDailyRevenueInPeriod'



export const getDailyRevenueInPeriodMock = http.get<never, never, GetDailyRevenueInPeriodResponse>('/metrics/daily-receipt-in-period', ()=> {
  return HttpResponse.json([
    {date: '01/02/2024', receipt: 6665},
    {date: '02/02/2024', receipt: 865},
    {date: '03/02/2024', receipt: 565},
    {date: '04/02/2024', receipt: 3865},
    {date: '05/02/2024', receipt: 365},
    {date: '06/02/2024', receipt: 6656},
    {date: '07/02/2024', receipt: 6665},
  ])
})