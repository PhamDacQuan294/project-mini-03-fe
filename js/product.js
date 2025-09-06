import { fetchApi } from "./fetchApi.js";

const products = document.querySelector("#products");

fetchApi("http://localhost:3000/products")
  .then(data => {
    let htmls = data.map(item => {
      return `
        <div class="product__item">
          <div class="product__image">
              <img src="${item.thumbnail}" alt="${item.title}" />
              <div class="product__percent">
                  ${item.discountPercentage}%
              </div>
          </div>
          <div class="product__content">
              <h3 class="product__title">
                  ${item.title}
              </h3>
              <div class="product__meta">
                  <div class="product__price">
                      ${item.price}
                  </div>
                  <div class="product__stock">
                      Còn lại: ${item.stock} sp
                  </div>
              </div>
          </div>
        </div>
        `;
    })

    products.innerHTML = htmls.join("");
  })
