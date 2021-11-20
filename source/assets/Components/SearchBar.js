// SearchBar.js

import { Router } from '../scripts/Router.js';

const router = new Router();

const pageNames = ['search-result'];

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
        <form>
            <input type="text" placeholder="Search.." name="search">
            <button id="search-bar"><a>Search</a></button>
        </form>
        `;

        // Append elements to the shadow root
        this.shadowRoot.append(styles, article);

        // Add Page for the search result
        router.addPage('search-results', function() {
            document.getElementById('#section--home').classList.remove('shown');
            document.getElementById('#section--search-bar').classList.remove('shown');
            console.log(document.getElementById('#section--recipe'));

            //document.getElementById('#section--search-results').classList.add('shown');
            
        });

        // Click the search to navigate to the new page with updated URL
        const recipePage = this.shadowRoot.getElementById('search-bar');
        recipePage.addEventListener('click', () => {
            router.navigate('search-results');
        });
    }
}

customElements.define('search-bar', SearchBar);
