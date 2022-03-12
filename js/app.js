//search enter button

const searchButton = document.getElementById("searchBtn");
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("keypress", function (event) {
  
  if (event.key == 'Enter') {
    searchButton.click();
  }
});

const searchBtn = () => {
  const searchText = document.getElementById("search-input");
  let searchInput = searchText.value;

  document.getElementById("load").style.display = "block";
  if (searchInput == "") {
    // no input error
    document.getElementById("no-input-erro").style.display = "block";
    // loading
    document.getElementById("load").style.display = "none";
    // result
    const searchResult = document.getElementById("search-result");
    searchResult.innerHTML = "";
    // single result
    const single = document.getElementById("single-result");
    single.innerHTML = "";
    // no search error
    document.getElementById("no-search-erro").style.display = "none";
  } else {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => search(data))
      .catch((Error) => {
        // no search error
        document.getElementById("no-search-erro").style.display = "block";
      });
    const single = document.getElementById("single-result");
    single.innerHTML = "";
    // no search error
    document.getElementById("no-search-erro").style.display = "none";
    // no input error
    document.getElementById("no-input-erro").style.display = "none";
  }
  //input clean
  searchInput.value = "";
};

// card result

const search = (data) => {
  const searchResult = document.getElementById("search-result");
  searchResult.innerHTML = "";
  //loding
  document.getElementById("load").style.display = "none";

  const meals = data.meals;
  for (const meal of meals) {
    // card result
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div onclick="single(${meal.idMeal})" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 200)} </p>
        </div>
      </div>
      `;
    searchResult.appendChild(div);
  }
};
// single result
const single = (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadData(data));
};
const loadData = (data) => {
  const single = document.getElementById("single-result");
  single.innerHTML = "";

  const meal = data.meals[0];
  // single card result
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 100)}
            </p>
            <a href="${
              meal.strYoutube
            }" class="btn btn-primary">Go somewhere</a>
          </div>
    `;
  single.appendChild(div);
};
