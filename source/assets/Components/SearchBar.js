// SearchBar.js

import { Router } from '../scripts/Router.js';

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
            <input type="text" placeholder="Search.." name="search">
            <button id="search-icon">Search</button>
        `;

        // Append elements to the shadow root
        this.shadowRoot.append(styles, article);

        router.addPage('search-results', function() {
            document.getElementById('#section--home').classList.remove('shown');
            document.getElementById('#section--search-bar').classList.remove('shown');

            console.log(document.getElementById('#section--search-results'));
            document.getElementById('#section--search-results').classList.add('shown');
                
        });
        
        const recipePage = this.shadowRoot.getElementById('search-icon');
        recipePage.addEventListener('click', () => {
            router.navigate('search-results');
        });
    }
}

customElements.define('search-bar', SearchBar);
