// HomePage.js

// IMPORTS
import { router } from '../scripts/main.js';
import { GET, POST } from '../scripts/request.js';

/**
 * Class: HomePage
 * Starting page after loggin in. Shows some basic user info
 * and some of the favorite/recent recipes.
 */
class HomePage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Create styles and root element
    const styles = document.createElement('style');
    const article = document.createElement('article');

    // Fill in styles and root element
    styles.innerHTML = `
    *{
      clear: both;
    }
/*
    .todayMeals{
      display: flex;
      justify-content: space-between;
    }
    .recentlyVisited{
      display: flex;
      justify-content: space-between;
    }
    .favorites{
      display: flex;
      justify-content: space-between;
    }
*/
    .recipe-grid {
      margin-left: 5%;
      display: grid;
      grid-template-columns: auto auto auto;
      grid-column-gap: 3%;
      grid-row-gap: 3%;
      margin-right: 5%;
    }
    .recipe-picture {
      max-width: 100%;
    }
    button {
      background-color: white;
      border-radius: 9px;
      border: 1.5px solid #ca676a;
      text-align: center;
      min-width: 8%;
      height: 16pt;
    }
    .css-wrap {
      margin-left: 5%;
      margin-bottom: 16pt;
      margin-right: 5%;
    }

    .card-body{
      background-color: #324A54;
      color: white;
      text-align: center;
      font-weight: lighter;
      font-style: normal;
    }

    .card-title{
      font-weight: lighter;
      font-style: normal;
    }

    .my-card{
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .my-container{
      width: 90% !important;
    }


    `;
    article.innerHTML = `
        <!--<h1>Home Page</h1>-->
        <!--ADD RECIPES HERE-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <div class="css-wrap">
        <p id="#user-status"></p>
        <p id="#user-email"></p>
        </div>
        <!--<div class="recipe-grid">
        <div>
          <img class="recipe-picture" src="https://spoonacular.com/recipeImages/634559-556x370.jpg"/>
        </div>
        <div>
          <img class="recipe-picture" src="https://spoonacular.com/recipeImages/634629-556x370.jpg"/>
        </div>
        <div>
          <img class="recipe-picture" src="https://spoonacular.com/recipeImages/624889-556x370.jpg"/>
        </div>
        <div>
          <img class="recipe-picture" src="https://spoonacular.com/recipeImages/624779-556x370.jpg"/>
        </div>
        <div>
          <img class="recipe-picture" src="https://spoonacular.com/recipeImages/634229-556x370.jpg"/>
        </div>
        <div>
          <img class="recipe-picture" src="https://spoonacular.com/recipeImages/624449-556x370.jpg"/>
        </div>
        <div>
          <img class="recipe-picture" src="https://spoonacular.com/recipeImages/634769-556x370.jpg"/>
        </div>
        <div>
          <img class="recipe-picture" src="https://spoonacular.com/recipeImages/634779-556x370.jpg"/>
        </div>
        <div>
          <img class="recipe-picture" src="https://spoonacular.com/recipeImages/624569-556x370.jpg"/>
        </div>
        </div>-->

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

        <br>
        <br>
        <!--div>
        <button id="#btn-delete" type="button">Delete User</button>
        <button id="#btn-recipe" type="button">See Added Recipes</button>
        <div id="#recipeDiv">
        <h3>Today's Meals</h3>
        <div id=#todayMeals class="todayMeals">
            <div><button id="ExpRecipe" type="menu">Recipe 1 (click this one)</button></div>
            <div><button type="menu">Recipe 2 (not linked)</button></div>
            <div><button type="menu">Recipe 3 (not linked)</button></div>
        </div>
        <h3>Recently Visited</h3>
        <div id=#recentlyVisited class="recentlyVisited">
              <div><button id="ExpRecipe" type="menu">Recipe 1 (click this one)</button></div>
              <div><button type="menu">Recipe 2 (not linked)</button></div>
              <div><button type="menu">Recipe 3 (not linked)</button></div>
        </div>
        
        <h3>Favorites</h3>
        <div id=#favorites class="favorites">
              <div> <button id="ExpRecipe" type="menu">Recipe 1 (click this one)</button></div>
              <div> <button type="menu">Recipe 2 (not linked)</button></div>
              <div> <button type="menu">Recipe 3 (not linked)</button></div>
        </div>
        </div>
        </div-->
        `;

    // Append elements to the shadow root
    this.shadowRoot.append(styles, article);

    router.addPage('recipe', function () {
      document.getElementById('#section--home').classList.remove('shown');
      document.getElementById('#section--search-bar').classList.remove('shown');

      document.getElementById('#section--recipe').classList.add('shown');
    });

    // Searches for random recipes to populate the home page
    // If you are going to try attach the results to recipe card elements
    // I would suggest doing this in the AfterSearch function within the
    // searchRandomRecipes function and pass in the cards through a new
    // parameter
    let cards = this.shadowRoot.querySelectorAll('.card');
    searchRandomRecipes(cards);

    // const recipePage = this.shadowRoot.getElementById('ExpRecipe');
    // recipePage.addEventListener('click', () => {
    //   router.navigate('recipe');
    // });

    // Display current user info TODO: move to other Profile.js

    // Looks in LocalStorage to get username and token.
    const user = localStorage.getItem('username');
    const token = localStorage.getItem('token');

    const userStatus = this.shadowRoot.getElementById('#user-status');
    userStatus.innerHTML = `Currently logged in as ${user}`;

    const userEmail = this.shadowRoot.getElementById('#user-email');
    getEmail(user, token, userEmail);

    /*  const deleteBtn = this.shadowRoot.getElementById('#btn-delete');
    deleteBtn.addEventListener('click', () => {
      console.log('DELETE');
      deleteUser(user, token);
    });*/
  }
}

