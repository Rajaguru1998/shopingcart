import { useState } from "react";
import "./App.css";
import { Products } from "./components/productcard";
import { Footer } from "./components/footer";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function App() {
  return (
    <div className="App">
      <div>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}
function ProductList() {
  const [count, setCount] = useState(0);

  let prod =[
    {
      name: "Fancy Products",
      rating: "⭐⭐⭐⭐",
      price: "80.00",
    },
    {
      name: "Special Item",
      rating: "⭐⭐⭐⭐⭐",
      price: "20.00",
    },
    {
      name: "Sale Item",
      rating: "⭐⭐⭐",
      price: "50.00",
    },
    {
      name: "Popular Item",
      rating: "⭐⭐",
      price: "40.00",
    },
    {
      name: "Sale Item",
      rating: "⭐⭐⭐⭐⭐",
      price: "50.00",
    },
    {
      name: "Fancy Products",
      rating: "⭐⭐⭐⭐",
      price: "280.00",
    },
    {
      name: "Special Item",
      rating: "⭐⭐⭐⭐⭐",
      price: "20.00",
    },
    {
      name: "Popular Item",
      rating: "⭐⭐⭐⭐⭐",
      price: "40.00",
    },
];
  return (
    <div>
      <div className="nav-bar">
        <h3 className="start">THE SHOPPING CART</h3>
        <p>Home</p>
        <p>About</p>
        <p>Shop</p>

        <div className="cart">
          <ShoppingCartIcon></ShoppingCartIcon>Cart {count}
        </div>
      </div>

      <div className="sub-topic">
        <h1 className="heading">The Fancy shop</h1>
        <span></span>
      </div>
      <div className="boxes">
        {prod.map((pro, index) => (
          <Products
            product={pro}
            key={index}
            count={count}
            setCount={setCount}
          />
        ))}
      </div>
    </div>
  );
}

export default App;