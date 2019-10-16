Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },

    template: `
        <div class="product">
            <div class="product-image">
                <img v-bind:src="image"  />
            </div>
            <div class="product-info">

                <h1>{{ title }}</h1>
                <p>Shipping: {{ shipping }}</p>
                <p v-if="inStock">In Stock</p>
                <p v-else="inStock">Out of Stock</p>
                <p>User is premium: {{ premium }}</p>
                <h2>Details</h2>
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <h3>Colors</h3>
                <div v-for="(variant, index) in variants" :key="variant.variantId">
                     <div class="color-box" :style="{ backgroundColor: variant.variantColor }"
                     @mouseover="updateProduct(index)"></div>
                     <button :class="{ disabledButton: !inStock }" v-on:click="addToCart"
                            :disabled="!inStock">Add to Cart</button>
                     
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
                    variantId: 1,
                    variantColor: "black",
                    variantImage: "assets/blackshoes.jpg",
                    variantQuantity: 10
                },
                {
                    variantId: 2,
                    variantColor: "brown",
                    variantImage: "assets/brownshoes.jpg",
                    variantQuantity: 10
                },
                {
                    variantId: 3,
                    variantColor: "red",
                    variantImage: "assets/redshoes.jpg",
                    variantQuantity: 0
                }
            ],
            cart: []

        }
    },
    methods: {
        addToCart(){
            this.$emit('add-to-cart',
                this.variants[this.selectedVariant].variantId)
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
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return 2.99
        }
    }
})
var app = new Vue({
    el: '#app',
    data: {
        premium:true,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
})

