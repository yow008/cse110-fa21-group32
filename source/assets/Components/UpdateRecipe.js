// UpdateRecipe.js

class UpdateRecipePage extends HTMLElement {
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
          <h2>Update Recipe</h2>
          <div class="update-recipe-navbar">
            <!-- li><a onclick="navTo('homeID')" href="javascript:void(0)">home</a></li> -->
            <a href="#update-recipe-summaryID" id="ToUpdateSum">Summary</a>
            <a href="#update-recipe-ingredientsID" id="ToUpdateIng">Ingredients</a>
            <a href="#update-recipe-directionID" id="ToUpdateDir">Directions</a>
          </div>
  
          <form id="update-recipe">
          <!--Update Recipe Summary-->
          <div id="update-recipe-summary" style="display: show">
          <br>
  
          <!--Update Image-->
          <label for="img"><p><strong>Update Image</strong></p></label>
          <ul id="chooseFiles">
            <li><input type="file" id="img" name="img" accept="image/*"/></li>
          </ul>
          <br>
          <br>
          <button id="updateImage">Add Another Image</button>
          <br>
          <br>
  
          <!--Update Basic Information-->
          <label>Cooking Time:</label>
          <input type="text" name="cookingTimeHour" id="#input--cook-time-hour" placeholder="hours..">
          <input type="text" name="cookintTimeMin" id="#input--cook-time-mins" placeholder="mins..">
          <br>
          <br>
  
          <label id="servings" for="servings"> No. of Servings: </label>
          <input type="text" name="numServings" id="#input--no-of-serv">
          <br>
  
        <!--Update Basic Information (Summary)-->
        <label for="sum"><p><strong>Add Summary: </strong></p></label>
        <textarea id="updateTitle" name="recipeTitle" placeholder="Title:"></textarea><br>
        <textarea id="updateSummary" name="recipeSummary" placeholder="Summary"></textarea>
        <br>
        </div>
      
        <!--Update Recipe Ingredients-->
        <div id="update-recipe-ingredients" style="display: none">
        <label for="ingredients"><p><strong>Add Ingredients</strong></p></label>
        <table id="ingredient-table">
          <tr>
            <th>Qty</th>
            <th>Unit</th>
            <th>Ingredient</th>
          </tr>
        </table>
        <!--When click add more should create another new 'tr' with three new inputs-->
        <button id="addIngredientButton"> Add More </button>
        <br>
        </div>
        <!--TO DO delete ingredients button-->
    
        <!--Update Recipe Directions-->
        <div id="update-recipe-direction" style="display: none">
          <p>Direction</p>
          <ol>
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

    // Display Update Summary
    this.shadowRoot
    .getElementById('ToUpdateSum')
    .addEventListener('click', (e) => {
      e.preventDefault();
      this.shadowRoot
        .getElementById('update-recipe-summary')
        .setAttribute('style', 'display: show');
      this.shadowRoot
        .getElementById('update-recipe-ingredients')
        .setAttribute('style', 'display: none');
      this.shadowRoot
        .getElementById('update-recipe-direction')
        .setAttribute('style', 'display: none');
    });

  // Update Ingredients
  this.shadowRoot
    .getElementById('ToUpdateIng')
    .addEventListener('click', (e) => {
      e.preventDefault();
      this.shadowRoot
        .getElementById('update-recipe-summary')
        .setAttribute('style', 'display: none');
      this.shadowRoot
        .getElementById('update-recipe-ingredients')
        .setAttribute('style', 'display: show');
      this.shadowRoot
        .getElementById('update-recipe-direction')
        .setAttribute('style', 'display: none');
    });

