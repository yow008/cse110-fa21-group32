// Recipe.js
import { router } from '../scripts/main.js';

/**
 * Class: RecipePage
 * Shows detailed information of the recipe broken
 * down into summary, ingredients, and direction tabs.
 */
class RecipePage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Create styles and root element
    const styles = document.createElement('style');
    const article = document.createElement('article');

    // Fill in styles and root element
    styles.innerHTML = `
    h2{
      margin-bottom: 0 !important;
      background-color: #324A54;
      background-size: cover;
      padding: 23.5px;
      color: white;
      margin-top: 0;
      text-align: center;
      font-weight: lighter !important;
    }
    button.openbtn {
      background-color: #324A54 !important;
    }

    .recipe-navbar button {
  
      border: transparent;
      cursor: pointer;
      float: left;
      color: white;
      font-size: large;
      height: 31pt;
    }

    .recipe-navbar:after {
      content: "";
      clear: both;
      display: table;
    }

    .recipe-navbar button:not(:last-child) {
      border-right: none; /* Prevent double borders */
    }

    img{
      width: 100%;
      max-height: 400px;
      object-fit: cover;
    }
    .genInfo{
      display: flex;
      justify-content: space-around;
      background-color: #324A54;
      padding: 40px;
      color: white !important;
      font-family: IBM Plex Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 9px;
    }
    .insertInfo{
      display: flex;
      justify-content: space-around;
    }
    .my-container{
    }
    .my-row{
      background: #324A54;
      color: white;
    }

    .my-col{
      height: 12.5rem;
    }

    .circle {
      background: white;
      border-radius: 50%;
      height: 6.5rem;
      width: 6.5rem;
      position: relative;
      margin-left:auto;
      margin-right:auto;
      display:block;
    }

    .circle > p{
      color: #609C8B;
      hyphens: auto;
      margin: 0.75em;
      text-align: center;
      font-size: 3rem;
    }

    .recipe-description{
      padding: 1.5rem;
      font-size: .8rem;
      font-style: italic;
    }

    .my-navbar{
      background: #324A54;
    }

    .navbar-light .navbar-nav .nav-link {
      color: white;
    }

    
    `;

    article.innerHTML = `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

        <h2>RECIPE NAME</h2>
        
        <nav class="navbar navbar-expand-lg navbar-light my-navbar">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav nav-fill w-100">
            <a id="ToSum" class="nav-item nav-link active" href="#recipe-summaryID">Summary<span class="sr-only"></span></a>
            <a id="ToIng" class="nav-item nav-link" href="#recipe-ingredientsID">Ingredients</a>
            <a id="ToDir" class="nav-item nav-link" href="#recipe-directionID">Directions</a>
          </div>
        </div>
      </nav>

        <!--Recipe Summary-->
        <div id="recipe-summaryID" class="recipe-summary" style="display: block">
        <!--<p>Summary</p>-->

        <!--Carousel-->
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=20&m=1218254547&s=170667a&w=0&h=mOEC7x7qU5NC78mCULs-jAPeLkxy8opOvIbGSnwmAyw=" class="d-block w-100">
            </div>
            <div class="carousel-item">
              <img src="https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=20&m=1155240408&s=612x612&w=0&h=Zvr3TwVQ-wlfBnvGrgJCtv-_P_LUcIK301rCygnirbk=" class="d-block w-100">
            </div>
            <div class="carousel-item">
              <img src="https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=20&m=1218254547&s=170667a&w=0&h=mOEC7x7qU5NC78mCULs-jAPeLkxy8opOvIbGSnwmAyw=" class="d-block w-100">
            </div>
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>

          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        
        <!--general info-->
        <div class="container-fluid my-container">
          <div class="row justify-content-center d-flex align-items-center my-row">
            <div class="col my-col text-center align-items-center justify-content-center p-4">
              <div class="circle d-flex align-items-center">
                <p>X</p>
              </div>
              <br>
              Cook Time
            </div>
            <div class="col my-col text-center p-4">
              <div class="circle d-flex align-items-center">
                <p>X</p>
              </div>
              <br>
              Servings
            </div>
            <div class="col my-col text-center p-4">
              <div class="circle d-flex align-items-center">
                <p>X</p>
              </div>
              <br>
              Cost
            </div>
          </div>
        </div>
        <br>
        <div class="recipe-description">
          <p>INSERT RECIPE DESCRIPTION Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <button type="button" class="recipe-summmaryButton">Add to My Favorites</button>
        </div>
        <!--Recipe Ingredients-->
        <div id="recipe-ingredientsID" class="recipe-ingredients" style="display: none">
        <p>Ingredients</p>
        <!--Add To List Button--> 
        <form></form>
        <br>
        <button type="button" id="addToList">Add to List</button>
        </div>
        <!--Recipe Directions-->
        <div id="recipe-directionID" class="recipe-direction" style="display: none">
        <p>Direction</p>
        <ul>
        </ul>
        <button type ="button" id="LinkToCM"> Cook </button>
        </div>
    `;

    // Append elements to the shadow root
    this.shadowRoot.append(styles, article);
  }

  /**
   * Populate the recipe information sections with data
   * @param {JSON} data Recipe data retrieved from backend (db or Spoonacular)
   */
  set data(data) {
    console.log(data);
    this.json = data;
    this.id = this.shadowRoot.querySelector('article').innerHTML = `
      <h2>Recipes</h2>
      <div class="recipe-navbar">
      <a href="#recipe-summaryID" id="ToSum">Summary</a>
      <a href="#recipe-ingredientsID" id="ToIng">Ingredients</a>
      <a href="#recipe-directionID" id="ToDir">Directions</a>
      </div>
      <br>
      <!--User recipes ONLY-->
      <div class="editRecipes">
      <button type="button" id="editRecipe"> Edit </button>
      </div>
      <br>
      <!--Recipe Summary-->
      <div id="recipe-summaryID" class="recipe-summary" style="display: block">
      <button type="button" class="recipe-summmaryButton">Add to My Favorites</button>
      <div id="recipe-servingsID" class="recipe-servings">Servings: </div>
      <div id="recipe-cooktimeID" class="recipe-cooktime">Cooktime: </div>
      Summary:
      
      </div>
      <!--Recipe Ingredients-->
      <div id="recipe-ingredientsID" class="recipe-ingredients" style="display: none">
        <p>Ingredients</p>
        <!--Add To List Button--> 
        <form>
        </form>
        <br>
        <button type="button" id="addToList">Add to List</button>
      </div>
      <!--Recipe Directions-->
      <div id="recipe-directionID" class="recipe-direction" style="display: none">
      <p>Direction</p>
      <ol>
      </ol>
      <button type ="button" id="LinkToCM"> Cook </button>
      </div>
    `;
    //Edit button nav to UpdateRecipe.js
    //TODO: Have ONLY the USER recipe been send to update-recipe
    //----------------------------------------------------------------------------
    router.addPage('update-recipe', function () {
      document.getElementById('#section--recipe').classList.remove('shown');
      document.getElementById('#section--update-recipe').classList.add('shown');
      console.log(document.getElementById('#section--update-recipe'));
    });

    const updateBtn = this.shadowRoot.getElementById('editRecipe');
    updateBtn.addEventListener('click', () => {
      const recipeUpdatePage = document.createElement('update-recipe-page');

      recipeUpdatePage.classList.add('shown');
      document.getElementById('#section--update-recipe').innerHTML = '';
      document
        .getElementById('#section--update-recipe')
        .appendChild(recipeUpdatePage);
      recipeUpdatePage.data = this.json;
      router.navigate('update-recipe');
    });

    router.addPage('cooking-mode', function () {
      document.getElementById('#section--recipe').classList.remove('shown');

      document.getElementById('#section--cooking-mode').classList.add('shown');
    });

    const CMPage = this.shadowRoot.getElementById('LinkToCM');
    CMPage.addEventListener('click', () => {
      const cookingPage = document.createElement('cooking-mode-page');
      cookingPage.classList.add('shown');
      document.getElementById('#section--cooking-mode').innerHTML = '';
      document
        .getElementById('#section--cooking-mode')
        .appendChild(cookingPage);
      cookingPage.data = this.json;
      router.navigate('cooking-mode');
    });

    // Set Title
    const title = getTitle(data).toUpperCase();
    this.shadowRoot.querySelector('h2').innerHTML = title;

    // Set Summary
    // var image = new Image();
    // image.src =
    // document.body.appendChild(image);
    const summary = document.createElement('p');
    const image = document.createElement('img');
    summary.innerHTML = getSummary(data);
    image.setAttribute('width', '400');
    image.setAttribute('src', getImage(data));
    this.shadowRoot.getElementById('recipe-summaryID').appendChild(image);
    this.shadowRoot.getElementById('recipe-summaryID').appendChild(summary);

    //Set Servings
    const servings = document.createElement('p');
    servings.innerHTML = getServings(data);
    this.shadowRoot.getElementById('recipe-servingsID').appendChild(servings);

    // Set cooktime
    const cooktime = document.createElement('p');
    cooktime.innerHTML = timeConvert(getCookTime(data));
    this.shadowRoot.getElementById('recipe-cooktimeID').appendChild(cooktime);

    //Set Ingredients
    const form = this.shadowRoot.querySelector('form');
    for (let i = 0; i < data.recipe.extendedIngredients.length; i++) {
      const ingredient = data.recipe.extendedIngredients[i];
      const div = document.createElement('div');
      const currElement = document.createElement('input');
      currElement.setAttribute('type', 'checkbox');
      currElement.setAttribute('name', ingredient.name);
      currElement.setAttribute('value', ingredient.original);
      div.append(currElement);
      const content = document.createElement('label');
      content.setAttribute('for', ingredient.name);
      content.innerHTML = ingredient.original;
      div.append(content);
      form.append(div);
    }

    // Set Directions
    const list = this.shadowRoot.querySelector('ol');
    for (let i = 0; i < data.recipe.analyzedInstructions[0].steps.length; i++) {
      const step = data.recipe.analyzedInstructions[0].steps[i];
      const currStep = document.createElement('li');
      currStep.innerHTML = step.step;
      list.appendChild(currStep);
    }

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

    const checkedIng = this.shadowRoot.querySelectorAll(
      'input[type="checkbox"]'
    );
    //Add Ingredients to an Array "ingredientsSelect" List if they are been checked
    function getCheckedIngredient() {
      //console.log(checkedIng);
      let listAll = [];
      let ingredientsSelect = [];
      for (let i = 0; i < checkedIng.length; i++) {
        //console.log(checkedIng[i].value);
        if (checkedIng[i].checked == true) {
          //console.log(checkedIng[i].value);
          ingredientsSelect.push(checkedIng[i].value);
          //TODO: Nasty Array with Recipe Name, ID, and Checked ingredients
          listAll['name'] = title;
          listAll['id'] = data.recipe.id;
          listAll['ingredients'] = ingredientsSelect;
        }
      }
      console.log(ingredientsSelect);
      console.log(listAll);
      return listAll;
    }

    //"Add to list" button -> send the data to Grocery list
    const checklist = this.shadowRoot.getElementById('addToList');
    checklist.addEventListener('click', (e) => {
      e.preventDefault();
      getCheckedIngredient();
    });
  }

  /**
   * Returns the object of the currect recipe being used.
   */
  get data() {
    return this.json;
  }
}

