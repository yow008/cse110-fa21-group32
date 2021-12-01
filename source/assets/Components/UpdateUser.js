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
        <table style="background-color: #eecbcc" align="center" >
        <th scope="col" style="text-align: center"><img src="assets/icons/logo.png"></th>
        <th scope="col">
            <table id="#edit-user-table">
                <tr id="#edit-username>
                    <td>Change Username: </td>
                    <td>Change Username 1: </td>
                </tr>
                <tr id="#edit-email>
                    <td>Change Email: </td>
                    <td>Change Email 1: </td>
                </tr>
                <tr id="#edit-password>
                    <td>New Password: </td>
                    <td>New Password 1: </td>
                </tr>
                <tr id="#edit-confirm-password>
                    <td>Confirm Password: </td>
                    <td>Confirm Password 1: </td>
                </tr>
                <tr>
                    <td><button id="#add-changes">Add changes</button></td>
                </tr>
            </table>
        </th>
        </table>
        <br>
        `;

    // Append elements to the shadow root
    this.shadowRoot.append(styles, article);

    const user = localStorage.getItem('username');
    const token = localStorage.getItem('token');

    // Create Edit Username Label and text area
    // let editUsername = document.createElement('div');
    // let editUsernameLabel = document.createElement('label');
    // editUsernameLabel.innerHTML = 'Change Username: ';
    // editUsernameLabel.setAttribute('for', '#edit-username');
    // let editUsernameTextArea = document.createElement('input');
    // editUsernameTextArea.setAttribute('type', 'text');
    // editUsernameTextArea.setAttribute(
    // 'value',
    // localStorage.getItem('username')
    // );
    // editUsernameTextArea.setAttribute('id', '#edit-username');
    // editUsername.appendChild(editUsernameLabel);
    // editUsername.appendChild(editUsernameTextArea);
    // editProfileSection.appendChild(editUsername);

    // Add current email to email textarea element
    let email = this.shadowRoot.getElementById('email');
    //getEmail(user, token, email);
    console.log('Hello');
    // console.log(email);
    // let editEmail = document.createElement('div');
    // let editEmailLabel = document.createElement('label');
    // editEmailLabel.innerHTML = 'Change Email: ';
    // editEmailLabel.setAttribute('for', '#edit-email');
    // let editEmailTextArea = document.createElement('input');
    // editEmailTextArea.setAttribute('type', 'text');
    // editEmailTextArea.setAttribute('value', '"current Email"');
    // editEmailTextArea.setAttribute('id', '#edit-email');
    // editEmail.appendChild(editEmailLabel);
    // editEmail.appendChild(editEmailTextArea);
    // editProfileSection.appendChild(editEmail);

    // Create Edit Password Label and text area
    // let editPassword = document.createElement('div');
    // let editPasswordLabel = document.createElement('label');
    // editPasswordLabel.innerHTML = 'New Password: ';
    // editPasswordLabel.setAttribute('for', '#edit-password');
    // let editPasswordTextArea = document.createElement('input');
    // editPasswordTextArea.setAttribute('type', 'text');
    // editPasswordTextArea.setAttribute('placeholder', 'New Password');
    // editPasswordTextArea.setAttribute('id', '#edit-password');
    // editPassword.appendChild(editPasswordLabel);
    // editPassword.appendChild(editPasswordTextArea);
    // editProfileSection.appendChild(editPassword);

    // // Create Edit Password confirm Label and text area
    // let editConfirmPassword = document.createElement('div');
    // let editConfirmPasswordLabel = document.createElement('label');
    // editConfirmPasswordLabel.innerHTML = 'Confirm New Password: ';
    // editConfirmPasswordLabel.setAttribute('for', '#edit-confirm-password');
    // let editConfirmPasswordTextArea = document.createElement('input');
    // editConfirmPasswordTextArea.setAttribute('type', 'text');
    // editConfirmPasswordTextArea.setAttribute('placeholder', 'Confirm Password');
    // editConfirmPasswordTextArea.setAttribute('id', '#edit-confirm-password');
    // editConfirmPassword.appendChild(editConfirmPasswordLabel);
    // editConfirmPassword.appendChild(editConfirmPasswordTextArea);
    // editProfileSection.appendChild(editConfirmPassword);
    // let addChangesBtn = document.createElement('button');
    // addChangesBtn.innerHTML = 'Add Changes';
    // editProfileSection.appendChild(addChangesBtn);
    // addChangesBtn.addEventListener('click', (e) => {
    //   console.log('click');
    // });
  }
}

// /**
//  * TODO:
//  * @param {String} username
//  * @param {String} token
//  */
// function getEmail(username, token, userEmail) {
//   const emailReq = `type=request&elem=email&user=${encodeURIComponent(
//     username
//   )}&token=${encodeURIComponent(token)}`;

//   /**
//    * TODO:
//    * @param {*} data
//    */
//   function getFn(data) {
//     userEmail.innerHTML = `User email: ${data.userInfo[0]}`;
//     //setFormMessage(loginForm, 'error', 'Invalid username or password!');
//   }

//   GET(emailReq, getFn);
// }

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
