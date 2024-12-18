// import {describe, expect, it} from 'vitest'


import {render} from '@testing-library/react'
import OrderStatus from './OrdersStatus'

describe('Order Status', () => {

  it('Should display the "Pendente" text in status and should have the of bg-slate-400', ()=> {

    const wraper = render(<OrderStatus status="pending"/>)

    const statusText = wraper.getByText('Pendente')
    const badgeElement = wraper.getByTestId('badge')
  
    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-slate-400')
    // wraper.debug()
  })

  it('Should display the "Em preparo" text in status and should have the of bg-amber-500', ()=> {

    const wraper = render(<OrderStatus status="processing"/>)
    
    const statusText = wraper.getByText('Em preparo')
    const badgeElement = wraper.getByTestId('badge')
  
    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
    // wraper.debug()
  })

  it('Should display the "Em entrega" text in status and should have the of bg-amber-500', ()=> {

    const wraper = render(<OrderStatus status="delivering"/>)
    
    const statusText = wraper.getByText('Em entrega')
    const badgeElement = wraper.getByTestId('badge')
  
    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
    
  })

  it('Should display the "Entregue" text in status and should have the of bg-emerald-500', ()=> {

    const wraper = render(<OrderStatus status="delivered"/>)
    
    const statusText = wraper.getByText('Entregue')
    const badgeElement = wraper.getByTestId('badge')
  
    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-emerald-500')
    
  })

  it('Should display the "Cancelado" text in status and should have the of bg-rose-500', ()=> {

    const wraper = render(<OrderStatus status="canceled"/>)
    
    const statusText = wraper.getByText('Cancelado')
    const badgeElement = wraper.getByTestId('badge')
  
    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-rose-500')

  })

})