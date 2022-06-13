

### Web scrapping function

- website - https://www.terminalx.com/brands/fox-main/fox?category_level=20743&p=10

```
const products = JSON.parse(window.localStorage.getItem("products")) || [];
document.querySelectorAll(".product-list_yyTm li").forEach(li => {
    const product = {
        name: li.querySelector("a.tx-link_29YD.underline-hover_3GkV")?.innerHTML || null,
        price: +li.querySelector(".final-price_8CiX")?.innerHTML.split(" ")[0],
        image: li.querySelector(".image_3k9y")?.src,
        category: "נשים"
    };
    if(product.name) products.push(product);
});
console.log(products);
window.localStorage.setItem("products", JSON.stringify(products))
```

- Copy data to window
```
const products = JSON.parse(window.localStorage.getItem("products"));
products.forEach((p,i) => p.id = i+1);
document.body.innerHTML = JSON.stringify(products, null, 4);
```
