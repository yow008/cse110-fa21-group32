// Recipe.js

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
        <div id="recipe-summaryID" class="recipe-summary hidden">
        <p>Summary</p>
        <p>Content...</p>
        <button type="button">Add to My Favorites</button>
        </div>

        <!--Recipe Ingredients-->
        <div id="recipe-ingredientsID" class="recipe-ingredients hidden">
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
        <div id="recipe-directionID" class="recipe-direction hidden">
        <p>Direction</p>
        <ul>
            <li><a href="step1">1</a></li>
            <li><a href="step2">2</a></li>
            <li><a href="step3">3</a></li>
            <li><a href="step4">4</a></li>
        </ul>
        <button><a href="#cooking-modeID" id="LinkToCM"> Cook </a></button>
        </div>
        `;

        // Append elements to the shadow root
        this.shadowRoot.append(styles, article);
    }
}

customElements.define('recipe-page', RecipePage);
