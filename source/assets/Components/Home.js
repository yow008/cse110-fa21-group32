// HomePage.js

// IMPORTS
import { router } from '../scripts/main.js';
import { GET, POST } from '../scripts/request.js';

/**
 * Class: HomePage
 * TODO:
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

    `;
    article.innerHTML = `
        <!--<h1>Home Page</h1>-->
        <!--ADD RECIPES HERE-->
        <p id="#user-status"></p>
        <p id="#user-email"></p>
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
        `;

    // Append elements to the shadow root
    this.shadowRoot.append(styles, article);

    router.addPage('recipe', function () {
      document.getElementById('#section--home').classList.remove('shown');
      document.getElementById('#section--search-bar').classList.remove('shown');

      document.getElementById('#section--recipe').classList.add('shown');
    });

    const recipePage = this.shadowRoot.getElementById('ExpRecipe');
    recipePage.addEventListener('click', () => {
      router.navigate('recipe');
    });

    // Display current user info TODO: move to other Profile.js
    const urlParams = new URLSearchParams(window.location.search);
    const user = urlParams.get('user');
    const pass = urlParams.get('pass');

    const userStatus = this.shadowRoot.getElementById('#user-status');
    userStatus.innerHTML = `Currently logged in as ${user}`;

    const userEmail = this.shadowRoot.getElementById('#user-email');
    getEmail(user, pass, userEmail);

    const deleteBtn = this.shadowRoot.getElementById('#btn-delete');
    deleteBtn.addEventListener('click', () => {
      console.log('DELETE');
      deleteUser(user, pass);
    });

    // TODO: delete this and show recipes Profile.js (this was a demo hack)
    const ownRecipes = this.shadowRoot.getElementById('#btn-recipe');
    ownRecipes.addEventListener('click', () => {
      console.log('SHOW USERS');
      const divElem = this.shadowRoot.getElementById('#recipeDiv');
      getOwnRecipes(user, pass);
    });
  }
}

customElements.define('home-page', HomePage);

/**
 * TODO:
 * @param {String} username
 * @param {String} password
 */
function getEmail(username, password, userEmail) {
  const emailReq = `type=request&elem=email&user=${encodeURIComponent(
    username
  )}&pass=${encodeURIComponent(password)}`;

  /**
   * TODO:
   * @param {*} data
   */
  function getFn(data) {
    userEmail.innerHTML = `User email: ${data.userInfo[0]}`;
    //setFormMessage(loginForm, 'error', 'Invalid username or password!');
  }

  GET(emailReq, getFn);
}

/**
 * TODO:
 * @param {String} username
 * @param {String} password
 */
function deleteUser(username, password) {
  let msg = {
    type: 'delete',
    username: username,
    password: password,
  };

  /**
   * TODO:
   */
  function afterDelete() {
    window.location.href = 'userLogin.html';
    //setFormMessage(loginForm, 'error', 'Invalid username or password!');
  }

  POST(msg, afterDelete);
}

/**
 *
 * @param {*} username
 * @param {*} password
 */
function getOwnRecipes(username, password) {
  const getOwnReq = `type=getCustomizedRecipeIDs&user=${encodeURIComponent(
    username
  )}&pass=${encodeURIComponent(password)}`;

  /**
   *
   * @param {*} data
   */
  function getFn(data) {
    Object.keys(data).forEach(function (key) {
      const btn = document.createElement('button');
      console.log(data[key]);
      router.addPage(`recipe_${data[key]}`, function () {
        document.getElementById('#section--home').classList.remove('shown');
        document
          .getElementById('#section--search-bar')
          .classList.remove('shown');

        document.getElementById('#section--recipe').classList.add('shown');

        // Fetch and populate recipe page and add to recipe section
        const recipePage = document.createElement('recipe-page');
        fetchRecipe(data[key], recipePage); //TODO: NEEDS FIXING
        recipePage.classList.add('shown');
        document.getElementById('#section--recipe').appendChild(recipePage);
      });

      btn.addEventListener('click', () => {
        router.navigate(`recipe_${data[key]}`);
      });
      btn.innerHTML = data[key];
      console.log(document.getElementById('#section--home'));
      document.getElementById('#section--home').appendChild(btn);
    });
    //setFormMessage(loginForm, 'error', 'Invalid username or password!');
  }

  GET(getOwnReq, getFn);
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
   * @param {*} data
   */
  function afterFetch(data) {
    recipePage.data = data;
  }

  POST(fetchReq, afterFetch);
}
