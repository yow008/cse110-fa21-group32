// SearchBar.js

import { Router } from '../scripts/Router.js';

// TODO: edit the local server URL
const LOCAL_URL = 'http://127.0.0.1:5000';
const router = new Router();

class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Create styles and root element
    const styles = document.createElement('style');
    const article = document.createElement('article');

    // Fill in styles and root element
    styles.innerHTML = ``;
    article.innerHTML = `
        <p>Search Bar</p>
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
 * @param {String} searchPhrase
 * @param {SearchResultsPage} searchResPage
 */
function searchRecipes(searchPhrase, searchResPage) {
  fetch(
    // need to encode with UTF-8 for special characters like ' '
    `${LOCAL_URL}?type=search&keyword=${encodeURIComponent(searchPhrase)}`,
    {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // populates search results page and redirects there
      searchResPage.results = data;
      router.navigate('search-results');
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

customElements.define('search-bar', SearchBar);
