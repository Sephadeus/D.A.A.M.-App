// make API requests to pull back random recipe filtered by specific cuisine type and dietary restrictions

var spoonacularBaseApiUrl = 'https://api.spoonacular.com/'
var spoonacularApiKey = "3a719d472e46434aa2f953f1f40adfd0"

// TODO: return an object with the relevant info, including recipe ID
var getRandomRecipe = function (cuisine, intolerance) {
  let spoonacularComplexSearch = 'recipes/complexSearch?sort=random&number=1'
  let apiCall = spoonacularBaseApiUrl + spoonacularComplexSearch + '&intolerances=' + intolerance + '&cuisine=' + cuisine + '&apiKey=' + spoonacularApiKey;

  fetch(apiCall)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        console.log(response.json());
      } else {
        alert('Error: ' + response.statusText);
      }
    })
};

getRandomRecipe('french', 'gluten');


var getRecipeInfo = function (id) {
  let apiCall = spoonacularBaseApiUrl + '/recipes/' + id + '/information?includeNutrition=false&apiKey=' + spoonacularApiKey

  fetch(apiCall)
  .then(function (response) {
    if (response.ok) {
      console.log(response);
      console.log(response.json());
    } else {
      alert('Error: ' + response.statusText);
    }
  })
}

// getRecipeInfo('642230');
