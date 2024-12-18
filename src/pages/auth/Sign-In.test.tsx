import { render } from "@testing-library/react"
import SignIn from "./Sign-in"
import { MemoryRouter } from "react-router"
import {QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "../../lib/react-query"
import { HelmetProvider } from "react-helmet-async"

describe('SignIn', ()=> {
  it('Should se default email input value if email is prsent on search params', ()=> {

    const wrapper = render(<SignIn/>, {

      wrapper: ({children}) => {
        return (

          <HelmetProvider>
            <MemoryRouter initialEntries={['/sign-in?email=marianocapiliku@gmail.com']}>
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </MemoryRouter>
          </HelmetProvider>
        ) 
      } 
    })

    const emailInput = wrapper.getByLabelText('Informa o seu e-mail') as HTMLInputElement
    expect(emailInput.value).toEqual("marianocapiliku@gmail.com")
  })
})