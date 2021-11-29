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
