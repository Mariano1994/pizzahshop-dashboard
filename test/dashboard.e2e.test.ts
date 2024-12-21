import {test, expect} from '@playwright/test'

test('display day orders amount metric', async ({page})=> {
  await page.goto('/', {waitUntil: 'networkidle'})

expect(page.getByText('20', { exact: true })).toBeVisible()
expect(page.getByText('% em relação a ontem')).toBeVisible()

})

test('display month orders amount metric', async ({page})=> {
  await page.goto('/', {waitUntil: 'networkidle'})

expect(page.getByText('50', { exact: true })).toBeVisible()
expect(page.getByText('+10% em relação ao mês passado')).toBeVisible()

})

test('display canceled month orders amount metric', async ({page})=> {
  await page.goto('/', {waitUntil: 'networkidle'})

expect(page.getByText('30', { exact: true })).toBeVisible()
expect(page.getByText('80%')).toBeVisible()

})

test('display revenue orders amount metric', async ({page})=> {
  await page.goto('/', {waitUntil: 'networkidle'})

expect(page.getByText('AOA 300,00')).toBeVisible()
expect(page.getByText('28% em relação ao mês passado')).toBeVisible()

})