// FavoriteRecipes.js

// IMPORTS
// import { router } from '../scripts/main.js';
// import { GET, POST } from '../scripts/request.js';

/**
 * Class: FavRecipesPage
 * A page that will show the user the recipes in their
 * favorites list and link to the recipe view for each.
 */
class FavRecipesPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Create styles and root element
    const styles = document.createElement('style');
    const article = document.createElement('article');

    // Fill in styles and root element
    styles.innerHTML = `        
        h2{
            background-color: #CA676A;
            background-size: cover;
            padding: 23.5px;
            color: white;
          }
          .css-wrap {
            margin-left: 5%;
            margin-bottom: 16pt;
            margin-right: 5%;
          }
          `;
    article.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
      <h2>Favorites</h2>
      <div class="css-wrap">
        <p>Content...</p>
        <div class="card text-center text-white bg-dark mb-3" style="width: 18rem;">
          <img class="card-img-top" src="https://spoonacular.com/recipeImages/634559-556x370.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Recipe Name</h5>
            <p class="card-text">insert short description</p>
            <a href="#" class="card-link">view more</a
          </div>
        </div>

        <div class="favorite-recipe-cards-wrapper">
          <!--ADD RECIPES HERE-->
        </div>
      </div>
        `;

    // Append elements to the shadow root
    this.shadowRoot.append(styles, article);
  }
}

customElements.define('fav-recipes-page', FavRecipesPage);
