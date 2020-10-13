import axios from 'axios'
import cheerio from 'cheerio'

/**
 * @typedef {Object} DDGSearchResult
 * @property {string} title - The title of the result
 * @property {string} url - The URL of the result
 * @property {string} desc - The description of the result
 */

/**
 * @typedef {DDGSearchResult[]} DDGSearchResults
 */

/**
 * Searches duckduckgo for a query
 * [!] Exported as duckduckscrape.search, not searchDDG!
 * @param {string} q - The search query
 * @returns {DDGSearchResults} - The search results
 */
async function searchDDG (q) {
  const res = await axios.get('https://html.duckduckgo.com/html', {
    params: {
      q
    }
  })
  const $ = cheerio.load(res.data)

  // keep keyword function: breaks with arrow func
  const results = []
  $('.result').each(function () {
    results.push({
      title: $(this).find('.result__title').find('.result__a').text(),
      url:
        'https:' +
        $(this).find('.result__title').find('.result__a').attr('href'),
      desc: $(this).find('.result__snippet').text()
    })
  })
  return results
}

export const search = searchDDG
