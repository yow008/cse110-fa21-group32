# Recipe DB
# Requirement: sqlite3, spoonacular
# https://slacker.ro/2020/03/10/how-to-create-a-food-website-using-the-spoonacular-api-python-flask/
# https://rapidapi.com/blog/build-food-website/

import sqlite3
import pickle
import requests
import json

class Recipe_DB:
    def __init__(self):
        # Spoonacular 
        self.url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/"
        self.API_KEY = 'a6764a187c4446ecb1ff3d82fc0785aa'
        self.headers = {
            'x-rapidapi-host': "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            'x-rapidapi-key': self.API_KEY
        }

        # Create Recipe DB
        self.conn = sqlite3.connect('recipe.db', check_same_thread=False) 
        self.cur = self.conn.cursor()
        '''
            ID: recipe ID
            name: recipe name
            author: recipe author
            url: recipe url (?)
            src: recipe json file
            image: recipe image
        '''
        self.cur.execute('''
            CREATE TABLE IF NOT EXISTS Recipes( 
                ID INT PRIMARY KEY,
                name TEXT,
                author TEXT,
                url TEXT,
                src BLOB,
                image BLOB
            )''')

        self.custom_recipe_count = 1000000  # Spoonacular IDs have 6 digits; custom have one more to avoid collision

    def searchRecipeByKeyword(self,keyword):
        # Search by keyword. Get recipe IDs from spoonacular, update DB, and return results

        url = 'https://api.spoonacular.com/recipes/complexSearch?query=%s&apiKey=%s&includeNutrition=false' % (keyword, self.API_KEY)
        # url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/complexSearch?query=%s&number=5' % (keyword)
        recipe = requests.request("GET", url, headers=self.headers).json()
        for i in range(10):
            print(recipe['results'][i])
        
        url = 'https://api.spoonacular.com/recipes/%s?apiKey=%s' % (recipe['results'][0]['id'], self.API_KEY)
        src = requests.request("GET", url, headers=self.headers).json() 
            
        return recipe['results']
        

    def cacheRecipe(self, ID, src):
        pass

    def fetchRecipeByID(self, ID):
        # Return user-requested recipe from DB/Spoonacular.
        self.cur.execute('SELECT * FROM Recipes WHERE ID = %s' % (ID))
        result = self.cur.fetchall()
        #print(result[0])
        if (len(result) != 0):
            return pickle.loads(result[0])
        else:
            # Call Spoonacular API
            
            # Cache recipe in DB

            pass

    def createRecipe(self,recipe):
        '''
            Input:
            - recipe: a json file for the recipe
            Output:
            - ID of the recipe
        '''
        id = self.custom_recipe_count
        self.custom_recipe_count += 1
        name = recipe['name']
        author = recipe['author']
        src = pickle.dumps(recipe)
        self.cur.execute('INSERT INTO Recipes(ID, author, name, src) VALUES(?, ?, ?, ?)', (id, author, name, src))
        self.conn.commit()
        # TODO: Integrity check
        return id

    def updateRecipe(self, id, updatedVal):
        
        #name = pickle.loads(self.cur.fetchall[0])
        self.cur.execute('SELECT src FROM Recipes WHERE ID = %d' % (id))
        result = self.cur.fetchall()

        recipes = pickle.loads(result[0][0])
        #recipes['name'] = updatedVal['name']
        for key in updatedVal:
            if (key == 'author'):
                self.cur.execute('UPDATE Recipes SET author = ? WHERE ID = ?', (updatedVal['author'], id))

            if (key == 'name'):
                self.cur.execute('UPDATE Recipes SET name = ? WHERE ID = ?', (updatedVal['name'], id))
                
            recipes[key] = updatedVal[key]
        src = pickle.dumps(recipes)
        self.cur.execute('UPDATE Recipes SET src = ? WHERE ID = ?', (src, id))


        
        #query = 'UPDATE Recipes SET' + ', '.join(['%s = ?' % (p[1]) for p in updatedVal.items()]) 
        #self.cur.execute(query, ([p[0] for p in updatedVal.items()]))
        self.conn.commit()
        
    def removeRecipe(self,id):
        '''
            Input:
            - recipe id
        '''
        self.cur.execute('DELETE FROM Recipes WHERE ID = ?', (id))
        self.cur.commit()
        # TODO: Check if id exists? 

if __name__ == '__main__':
    db = Recipe_DB()
    db.searchRecipeByKeyword('pasta')
#db.fetchRecipeByID("654959")
    #id = db.createRecipe({'author': 'Chad' , 'name': 'Pasta With Chickpeas and Kale', 'image': 'https://spoonacular.com/recipeImages/654905-312x231.jpg', 'imageType': 'jpg'})
    db.updateRecipe(1000000, {'author': 'Bagrat'})
    
    