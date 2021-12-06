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
        text-align: center;
      }

    th {
      height: 20pt;
    }

    img {
      border-radius: 50%;
      width:  100px;
      height: 100px;
      object-fit: contain;
    }

    table {
      width: 100%;
    }
    th {
      width: 32%;
        height: 40pt;
    }

    .button-group button {
  
      border: transparent;
      cursor: pointer;
      float: left;
      color: white;
      font-size: large;
      height: 31pt;
    }

    .button-group:after {
      content: "";
      clear: both;
      display: table;
    }

    .button-group button:not(:last-child) {
      border-right: none; /* Prevent double borders */
    }

    .profile-page-review {
      display: none;
    }

    .css-background {
      background-color: #324A54;
      width: 100%;
    }
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .normal-button {
      background-color: #324A54;
      color: white;
      border: none;
      font-size: 14pt;
    }

    a {
      color: white;
      text-decoration: none;
      font-size: 14pt;
    }
    `;

    /* Added article */
    article.innerHTML = `
        <h2>User Profile</h2>

        <!--Profile Page Navbar-->
        <div class=profile-page-navbar>
        <div class="css-background">
          <br>
          <img src="assets/icons/logo.png"/>
          <table>
            <tr>
                <th><a href="#profile-page-recipeID" id="UserRec">Recipes</a></th>
                <th><a href="#profile-page-reviewsID" id="UserRev">Reviews</a></th>
                <th id="#section-edit-profile"><button class="normal-button" id="#button-edit-profile" type="button">Edit Profile</button></th>
            </tr>
          </table>
        </div>
        <br>

        <!--Profile Page Recipe-->
        <div class="button-group">
          <button id="recipe-in-profile-button" style="width:50%; background-color: #324A54">Recipes</button>
          <button id="review-in-profile-button" style="width:50%; background-color: #CA676A">Reviews</button>
        </div>
        <div id="profile-page-recipeID" class="profile-page-recipe">
            <p>Recipe Gallery Should Be Displayed Here.</p>
            
            <br>
        </div>

        <!--Profile Page Reviews-->
        <div id="profile-page-reviewID" class="profile-page-review">
            <p>NOT AVAILABLE</p>
            <br>
        </div>
        `;

    // Append elements to the shadow root
    this.shadowRoot.append(styles, article);

    // Functions for the layout of profile page
    var recipesInProfileButton = this.shadowRoot.getElementById(
      'recipe-in-profile-button'
    );
    var recipesInProfile = this.shadowRoot.getElementById(
      'profile-page-recipeID'
    );
    var reviewsInProfileButton = this.shadowRoot.getElementById(
      'review-in-profile-button'
    );
    var reviewsInProfile = this.shadowRoot.getElementById(
      'profile-page-reviewID'
    );
    recipesInProfileButton.addEventListener('click', () => {
      recipesInProfileButton.style.backgroundColor = '#324A54';
      reviewsInProfileButton.style.backgroundColor = '#CA676A';
      reviewsInProfile.style.display = 'none';
      recipesInProfile.style.display = 'contents';
    });
    reviewsInProfileButton.addEventListener('click', () => {
      reviewsInProfileButton.style.backgroundColor = '#324A54';
      recipesInProfileButton.style.backgroundColor = '#CA676A';
      recipesInProfile.style.display = 'none';
      reviewsInProfile.style.display = 'contents';
    });

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

  set reviews(reviews) {}
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
    for (let i = 0; i < data.ID.length; i++) {
      fetchRecipe(data.ID[i], shadowRoot);
    }

    /**
     *
     * @param {*} recipeId
     * @param {*} shadowRoot
     */
    function fetchRecipe(recipeId, shadowRoot) {
      const fetchReq = `type=fetchRecipe&id=${encodeURIComponent(recipeId)}`;

      /**
       * TODO:
       * @param {JSON} data
       */
      function afterFetch(data) {
        // Create title element
        const title = document.createElement('h3');
        title.innerText = data.recipe.title;
        shadowRoot.getElementById('profile-page-recipeID').appendChild(title);

        // Add page to router so navigate works
        router.addPage(`recipe_${recipeId}`, function () {
          document
            .getElementById('#section--profile')
            .classList.remove('shown');

          document.getElementById('#section--recipe').classList.add('shown');

          // Fetch and populate recipe page and add to recipe section
          const recipePage = document.createElement('recipe-page');
          recipePage.data = data;
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
          router.navigate(`recipe_${recipeId}`);
        });
      }

      GET(fetchReq, afterFetch);
    }
  }

  GET(searchReq, atFetch);
}

customElements.define('profile-page', ProfilePage);