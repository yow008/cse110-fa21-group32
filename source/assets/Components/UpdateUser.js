// Profile.js

// IMPORTS
import { router } from '../scripts/main.js';
import { GET, POST } from '../scripts/request.js';

/**
 * Class: UpdateUserPage
 * TODO:
 */
class UpdateUserPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Create styles and root element
    const styles = document.createElement('style');
    const article = document.createElement('article');

    // Added styles
    //styles.innerHTML = `
    // h2{
    //     background-color: #CA676A;
    //     background-size: cover;
    //     padding: 23.5px;
    //     color: white;
    //   }

    // table {
    //   table-layout: fixed;
    //   width: 80%;
    //   text-align: left;
    // }

    // img {
    //   border-radius: 50%;
    //   width:  100px;
    //   height: 100px;
    //   object-fit: contain;
    // }

    // th {
    //     height: 200px;
    // }

    // .button-group button {
    //   background-color: transparent;
    //   border: transparent;
    //     cursor: pointer;
    //   float: left;
    // }

    // .button-group:after {
    //   content: "";
    //   clear: both;
    //   display: table;
    // }

    // .button-group button:not(:last-child) {
    //   border-right: none; /* Prevent double borders */
    // }

    // .button-group button:hover {
    //   color: blue;
    // }

    // .profile-page-review {
    //   display: none;
    // }
    //`;

    /* Added article */
    article.innerHTML = `
        <h2>Update User Info</h2>

        <!--Update User Navbar-->
        <table class=profile-page-navbar style="background-color: #eecbcc" align="center" >
        <th scope="col" style="text-align: center"><img src="assets/icons/logo.png"></th>
        <th scope="col">
            <ul>
                <li><a href="#profile-page-recipeID" id="UserRec">Recipes</a></li><br>
                <li><a href="#profile-page-reviewsID" id="UserRev">Reviews</a></li><br>
                <li id="#section-edit-profile"><button id="#button-edit-profile" type="button">Update User Info</button></li>
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

        <!--Profile Page Reviews-->
        <div id="profile-page-reviewID" class="profile-page-review">
            <p>NOT AVAILABLE</p>
            <button>REMOVE ME 2</button>
            <br>
        </div>
        `;

    // Append elements to the shadow root
    this.shadowRoot.append(styles, article);

    const user = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    getRecipes(user, token, this.shadowRoot);

    const editProfileSection = this.shadowRoot.getElementById(
      '#section-edit-profile'
    );
    const editProfileBtn = this.shadowRoot.getElementById(
      '#button-edit-profile'
    );
    editProfileBtn.addEventListener('click', (e) => {
      // Create Edit Username Label and text area
      let editUsername = document.createElement('div');
      let editUsernameLabel = document.createElement('label');
      editUsernameLabel.innerHTML = 'Change Username: ';
      editUsernameLabel.setAttribute('for', '#edit-username');
      let editUsernameTextArea = document.createElement('input');
      editUsernameTextArea.setAttribute('type', 'text');
      editUsernameTextArea.setAttribute(
        'value',
        localStorage.getItem('username')
      );
      editUsernameTextArea.setAttribute('id', '#edit-username');
      editUsername.appendChild(editUsernameLabel);
      editUsername.appendChild(editUsernameTextArea);
      editProfileSection.appendChild(editUsername);

      // Create Edit Email Label and text area
      let email = getUserEmail(user, token);
      console.log(email);
      let editEmail = document.createElement('div');
      let editEmailLabel = document.createElement('label');
      editEmailLabel.innerHTML = 'Change Email: ';
      editEmailLabel.setAttribute('for', '#edit-email');
      let editEmailTextArea = document.createElement('input');
      editEmailTextArea.setAttribute('type', 'text');
      editEmailTextArea.setAttribute('value', '"current Email"');
      editEmailTextArea.setAttribute('id', '#edit-email');
      editEmail.appendChild(editEmailLabel);
      editEmail.appendChild(editEmailTextArea);
      editProfileSection.appendChild(editEmail);
      // Create Edit Password Label and text area
      let editPassword = document.createElement('div');
      let editPasswordLabel = document.createElement('label');
      editPasswordLabel.innerHTML = 'New Password: ';
      editPasswordLabel.setAttribute('for', '#edit-password');
      let editPasswordTextArea = document.createElement('input');
      editPasswordTextArea.setAttribute('type', 'text');
      editPasswordTextArea.setAttribute('placeholder', 'New Password');
      editPasswordTextArea.setAttribute('id', '#edit-password');
      editPassword.appendChild(editPasswordLabel);
      editPassword.appendChild(editPasswordTextArea);
      editProfileSection.appendChild(editPassword);
      // Create Edit Password confirm Label and text area
      let editConfirmPassword = document.createElement('div');
      let editConfirmPasswordLabel = document.createElement('label');
      editConfirmPasswordLabel.innerHTML = 'Confirm New Password: ';
      editConfirmPasswordLabel.setAttribute('for', '#edit-confirm-password');
      let editConfirmPasswordTextArea = document.createElement('input');
      editConfirmPasswordTextArea.setAttribute('type', 'text');
      editConfirmPasswordTextArea.setAttribute(
        'placeholder',
        'Confirm Password'
      );
      editConfirmPasswordTextArea.setAttribute('id', '#edit-confirm-password');
      editConfirmPassword.appendChild(editConfirmPasswordLabel);
      editConfirmPassword.appendChild(editConfirmPasswordTextArea);
      editProfileSection.appendChild(editConfirmPassword);
      let addChangesBtn = document.createElement('button');
      addChangesBtn.innerHTML = 'Add Changes';
      editProfileSection.appendChild(addChangesBtn);
      addChangesBtn.addEventListener('click', (e) => {
        console.log('click');
      });
    });
  }
}
/**
 * Retrieves the current users email address
 * @param {string} username The user's username which is found in localStorage
 * @param {string} token The user's token which is found in localStorage
 */
function getUserEmail(username, token) {
  const searchReq = `type=request&user=${encodeURIComponent(
    username
  )}&token=${encodeURIComponent(token)}`;

  return GET(searchReq);
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

customElements.define('update-user-page', UpdateUserPage);
