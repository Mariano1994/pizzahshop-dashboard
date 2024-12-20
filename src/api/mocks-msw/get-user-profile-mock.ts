import {http, HttpResponse} from 'msw'
import { GetProfileResponse } from '../getUserProfile'


export const GetUserProfileMock = http.get<never, never, GetProfileResponse>('./me', ()=> {
  return HttpResponse.json({
    id: 'kshtudtetgjbdg',
    name: 'Mariano Artur',
    email: 'marianocapiliku@gmai.com',
    phone: null,
    role: 'manager',
    createdAt: new Date(),
    updatedAt: null
  })
})