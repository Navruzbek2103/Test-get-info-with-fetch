let photosUrl = "https://jsonplaceholder.typicode.com/todos"
fetch(photosUrl)
.then(response => response.json())
.then(json => renderItem(json))
.catch(error => console.log(error))

function renderItem(array){
  array.forEach(element => {
    let newItem = createElement(
      "div",
      "col",
      `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${element.id}</h5>
          <p class="card-text">${element.title}</p>
        </div>
      </div>
      `
    )
    $(".row").appendChild(newItem);
  });
}