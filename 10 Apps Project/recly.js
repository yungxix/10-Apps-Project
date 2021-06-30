 const meals = document.getElementById('meals');


async function getRandomMeal() {
     const resp =  await  fetch('https://www.themealdb.com/api/json/v1/1/random.php');

     const respData = await resp.json();   
     const randomMeal = respData.meals[0];
  
    

     console.log(randomMeal, respData);

     addMeal(randomMeal, true);
}
getRandomMeal();

// function getMealById(id) {
//   const meal =  await  fetch('https://ww.themealdb.com/api/json/v1/1/lookup.php?i='+id);
// }

// function getMealsBySearch(term) {
//   const meals = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+ term);
// }


addMeal(mealData, random = false) { 
    const meal = document.createElement('div');
    meal.classList.add('meal');

    meal.innerHTML =  
     '<div class="meal">
    <div class="meal-header">
       <span class="random"> Random Recipe</span>
        <img src="./img/One-Pan-Chicken-Asparagus-Bake-.jpeg" alt="" />
    </div>
    <div class="meal-body">
        <h4>Veggie Veggies</h4>
        <button class="fav-btn active"><i class="fas fa-heart fa 3x"></i></button>
    </div>
</div>'
    }
}

