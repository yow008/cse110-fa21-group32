// HomePage.js
import { Router } from '../scripts/Router.js';
const LOCAL_URL = 'http://127.0.0.1:5000';
const router = new Router();

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
    `;
    article.innerHTML = `
        <!--<h1>Home Page</h1>-->
        <!--ADD RECIPES HERE-->
        <p id="#user-status"></p>
        <p id="#user-email"></p>
        <button id="#btn-delete" type="button">Delete User</button>
        <button id="#btn-recipe" type="button">See Added Recipes</button>
        <div id="#recipeDiv">
        </div>
        <ul>
            <li> <button id="ExpRecipe" type="menu">Recipe 1 (click this one)</button></li>
            <li> <button type="menu">Recipe 2 (not linked)</button></li>
            <li> <button type="menu">Recipe 3 (not linked)</button></li>
        </ul>
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

    // Display current user info
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
  fetch(
    // need to encode with UTF-8 for special characters like ' '
    `${LOCAL_URL}?type=request&elem=email&user=${encodeURIComponent(
      username
    )}&pass=${encodeURIComponent(password)}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // populates search results page and redirects there
      userEmail.innerHTML = `User email: ${data.userInfo[0]}`;
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  //setFormMessage(loginForm, 'error', 'Invalid username or password!');
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

  console.log(msg);

  fetch('http://127.0.0.1:5000', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(msg),
  })
    .then((response) => response.json())
    .then((data) => {
      window.location.href = 'userLogin.html';
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  //setFormMessage(loginForm, 'error', 'Invalid username or password!');
}

/**
 *
 * @param {*} username
 * @param {*} password
 */
function getOwnRecipes(username, password) {
  fetch(
    // need to encode with UTF-8 for special characters like ' '
    `${LOCAL_URL}?type=getCustomizedRecipeIDs&user=${encodeURIComponent(
      username
    )}&pass=${encodeURIComponent(password)}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // populates search results page and redirects there
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
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  //setFormMessage(loginForm, 'error', 'Invalid username or password!');
}

/**
 * Uses the recipe ID to get the full json details of the recipe. Once
 * the recipe is found, set the recipe information.
 * @param {String} recipeId
 * @param {SearchResultsPage} recipePage
 */
function fetchRecipe(recipeId, recipePage) {
  fetch(
    // need to encode with UTF-8 for special characters like ' '
    `${LOCAL_URL}?type=fetchRecipe&id=${encodeURIComponent(recipeId)}`,
    {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      recipePage.data = data;
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
