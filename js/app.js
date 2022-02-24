const searchBtn=()=> {
    const searchInput= document.getElementById('search-input').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
    fetch(url)
    .then(res=>res.json())
    .then(data => search(data))
    

}

const search= (data)=>{
    const searchResult = document.getElementById('search-result');
    const meals = data.meals;
    // console.log(data.meals);
    for (const meal of meals) {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
        <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,200)} </p>
        </div>
      </div>
      `   
      searchResult.appendChild(div)
        }
    
    // return searchInput;
}
// const searchResult = (data) =>{
//     const searchResult = document.getElementById('search-result');
//     for (const meal of data.meals) {
//         // console.log(meal);
//         const div = document.createElement('div');
//         div.classList.add('col');
//         div.innerHTML =`
//         <div class="card">
//         <img src="..." class="card-img-top" alt="..." />
//         <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <p class="card-text">
//             This is a longer card with supporting text below as a natural
//             lead-in to additional content. This content is a little bit
//             longer.
//           </p>
//         </div>
//       </div>
//       `
            
//         }
// }