// Profile.js

// IMPORTS
import { router } from '../scripts/main.js';
import { GET, POST } from '../scripts/request.js';
const SERVER_URL = 'http://127.0.0.1:5000';

/**
 * Class: ProfilePage
 * TODO:
 */
class ProfilePage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Create styles and root element
    const styles = document.createElement('style');
    const article = document.createElement('article');

    /* Added styles */
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

    .profile-page-review {
      display: none;
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
                <li><a href="#profile-page-recipeID" id="UserRec">Recipes</a></li><br>
                <li><a href="#profile-page-reviewsID" id="UserRev">Reviews</a></li><br>
                <li><button id="#delete-user" type="button">Delete User</button></li>
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
            <button>REMOVE ME 1</button>
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
    
    /* Functions for the layout of profile page */
    var recipesInProfileButton = this.shadowRoot.getElementById('recipe-in-profile-button');
    var recipesInProfile = this.shadowRoot.getElementById('profile-page-recipeID');
    var reviewsInProfileButton = this.shadowRoot.getElementById('review-in-profile-button');
    var reviewsInProfile = this.shadowRoot.getElementById('profile-page-reviewID');
    recipesInProfileButton.addEventListener('click', e => {
      recipesInProfileButton.style.color="blue"
      reviewsInProfileButton.style.color="grey"
      reviewsInProfile.style.display="none"
      recipesInProfile.style.display="contents"
    });
    reviewsInProfileButton.addEventListener('click', e => {
      reviewsInProfileButton.style.color="blue"
      recipesInProfileButton.style.color="grey"
      recipesInProfile.style.display="none"
      reviewsInProfile.style.display="contents"
    });

    const btn = this.shadowRoot.getElementById('#delete-user');
    btn.addEventListener('click', (e) => {
      console.log('Clicked');
    });
    
    const urlParams = new URLSearchParams(window.location.search);
    const user = urlParams.get('user');
    const pass = urlParams.get('pass');
    getRecipes('esther12345','12345');
    
  }  
}

customElements.define('profile-page', ProfilePage);

function getRecipes(username, password) {
  const listId = [];

  const searchReq = `type=getCustomizedRecipeIDs&user=${encodeURIComponent(username
  )}&pass=${encodeURIComponent(password)}`;

  /**
   *
   * @param {*} data
   */
  function atFetch(data) {

    for (let i=0; i<data.ID.length;i++){
      // const div = document.createElement('recipe-view');
      // const image = fetchRecipe(data[i],div);//id
      // div.classList.add('shown');
      listId.push(data.ID[i]);
      // this.shadowRoot.getElementById('recipe-view').appendChild(image);
      
    }

    // function fetchRecipe(recipeId, recipePage) {
    //     const fetchReq = `type=fetchRecipe&id=${encodeURIComponent(recipeId)}`;
      
    //     /**
    //      * TODO:
    //      * @param {JSON} data
    //      */
    //     function afterFetch(data) {
    //       recipePage.data = data;
    //       console.log("HERE")
    //     }
      
    //     fetch(
    //       // need to encode with UTF-8 for special characters like ' '
    //       `${SERVER_URL}?${fetchReq}`,
    //       {
    //         method: 'GET',
    //         mode: 'cors',
    //         headers: {
    //           'Content-Type': 'application/json',
    //           Accept: 'application/json',
    //         },
    //       }
    //     )
    //       .then((response) => {
    //         return response.json();
    //       })
    //       .then((data) => {
    //         afterFetch(data);
    //         console.log('Success:', data);
    //       })
    //       .catch((error) => {
    //         console.error('Error:', error);
    //       });
      // }
  }
  
  GET(searchReq, atFetch);
      
}
