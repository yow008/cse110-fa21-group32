# Flask app / server

# https://towardsdatascience.com/talking-to-python-from-javascript-flask-and-the-fetch-api-e0ef3573c451
# https://www.youtube.com/watch?v=AsoJL9GPi1k
# requirements: flask

from flask import Flask, jsonify, request, render_template, Response
from flask_cors import CORS
import json
import user_db
import recipe
import pickle

app = Flask(__name__)
CORS(app)
user_db = user_db.User_DB()
recipe_db = recipe.Recipe_DB()

@app.route("/", methods=['GET', 'POST'])
def home_page():
    print(request)
    if request.method == 'POST':
        msg = request.get_json()
        print(msg)
        if msg['type'] == 'register':
            user_db.createUser(msg['username'], msg['password'], msg['email'], '', '')
            return {'msg': 'Success!'}, 201
        elif msg['type'] == 'deleteUser':
            user_db.deleteUser(msg['username'], msg['password'])
            return {'msg': 'Success!'}, 201
        elif msg['type'] == 'addRecipe':
            recipe = msg['recipe']
            id = recipe_db.createRecipe(recipe)
            user_db.addRecipe(msg['username'], msg['password'],id)
            return {'msg': 'Success!'}, 201
        elif msg['type'] == 'deleteRecipe':
            recipe = msg['recipe']
            recipe_db.removeRecipe(msg['id'])
            user_db.removeRecipe(msg['username'], msg['password'],msg['id'])
            return {'msg': 'Success!'}, 201

    if request.method == 'GET':
        msg = request.args
        if 'type' in msg:
            if msg['type'] == 'search':
                keyword = msg['keyword']
                recipes = recipe_db.searchRecipeByKeyword(keyword)
                recipes = {i: recipes[i] for i in range(len(recipes))}
                recipe_json = json.dumps(recipes, indent=2) 
                # print(recipe_json)
                response = Response(response=recipe_json, status=200, mimetype='application/json')
                print(response.response)
                return response
            elif msg['type'] == 'login':
                username = msg['user']
                password = msg['pass']
                userInfo = user_db.request(username, password, ['Username', 'Password'])
                data = {"userInfo": userInfo}
                data_json = json.dumps(data, indent=2)
                response = Response(response=data_json, status=200, mimetype='application/json')
                return response
            elif msg['type'] == 'request':
                username = msg['user']
                password = msg['pass']
                elem = msg['elem']
                userInfo = user_db.request(username, password, ['Email'])
                print(username, password, elem)
                data = {"userInfo": userInfo}
                print(userInfo)
                data_json = json.dumps(data, indent=2)
                response = Response(response=data_json, status=200, mimetype='application/json')
                return response
            elif msg['type'] == 'fetchRecipe':
                recipe = recipe_db.fetchRecipeByID(msg['id'])
                #recipe = pickle.dumps(recipe)
                data = {"recipe": recipe}
                data_json = json.dumps(data, indent=2)
                response = Response(response=data_json, status=200, mimetype='application/json')
                return response
            elif msg['type'] == 'getCustomizedRecipeIDs':
                username = msg['user']
                password = msg['pass']
                keys = ['Recipes']
                result = user_db.request(username, password, keys)
                recipes = pickle.loads(result[0])
                data = {"ID": recipes}
                data_json = json.dumps(data, indent=2)
                response = Response(response=data_json, status=200, mimetype='application/json')
                return response
            elif msg['type'] == 'getUserInfo':
                username = msg['user']
                password = msg['pass']
                elem = msg['elem']
                if(elem == "keys"):
                    userInfo = user_db.request(username, password, ['keys'])
                    print(username, password, elem)
                    data = {"userInfo": userInfo}
                    print(userInfo)
                    data_json = json.dumps(data, indent=2)
                    response = Response(response=data_json, status=200, mimetype='application/json')
                return response

    return render_template('home.html')

app.run(debug=True)
