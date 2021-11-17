# Preliminary Design Flow Notes

### Home page
- Top bar: search bar
- Top left three button: opens up side panel linking to more sections (can see which ones on the wireframe)
- Each recipe on display should link to an expanded view of that recipe (recipe view)
- Bottom buttons (same for all pages) link to home, last calendar view, current shopping list, user page

### Searching by keyword (search bar)
- Text type goes in the top
- Button to back out of the search, goes to home
- Options to add tags
- Options to select auto suggested words
- After selecting an auto suggest or hitting enter on the search, go to the search results page for that search phrase

### Search results
- Like home page, will have each result link to a recipe view
- Exiting the search results can be done by searching again with the search bar or clicking a back button to get to the home page

### Recipe view (split into 3 subsections)
- Summary
  - Click heart to add to favorites, click again to remove from favorites
  - Click star rating to jump to the written reviews section at the bottom of the summary  page
- Ingredients
  - Checking the items and adding it to your list will add the checked items to the grocery list with the assigned quantity
  - Optional: adjustable number for serving size will update the ingredients display
- Directions
  - Cook button takes you to the cooking page for this recipe
- All pages
  - X to return to the previous page (e.g. search results, home page)
  - Edit: NOT INCLUDED ON MOCKUP - need to add an "Add to calendar" option and prompt them for a day. After adding then we take them to the day they've added the recipe to.

### Cooking mode
- Bottom step buttons will link to the corresponding step in the recipe
- If the step indicates a time amount, provide a timer. Click the timer to start and while the timer is running, there are options to pause and reset the stopwatch-like view.
- TBD: add additional navigation to get to one step before/after
- Exiting cooking mode with the X will ask you to confirm that you're leaving, if you leave you'll be taken back to a page called "cook this recipe ____" under the cooking tab
- If you reach the last step, there's an additional button saying "I finished!" (temporary label) and it'll ask you to rate your experience and/or add a review. It will also add this to your list of completed recipes (if we include this feature).

### Rating page
- Kind of a later feature thing, don't have a mockup but basically submit a form containing your review and save as draft or submit it
- Submitting it will take you to the recipe page so you can see it there
- Saving it will take you to the user page where you can see an overview including your drafts

### Calendar
- Default view is based on the most recent view they've chosen (first time default is month)
- Select option in the top right corner will toggle between the diff views
- Each day that has a recipe will be clickable - will redirect to the recipe view (either page or a popup)
- On the day view, there's an option to add a meal. This will redirect you to a search bar and the first thing you click on that results page will be added to your intended day. After the recipe is selected, it will return you to your day view with the new recipe added. (Also have to ask them for which meal tag they want to give it.)
- Delete recipes using the day view by clicking the x on each recipe.

### Grocery list (some things not on the wireframe page yet)
- Trash toggle: if on trash mode, the selections will become items to delete
- On trash toggle: have an option to delete anything that has been checked off
- Edit the quantity/unit manually by selecting the edit button
- Have a way to generate a shopping list in text format to export
- Option: make the trash and edit to be under the same toggle (pencil icon instead of trash icon)

### User page
- Settings icon: will redirect you to view and update your settings (mostly account related info)
- Each image in the review/recipe section will expand upon tapping so you view that single review/recipe. Each will have a button to make it editable + publish. (Including saved drafts).
- Write a review -> takes you to the search bar to look for a recipe to review, then after selecting a result will take you to the review form.
- Add a recipe -> takes you to the add a recipe form.
- Share your profile -> generates a link for you to share with others thru your clipboard

### Add recipe
- Interactive form
- Can save as draft or publish. Can only publish if all the required fields are filled out (list TBD).
- If the recipe is saved as a draft, take them to the user page.
- If the recipe is published, take them to the published recipe page.
