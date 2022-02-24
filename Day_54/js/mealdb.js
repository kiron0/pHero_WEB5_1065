const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);

    // clear data
    searchField.value = '';
    if (searchText == '') {
        // please write something to display
        Swal.fire({
            // title: 'Error!',
            text: 'Please type any food name first',
            icon: 'warning',
            // confirmButtonText: 'Okay'
        })
    }
    else {
        // load data
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        // console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))
            .catch(error => displayError(error));
    }
}

const displayError = () => {
    Swal.fire({
        // title: 'Error!',
        text: 'Incorrect food name, check again',
        icon: 'error',
        confirmButtonText: 'Okay'
    })
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    // searchResult.innerHTML = '';
    searchResult.textContent = '';
    if (meals.length == 0) {
        // show no result found
        Swal.fire({
            // title: 'Error!',
            text: 'No result found',
            icon: 'error',
            // confirmButtonText: 'Cool'
        })
    }
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">Area: ${meal.strArea}</p>
                    <p class="card-text">Category: ${meal.strCategory}</p>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                    <a target="_blank" href="${meal.strYoutube}">More Details</a>
             </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}

const loadMealDetail = mealId => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = meal => {
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">Area: ${meal.strArea}</p>
    <p class="card-text">Category: ${meal.strCategory}</p>
    <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
    <a target="_blank" href="${meal.strYoutube}">More Details</a>
</div>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">${meal.strMeal}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">${meal.strInstructions.slice(0, 150)}</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    `;
    mealDetails.appendChild(div);
}