const fetchApi = async (api) => {
  const response = await fetch(api);
  const result = await response.json();
  return result;
}

const category = document.querySelector("#category");

fetchApi("http://localhost:3000/category")
  .then(data => {
    console.log(data)
    let htmls = data.map(item => {
      return `
        <div class="category__item">
           ${item.name}
        </div>
      `;
    })

    category.innerHTML = htmls.join("");
  })
