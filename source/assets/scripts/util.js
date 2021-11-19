/*
Gets all the recipes available

@return {string} recipes The list of recipes returned
*/
function getAllRecipes()
{
		return recipes; 
}

/*
Gets the search results

@return {string} results The results returned
*/
function getSearchResults()
{
		return results;
}

/*
Gets a specific recipe

@param {string} meal The specific meal we are looking for
@return {string} recipe The specific recipe for that meal returned
*/
function getRecipe(meal)
{
		return recipe;
}

/*
Gets the reviews for a specific recipe

@param {string} recipe The specific recipe we are looking to get reviews for
@return {string} reviews The reviews for the recipe returned
*/
function getReviews(recipe) 
{
    return reviews;
}

/*
Gets the ingredients for a specific recipe

@param {string} recipe The specific recipe we want to get the ingredients for 
@return {string} recipes The list of ingredients returned for the specific recipe
*/
function getIngredients(recipe) 
{
    return ingredients;
}

/*
Gets todays date

@return {string} todayDate Returns todays date
*/
function getDateToday()
{
    return todayDate;
}

/*
Gets all the favorite recipes

@return {string} favorites The list of favorite recipes returned
*/
function getFavorites()
{
    return favorites;
}
