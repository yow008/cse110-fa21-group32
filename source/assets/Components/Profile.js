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
        <h2>User Profile</h2>

        <!--Profile Page Navbar-->
        <div class=profile-page-navbar>
            <ul>
                <li><a href="#profile-page-recipeID" id="UserRec">Recipes</a></li>
                <li><a href="#profile-page-reviewsID" id="UserRev">Reviews</a></li>
                <li><button id="#delete-user" type="button">Delete User</button></li>
            </ul>
        </div>

        <!--Profile Page Recipe-->
        <div id="profile-page-recipeID" class="profile-page-recipe hidden">
            <p>Recipes</p>
            <div id = "recipe-view">
                
            </div>
        </div>

        <!--Profile Page Reviews-->
        <div id="profile-page-reviewsID" class="profile-page-reviews hidden">
            <p>Reviews</p>
            <ul>
                <li> <button type="menu">Recipe 1 (not linked)</button></li>
                <li> <button type="menu">Recipe 2 (not linked)</button></li>
                <li> <button type="menu">Recipe 3 (not linked)</button></li>
            </ul>
        </div>
        `;

    // Append elements to the shadow root
    this.shadowRoot.append(styles, article);

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
