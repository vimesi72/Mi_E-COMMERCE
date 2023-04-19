function products() {
  const db = window.localStorage.getItem("products")
  ? JSON.parse(window.localStorage.getItem("products"))
  : [];

  function printProducts() {
    const productsDOM = document.querySelector('.products__container')

    let htmlProduct = ''

    for (const product of db) {
      htmlProduct += `
      <article class="product">
        <div class="product__image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product__content">
          <button type="button" class="product__btn add--to--cart" data-id="${product.id}">
            <i class='bx bx-cart-add'></i>
          </button>
          <span class="product__price">$${product.price}</span>
          <span class="product__stock">Displonibles: ${product.quantity}</span>
          <h3 class="product__title">${product.name}</h3>
        </div>
      </article>
      `
    }
    productsDOM.innerHTML = htmlProduct
  }
    //fuction para buscar un producto por id
    function findProduct(id) {
      return db.find((item) => item.id === id);
    }

  printProducts()

  return {
    db,
    printProducts,
    findProduct
  }
}

export default products