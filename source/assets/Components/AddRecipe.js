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
        <div id="add-recipe-summary" style="display: show">
        <br>

        <!--Add Image-->
        <form name="image-form">
        <label for="img"><p><strong>Add Image</strong></p></label>
          <span id="chooseFiles">
            <input type="file" id="img" name="img" accept="image/*">
          </span>
          <br>
          <input type="submit">
          <br>
          <br>
          <button id="addImage">Add Another Image</button>
        </form>
        <br>

        <!--Basic Information-->
        <form name="basic-form">
        <label>Prep Time:</label>
        <input type="text" id="#input--prep-time-hour" placeholder="hours..">
        <input type="text" id="#input--prep-time-mins" placeholder="mins..">
        <br>
        <br>

        <label>Cooking Time:</label>
        <input type="text" id="#input--cook-time-hour" placeholder="hours..">
        <input type="text" id="#input--cook-time-mins" placeholder="mins..">
        <br>
        <br>

        <label for="servings"> No. of Servings: </label>
        <input type="text" id="#input--no-of-serv>
        <br>

      <!--Basic Information (Tags/Summary)-->
      <label for="sum"><p><strong>Add Tags from the list: </strong></p></label>
      <ul>
        <li>
        <label for="tags">Tag 1 (Country): </label><br>
        <select id="tag1-list">
          <option value="Italian">Italian</option>
          <option value="French">French</option>
          <option value="Mexican">Mexican</option>
          <option value="American">American</option>
          <option value="Chinese">Chinese</option>
          <option value="Japanese">Japanese</option>
          <option value="Korean">Korean</option>
          <option value="Vietnamese">Korean</option>
          <option value="Others">Others</option>
        </select>
        </li>
        
        <li>
        <label for="tags">Tag 2(Type of Food): </label><br>
        <select id="tag2-list">
          <option value="Pizza">Pizza</option>
          <option value="Seafood">Seafood</option>
          <option value="Burgers">Burgers</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Sandwiches">Sandwiches</option>
          <option value="Steakhouses">Steakhouses</option>
          <option value="Desserts">Desserts</option>
          <option value="Drinks">Drinks</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Others">Others</option>
        </select>
        </li>
      </ul>

      <label for="sum"><p><strong>Add Summary: </strong></p></label>
      <textarea placeholder="Title:"></textarea><br>
      <textarea placeholder="Summary"></textarea>
      <br>
      </form>
      
      </div>
    
      <!--Add Recipe Ingredients-->
      <div id="add-recipe-ingredients" style="display: none">
      <form>
      <label for="ingredients"><p><strong>Add Ingredients</strong></p></label>
      <table>
        <tr>
          <th>Qty</th>
          <th>Unit</th>
          <th>Ingredient</th>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
      </table>
      <!--When click add more should create another new 'tr' with three new inpurts-->
      <button id="addIngredientButton"> Add More </button>
      <br>
      </form>
      </div>
      <!--TO DO delete ingredients button-->
  
      <!--Add Recipe Directions-->
      <div id="add-recipe-direction" style="display: none">
        <p>Direction</p>
        <ol>
          <li>Step:</li>
          <textarea></textarea>
          <li>Step:</li>
          <textarea></textarea>
          <li>Step:</li>
          <textarea></textarea>
        </ol>
        <br>
        <!--When click add more should create another new textarea for direction-->
        <button id="addDirectionButton"> Add More </button>
      </div>
      <!--TO DO delete Directions button-->
  
      <br>
      <button type="submit">Save Draft</button>
      <button><a href="#"> Publish </a></button>
      <button><a href="#"> Delete </a></button>
      <button><a href="home.html"> LEAVE </a></button>
      `;

        // Append elements to the shadow root
        this.shadowRoot.append(styles, article);

    //Add Summary  
    this.shadowRoot.getElementById("ToAddSum").addEventListener("click", e => {
        e.preventDefault();   
        this.shadowRoot.getElementById('add-recipe-summary').setAttribute("style", "display: show") ;
        this.shadowRoot.getElementById('add-recipe-ingredients').setAttribute("style", "display: none") ;
        this.shadowRoot.getElementById('add-recipe-direction').setAttribute("style", "display: none") ;
    });

    //Add Ingredients
    this.shadowRoot.getElementById("ToAddIng").addEventListener("click", e => {
        e.preventDefault();   
        this.shadowRoot.getElementById('add-recipe-summary').setAttribute("style", "display: none") ;
        this.shadowRoot.getElementById('add-recipe-ingredients').setAttribute("style", "display: show") ;
        this.shadowRoot.getElementById('add-recipe-direction').setAttribute("style", "display: none") ;
    });

    //Add Directions
    this.shadowRoot.getElementById("ToAddDir").addEventListener("click", e => {
        e.preventDefault();   
        this.shadowRoot.getElementById('add-recipe-summary').setAttribute("style", "display: none") ;
        this.shadowRoot.getElementById('add-recipe-ingredients').setAttribute("style", "display: none") ;
        this.shadowRoot.getElementById('add-recipe-direction').setAttribute("style", "display: show") ;

    });

    //Add ingredient to ingredients page
    this.shadowRoot.getElementById('addIngredientButton').addEventListener("click", e => {
      e.preventDefault();   
      let ingredientsList = this.shadowRoot.querySelector('#add-recipe-ingredients').querySelector('table');
      ingredientsList.innerHTML += '<tr><td><input type="text"/></td><td><input type="text"/></td><td><input type="text"/></td><td><input type="checkbox id="delete' + getRowId() +'"></td></tr>';
    });

    let rowId = 0;
    function getRowId() {
      rowId += 1; 
      return rowId;
    }

    //When click "Add More" there should be a new input text area for user to input information
    this.shadowRoot.getElementById('addDirectionButton').addEventListener("click", e => {
      e.preventDefault();   
      let directionsList = this.shadowRoot.querySelector('#add-recipe-direction').querySelector('ol');
      directionsList.innerHTML += '<li>Step:</li><textarea></textarea>';
    });

    //Add images
    this.shadowRoot.getElementById('addImage').addEventListener("click", e => {
      e.preventDefault();   
      let imagesList = this.shadowRoot.querySelector('#chooseFiles');
      imagesList.innerHTML += '<input type="file" id="img" name="img" accept="image/*">';
    });

    }
} 

customElements.define('add-recipe-page', AddRecipePage);
