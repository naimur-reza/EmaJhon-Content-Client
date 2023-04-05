import { getShoppingCart } from "./utilities/fakedb";

const fetchingData = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
  );
  const data = await response.json();
  const storedData = getShoppingCart();
  let storedCart = [];
  for (const id in storedData) {
    const addedItem = data.find((pd) => pd.id === id);
    if (addedItem) {
        const quantity = storedData[id];
        addedItem.quantity = quantity;
      storedCart.push(addedItem);
    }
  }
  return storedCart;
};

export default fetchingData;
