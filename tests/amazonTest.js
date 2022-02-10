import amazonPage from '../pages/amazonPage'

fixture`Janus Test`

const searchFor = [
  'nvidia+3060',
  'nvidia+3070',
  'nvidia+3080'
]

searchFor.forEach(async text => {
  test(`should search results for ${text} prices over $100`, async t => {
    await amazonPage.goto(`s?k=${text}`)

    await t.expect(await amazonPage.allPricesOver$100()).ok()
  })
})
