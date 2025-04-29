const Reducer = (card = [], action) => {
  if (action.type === "ADD") {
    let numCard = card.filter((item) => item.id === action.payload.id);
    if (numCard < 1) {
      return [...card, { ...action.payload, quantity: 1 }]; // Initialize quantity here
    } else {
      alert("it has to be");
      return card;
    }
  }
  if (action.type === "REMOVE") {
    return card.filter((item) => item.id !== action.payload.id);
  }
  if (action.type === "INCREASE") {
    let numCard = card.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    return numCard;
  }
  if (action.type === "DECREASE") {
    let numCard = card.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    return numCard;
  }
  return card;
};
export default Reducer;