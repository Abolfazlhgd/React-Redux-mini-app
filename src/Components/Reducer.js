const Reducer = (card = [], action) => {
  if (action.type === "ADD") {
    let tempcard = card.filter((item) => item.id === action.payload.id);
    if (tempcard < 1) {
      return [...card, action.payload];
    } else {
      alert("it has to be");
      return card;
    }
  }
  if (action.type === "REMOVE") {
    return card.filter((item) => item.id !== action.payload.id);
  }
  if (action.type === "INCREASE") {
    let tempcard = card.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    return tempcard;
  }
  if (action.type === "DECREASE") {
    let tempcard = card.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    return tempcard;
  }
  return card;
};
export default Reducer;
