# Talking to Python from JavaScript (and Back Again!)

This repository contains the tutorial code for my article on communicating between Python and JavaScript.

<br>

<br>

### Via JSON

A Flask web app with two routes. `/test` which serves a page with JavaScript that uses the Fetch API to GET JSON data from `/hello`, and then POSTs JSON data, also to `/hello`. Everything is logged to console.

Any issues with launching the Flask app should seek these [docs](http://flask.pocoo.org/docs/1.0/cli/), and the Flask home page for general installation instructions.

<br>

### Via processes

There's also some files that demonstrate how processes can communicate via the stdout. Data is reported by a spawn process which is caught and collected. This is displayed in Python and Node.js. `sensor.js`, `sensor.py`, `temperature-listener.js`, `temperature-listener.py`. With the Node.js parent process, events are used. For the Python parent process we use a simple buffer and check for the newline char.

<br>

Hopefully this repository (combined with the article) will answer some beginner questions about how different languages 'talk' to each other! I'm accepting any PRs that bring further clarity or fix errors.

<br>

### Notes 
- If using AJAX/Flask we must have a templates/index.html folder and a static/file.css and static/javas.js folder.
- Within .py files we must use 'GET' and 'POST' methods to tell our python function whether we are getting or receiving from JS
- Communicate with JS and other files using the @app.route() call. Within this we must always render our html template before writing any functions.
- Flask --> allows to have the direct functions we will need in js within the .py files
- AJAX --> we still have our own .js files/functions and just call them within the .py functions/files using requests and .getJSON() calls.
   
