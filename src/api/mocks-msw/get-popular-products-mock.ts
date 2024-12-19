import {http, HttpResponse} from 'msw'
import { PopularProductsResponse } from '../getPopularProduts'


export const getPopularProductsMock = http.get<never, never, PopularProductsResponse>('/metrics/popular-products', ()=> {
  return HttpResponse.json([
    {product: 'Pizza 01', amount: 8},
    {product: 'Pizza 03', amount: 10},
    {product: 'Pizza 04', amount: 12},
    {product: 'Pizza 06', amount: 20},
    {product: 'Pizza 08', amount: 25},

  ])
})