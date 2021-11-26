// Profile.js

// IMPORTS
import { router } from '../scripts/main.js';
import { GET, POST } from '../scripts/request.js';

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
            <ul>
                <li id="but1"> <button type="menu">Recipe 1 (not linked)</button></li>
                <li id="but2"> <button type="menu">Recipe 2 (not linked)</button></li>
                <li id="but3"> <button type="menu">Recipe 3 (not linked)</button></li>
            </ul>
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
  fetch(
    // need to encode with UTF-8 for special characters like ' '
    `${LOCAL_URL}?type=getCustomizedRecipeIDs&user=${encodeURIComponent(
      'esther12345'
    )}&pass=${encodeURIComponent('12345')}`,
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
      console.log(data);
      this.shadowRoot.getElementById('but1').classList.add('shown');
      document.getElementById('but2').classList.add('shown');
      document.getElementById('but3').classList.add('shown');
      
        btn.addEventListener('click', () => {
          router.navigate(`recipe_${data[key]}`);
        });
        btn.innerHTML = data[key];
        console.log(document.getElementById('#profile-page-recipeID'));
        document.getElementById('#profile-page-recipeID').appendChild(btn);
        
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
     
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
  ``});
  }
}
