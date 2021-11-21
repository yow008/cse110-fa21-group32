// FavoriteRecipes.js

class FavRecipesPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Create styles and root element
        const styles = document.createElement('style');
        const article = document.createElement('article');

        // Fill in styles and root element
        styles.innerHTML = ``;
        article.innerHTML = `
        <h2>Favorites</h2>
        <p>Content...</p>
        <div class="favorite-recipe-cards-wrapper">
          <!--ADD RECIPES HERE-->
        </div>
        `;

        // Append elements to the shadow root
        this.shadowRoot.append(styles, article);
    }
}

customElements.define('fav-recipes-page', FavRecipesPage);
