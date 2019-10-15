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
                variantColor: "black",
                variantImage: "assets/blackshoes.jpg"
            },
            {
                variantId: 2235,
                variantColor: "brown",
                variantImage: "assets/brownshoes.jpg"
            },
            {
                variantId: 2236,
                variantColor: "red",
                variantImage: "assets/redshoes.jpg"
            }
        ],
        cart: 0

    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateProduct(variantImage){
            this.image = variantImage
        }
    }
})
