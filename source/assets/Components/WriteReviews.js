// WriteReview.js

class WriteReview extends HTMLElement {
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
      text-align: center;
    }
    .css-wrap {
      margin-left: 5%;
      margin-bottom: 16pt;
      margin-right: 5%;
    }
    .normal-button {
      background-color: white;
      border-radius: 18px;
      border: 1.5px solid #ca676a;
      text-align: center;
      min-width: 8%;
      height: 20pt;
      font-size: 14pt;
      color:#ca676a;
    }
    textarea {
      width: 80%;
      height: 42pt;
    }
    `;
    article.innerHTML = `
    <h2>Write Your Review</h2>
<div class="css-wrap">
    <ol>
      <li><p>Recipe</p>
      <textarea type="text" placeholder="Please write down your thoughts.."></textarea>
      <input class="normal-button" type="submit" value="Submit!">
      </li>
    </ol>
</div>
    `;

    // Append elements to the shadow root
    this.shadowRoot.append(styles, article);
  }
}

customElements.define('write-review-page', WriteReview);
