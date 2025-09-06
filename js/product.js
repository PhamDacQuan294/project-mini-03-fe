import { drawProduct } from "./drawProduct.js";
import { params } from "./variable.js";

drawProduct();

// Search
const inputSearch = document.querySelector("#search input");
const buttonSearch = document.querySelector("#search button");

const search = () => {
  params.q = inputSearch.value;
  drawProduct();
}

buttonSearch.addEventListener("click", function () {
  search();
})

inputSearch.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    search();
  }
});
// End search