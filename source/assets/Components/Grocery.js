// Grocery.js

class GroceryPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Create styles and root element
        const styles = document.createElement('style');
        const article = document.createElement('article');

        // Fill in styles and root element
        styles.innerHTML = ``;
        article.innerHTML = `
        <h2>Grocery List</h2>
        <ul>
            <input type="checkbox" checked>
            <label>some item</label>
            <br>
            <input type="checkbox">
            <label>some item</label>
            <br>
            <input type="checkbox" checked>
            <label>some item</label>
            <br>
        </ul>
        `;

        // Append elements to the shadow root
        this.shadowRoot.append(styles, article);
    }
}

customElements.define('grocery-page', GroceryPage);
