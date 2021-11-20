// SearchResults.js

class SearchResultsPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Create styles and root element
        const styles = document.createElement('style');
        const article = document.createElement('article');

        // Fill in styles and root element
        styles.innerHTML = ``;
        article.innerHTML = `
        <h2>Search Results</h2>
        <p>Contents</p>
        <ul>
          <li> <button type="menu">Recipe 1 (not linked)</button></li>
          <li> <button type="menu">Recipe 2 (not linked)</button></li>
          <li> <button type="menu">Recipe 3 (not linked)</button></li>
        </ul>
        `;

        // Append elements to the shadow root
         this.shadowRoot.append(styles, article);

    }
}

customElements.define('search-results-page', SearchResultsPage);
