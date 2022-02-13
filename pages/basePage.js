import { t } from 'testcafe'

// get env from cli or use default
const baseUrl = process.argv['env'] || 'https://amazon.com/'

const basePage = {
  baseUrl,

  /**
   * wrapper for navigateTo so we can use relative urls and append them to baseUrl
   * @param  {string} relativeUrl
   */
  async goto (relativeUrl = '') {
    await t.navigateTo(`${this.baseUrl}${this.url}${relativeUrl}`)
  },

  /**
   * return all texts for a given selector
   * @param  {obj} selector - testcafe selector object
   * @return {array}
   */
  async getTextOfAllElements (selector) {
    const selectorTexts = []
    const count = await selector.count

    for (let i = 0; i < count; i += 1) {
      // collect all the selector texts...
      selectorTexts.push(selector.nth(i).textContent)
    }
    return await Promise.all(selectorTexts)
  }
}
export default basePage
