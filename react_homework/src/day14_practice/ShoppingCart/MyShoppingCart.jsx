import { useEffect, useState } from 'react';
import ProductRow from './ProductRow';

export default function MyShoppingCart() {
  const API_URL = 'https://dummyjson.com/products';

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const handleQuantityChange = (productId, qty) => {
    setCartItem((prev) => ({ ...prev, [productId]: qty }));
  };
  const handleEmptyCar = () => {
    setCartItem({});
  };
  const totalPrice = products.reduce((sum, product) => {
    const qty = cartItems[product.id] || 0;
    return sum + product.price * qty;
  }, 0);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        const items = data.products.slice(0, 10);

        setProducts(items);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>item-Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow
              product={product}
              key={product.id}
              qty={cartItems[product.id] || 0}
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </tbody>
      </table>
      <div>Total Price: ${totalPrice.toFixed(2)}</div>
      <div>
        <button>Check out</button>
        <button onClick={handleEmptyCar}>Empty Cart</button>
      </div>
    </div>
  );
}
