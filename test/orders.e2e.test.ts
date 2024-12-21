import {test, expect} from '@playwright/test'


test('orders list', async({page})=> {

  await page.goto('/orders', {waitUntil: 'networkidle'})

  const totalOrders = page.getByText('Total de 100 item(s)')

  expect(totalOrders).toBeVisible()
})


test('Next page button', async({page})=> {

  await page.goto('/orders', {waitUntil: 'networkidle'})

  const totalOrders = page.getByText('Total de 100 item(s)')
  expect(totalOrders).toBeVisible()
  
  const nextPageButton = page.getByRole('button', { name: 'Ir para próxima página' })
  await nextPageButton.click()
  expect(page.getByText('Página 11 de'))

})

test('filter by status', async({page})=> {

  await page.goto('/orders', {waitUntil: 'networkidle'})

  await page.getByRole('combobox').click()
  await page.waitForTimeout(250)

  await page.getByLabel('Pendente').click()

  await page.getByRole('button', {name: 'Filtrar resultados'}).click()

  const tabelRows = await page.getByRole('cell', {name: 'Pendente'}).all()

  expect(tabelRows).toHaveLength(10)

  await page.waitForTimeout(2000)

})