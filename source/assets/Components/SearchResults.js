// SearchResults.js

// IMPORTS
import { router } from '../scripts/main.js';
import { GET } from '../scripts/request.js';

// GLOBALS

/**
 * Class: SearchResultsPage
 * TODO:
 */
class SearchResultsPage extends HTMLElement {
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
      text-align: center;
    }
    .title {
      
      text-align: center;
      background-color: rgba(0,0,0,0.8);
      position: absolute;
      color: white;
      height: 22pt;
      width: 45ch;
      display:block;
      margin-top: -63px;
      margin-left: 20ch;
    }
    .css-image {
      width: 45ch;
      margin-left: 20ch;
      margin-bottom: 35px;
    }

    button {
      background-color: white;
      border-radius: 9px;
      border: 1.5px solid #ca676a;
      text-align: center;
      min-width: 8%;
      height: 16pt;
    }
    `;
    article.innerHTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <h2>Recipes</h2>

    <div class="container-fluid my-container">
    <div class="row justify-content-center d-flex align-items-center my-row ">
      <div class="col my-col text-center align-items-center d-flex justify-content-center p-4">
        <div class="card my-card" style="width: 75%;">
          <img class="card-img-top" src="https://spoonacular.com/recipeImages/624569-556x370.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 id="ExpRecipe" class="card-title align-items-center">Recipe Name</h5>
          </div>
        </div>
      </div>
      <div class="col my-col text-center d-flex justify-content-center p-4">
        <div class="card my-card" style="width: 75%;">
        <img class="card-img-top" src="https://spoonacular.com/recipeImages/624569-556x370.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 id="ExpRecipe" class="card-title align-items-center">Recipe Name</h5>
          </div>
        </div>
      </div>
      <div class="col my-col text-center d-flex justify-content-center p-4">
        <div class="card my-card" style="width: 75%;">
        <img class="card-img-top" src="https://spoonacular.com/recipeImages/624569-556x370.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 id="ExpRecipe" class="card-title align-items-center">Recipe Name</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center d-flex align-items-center my-row">
      <div class="col my-col text-center align-items-center d-flex justify-content-center p-4">
        <div class="card my-card" style="width: 75%;">
          <img class="card-img-top" src="https://spoonacular.com/recipeImages/624569-556x370.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 id="ExpRecipe" class="card-title align-items-center">Recipe Name</h5>
          </div>
        </div>
      </div>
      <div class="col my-col text-center d-flex justify-content-center p-4">
        <div class="card my-card" style="width: 75%;">
        <img class="card-img-top" src="https://spoonacular.com/recipeImages/624569-556x370.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 id="ExpRecipe" class="card-title align-items-center">Recipe Name</h5>
          </div>
        </div>
      </div>
      <div class="col my-col text-center d-flex justify-content-center p-4">
        <div class="card my-card" style="width: 75%;">
        <img class="card-img-top" src="https://spoonacular.com/recipeImages/624569-556x370.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 id="ExpRecipe" class="card-title align-items-center">Recipe Name</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center d-flex align-items-center my-row">
    <div class="col my-col text-center align-items-center d-flex justify-content-center p-4">
      <div class="card my-card" style="width: 75%;">
        <img class="card-img-top" src="https://spoonacular.com/recipeImages/624569-556x370.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 id="ExpRecipe" class="card-title align-items-center">Recipe Name</h5>
        </div>
      </div>
    </div>
    <div class="col my-col text-center d-flex justify-content-center p-4">
      <div class="card my-card" style="width: 75%;">
      <img class="card-img-top" src="https://spoonacular.com/recipeImages/624569-556x370.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 id="ExpRecipe" class="card-title align-items-center">Recipe Name</h5>
        </div>
      </div>
    </div>
    <div class="col my-col text-center d-flex justify-content-center p-4">
      <div class="card my-card" style="width: 75%;">
      <img class="card-img-top" src="https://spoonacular.com/recipeImages/624569-556x370.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 id="ExpRecipe" class="card-title align-items-center">Recipe Name</h5>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    `;

    // Append elements to the shadow root
    this.shadowRoot.append(styles, article);
  }

  /**
   * TODO:
   * @param {Objects} results
   */
  set results(results) {
    if (!results) return;

    this.data = results;

    const section = document.createElement('section');
    section.setAttribute('id', 'section--recipe-res');

    createRecipeCards(results, section);

    this.shadowRoot.append(section);
    console.log(this.shadowRoot);
  }
}

/**
 * TODO:
 * @param {Objects} results
 * @param {Object} section
 */
function createRecipeCards(results, section) {
  // Go through every one of the result recipes
  Object.keys(results).forEach(function (key) {
    const data = results[key];

    // Add recipe title
    const title = document.createElement('p');
    title.classList.add('title');
    title.innerText = data.title;

    // Add recipe picture
    const image = document.createElement('img');
    image.classList.add('css-image');
    image.setAttribute('src', data.image);
    image.setAttribute('alt', data.title);

    // Add all the elements to the card
    const card = document.createElement('div');
    card.setAttribute('id', data.id);
    card.appendChild(image);
    card.appendChild(title);

    // // Add all elements inside a link
    // const link = document.createElement('a');
    // link.setAttribute('href', `home.html#recipe${data.id}`);

    // link.appendChild(card);
    // section.appendChild(link);

    section.appendChild(card);

    // Add the corresponding expand recipe view to router
    addPage(data.id);

    card.addEventListener('click', () => {
      let recipeView = document.getElementById('#section--recipe');
      while (recipeView.firstChild) {
        recipeView.removeChild(recipeView.firstChild);
      }
      router.navigate(`recipe_${data.id}`);
    });
  });
}

/**
 * TODO:
 * @param {String} recipeId
 */
function addPage(recipeId) {
  router.addPage(`recipe_${recipeId}`, function () {
    document.getElementById('#section--home').classList.remove('shown');
    document.getElementById('#section--search-bar').classList.remove('shown');
    document.getElementById('#section--grocery').classList.remove('shown');
    document.getElementById('#section--cooking-mode').classList.remove('shown');

    document
      .getElementById('#section--search-results')
      .classList.remove('shown');

    document.getElementById('#section--recipe').classList.add('shown');

    // Fetch and populate recipe page and add to recipe section
    const recipePage = document.createElement('recipe-page');
    fetchRecipe(recipeId, recipePage);
    recipePage.classList.add('shown');
    document.getElementById('#section--recipe').innerHTML = '';
    document.getElementById('#section--recipe').appendChild(recipePage);
  });
}

/**
 * Uses the recipe ID to get the full json details of the recipe. Once
 * the recipe is found, set the recipe information.
 * @param {String} recipeId
 * @param {SearchResultsPage} recipePage
 */
function fetchRecipe(recipeId, recipePage) {
  const fetchReq = `type=fetchRecipe&id=${encodeURIComponent(recipeId)}`;

  /**
   * TODO:
   * @param {JSON} data
   */
  function afterFetch(data) {
    recipePage.data = data;
  }

  GET(fetchReq, afterFetch);
}

// Define the Class so it can be used as a custom element
customElements.define('search-results-page', SearchResultsPage);

// EXPORTS
