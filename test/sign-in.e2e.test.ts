import { test, expect } from '@playwright/test';

test('sign in successfuly', async ({ page }) => {
  await page.goto('/sign-in', {waitUntil: 'networkidle'});

  await page.getByLabel('Informa o seu e-mail').fill('marianocapiliku@gmail.com')

  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Enviamos um link de autenticacao para o seu e-mail')

  expect(toast).toBeVisible()

});


test('sign with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', {waitUntil: 'networkidle'});

  await page.getByLabel('Informa o seu e-mail').fill('wrongcapiliku@gmail.com')

  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Credencias invalidas')

  expect(toast).toBeVisible()

});


test('navigate to new restairant page', async ({ page }) => {
  await page.goto('/sign-in', {waitUntil: 'networkidle'});

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  expect(page.url()).toContain('/sign-up')


});