// AddRecipe.js

class AddRecipePage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Create styles and root element
        const styles = document.createElement('style');
        const article = document.createElement('article');

        // Fill in styles and root element
        styles.innerHTML = ``;
        article.innerHTML = `
        <h2>Add Recipe</h2>
        <div class="add-recipe-navbar">
          <!-- li><a onclick="navTo('homeID')" href="javascript:void(0)">home</a></li> -->
          <a href="#add-recipe-summaryID" id="ToAddSum">Summary</a>
          <a href="#add-recipe-ingredientsID" id="ToAddIng">Ingredients</a>
          <a href="#add-recipe-directionID" id="ToAddDir">Directions</a>
        </div>
    
        <!--Add Recipe Summary-->
        <div id="add-recipe-summaryID" class="add-recipe-summary" style="display: show">
          <p>Summary</p>
          <textarea></textarea>
          <br>
          <input type="submit" value="Submit!">
        </div>
    
        <!--Add Recipe Ingredients-->
        <div id="add-recipe-ingredientsID" class="add-recipe-ingredients" style="display: none">
          <label for="Ingredients">
            <p>Ingredients:</p>
          </label>
          <br>
          <input type="text"><br>
          <input type="text"><br>
          <input type="text"><br>
          <input type="text"><br>
          <input type="text"><br>
          <br>
          <input type="submit" value="Submit!">
        </div>
    
        <!--Add Recipe Directions-->
        <div id="add-recipe-directionID" class="add-recipe-direction" style="display: none">
          <p>Direction</p>
          <ol>
            <li>Step 1:</li>
            <textarea></textarea>
            <li>Step 2:</li>
            <textarea></textarea>
            <li>Step 3:</li>
            <textarea></textarea>
          </ol>
          <input type="submit" value="Submit!">
        </div>
    
        <button><a href="index.html"> LEAVE </a></button>
        `;

        // Append elements to the shadow root
        this.shadowRoot.append(styles, article);

    //Add Summary  
    this.shadowRoot.getElementById("ToAddSum").addEventListener("click", e => {
        e.preventDefault();   
        this.shadowRoot.getElementById('add-recipe-summaryID').setAttribute("style", "display: show") ;
        this.shadowRoot.getElementById('add-recipe-ingredientsID').setAttribute("style", "display: none") ;
        this.shadowRoot.getElementById('add-recipe-directionID').setAttribute("style", "display: none") ;
    });

    //Add Ingredients
    this.shadowRoot.getElementById("ToAddIng").addEventListener("click", e => {
        e.preventDefault();   
        this.shadowRoot.getElementById('add-recipe-summaryID').setAttribute("style", "display: none") ;
        this.shadowRoot.getElementById('add-recipe-ingredientsID').setAttribute("style", "display: show") ;
        this.shadowRoot.getElementById('add-recipe-directionID').setAttribute("style", "display: none") ;
    });

    //Add Directions
    this.shadowRoot.getElementById("ToAddDir").addEventListener("click", e => {
        e.preventDefault();   
        this.shadowRoot.getElementById('add-recipe-summaryID').setAttribute("style", "display: none") ;
        this.shadowRoot.getElementById('add-recipe-ingredientsID').setAttribute("style", "display: none") ;
        this.shadowRoot.getElementById('add-recipe-directionID').setAttribute("style", "display: show") ;

    });

    }
}

customElements.define('add-recipe-page', AddRecipePage);
