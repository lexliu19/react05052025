import { useState } from 'react';

export default function ProductRow({ product, qty, onQuantityChange }) {
  const handlePlus = () => {
    onQuantityChange(product.id, qty + 1);
  };

  const handleMinus = () => {
    onQuantityChange(product.id, Math.max(0, qty - 1));
  };
  return (
    <tr>
      <th>{product.id}</th>
      <td>{product.title}</td>
      <td>${product.price}</td>
      <td>
        <button onClick={handleMinus} disabled={qty === 0}>
          -
        </button>
        {qty}
        <button onClick={handlePlus}>+</button>
      </td>
    </tr>
  );
}
