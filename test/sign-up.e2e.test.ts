import {test, expect} from '@playwright/test'


test('sign-up successfuly', async({page})=> {
  await page.goto('/sign-up', {waitUntil: "networkidle"})


  await page.getByLabel('Informa o nome do seu estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Informa o seu nome').fill('Mariano Capiliku')
  await page.getByLabel('Informa o seu e-mail').fill('marianocapiliku@gmail.com')
  await page.getByLabel('Telefone').fill('9789635')

  await page.getByRole('button', {name: 'Finalizar cadastro'}).click()

  const toast = page.getByText('Restaurante criado com sucesso')
  expect(toast).toBeVisible()


})

test('sign-up with error', async({page})=> {
  await page.goto('/sign-up', {waitUntil: "networkidle"})

  await page.getByLabel('Informa o nome do seu estabelecimento').fill('Foguinho')
  await page.getByLabel('Informa o seu nome').fill('Mariano Capiliku')
  await page.getByLabel('Informa o seu e-mail').fill('marianocapiliku@gmail.com')
  await page.getByLabel('Telefone').fill('9789635')

  await page.getByRole('button', {name: 'Finalizar cadastro'}).click()

  const toast = page.getByText('Erro ao cadastrar restaurante')
  expect(toast).toBeVisible()


})


test('navigate to sign-up page', async({page})=> {
  await page.goto('/sign-up', {waitUntil: "networkidle"})

  await page.getByRole('link', {name: 'Fazer Login'}).click()

  const buttonNewRestaurant = page.getByRole('link', { name: 'Novo estabelecimento' })

  expect(page.url()).toContain('/sign-in')


  expect(buttonNewRestaurant).toBeVisible()

})