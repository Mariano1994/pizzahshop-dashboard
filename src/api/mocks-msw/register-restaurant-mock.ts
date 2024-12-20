import {http, HttpResponse} from 'msw'
import { RegisterBody } from '../registerRestaurant'

export const registerRestaurantMock = http.post<never, RegisterBody>("restaurants", async ({request})=> {

  const {restaurantName} = await request.json()
  if(restaurantName === 'Pizza Shop') {
    return new HttpResponse(null, {
      status: 201,
    })
  }

  return new HttpResponse(null, {status: 400})  

}
)