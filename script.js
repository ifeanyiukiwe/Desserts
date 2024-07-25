// script.js
const products = [
    { id: 1, name: "Tilapia", price: 7.00, img: "/asset/food.jpeg" },
    { id: 2, name: "Fish", price: 8.00, img: "/asset/fish.jpeg" },
    { id: 3, name: "Seafood", price: 10.00, img: "/asset/seafood.jpeg" },
    { id: 4, name: "Burger", price: 9.00, img: "/asset/burger.jpeg" },
    { id: 5, name: "Pasta", price: 5.00, img: "/asset/pasta.jpeg" },
    { id: 6, name: "Watermelon", price: 20.00, img: "/asset/Watermelon.jpeg" },
    { id: 7, name: "Chickenpeas", price: 14.00, img: "/asset/chickenpeas.jpeg" },
    { id: 8, name: "Vancake", price: 15.00, img: "/asset/vancake.jpeg" },
    { id: 9, name: "Fruit", price: 12.00, img: "/asset/fruit.jpeg" },
  ];
  
  const cart = [];
  
  const renderProducts = () => {
    const itemsContainer = document.getElementById("items");
    itemsContainer.innerHTML = '<ul>' + products.map(product => `
      <li>
        <figure>
          <img src="${product.img}" alt="${product.name}" />
          <div class="bt">
            <button class="atc" onclick="addToCart(${product.id})">
              <i class="fa-solid fa-cart-shopping"></i> Add to Cart
            </button>
          </div>
          <figcaption>
            <p>${product.name}</p>
            <h6>${product.name} with veggies</h6>
            <span>$${product.price.toFixed(2)}</span>
          </figcaption>
        </figure>
      </li>
    `).join('') + '</ul>';
  };
  
  const addToCart = (id) => {
    const product = products.find(p => p.id === id);
    const cartItem = cart.find(item => item.id === id);
  
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    renderCart();
  };
  
  const removeFromCart = (id) => {
    const itemIndex = cart.findIndex(item => item.id === id);
  
    if (itemIndex !== -1) {
      cart.splice(itemIndex, 1);
    }
  
    renderCart();
  };
  
  const renderCart = () => {
    const cartContainer = document.querySelector(".cart-items");
    const cartTitle = document.querySelector(".ct h1");
    const emptyCartMessage = document.getElementById("empty-cart");
    const orderButton = document.querySelector(".order-button");
  
    if (cart.length > 0) {
      cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.name}">
          <div>
            <p>${item.name} (x${item.quantity})</p>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
          </div>
          <button class="remove" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      `).join('');
      emptyCartMessage.style.display = 'none'; // Hide empty cart message
      orderButton.style.display = 'block';
    } else {
      cartContainer.innerHTML = '';
      emptyCartMessage.style.display = 'flex'; // Show empty cart message
      orderButton.style.display = 'none';
    }
  
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartTitle.textContent = `Cart (${totalItems})`;
  };
  
  
  const openModal = () => {
    const modal = document.getElementById('orderModal');
    const orderItems = document.querySelector('.order-items');
  
    orderItems.innerHTML = cart.map(item => `
      <div>
        <img src="${item.img}" alt="${item.name}">
        <div>
          <p>${item.name} (x${item.quantity})</p>
          <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
    `).join('');
  
    modal.style.display = 'flex';
  };
  
  
  const closeModal = () => {
    document.getElementById('orderModal').style.display = 'none';
  };

  const confirmOrder = () => {
    alert("Order confirmed!");
    closeModal();
    cart.length = 0; // Clear the cart
    renderCart();    // Re-render the cart
  };  
  
  // Initialize the page
  renderProducts();
  renderCart();
  