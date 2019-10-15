Vue.component('product', {
    template: `
        <div class="product">
            <div class="product-image">
                <img v-bind:src="image" v-bind:alt="altText" />
            </div>
            <div class="product-info">
                <h1>{{ product }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else="inStock">Out of Stock</p>
                <p>Shipping: {{ shipping }}</p>
                
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <div class="color-box"
                     v-for="variant in variants" :key="variant.variantId"
                     :style="{ backgroundColor: variant.variantColor }"
                     @mouseover="updateProduct(variant.variantImage)">
                </div>

                <button v-on:click="addToCart"
                    :disabled="!inStock"
                    :class="{ disabledButton: !inStock }">Add to cart</button>

                <div class="cart">
                    <p>Cart({{ cart}})</p>
                </div>
            </div>

        </div>
    `,
    data() {
        return {
            product: "Shoes",
            brand: "Vue AJ",
            selectedVariant: 0,
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "black",
                    variantImage: "assets/blackshoes.jpg",
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: "brown",
                    variantImage: "assets/brownshoes.jpg",
                    variantQuantity: 10
                },
                {
                    variantId: 2236,
                    variantColor: "red",
                    variantImage: "assets/redshoes.jpg",
                    variantQuantity: 0
                }
            ],
            cart: 0

        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateProduct(index){
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this]
        }
    }
})
var app = new Vue({
    el: '#app'
})