// SUMMARY ELEMENTS
/**
 * Returns number of minutes for cooking the recipe
 * @param {JSON} data
 * @returns Number of minutes it takes to cook this recipe
 */
function getCookTime(data) {
  return data.recipe['readyInMinutes'];
}

// TIME CONVERT
/**
 * Converts time units into a string format (hrs and min equivalent)
 * @param {int} n
 * @returns Number of minutes, hours, and minutes it takes to cook this recipe
 */
function timeConvert(n) {
  var num = n;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return (
    num + ' minutes = ' + rhours + ' hour(s) and ' + rminutes + ' minute(s).'
  );
}

/**
 * Returns the number of servings
 * @param {JSON} data
 * @returns Number of servings this recipe creates
 */
function getServings(data) {
  return data.recipe['servings'];
}

/**
 * Returns the image (Base 64 format)
 * @param {JSON} data
 * @returns Base 64 format of image or url link to image depending on if it comes from spoonacular or our database
 */
function getImage(data) {
  return data.recipe.image;
}

/**
 * Returns the title of the recipe
 * @param {JSON} data
 * @returns Title of recipe
 */
function getTitle(data) {
  return data.recipe.title;
}

/**
 * Returns the summary of the recipe
 * @param {JSON} data
 * @returns Summary paragraph of the recipe
 */
function getSummary(data) {
  return data.recipe.summary;
}

// TODO: remove if remains unused
// // INGREDIENTS ELEMENTS
// /**
//  *
//  * @param {JSON} data
//  * @returns Array of objects where each object contains an ingredient summary,
//  * the ingredient summary object looks like, {name:"", unit:"", amount:""}
//  */
// function getIngreds(data) {
//   return data['extendedIngredients'];
// }

// // DIRECTIONS ELEMENTS
// /**
//  *
//  * @param {JSON} data
//  * @returns An ordered list <ol> with each step in its own list element <li>
//  */
// function getDirs(data) {
//   return data['instructions'];
// }

customElements.define('recipe-page', RecipePage);
