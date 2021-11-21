// HomePage.js
import { Router } from '../scripts/Router.js';

const router = new Router();

class HomePage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Create styles and root element
        const styles = document.createElement('style');
        const article = document.createElement('article');

        // Fill in styles and root element
        styles.innerHTML = ``;
        article.innerHTML = `
        <h1>Home Page</h1>
        <!--ADD RECIPES HERE-->
        <p>Content..</p>
        <ul>
            <li> <button id="ExpRecipe" type="menu">Recipe 1 (click this one)</button></li>
            <li> <button type="menu">Recipe 2 (not linked)</button></li>
            <li> <button type="menu">Recipe 3 (not linked)</button></li>
        </ul>
        `;

        // Append elements to the shadow root
        this.shadowRoot.append(styles, article);

        router.addPage('recipe', function() {
            document.getElementById('#section--home').classList.remove('shown');
            document.getElementById('#section--search-bar').classList.remove('shown');

            document.getElementById('#section--recipe').classList.add('shown');
                
        });
        
        const recipePage = this.shadowRoot.getElementById('ExpRecipe');
        recipePage.addEventListener('click', () => {
            router.navigate('recipe');
            
        });

        
    }
}

customElements.define('home-page', HomePage);
