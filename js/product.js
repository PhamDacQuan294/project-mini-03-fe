import { fetchApi } from "./fetchApi.js";

const products = document.querySelector("#products");

fetchApi("http://localhost:3000/products")
  .then(data => {
    let htmls = data.map(item => {
      return `
        <div class="product__item">
           ${item.title}
        </div>
      `;
    })

    products.innerHTML = htmls.join("");
  })
