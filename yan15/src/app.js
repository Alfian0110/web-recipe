const searchButton = document.querySelector('#searchButtonElement');
const mealList = document.querySelector('#meal')

searchButton.addEventListener('click', getMealList);

function getMealList(){
    let keyword = document.querySelector('#searchElement').value.trim();
    fetch(`www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
}