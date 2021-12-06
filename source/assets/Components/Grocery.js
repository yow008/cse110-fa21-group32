// Grocery.js

// IMPORTS
// import { router } from '../scripts/main.js';
// import { GET, POST } from '../scripts/request.js';

/**
 * Class: GroceryPage
 * The page which shows the list of ingredients belonging to the
 * user. Allows for editing the list manually and adding from recipe view.
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
    <!--Add Recipe Ingredients-->
    <p> Grocery List </p>
    <form id="#my-input">
      <input type="text" id="add-input" placeholder="Add ingredient..."/>
      <button type="submit" id="add-icon">Add to the list</button>
    </form>
    <br>
    <p>My List</p>
    <form id="#my-list">
    </form>
    </div>
    <br>
    <br>
    <br>
    <button type="delete" id="delete">Delete &#10006;</button>
    <button type="reload" id="reload">Reload the Page</button>
    <br>
    <br>
    
    <!--<button type="checked" id="checked">Checked</button>-->
        `;

    // Append elements to the shadow root
    this.shadowRoot.append(styles, article);

    //Not used
    //line through ingredients when user clicked Checked Button
    // const checkedButton = this.shadowRoot.getElementById('checked');
    // checkedButton.addEventListener('click', (e) => {
    //   e.preventDefault();
    //   checkedIngredient();
    // });

    // function checkedIngredient() {
    //   const elements = groceryList.querySelectorAll('input[type="checkbox"]');
    //   for (let i = 0; i < elements.length; i++) {
    //     if (elements[i].checked == true) {
    //       let complete = elements[i].parentElement.querySelector('label');
    //       let findS = elements[i].parentElement.getElementsByTagName('s');
    //       let s = document.createElement('s');
    //       if (findS.length == 0) {
    //         s.append(complete);
    //         elements[i].parentElement.append(s);
    //       } else {
    //         elements[i].parentElement.append(complete);
    //         elements[i].parentElement.querySelector('s').remove();
    //       }
    //     }
    //   }
    // }
  }

  set update(data) {
    //Display checked Ingredients information from the localStorage "grocery"
    this.id = this.shadowRoot.querySelector('article').innerHTML = `
    <h2>Grocery List</h2>
    <div id="grocery-list">
      <!--Add Recipe Ingredients-->
      <p> Grocery List </p>
      <form id="#my-input">
        <input type="text" placeholder="Add ingredient..."/>
        <button type="submit" id="add-icon">Add to the list</button>
      </form>
      <br>

      <p>My List</p>
      <form id="#my-list">
      </form>
    </div>
    <br>
    <br>
    <br>
    <button type="delete" id="delete">Delete &#10006;</button>
    <button type="reload" id="reload">Reload the Page</button>
    <br>
    <br>

    <!--<button type="checked" id="checked">Checked</button>-->
    `;

    const groceryList = this.shadowRoot.getElementById('grocery-list');
    const myIngredient = this.shadowRoot.getElementById('#my-input');
    const myForm = this.shadowRoot.getElementById('#my-list');

    // Get information from the Local Storage for the user's custom list
    let mytempList = JSON.parse(localStorage.getItem('mylist'));

    // If there is nothing in the user's custom list
    if (mytempList == null) {
      mytempList = [];
      let ingredient = [];
      let checked = [];
      let Mylist = {
        name: 'My List', // Title of recipe.
        id: null,
        ingredients: ingredient, // List of checked ingredients in the recipe.
        checked: checked,
      };
      mytempList.push(Mylist);
      localStorage.setItem('mylist', JSON.stringify(mytempList));
    }

    // Gets ingredient and check lists, if null initialize to empty list
    let myIngreds = mytempList['ingredients'];
    if (myIngreds == null) {
      myIngreds = [];
    }

    let myChecks = mytempList['checked'];
    if (myChecks == null) {
      myChecks = [];
    }

    displayIngredients(myIngreds, myChecks, groceryList, myForm, 'mylist');

    // Load list from localStorage "grocery"
    let currList = JSON.parse(localStorage.getItem('grocery'));

    if (currList == null) {
      currList = [];
    }

    // Displays each ingredient from other people's recipes
    for (let i = 0; i < currList.length; i++) {
      let form = document.createElement('form');
      form.setAttribute('class', 'recipe-list');

      // Populates recipe name as title of section
      let p = document.createElement('p');
      p.innerHTML = currList[i]['name'];
      form.append(p);

      // Populates ingredients and checked list
      const ingreds = currList[i]['ingredients'];
      const checks = currList[i]['checked'];

      displayIngredients(ingreds, checks, groceryList, form, 'grocery');
    }

    // Add the input text to the list if user click "Add to the list"
    const addButton = this.shadowRoot.getElementById('add-icon');
    addButton.addEventListener('click', (e) => {
      e.preventDefault();
      addNewIngredient(myIngredient, myForm);
      saveIngredient(myForm); //update my saved ingredients saved in local storage
    });

    // Delete ingredients when user clicked Delete Button
    const deleteButton = this.shadowRoot.getElementById('delete');
    deleteButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (
        window.confirm(
          'Do you want to delete all of your marked ingredients from your list?'
        )
      ) {
        deleteIngredient(groceryList, currList);
        saveIngredient(myForm); //update my saved ingredients saved in local storage
      }
    });

    // Reload page for update grocery information
    const reloadButton = this.shadowRoot.getElementById('reload');
    reloadButton.addEventListener('click', (e) => {
      e.preventDefault();
      location.reload();
    });
  }
}

customElements.define('grocery-page', GroceryPage);

/**
 *
 * @param {*} ingreds
 * @param {*} checks
 * @param {*} groceryList
 * @param {*} form
 */