customElements.define('home-page', HomePage);

/**
 * Fetch the email from the user and display it
 * @param {String} username
 * @param {String} token
 */
function getEmail(username, token, userEmail) {
  const emailReq = `type=request&elem=email&user=${encodeURIComponent(
    username
  )}&token=${encodeURIComponent(token)}`;

  /**
   * Populate the display element with the fetched email
   * @param {*} data
   */
  function getFn(data) {
    userEmail.innerHTML = `User email: ${data.userInfo[0]}`;
    //setFormMessage(loginForm, 'error', 'Invalid username or password!');
  }

  GET(emailReq, getFn);
}

/**
 * Deletes the user from the database
 * TODO: add a confirmation page
 * @param {String} username
 * @param {String} token
 */
function deleteUser(username, token) {
  let msg = {
    type: 'deleteUser',
    username: username,
    token: token,
  };

  /**
   * Redirects to the user login page after deleting user
   */
  function afterDelete() {
    window.location.href = 'userLogin.html';
    //setFormMessage(loginForm, 'error', 'Invalid username or password!');
  }

  POST(msg, afterDelete);
}

/**
 * Searches for random recipes to populate the home page
 */
function searchRandomRecipes(resultsObject) {
  const searchReq = `type=searchRandom`;

  /**
   *
   * @param {Object} data Contains all the random recipes
   */
  function afterSearch(data) {
    createRecipeCards(data, resultsObject);
    console.log('creating cards');
  }

  GET(searchReq, afterSearch);
}

/**
 * TODO:
 * @param {Objects} results
 * @param {Object} section
 */
function createRecipeCards(results, section) {
  // Go through every one of the result recipes
  for (let i = 0; i < results.length; i++) {
    const data = results[i];

    // Add recipe title
    section[i].querySelector('h5').innerHTML = data.title;

    // Add recipe picture
    //image.classList.add('css-image');
    section[i].querySelector('img').setAttribute('src', data.image);
    section[i].querySelector('img').setAttribute('alt', data.title);

    // Add the corresponding expand recipe view to router
    addPage(data);

    section[i].addEventListener('click', () => {
      let recipeView = document.getElementById('#section--recipe');
      while (recipeView.firstChild) {
        recipeView.removeChild(recipeView.firstChild);
      }
      router.navigate(`recipe_${data.id}`);
    });
  }
}

/**
 * TODO:
 * @param {String} recipeId
 */
function addPage(data) {
  router.addPage(`recipe_${data.id}`, function () {
    document.getElementById('#section--home').classList.remove('shown');
    document.getElementById('#section--search-bar').classList.remove('shown');
    document.getElementById('#section--grocery').classList.remove('shown');
    document.getElementById('#section--cooking-mode').classList.remove('shown');

    document.getElementById('#section--recipe').classList.add('shown');

    // Fetch and populate recipe page and add to recipe section
    const recipePage = document.createElement('recipe-page');
    //fetchRecipe(recipeId, recipePage);
    recipePage.data = data;
    recipePage.classList.add('shown');
    document.getElementById('#section--recipe').innerHTML = '';
    document.getElementById('#section--recipe').appendChild(recipePage);
  });
  console.log('The end');
}
