import { Selector as $ } from 'testcafe'
import basePage from './basePage'

const amazonPage = {
  url: '',
  prices: $('.a-price-whole'),

  /**
   * get all displayed prices and test that each is > $100
   * @return {bool}
   */
  async allPricesOver$100 () {
    const allPriceTexts = await this.getTextOfAllElements(this.prices)
    return allPriceTexts.some(price => price > 100)
  }
}
export default { ...basePage, ...amazonPage }
