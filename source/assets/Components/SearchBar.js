// SearchBar.js

// IMPORTS
import { router } from '../scripts/main.js';
import { GET, POST } from '../scripts/request.js';

// GLOBALS

/**
 * Class: SearchBar
 * TODO:
 */
class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Create styles and root element
    const styles = document.createElement('style');
    const article = document.createElement('article');

    // Fill in styles and root element
    styles.innerHTML = `
    *{
      background-color: #CA676A;
      background-size: cover;
      color: white;
      overflow: hidden;
      padding: 10px;
    }
    input{
      background-color: white;
    }
    `;
    article.innerHTML = `
        <form id="searchFormID" name="search-form">
          <input type="text" placeholder="Search..." name="search-phrase">
          <button type="submit" id="search-icon">Submit</button>
        </form>
        `;

    // Append elements to the shadow root
    this.shadowRoot.append(styles, article);

    // Add search results page to router in order to successfully navigate to it
    router.addPage('search-results', function () {
      document.getElementById('#section--home').classList.remove('shown');
      document.getElementById('#section--search-bar').classList.remove('shown');

      document
        .getElementById('#section--search-results')
        .classList.add('shown');
    });

    // Search for recipes from Spoonacular upon form submit
    const searchForm = this.shadowRoot.getElementById('searchFormID');
    searchForm.addEventListener('submit', (e) => {
      let formData = new FormData(searchForm);

      // Clears any previous search results
      document.getElementById('#section--search-results').innerHTML = '';
      const searchResultsPage = document.createElement('search-results-page');
      document
        .getElementById('#section--search-results')
        .appendChild(searchResultsPage);

      // Searches for recipes, then navigates to populated search results
      // page after search results are returned
      searchRecipes(formData.get('search-phrase'), searchResultsPage);

      // Necessary to prevent automatic submission
      e.preventDefault();
    });
  }
}

/**
 * Uses a search phrase to search through Spoonacular recipes. After
 * recipes are found, populate the search results page and redirect there.
 * @param {String} searchPhrase search phrase entered by user
 * @param {SearchResultsPage} searchResPage search-results-page element
 */
function searchRecipes(searchPhrase, searchResPage) {
  const searchReq = `type=search&keyword=${encodeURIComponent(searchPhrase)}`;

  /**
   *
   * @param {*} data
   */
  function afterSearch(data) {
    searchResPage.results = data;
    router.navigate('search-results');
  }

  GET(searchReq, afterSearch);
}

customElements.define('search-bar', SearchBar);

// EXPORTS
