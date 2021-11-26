// Recipe.js

// IMPORTS
import { router } from '../scripts/main.js';
import { GET, POST } from '../scripts/request.js';

/**
 * Class: RecipePage
 * TODO:
 */
class RecipePage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Create styles and root element
    const styles = document.createElement('style');
    const article = document.createElement('article');

    // Fill in styles and root element
    styles.innerHTML = ``;
    article.innerHTML = `

        <h2>Recipes</h2>
        <div class="recipe-navbar">
        <a href="#recipe-summaryID" id="ToSum">Summary</a>
        <a href="#recipe-ingredientsID" id="ToIng">Ingredients</a>
        <a href="#recipe-directionID" id="ToDir">Directions</a>
        </div>

        <!--Recipe Summary-->
        <div id="recipe-summaryID" class="recipe-summary" style="display: block">
        <p>Summary</p>
        <p>Content...</p>
        <button type="button" class="recipe-summmaryButton">Add to My Favorites</button>
        </div>

        <!--Recipe Ingredients-->
        <div id="recipe-ingredientsID" class="recipe-ingredients" style="display: none">
        <p>Ingredients</p>
        <!--Add To List Button--> 
        <details>
            <summary>
            click here for all Ingredients
            </summary>
            <ol>
            <li>some item</li>
            <li>some item</li>
            <li>some item</li>
            </ol>
        </details>
        <br>
        <button type="button">Add to List</button>
        </div>

        <!--Recipe Directions-->
        <div id="recipe-directionID" class="recipe-direction" style="display: none">
        <p>Direction</p>
        <ul>
            <li><a href="step1">1</a></li>
            <li><a href="step2">2</a></li>
            <li><a href="step3">3</a></li>
            <li><a href="step4">4</a></li>
        </ul>
        <button><a id="LinkToCM"> Cook </a></button>
        </div>

    `;

    // Append elements to the shadow root
    this.shadowRoot.append(styles, article);
    router.addPage('cooking-mode', function () {
      document.getElementById('#section--recipe').classList.remove('shown');

      document.getElementById('#section--cooking-mode').classList.add('shown');
    });

    const CMPage = this.shadowRoot.getElementById('LinkToCM');
    CMPage.addEventListener('click', () => {
      router.navigate('cooking-mode');
    });

    //Summary
    this.shadowRoot.getElementById('ToSum').addEventListener('click', (e) => {
      e.preventDefault();
      this.shadowRoot
        .getElementById('recipe-summaryID')
        .setAttribute('style', 'display: show');
      this.shadowRoot
        .getElementById('recipe-ingredientsID')
        .setAttribute('style', 'display: none');
      this.shadowRoot
        .getElementById('recipe-directionID')
        .setAttribute('style', 'display: none');
    });

    //Ingredients
    this.shadowRoot.getElementById('ToIng').addEventListener('click', (e) => {
      e.preventDefault();
      this.shadowRoot
        .getElementById('recipe-summaryID')
        .setAttribute('style', 'display: none');
      this.shadowRoot
        .getElementById('recipe-ingredientsID')
        .setAttribute('style', 'display: show');
      this.shadowRoot
        .getElementById('recipe-directionID')
        .setAttribute('style', 'display: none');
    });

    //Directions
    this.shadowRoot.getElementById('ToDir').addEventListener('click', (e) => {
      e.preventDefault();
      this.shadowRoot
        .getElementById('recipe-summaryID')
        .setAttribute('style', 'display: none');
      this.shadowRoot
        .getElementById('recipe-ingredientsID')
        .setAttribute('style', 'display: none');
      this.shadowRoot
        .getElementById('recipe-directionID')
        .setAttribute('style', 'display: show');
    });

    //Grad information
  }

  set data(data) {
    const title = document.createElement('h3');
    // title.innerHTML = data.
    console.log(data);
    this.shadowRoot.getElementById('recipe-summaryID').appendChild();
  }
}

// SUMMARY ELEMENTS
/**
 *
 * @param {JSON} data
 * @returns
 */
function getCookTime(data) {
  return data;
}

/**
 *
 * @param {JSON} data
 * @returns
 */
function getImage(data) {
  return data;
}

/**
 *
 * @param {JSON} data
 * @returns
 */
function getTitle(data) {
  return data;
}

// INGREDIENTS ELEMENTS
/**
 *
 * @param {JSON} data
 * @returns
 */
function getIngreds(data) {
  return data;
}

// DIRECTIONS ELEMENTS
/**
 *
 * @param {JSON} data
 * @returns
 */
function getDirs(data) {
  return data;
}

customElements.define('recipe-page', RecipePage);
