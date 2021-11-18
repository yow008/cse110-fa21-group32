import { Router } from './Router.js';

// If modified, also modify list of page names under addMainPages
const pageNames = ['home', 'calendar', 'grocery', 'profile'];

const router = new Router();

window.addEventListener('DOMContentLoaded', init);

/**
 * Initialize function that runs all JS in this file
 */
async function init() {
  addMainPages();
  bindNavIcons();

  bindPopstate();
  router.navigate('home');
}

/**
 * Add all of the main pages in list pageNames to the router
 */
function addMainPages() {
  for (let i = 0; i < pageNames.length; i++) {
    // Add all of the main pages
    router.addPage(pageNames[i], function () {
      // If modified, also modify global pageNames
      const pageNames = ['home', 'calendar', 'grocery', 'profile'];
      for (let j = 0; j < pageNames.length; j++) {
        // If adding the current page, show. Otherwise hide
        if (pageNames[i] === pageNames[j]) {
          document
            .getElementById('#section--' + pageNames[j])
            .classList.add('shown');
        } else {
          document
            .getElementById('#section--' + pageNames[j])
            .classList.remove('shown');
        }
      }

      // All pages that have a search bar TODO:
      if (pageNames[i] === 'home') {
        document.getElementById('#section--search-bar').classList.add('shown');
      } else {
        document
          .getElementById('#section--search-bar')
          .classList.remove('shown');
      }

      document.getElementById('#section--side-panel').classList.add('shown');
    });

    // Create the element with the specific page's content and add to section
    const pageContent = document.createElement(pageNames[i] + '-page');
    document
      .getElementById('#section--' + pageNames[i])
      .appendChild(pageContent);
  }

  // Create and add search bar
  const searchBar = document.createElement('search-bar');
  document.getElementById('#section--search-bar').appendChild(searchBar);

  // Create and add side panel
  const sidePanel = document.createElement('side-panel');
  document.getElementById('#section--side-panel').appendChild(sidePanel);
}

/**
 * Bind the navigation icons at the bottom to the appropriate pages
 * (Home, Calendar, Grocery, Profile icon)
 */
function bindNavIcons() {
  // Retrieve buttons corresponding to icons
  const homeIcon = document.getElementById('LinkToHome');
  const calendarIcon = document.getElementById('LinkToCalendar');
  const groceryIcon = document.getElementById('LinkToList');
  const profileIcon = document.getElementById('LinkToProfile');

  // Add click event listeners and proper navigation
  homeIcon.addEventListener('click', () => {
    router.navigate('home');
  });

  calendarIcon.addEventListener('click', () => {
    router.navigate('calendar');
  });

  groceryIcon.addEventListener('click', () => {
    router.navigate('grocery');
  });

  profileIcon.addEventListener('click', () => {
    router.navigate('profile');
  });
}

/**
 * Bind the recipe views
 */
function bindRecipe(){
  //Retrieve the different section
  const summary = document.getElementById('ToSum');
  const ingredients = document.getElementById('ToIng');
  const direction = document.getElementById('ToDir');

  //Add click event listeners and proper navigation
  summary.addEventListener('click', () => {
    router.navigate('summary');
  });
  
  ingredients.addEventListener('click', () => {
    router.navigate('ingredients');
  });
  
  direction.addEventListener('click', () => {
    router.navigate('direction');
  });
  
}


/**
 * Bind the add recipe views
 */


/**
 * Bind the search-bar from the home page when click "Seach" button
 */


/**
 * Bind the user profile page
 */


/**
 * Bind the Cooking Mode page when "Cook" is been click through the recipe page
 */


/**
 * Bind the Collapased Sidepanel at the side for the appropriate pages
 * (Favorite Recipes, Previously Cooked, Add a Recipe, Write a Review)
 */

/**
 * Binds the popstate (back button/forward button) to navigate
 * to the correct page
 * Reference: Lab 7 Implementation
 */
function bindPopstate() {
  window.addEventListener('popstate', (e) => {
    let state = e.state;
    if (state === null || typeof state === 'undefined') {
      router.navigate('home', true);
    } else {
      router.navigate(state.statePage, true);
    }
  });
}
