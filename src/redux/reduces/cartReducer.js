let defaultState = {
  selectedItem: { 
    items: [], 
    restaurantName: "" },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };
      if (action.payload.checkboxValue) {
        console.log("ADD_TO_CART");

        newState.selectedItem = {
          items: [...newState.selectedItem.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        console.log("REMOVE FROM CART");
        newState.selectedItem = {
          items: [
            ...newState.selectedItem.items.filter(
              (item) => item.id !== action.payload.id
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }
      console.log(newState);
      return newState;
    }
    default:
      return state;
  }
};
export default cartReducer;
