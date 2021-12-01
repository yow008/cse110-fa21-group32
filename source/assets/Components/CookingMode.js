// CookingMode.js

// TODO: IMPORTS (i don't know if we need this but it works for now without import)

/**
 * Class: CookingMode
 */
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
        <div id="cooking-steps">
        </div>
        <div id="btnNav">
        </div>
        <!--Cooking Timer-->
        <div class="cooking-timer">
            <p>Timer</p>
            <p id='countdown'></p>
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

    //convert input to seconds
    function convert(input) {
      let parts = input.split(':'),
          hours = +parts[0],
          minutes = +parts[1],
          seconds = +parts[2];
      if(!parts || parts.length != 3){
        alert('not valid, try again!');
        return null;
      };
      return (hours*60*60 + minutes * 60 + seconds).toFixed(3);
    }

    //convert seconds to hours, minutes and seconds
    function convertHMS(value) {
      const sec = parseInt(value, 10); // convert value to number if it's string
      let hours   = Math.floor(sec / 3600); // get hours
      let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
      let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
      // add 0 if value < 10; Example: 2 => 02
      if (hours   < 10) {hours   = "0"+hours;}
      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}
      return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
    }
  


    let time = this.shadowRoot.getElementById('countdown');
    let isPaused = false;
    this.shadowRoot.querySelector('button').addEventListener('click', () => {
      let timeleft = prompt('Enter a time to set up timer', '00:00:00');
      let timeSec = convert(timeleft);
      if(!timeSec){
        return;
      }
      let downloadTimer = setInterval(function(){
        if(timeSec < 0){
          clearInterval(downloadTimer);
          time.innerHTML = 'Finished!';
          alert('It is ready!!');
        } 
        else {
          time.innerHTML = convertHMS(timeSec);
        }
        timeSec -= 1;
      }, 1000);
    });
  }

  /**
   * Sets all the elements of the update recipe page to the recipes current data
   * @param data Previous recipe data to set the placeholder values
   */
   set data(data) {
    this.json = data;

    //
    const content = data.recipe.analyzedInstructions[0].steps;
    //initialize page
    for(let i = 0; i < content.length; i++){

      //initialize current step 
      let cookingStep = this.shadowRoot.getElementById('cooking-steps');
      let cookingBtn = this.shadowRoot.getElementById('btnNav');
      let currStep = document.createElement('p');
      currStep.setAttribute('id', `step${i + 1}`);
      currStep.innerHTML = `${i+1}`+ '.' + content[i].step;
      cookingStep.appendChild(currStep);

      //let other than first step be invisible initially
      if(i != 0){
        currStep.setAttribute('style', 'display:none');
      }

      //initialize all buttons
      let currBtn = document.createElement('button');
      currBtn.setAttribute('id', `btn${i + 1}`);
      currBtn.innerHTML = `${i + 1}`
      cookingBtn.appendChild(currBtn);
    }

    for(let i = 0; i < content.length; i++){
      let curr = this.shadowRoot.querySelectorAll('button')[i];
      let pages = this.shadowRoot.querySelectorAll('p');
      curr.addEventListener('click', () => {
        for(let j = 0; j < content.length; j++){
          if(j == i){
            pages[j].setAttribute('style', 'display: inline');
          }
          else{
            pages[j].setAttribute('style', 'display: none');
          }
        }
      });
    }
   }
}

customElements.define('cooking-mode-page', CookingMode);
