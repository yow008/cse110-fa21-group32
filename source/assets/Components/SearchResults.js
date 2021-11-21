// SearchResults.js

<<<<<<< HEAD
class SearchResults extends HTMLElement {
=======
class SearchResultsPage extends HTMLElement {
>>>>>>> 5a8e84488f2ac65b999c655fed84e09e5d3ef3cb
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
<<<<<<< HEAD
        this.shadowRoot.append(styles, article);
    }
}

customElements.define('search-results-page', SearchResults);
=======
         this.shadowRoot.append(styles, article);

    }
}

customElements.define('search-results-page', SearchResultsPage);
>>>>>>> 5a8e84488f2ac65b999c655fed84e09e5d3ef3cb
