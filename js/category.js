import { API_CATEGORY } from "./contants.js";
import { fetchApi } from "./fetchApi.js";

const category = document.querySelector("#category");

fetchApi(API_CATEGORY)
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
