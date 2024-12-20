import {http, HttpResponse} from 'msw'
import {faker} from '@faker-js/faker'
import type { GetOrdersResponse } from '../getOrder'



type Orders = GetOrdersResponse['orders']
type OrderStatus = GetOrdersResponse['orders'][number]['status']

const statuses: OrderStatus[] = [
  'canceled',
  'delivered',
  'delivering',
  'pending',
  'processing'
]

const orders: Orders = Array.from({length: 100}).map((_, index) =>{
  return {
    orderId: faker.string.uuid().slice(0, 8) ,
    createdAt:faker.date.anytime(),
    customerName: faker.person.fullName(),
    total: Number(faker.commerce.price()),
    status: statuses[index % 5]
  }
})

export const getOrdersMock = http.get<never, never, GetOrdersResponse >('/orders', async({request})=> {

  const {searchParams} = new URL(request.url)

  const pageIndex = searchParams.get('pageIndex')
    ? Number(searchParams.get("pageIndex")) : 0

    const customerName = searchParams.get('customerName')
    const orderId = searchParams.get('orderId')
    const status = searchParams.get('status')


    let filteredOrders = orders

    if(orderId) {
      filteredOrders = filteredOrders.filter(
        order => order.orderId?.includes(orderId)
      )
    }

    if(customerName) {
      filteredOrders = filteredOrders.filter(
        order => order.customerName?.includes(customerName)
      )
    }

    if(status) {
      filteredOrders = filteredOrders.filter(
        order => order.status === status )
    }

    const pagitedOrders = filteredOrders.slice(
      pageIndex * 10,
      (pageIndex + 1) * 10
    )


  return HttpResponse.json({
    orders: pagitedOrders,
    meta: {
      pageIndex,
      perPage: 10,
      totalCount: filteredOrders.length
    }
  })
}) 