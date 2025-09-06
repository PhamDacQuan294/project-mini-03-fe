import { API_CATEGORY } from "./contants.js";
import { drawProduct } from "./drawProduct.js";
import { fetchApi } from "./fetchApi.js";
import { params } from "./variable.js";

const category = document.querySelector("#category");

fetchApi(API_CATEGORY)
  .then(data => {
    let htmls = data.map(item => {
      return `
        <div class="category__item" data-category="${item.name}">
           ${item.name}
         </div>
      `;
    })

    category.innerHTML = htmls.join("");

    const listCategory = document.querySelectorAll("#category .category__item");

    listCategory.forEach(item => {
      item.addEventListener("click", function () {
        params.category = item.getAttribute("data-category");
        drawProduct();
      });
    });
  })
