import {http, HttpResponse} from 'msw'
import { getOrderDetailsProps, GetOrderDetailsResponse } from '../getOrderDetails'

export const GetOrderDetailsMock = http.get<getOrderDetailsProps, never, GetOrderDetailsResponse>('/orders/:orderId', ({params})=> {

  return HttpResponse.json({
    id: params.orderId,
    createdAt: new Date().toDateString(),
    totalInCents: 4314,
    status: 'delivering',
    customer: {
      name: 'Mariano',
      email: 'marianocapiliku@gmail.com',
      phone:null,
    },
    orderItems:[
      {
        id: 'kdngjkdbg',
        priceInCents: 1835,
        quantity: 5,
        product: {
          name: 'pizzaa'
        }
      },
      {
        id: 'kdhighdi',
        priceInCents: 2335,
        quantity: 9,
        product: {
          name: 'pizzaa requejao'
        }
      }
    ]

  })


})