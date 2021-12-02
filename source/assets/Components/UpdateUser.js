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
    styles.innerHTML = `
    h2{
        background-color: #CA676A;
        background-size: cover;
        padding: 23.5px;
        color: white;
      }

    #outer-table {
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

    `;

    // <tr id="#edit-username>
    //                 <td>Change Username: </td>
    //                 <td><input type="textarea" id="username" value="Current Username+++"></td>
    //                 <td><input type="textarea" id="username" value="Current Username+++"></td>
    //             </tr>
    //             <tr id="#edit-email>
    //                 <td>Change Email: </td>
    //                 <td><input type="textarea" id="email" value="Current Email++"></td>
    //             </tr>
    //             <tr id="#edit-password>
    //                 <td>New Password: </td>
    //                 <td><input type="textarea" id="password" value="New Password"></td>
    //             </tr>
    //             <tr id="#edit-confirm-password>
    //                 <td>Confirm Password: </td>
    //                 <td><input type="textarea" id="confirm-password" value="New Password+++"></td>
    //             </tr>

    /* Added article */
    article.innerHTML = `
        <h2>Update User Info</h2>

        <!--Update User Navbar-->
        <table id="outer-table" style="background-color: #eecbcc" align="center" >
        <th scope="col" style="text-align: center"><img src="assets/icons/logo.png"></th>
        <th scope="col">
            <div id="edit-username">
                <label for='username'>Change Username: </label>
                <input type='textarea' id="username" value="NewUsername">
            </div>
            <div id="edit-email">
                <label for='email'>Change Email: </label>
                <input type='textarea' id="email" value="NewEmail">
            </div>
            <div id="change-password">
                <label for='password'>Change Password: </label>
                <input type='textarea' id="password" placeholder="NewPassword">
            </div>
            <div id="confirm-password-div">
                <label for='confirm-password'>Confirm Password: </label>
                <input type='textarea' id="confirm-password" placeholder="NewPassword">
            </div>
            <button id="add-changes"> Add Changes </button>
        </th>
        </table>
        <br>
        `;

    // Append elements to the shadow root
    this.shadowRoot.append(styles, article);

    const user = localStorage.getItem('username');
    const token = localStorage.getItem('token');

    // Create Edit Username Label and text area
    let username = this.shadowRoot.getElementById('username');
    username.setAttribute('value', user);

    // Add current email to email textarea element
    let email = this.shadowRoot.getElementById('email');
    getEmail(user, token, email);
    console.log('Hello');

    let password = this.shadowRoot.getElementById('password');
    let confirmPassword = this.shadowRoot.getElementById('confirm-password');

    let addChangesBtn = this.shadowRoot.getElementById('add-changes');
    addChangesBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let newInfo = {
        username: username,
        email: email,
        password,
        password,
      };
      if (
        password.value == confirmPassword.value &&
        password.value != '' &&
        username.value.length > 9
      ) {
        setNewInfo(newInfo);
      } else if (password.value != confirmPassword.value) {
        let nonmatchingPasswords = document.createElement('p');
        nonmatchingPasswords.innerHTML = 'Passwords do not match!';
        let divConfirmPassword = this.shadowRoot.getElementById(
          'confirm-password-div'
        );
        divConfirmPassword.appendChild(nonmatchingPasswords);
      } else if (username.value.length < 10) {
        let divUsername = this.shadowRoot.getElementById('edit-username');
        let usernameError = document.createElement('p');
        usernameError.innerHTML = 'Username must be at least 10 charachetrs';
        divUsername.appendChild(usernameError);
        return;
      } else if (password.value == '') {
        delete newInfo['password'];
        setNewInfo(newInfo);
      }
    });
  }
}

/**
 * TODO:
 * @param {String} username
 * @param {String} token
 */
function getEmail(username, token, userEmail) {
  const emailReq = `type=request&elem=email&user=${encodeURIComponent(
    username
  )}&token=${encodeURIComponent(token)}`;

  /**
   * TODO:
   * @param {*} data
   */
  function getFn(data) {
    console.log(' Hello   ' + data.userInfo[0]);
    userEmail.setAttribute('value', data.userInfo[0]);
    //setFormMessage(loginForm, 'error', 'Invalid username or password!');
  }

  GET(emailReq, getFn);
}

function setNewInfo(newInfo) {
  // const newInfoReq = `type=updateUser&user=${encodeURIComponent(
  //   username
  // )}&token=${encodeURIComponent(token)}`;

  let newInfoPost = {
    type: 'updateUser',
    username: localStorage.getItem('username'), // TODO: Need to update with curr user
    token: localStorage.getItem('token'), // TODO: Need to update with curr password
    newInfo: newInfo,
  };

  function afterUpdate() {
    console.log('Details Updated');
  }

  POST(newInfoPost, afterUpdate);
}

// /**
//  *
//  * @param {*} username
//  * @param {*} token
//  * @param {*} shadowRoot
//  */
// function getRecipes(username, token, shadowRoot) {
//   const searchReq = `type=getCustomizedRecipeIDs&user=${encodeURIComponent(
//     username
//   )}&token=${encodeURIComponent(token)}`;

//   /**
//    *
//    * @param {*} data
//    */
//   function atFetch(data) {
//     for (let i = 0; i < data.ID.length; i++) {
//       fetchRecipe(data.ID[i], shadowRoot);
//     }

//     function fetchRecipe(recipeId, shadowRoot) {
//       const fetchReq = `type=fetchRecipe&id=${encodeURIComponent(recipeId)}`;

//       /**
//        * TODO:
//        * @param {JSON} data
//        */
//       function afterFetch(data) {
//         // Create title element
//         const title = document.createElement('h3');
//         title.innerText = data.recipe.title;
//         shadowRoot.getElementById('profile-page-recipeID').appendChild(title);

//         // Add page to router so navigate works
//         router.addPage(`recipe_${recipeId}`, function () {
//           document
//             .getElementById('#section--profile')
//             .classList.remove('shown');

//           document.getElementById('#section--recipe').classList.add('shown');

//           // Fetch and populate recipe page and add to recipe section
//           const recipePage = document.createElement('recipe-page');
//           recipePage.data = data;
//           recipePage.classList.add('shown');
//           document.getElementById('#section--recipe').innerHTML = '';
//           document.getElementById('#section--recipe').appendChild(recipePage);
//         });

//         // Add click listener to title element -> navigates to recipe card page
//         title.addEventListener('click', () => {
//           // let recipeView = document.getElementById('#profile-page-recipeID');
//           // while (recipeView.firstChild) {
//           //   recipeView.removeChild(recipeView.firstChild);
//           // }
//           router.navigate(`recipe_${recipeId}`);
//         });
//       }

//       GET(fetchReq, afterFetch);
//     }
//   }

//   GET(searchReq, atFetch);
// }

customElements.define('update-user-page', UpdateUserPage);
