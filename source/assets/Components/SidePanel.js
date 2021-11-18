// SidePanel.js

class SidePanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Create styles and root element
    const styles = document.createElement('style');
    const article = document.createElement('article');

    // Fill in styles and root element
    styles.innerHTML = ``;
    article.innerHTML = `
    <div id="sidepanlID" class="sidepanel">
        <h2>Collapsed Sidepanel</h2>
        <p>Content...</p>
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a id="LinkToFav" href="#favoritesID">Favorite Recipes</a>
        <a id="LinkToViewed" href="#profile-page-reviewsID">Previously Cooked</a>
        <a id="LinkToAdd" href="#add-recipeID">Add a Recipe</a>
        <a href="#">Write a Review</a>
    </div>

    <button class="openbtn" onclick="openNav()">&#9776; Toggle Sidepanel</button>
    `;

    // Append elements to the shadow root
    this.shadowRoot.append(styles, article);
  }
}

customElements.define('side-panel', SidePanel);
