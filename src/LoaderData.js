import { getShoppingCart } from "./utilities/fakedb";

const fetchingData = async () => {
  const response = await fetch("http://localhost:5000/products");
  const data = await response.json();
  const storedData = getShoppingCart();
  let storedCart = [];
  for (const id in storedData) {
    const addedItem = data.find((pd) => pd._id === id);
    if (addedItem) {
      const quantity = storedData[id];
      addedItem.quantity = quantity;
      storedCart.push(addedItem);
    }
  }
  return storedCart;
};

export default fetchingData;
