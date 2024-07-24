const products = [{
    id: 1,
    image: "/food.jpeg" ,
    name: "Waffle",
    info: "Waffle with Berries",
    price: "$6.50",

},
{
    id: 2,
    image: "/asset/fish.jpeg" ,
    name: "Tilapia",
    info: "Tilapia with Veggies",
    price: "$7.00",

},
{
    id: 3,
    image: "/asset/seafood.jpeg" ,
    name: "Seafood",
    info: "Cajun Seafood",
    price: "$10.00",

},
{
    id: 4,
    image: "/asset/chickenpeas.jpeg" ,
    name: "Chickenpeas",
    info: "Chickenpeas Classic",
    price: "$8.50",

},
{
    id: 5,
    image: "/asset/fruit.jpeg" ,
    name: "Fruit",
    info: "Fruit Salad",
    price: "$4.00",

},
{
    id: 6,
    image: "/asset/vancake.jpeg" ,
    name: "Vanilla",
    info: "Vanilla Cake",
    price: "$3.85",

},
{
    id: 7,
    image: "/asset/moz.jpeg" ,
    name: "Mozerella",
    info: "Italian Mozerella",
    price: "$15.00",

},
{
    id: 8,
    image: "/asset/Watermelon.jpeg" ,
    name: "Smoothie",
    info: "Watermelon Smoothie",
    price: "$2.50",

},
{
    id: 9,
    image: "/asset/burger.jpeg" ,
    name: "Burger",
    info: "john Doe Burger",
    price: "$5.00",

},
]

function displayProducts() {
    const items = document.getElementById("items");
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("ul");
      productDiv.innerHTML = `
             
                <li>
                    <figure>
                        <img src="/asset/chickenpeas.jpeg" alt="" />
                        <div class="bt">
                          <button id="atc">
                            <i
                              style="color: orangered"
                              class="fa-solid fa-cart-shopping"
                            ></i>
                            Add to Cart
                          </button>
                        </div>
                        <figcaption>
                          <p>chickenpeas</p>
                          <h6>Chickenpeas classic</h6>
                          <span>$8.50</span>
                        </figcaption>
                      </figure>
                </li>
            
          `;
      items.appendChild(productDiv);
    });
}
