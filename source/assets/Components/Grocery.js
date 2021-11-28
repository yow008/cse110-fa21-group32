// Grocery.js

// IMPORTS
// import { router } from '../scripts/main.js';
// import { GET, POST } from '../scripts/request.js';

/**
 * Class: GroceryPage
 * TODO:
 */
class GroceryPage extends HTMLElement {
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
    <h2>Grocery List</h2>
    <div id="grocery-list">
    </div>
    <!--Add Recipe Ingredients-->
    <p> Table </p>
    <table>
        <tr>
        </tr>
    </table>
    <p> Unordered List </p>
    <ul>
        <input type="checkbox" checked>
        <label>some item</label>
        <br>
        <input type="checkbox">
        <label>some item</label>
        <br>
        <input type="checkbox" checked>
        <label>some item</label>
        <br>
    </ul>
    <button>Add (Add Fixed Item.) </button>
    <button id="test">Test (For Integration Testing) </button>
        `;

    // Append elements to the shadow root
    this.shadowRoot.append(styles, article);

    /* ADDED */
    /* Dummy Test. Delete this after integration with backend. */
    var name = 'Ingredient name';
    var amount = 3;
    var unit = 'mg';
    this.shadowRoot.querySelector('button').addEventListener('click', (e) => {
      e.preventDefault();
      let ingredientsList = this.shadowRoot.querySelector('table');
      ingredientsList.innerHTML +=
        '<tr><td><input type="checkbox"></td><td>' +
        name +
        '</td><td>' +
        amount +
        unit +
        '</td></tr>';
      //ingredientsList.innerHTML += ingredient;
    });

    /* Integration Test. Modify this. */
    this.shadowRoot.getElementById('test').addEventListener('click', (e) => {
      e.preventDefault();
      loadIngredientList();
    });

    function loadIngredientList() {
      /* NOT SURE About fetch() */
      fetch('http://127.0.0.1:5000', {
        method: 'GET', // or 'PUT'
        headers: {
          'Content-Type': 'img',
        },
        //body: JSON.stringify(data),
        //body: imgList[0].files[0]
      })
        .then((response) => response.json())
        .then((data) => {
          //   window.location.href = 'home.html';
          console.log('Success:', data);
          let fullIngredientListPos = this.shadowRoot.querySelector('table');
          let fullIngredientList = data.recipe.extendedIngredients;
          for (let i = 0; i < fullIngredientList.length; i++) {
            fullIngredientListPos.innerHTML +=
              '<tr><td><input type="checkbox"></td><td>' +
              fullIngredientList[i].name +
              '</td><td>' +
              fullIngredientList[i].amount +
              fullIngredientList[i].unit +
              '</td></tr>';
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }
}

customElements.define('grocery-page', GroceryPage);
