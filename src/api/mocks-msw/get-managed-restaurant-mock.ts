import {http, HttpResponse} from 'msw'
import { GetRestaurantResponse } from '../getManagedRestaurant'


export const GetManagedRestaurantMock = http.get<never, never,GetRestaurantResponse>('/managed-restaurant', ()=>{
  return HttpResponse.json({
    id: 'kdniguhugte',
    name: 'Pizza.Shop - Mock',
    createdAt: new Date(),
    updatedAt: null,
    description: 'new restaurant, using mock',
    managerId: 'ksnfksh'
  })
})