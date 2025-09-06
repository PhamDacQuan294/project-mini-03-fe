const fetchApi = async (api) => {
  const response = await fetch(api);
  const result = await response.json();
  return result;
}

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
