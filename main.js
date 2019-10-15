var product = "Shoes";
var app = new Vue({
    el: '#app',
    data: {
        product: "Shoes",
        image: "assets/blackshoes.jpg",
        altText: "A pair of socks",
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "black"
            },
            {
                variantId: 2235,
                variantColor: "brown"
            },
            {
                variantId: 2236,
                variantColor: "red"
            }
        ]

    }
})
