// Profile.js

// IMPORTS
import { router } from '../scripts/main.js';
import { GET /*, POST*/ } from '../scripts/request.js';

/**
 * Class: ProfilePage
 * Shows user information and shows recipes created by the user.
 * Also allows for updating user account information.
 */
class ProfilePage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Create styles and root element
    const styles = document.createElement('style');
    const article = document.createElement('article');

    // Added styles
    styles.innerHTML = `
    h2{
        background-color: #CA676A;
        background-size: cover;
        padding: 23.5px;
        color: white;
      }

    table {
      table-layout: fixed;
      width: 80%;
      text-align: left;
    }

    img {
      border-radius: 50%;
      width:  100px;
      height: 100px;
      object-fit: contain;
    }

    th {
        height: 200px;
    }

    .button-group button {
      background-color: transparent;
      border: transparent;
        cursor: pointer;
      float: left;
    }

    .button-group:after {
      content: "";
      clear: both;
      display: table;
    }

    .button-group button:not(:last-child) {
      border-right: none; /* Prevent double borders */
    }

    .button-group button:hover {
      color: blue;
    }

    `;

    /* Added article */
    article.innerHTML = `
        <h2>User Profile</h2>

        <!--Profile Page Navbar-->
        <table class=profile-page-navbar style="background-color: #eecbcc" align="center" >
        <th scope="col" style="text-align: center"><img src="assets/icons/logo.png"></th>
        <th scope="col">
            <ul>
                <li><a id="UserRec">Recipes</a></li><br>
                <li><a id="UserRev">Reviews</a></li><br>
                <li id="#section-edit-profile"><button class="normal-button" id="#button-edit-profile" type="button">Edit Profile</button></li>

            </ul>
        </th>
        </table>
        <br>

        <!--Profile Page Recipe-->
        <div class="button-group">
          <button id="recipe-in-profile-button" style="width:50%; color: blue">Recipes</button>
          <button id="review-in-profile-button" style="width:50%; color: grey">Reviews</button>
        </div>
        <div id="profile-page-recipeID" class="profile-page-recipe">
            <p>Recipe Gallery Should Be Displayed Here.</p>
            
            <br>
        </div>
        `;

    // Append elements to the shadow root
    this.shadowRoot.append(styles, article);

    const user = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    getRecipes(user, token, this.shadowRoot);

    const editProfileBtn = this.shadowRoot.getElementById(
      '#button-edit-profile'
    );

    router.addPage('update-user-page', function () {
      document.getElementById('#section--profile').classList.remove('shown');
      document.getElementById('#section--update-user').classList.add('shown');
      console.log(document.getElementById('#section--update-user'));
    });

    editProfileBtn.addEventListener('click', () => {
      const updateUserPage = document.createElement('update-user-page');

      updateUserPage.classList.add('shown');
      document.getElementById('#section--update-user').innerHTML = '';
      document
        .getElementById('#section--update-user')
        .appendChild(updateUserPage);
      router.navigate('update-user-page');
    });
  }

  set recipes(recipes) {}
}

/**
 *
 * @param {*} username
 * @param {*} token
 * @param {*} shadowRoot
 */
function getRecipes(username, token, shadowRoot) {
  const searchReq = `type=getCustomizedRecipeIDs&user=${encodeURIComponent(
    username
  )}&token=${encodeURIComponent(token)}`;

  /**
   *
   * @param {*} data
   */
  function atFetch(data) {
    let userRecipes = [];
    for (let i = 0; i < data.recipes.length; i++) {
      // Create title element
      let recipe = data.recipes[i];
      const title = document.createElement('h3');
      title.innerText = recipe['title'];
      const image = document.createElement('img');
      image.setAttribute('src', recipe['image']);
      image.setAttribute('alt', 'No Image');
      shadowRoot.getElementById('profile-page-recipeID').appendChild(title);
      shadowRoot.getElementById('profile-page-recipeID').appendChild(image);

      userRecipes.push(recipe['id']);
      // Add page to router so navigate works
      router.addPage(`recipe_${recipe['id']}`, function () {
        document.getElementById('#section--profile').classList.remove('shown');

        document.getElementById('#section--recipe').classList.add('shown');

        // Fetch and populate recipe page and add to recipe section
        const recipePage = document.createElement('recipe-page');
        recipePage.data = recipe;
        recipePage.classList.add('shown');
        document.getElementById('#section--recipe').innerHTML = '';
        document.getElementById('#section--recipe').appendChild(recipePage);
      });

      // Add click listener to title element -> navigates to recipe card page
      title.addEventListener('click', () => {
        // let recipeView = document.getElementById('#profile-page-recipeID');
        // while (recipeView.firstChild) {
        //   recipeView.removeChild(recipeView.firstChild);
        // }
        router.navigate(`recipe_${recipe['id']}`);
      });
    }
    localStorage.setItem('userRecipes', userRecipes);
  }

  GET(searchReq, atFetch);
}

customElements.define('profile-page', ProfilePage);
