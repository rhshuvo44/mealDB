const searchBtn=()=> {
    const searchText= document.getElementById('search-input');
    const searchInput =searchText.value
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
    fetch(url)
    .then(res=>res.json())
    .then(data => search(data))
    searchInput.value= '';
  const single = document.getElementById('single-result');
  single.innerHTML = ''

}

const search= (data)=>{
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML =''
    const meals = data.meals;
    // console.log(data.meals);
    for (const meal of meals) {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
        <div onclick="single(${meal.idMeal})" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,200)} </p>
        </div>
      </div>
      `   ;
      searchResult.appendChild(div)
        }
}
const single= (mealId)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => loadData(data))
}
const loadData = (data) =>{
  const single = document.getElementById('single-result');
    // console.log(data.meals[0]);
    const meal=data.meals[0];
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML =`
        <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,100)}
            </p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
          </div>
    `;
    single.appendChild(div);
}