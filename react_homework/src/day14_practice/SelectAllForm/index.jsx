import React, { useState } from 'react';

export default function SelectAllForm() {
  const itemList = [
    { id: 'item1', label: 'Item1' },
    { id: 'item2', label: 'Item2' },
    { id: 'item3', label: 'Item3' },
  ];

  const [selectedItems, setSelectedItems] = useState([]);
  const isAllSelected = selectedItems.length === itemList.length;
  const handleSelectAllChange = (e) => {
    if (e.target.checked) {
      setSelectedItems(itemList.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };
  const handleItemChange = (itemId) => {
    setSelectedItems(
      (prev) =>
        prev.includes(itemId)
          ? prev.filter((id) => id !== itemId) // if includes, remove
          : [...prev, itemId] //else, add it
    );
  };
  return (
    <div>
      <h3>SelectAllForm</h3>
      <h4>All the selected Items: {selectedItems.join(',')}</h4>
      <div>
        <input
          type="checkbox"
          name="selectAll"
          id="selectAll"
          checked={isAllSelected}
          onChange={handleSelectAllChange}
        />
        <label htmlFor="selectAll">Select All</label>
      </div>
      {itemList.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            id={`item-${item.id}`}
            checked={selectedItems.includes(item.id)}
            onChange={() => handleItemChange(item.id)}
          />
          <label htmlFor={`item-${item.id}`}>{item.label}</label>
        </div>
      ))}
    </div>
  );
}
