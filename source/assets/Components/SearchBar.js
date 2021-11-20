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
            <button id="search-bar">Search</button>
        </form>
        `;

        // Append elements to the shadow root
        this.shadowRoot.append(styles, article);
    }
}

customElements.define('search-bar', SearchBar);
