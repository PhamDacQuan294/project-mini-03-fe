import { fetchApi } from "./fetchApi.js";

const category = document.querySelector("#category");

fetchApi("http://localhost:3000/category")
  .then(data => {
    let htmls = data.map(item => {
      return `
        <div class="category__item">
           ${item.name}
        </div>
      `;
    })

    category.innerHTML = htmls.join("");
  })
