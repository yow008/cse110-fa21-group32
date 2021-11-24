// AddRecipe.js

class AddRecipePage extends HTMLElement {
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
        `;
        article.innerHTML = `
        <h2>Add Recipe</h2>
        <div class="add-recipe-navbar">
          <!-- li><a onclick="navTo('homeID')" href="javascript:void(0)">home</a></li> -->
          <a href="#add-recipe-summaryID" id="ToAddSum">Summary</a>
          <a href="#add-recipe-ingredientsID" id="ToAddIng">Ingredients</a>
          <a href="#add-recipe-directionID" id="ToAddDir">Directions</a>
        </div>

        <form id="new-recipe">
        <!--Add Recipe Summary-->
        <div id="add-recipe-summary" style="display: show">
        <br>

        <!--Add Image-->
        <label for="img"><p><strong>Add Image</strong></p></label>
        <span id="chooseFiles">
          <input type="file" id="img" name="img" accept="image/*"/>
        </span>
        <br>
        <br>
        <button id="addImage">Add Another Image</button>
        <br>
        <br>

        <!--Basic Information-->
        <label>Cooking Time:</label>
        <input type="text" name="cookingTimeHour" id="#input--cook-time-hour" placeholder="hours..">
        <input type="text" name="cookintTimeMin" id="#input--cook-time-mins" placeholder="mins..">
        <br>
        <br>

        <label id="servings" for="servings"> No. of Servings: </label>
        <input type="text" name="numServings" id="#input--no-of-serv>
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
      <textarea id="addTitle" name="recipeTitle" placeholder="Title:"></textarea><br>
      <textarea id="addSummary" name="recipeSummary" placeholder="Summary"></textarea>
      <br>
      </div>
    
      <!--Add Recipe Ingredients-->
      <div id="add-recipe-ingredients" style="display: none">
      <label for="ingredients"><p><strong>Add Ingredients</strong></p></label>
      <table>
        <tr>
          <th>Qty</th>
          <th>Unit</th>
          <th>Ingredient</th>
        </tr>
        <tr>
          <td><input type="text" name="quantity"/></td>
          <td><input type="text" name="unit"/></td>
          <td><input type="text" name="ingredientName"/></td>
        </tr>
      </table>
      <!--When click add more should create another new 'tr' with three new inpurts-->
      <button id="addIngredientButton"> Add More </button>
      <br>
      </div>
      <!--TO DO delete ingredients button-->
  
      <!--Add Recipe Directions-->
      <div id="add-recipe-direction" style="display: none">
        <p>Direction</p>
        <ol>
          <li>Step:</li>
          <textarea name="directionStep"></textarea>
        </ol>
        <br>
        <!--When click add more should create another new textarea for direction-->
        <button id="addDirectionButton"> Add More </button>
      </div>
      <br>
      <input type="submit" value="Publish">
      </form>
      <!--TO DO delete Directions button-->
  
      
      <button id="save">Save Draft</button>
      
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
      ingredientsList.innerHTML += '<tr><td><input type="text" name="quantity"/></td><td><input type="text" name="unit"/></td><td><input type="text" name="ingredientName"/></td><td><button onclick="event.preventDefault();this.parentNode.deleteRow(this.rowIndex)">Delete Row</button></td></tr>';
    });

    function deleteThisRow(event, row) {
      event.preventDefault();
      this.shadowRoot.querySelector('#add-recipe-ingredients').querySelector('table').deleteRow(row.rowIndex);
    }

    //When click "Add More" there should be a new input text area for user to input information
    this.shadowRoot.getElementById('addDirectionButton').addEventListener("click", e => {
      e.preventDefault();   
      let directionsList = this.shadowRoot.querySelector('#add-recipe-direction').querySelector('ol');
      directionsList.innerHTML += '<li>Step:</li><textarea name="directionSteps"></textarea>';
    });

    //Add images
    this.shadowRoot.getElementById('addImage').addEventListener("click", e => {
      e.preventDefault();   
      let imagesList = this.shadowRoot.querySelector('#chooseFiles');
      imagesList.innerHTML += '<input type="file" id="img" name="img" accept="image/*"/>';
    });

    function deleteThisRow(row) {
      console.log(row);
      this.shadowRoot.querySelector('#add-recipe-ingredients').querySelector('table').deleteRow(row.rowIndex);
      console.log("deleteThisRow");
    }

    //listener when a user save the form
    //newRecipe.addEventListener("submit", handleFormSubmit)

    /**
     * TODO:
     * Event handler for a form sumbit event
     * @param {String} recipeForm
     * @param {RecipePage} RecipePage
     */

  
    const newRecipe = this.shadowRoot.getElementById("new-recipe");
    newRecipe.addEventListener('submit', (e) => {
      e.preventDefault();
      // console.log(e.target);
      // const data = new FormData(e.target);
      // console.log(data);
      postCreateRecipeData();
    });

    const title = this.shadowRoot.getElementById("addTitle");
    const photos = this.shadowRoot.getElementById("chooseFiles");

    
    function postCreateRecipeData() {
      
      
      // console.log(this.shadowRoot.getElementById("addTitle"))
      
      let imgList = photos.querySelectorAll('input[type="file"]');
      let images = {};

      
      // https://www.geeksforgeeks.org/how-to-convert-image-into-base64-string-using-javascript/

      for (let i = 0; i < imgList.length; i++) {
        console.log(imgList[i].files[0])
        if (imgList[i].files.length > 0) {
          images[i] = base64string
        }
      }


      let data = {
        type: 'postRecipe',
        title: title.value,
        img: images
          
        // for (let i = 0; i < photos.files.length; i++) {
           
        //  }
        }
        
      
    
      //console.log(data);
      
      // data.append('servings', this.shadowRoot.getElementById("servings"));
      // let readyInMinutes = this.shadowRoot.getElementById("#input--cook-time-hour")*60 + this.shadowRoot.getElementById("#input--cook-time-minutes");
      // data.append('readyInMinutes', readyInMinutes);
      // data.append('tagCountry', this.shadowRoot.getElementById("tag1-list"));
      // data.append('tagFoodType', this.shadowRoot.getElementById("tag2-list"));
      // data.append('summary', this.shadowRoot.getElementById("summary"));

      // const directionsList= this.shadowRoot.querySelector("textarea[name='directionStep]");
      // for (let i=0; i<directionsList.length; i++) {
      //   data.append('instructions', directionsList[i]);
      // }
      

      fetch('http://127.0.0.1:5000', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'img',
        },
        //body: JSON.stringify(data),
        body: imgList[0].files[0]
      })
        .then((response) => response.json())
        .then((data) => {
          //   window.location.href = 'home.html';
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }


    }
} 

customElements.define('add-recipe-page', AddRecipePage);
