// WriteReview.js

class WriteReview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Create styles and root element
    const styles = document.createElement('style');
    const article = document.createElement('article');

    // Fill in styles and root element
    styles.innerHTML = ``;
    article.innerHTML = `
    <h2>Write Reviews</h2>
    <ol>
      <li><p>Recipe</p>
      <textarea type="text" placeholder="Please write down your thoughts.."></textarea>
      <input type="submit" value="Submit!">
      </li>
      <li><p>Recipe</p>
      <textarea type="text" placeholder="Please write down your thoughts.."></textarea>
      <input type="submit" value="Submit!">
      </li>
      <li><p>Recipe</p>
      <textarea type="text" placeholder="Please write down your thoughts.."></textarea>
      <input type="submit" value="Submit!">
      </li>
    </ol>
    `;

    // Append elements to the shadow root
    this.shadowRoot.append(styles, article);
  }
}

customElements.define('write-review-page', WriteReview);
