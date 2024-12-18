import { render } from "@testing-library/react"
import NavLink from "./NavLink"
import { MemoryRouter } from "react-router"


describe("Navigations Links", ()=> {

  it("It should  highlight the active link", ()=> {

    const wraper = render(
     <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
     </>, {
      wrapper: ({children})=> {
        return(
          <MemoryRouter initialEntries={['/about']}>
            {children}
          </MemoryRouter>
        )
      }
    })

    expect(wraper.getByText('Home').dataset.current).toEqual('false')
    expect(wraper.getByText('About').dataset.current).toEqual('true')
  })

})