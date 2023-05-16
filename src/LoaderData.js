import { getShoppingCart } from "./utilities/fakedb";

const storedData = getShoppingCart();
const ids = Object.keys(storedData);

const fetchingData = async () => {
  const response = await fetch("http://localhost:5000/productsByIds", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(ids),
  });
  const data = await response.json();
  console.log(data);
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