function displayIngredients(ingreds, checks, groceryList, form, localName) {
  // Displays each ingredient in user's custom list

  for (let e = 0; e < ingreds.length; e++) {
    let div = document.createElement('div');
    let input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    div.append(input);
    let label = document.createElement('label');

    // Updates the ingredient description and checked status
    label.innerHTML = ingreds[e];
    input.checked = checks[e];

    div.append(label);
    form.append(div);

    input.addEventListener('click', () => {
      // input.checked will show the status *after* the click
      let currList = JSON.parse(localStorage.getItem(localName));
      let recipeIdx = -1;

      if (localName === 'grocery') {
        for (let j = 0; j < currList.length; j++) {
          if (
            currList[j]['name'] ===
            input.parentElement.parentElement.querySelector('p').innerText
          ) {
            recipeIdx = j;
            break;
          }
        }
        if (recipeIdx < 0) {
          console.log('Ingredient checkbox not matching error');
          return;
        } else {
          for (let i = 0; i < currList[recipeIdx]['ingredients'].length; i++) {
            if (currList[recipeIdx]['ingredients'][i] === label.innerHTML) {
              currList[recipeIdx]['checked'][i] =
                !currList[recipeIdx]['checked'][i];
              localStorage.setItem(localName, JSON.stringify(currList));
              break;
            }
          }
        }
      } else if (localName === 'mylist') {
        for (let i = 0; i < currList['ingredients'].length; i++) {
          if (currList['ingredients'][i] === label.innerHTML) {
            currList['checked'][i] = !currList['checked'][i];
            localStorage.setItem(localName, JSON.stringify(currList));
            break;
          }
        }
      }
    });
  }
  groceryList.append(form);
}

/**
 *
 * @param {*} myIngredient
 * @param {*} myForm
 */
function addNewIngredient(myIngredient, myForm) {
  let element = myIngredient.querySelector('input[type="text"]');
  let div = document.createElement('div');
  let currElement = document.createElement('input');
  currElement.setAttribute('type', 'checkbox');
  //Maybe have the checkbox invisible by default, and if user click delete button, checkbox will appear??
  div.append(currElement);
  let content = document.createElement('label');
  content.innerHTML = element.value;
  div.append(content);
  myForm.append(div);

  element.value = ''; // Reset the value in the input box

  currElement.addEventListener('click', () => {
    // input.checked will show the status *after* the click
    let currList = JSON.parse(localStorage.getItem('mylist'));

    for (let i = 0; i < currList['ingredients'].length; i++) {
      if (currList['ingredients'][i] === content.innerHTML) {
        currList['checked'][i] = !currList['checked'][i];
        localStorage.setItem('mylist', JSON.stringify(currList));
        break;
      }
    }
  });
}

/**
 * Once user add new ingredients, information will be added to local storage
 * @param {*} myForm
 */
function saveIngredient(myForm) {
  let savedIng = [];
  let savedCheck = [];
  let elements = myForm.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < elements.length; i++) {
    let complete = elements[i].parentElement.querySelector('label');
    savedIng.push(complete.innerText);
    savedCheck.push(elements[i].checked);
  }
  let Mylist = {
    name: 'My List', //Title of recipe.
    id: null,
    ingredients: savedIng, //List of checked ingredients in the recipe.
    checked: savedCheck,
  };

  localStorage.setItem('mylist', JSON.stringify(Mylist));
}

/**
 *
 * @param {*} groceryList
 * @param {*} currList
 */
function deleteIngredient(groceryList, currList) {
  let elements = groceryList.querySelectorAll('input[type="checkbox"]');

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      let item = elements[i].parentElement.querySelector('label').innerHTML;

      // Delete ingredient information from "grocery" in localStorage
      for (let i = 0; i < currList.length; i++) {
        const ingreds = currList[i]['ingredients'];

        // Goes through each ingredient in the current grocery list recipe section
        for (let e = 0; e < ingreds.length; e++) {
          // If the ingredient matches, delete
          if (ingreds[e] === item) {
            currList[i]['ingredients'].splice(e, 1);
            currList[i]['checked'].splice(e, 1);
            localStorage.setItem('grocery', JSON.stringify(currList));
          }
          // Removes the recipe section if there are 0 ingredients
          if (ingreds.length == 0) {
            console.log(currList);
            console.log(i);
            currList.splice(i, 1);
            localStorage.setItem('grocery', JSON.stringify(currList));
          }
        }
      }

      // Delete ingredient information from display
      elements[i].parentElement.remove();
    }
  }

  // If all ingredients are deleted then delete the recipe title
  let form = groceryList.querySelectorAll('form[class="recipe-list"]');
  for (let i = 0; i < form.length; i++) {
    let checkempty = form[i].querySelectorAll('input[type="checkbox"]');
    if (checkempty.length == 0) {
      form[i].remove();
    }
  }
}