  // Update Directions
  this.shadowRoot
    .getElementById('ToUpdateDir')
    .addEventListener('click', (e) => {
      e.preventDefault();
      this.shadowRoot
        .getElementById('update-recipe-summary')
        .setAttribute('style', 'display: none');
      this.shadowRoot
        .getElementById('update-recipe-ingredients')
        .setAttribute('style', 'display: none');
      this.shadowRoot
        .getElementById('update-recipe-direction')
        .setAttribute('style', 'display: show');
    });
  }

    // Fill in form with current recipe data

    set data(data) {
      this.json = data;
      console.log(data);
    //Summary
    //this.shadowRoot.getElementById()

    let cookTimeHourPrev = Math.floor(parseInt(data.recipe['readyInMinutes'])/60);
    let cookTimeMinPrev = parseInt(data.recipe['readyInMinutes'])%60;
    this.shadowRoot.getElementById('#input--cook-time-hour').setAttribute('value', cookTimeHourPrev);
    this.shadowRoot.getElementById('#input--cook-time-mins').setAttribute('value', cookTimeMinPrev);

    this.shadowRoot.getElementById('#input--no-of-serv').setAttribute('value', data.recipe['servings']);
    this.shadowRoot.getElementById('updateTitle').innerHTML = data.recipe['title'];
    this.shadowRoot.getElementById('updateSummary').innerHTML = data.recipe['summary'];

    //Ingredients
    let ingredientTable = this.shadowRoot.getElementById('ingredient-table');
    let ingredientsPrev = data.recipe['extendedIngredients'];

    for (let i=0; i<ingredientsPrev.length; i++) {
        let row = ingredientTable.insertRow(i+1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let deleteButton = row.insertCell(3);

        cell1.innerHTML = ingredientsPrev[i]['amount'];
        cell2.innerHTML = ingredientsPrev[i]['unit'];
        cell3.innerHTML = ingredientsPrev[i]['name'];
        deleteButton.innerHTML =
          '<button onclick="event.preventDefault();this.parentNode.parentNode.parentNode.deleteRow(this.parentNode.parentNode.rowIndex)">Delete Row</button>';
    }

    //Directions
    let instructionsList = this.shadowRoot.getElementById('update-recipe-direction').querySelector('ol');

    for(let i = 0; i < data.recipe.analyzedInstructions[0].steps.length; i++){
      const step = data.recipe.analyzedInstructions[0].steps[i];

      let div = document.createElement('div');
      let stepName = document.createElement('li');
      stepName.innerHTML = "Step:";
      

      let button = document.createElement('button');
      button.innerHTML = 'Delete';

      let stepTextArea = document.createElement('textarea');
      stepTextArea.setAttribute('name', 'directionStep');
      stepTextArea.innerHTML = step.step;

      div.appendChild(stepName);
      div.appendChild(stepTextArea);
      div.appendChild(button);
      
      instructionsList.appendChild(div);

      button.addEventListener('click', function(){
        this.parentNode.remove();
      });
    }

    //Add ingredient to ingredients page
    this.shadowRoot
      .getElementById('addIngredientButton')
      .addEventListener('click', (e) => {
        e.preventDefault();
        let ingredientsList = this.shadowRoot
          .querySelector('#update-recipe-ingredients')
          .querySelector('table');
        let row = ingredientsList.insertRow(-1);
        let quantity = row.insertCell(0);
        quantity.innerHTML = '<input type="text" name="quantity"/>';
        let unit = row.insertCell(1);
        unit.innerHTML = '<input type="text" name="unit"/>';
        let ingredient = row.insertCell(2);
        ingredient.innerHTML = '<input type="text" name="ingredientName"/>';
        let deleteButton = row.insertCell(3);
        deleteButton.innerHTML =
          '<button onclick="event.preventDefault();this.parentNode.parentNode.parentNode.deleteRow(this.parentNode.parentNode.rowIndex)">Delete Row</button>';
      });

    //When click "Add More" there should be a new input text area for user to input information
    this.shadowRoot
      .getElementById('addDirectionButton')
      .addEventListener('click', (e) => {
        e.preventDefault();
        let directionsList = this.shadowRoot
          .querySelector('#update-recipe-direction')
          .querySelector('ol');
        let div = document.createElement('div');
        let li = document.createElement('li');
        li.innerHTML = 'Step:';
        let button = document.createElement('button');
        button.innerHTML = 'Delete';
        let input = document.createElement('textarea');
        input.setAttribute('name', 'directionStep');
        
        div.appendChild(li);
        div.appendChild(input);
        div.appendChild(button);

        directionsList.appendChild(div);

        button.addEventListener('click', function(){
          this.parentNode.remove();
        });
      });

    //Add images
    this.shadowRoot
      .getElementById('updateImage')
      .addEventListener('click', (e) => {
        e.preventDefault();
        let imagesList = this.shadowRoot.querySelector('#chooseFiles');
        let li = document.createElement('li');
        li.innerHTML =
          '<input type="file" id="img" name="img" accept="image/*"/>';
        imagesList.appendChild(li);
      });

      //Send Data
      setTimeout(function () {
        let data = {
          type: 'postRecipe',
          image: images,
          readyInMinutes: readyInMinutes,
          servings: servings.value,
          title: title.value,
          summary: summary.value,
          extendedIngredients: extendedIngredients,
          instructions: instructions,
        };

        console.log(data);
        fetch('http://127.0.0.1:5000', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
          // body: imgList[0].files[0]
        })
          .then((response) => response.json())
          .then((data) => {
            //   window.location.href = 'home.html';
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      });

      //TODO
      //0. Display the image, Delete Image, upload image ***
      //1. Delete Recipe Button
      //2. Check with the backend if the recipe has successfully receive it
      //3. Check with Recipe.js to have the correct recipe to edit
    }
  
}

customElements.define('update-recipe-page', UpdateRecipePage);
