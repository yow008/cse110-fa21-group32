// Profile.js

class ProfilePage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Create styles and root element
        const styles = document.createElement('style');
        const article = document.createElement('article');

        // Fill in styles and root element
        styles.innerHTML = ``;
        article.innerHTML = `
        <h2>User Profile</h2>

        <!--Profile Page Navbar-->
        <div class=profile-page-navbar>
            <ul>
                <li><a href="#profile-page-recipeID" id="UserRec">Recipes</a></li>
                <li><a href="#profile-page-reviewsID" id="UserRev">Reviews</a></li>
            </ul>
        </div>

        <!--Profile Page Recipe-->
        <div id="profile-page-recipeID" class="profile-page-recipe hidden">
            <p>Recipes</p>
            <ul>
                <li> <button type="menu">Recipe 1 (not linked)</button></li>
                <li> <button type="menu">Recipe 2 (not linked)</button></li>
                <li> <button type="menu">Recipe 3 (not linked)</button></li>
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
    }
}

customElements.define('profile-page', ProfilePage);
