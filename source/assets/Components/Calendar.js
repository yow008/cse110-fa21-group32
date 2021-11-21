// Calendar.js

class CalendarPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Create styles and root element
        const styles = document.createElement('style');
        const article = document.createElement('article');

        // Fill in styles and root element
        styles.innerHTML = ``;
        article.innerHTML = `
        <h2>Calendar</h2>
        <div class=calendar-nav>
            <a href="#monthID" id="LinkToMonth">Month</a>
            <a href="#weekID" id="LinkToWeek">Week</a>
            <a href="#dayID" id="LinkToDay">Day</a>
        </div>

        <!--Monthly View-->
        <div id="monthID" class="month">
            <p>Month</p>
            <button type="button">Add Recipes</button>
        </div>

        <!--Weekly View-->
        <div id="weekID" class="week">
            <p>Week</p>
            <button type="button">Add Recipes</button>
        </div>

        <!--Daily View-->
        <div id="dayID" class="day">
            <p>Day</p>
            <button type="button">Add Recipes</button>
        </div>

        <button><a href="index.html"> LEAVE </a></button>
        `;

        // Append elements to the shadow root
         this.shadowRoot.append(styles, article);

    }
}

customElements.define('calendar-page', CalendarPage);
