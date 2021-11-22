// CookingMode.js

class CookingMode extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Create styles and root element
        const styles = document.createElement('style');
        const article = document.createElement('article');

        // Fill in styles and root element
        styles.innerHTML = `
        
        `;
        article.innerHTML = `
        <h2>Cooking Mode</h2>
        <!--Cooking Steps-->
        <div class="cooking-steps">
          <p>Steps</p>
          <ul>
            <li><a href="step1">1</a></li>
            <li><a href="step2">2</a></li>
            <li><a href="step3">3</a></li>
            <li><a href="step4">4</a></li>
          </ul>
        </div>
    
        <!--Cooking Timer-->
        <div class="cooking-timer">
            <p>Timer</p>
            <button type="button">Start</button>
        </div>
    
        <!--Back to the Recipe Page-->
        <div class="back-to-recipe">
            <p>Back to the Home Page</p>
            <button><a href="home.html"> LEAVE </a></button>
        </div>
        `;

        // Append elements to the shadow root
        this.shadowRoot.append(styles, article);
        
    }
}

customElements.define('cooking-mode-page', CookingMode);
