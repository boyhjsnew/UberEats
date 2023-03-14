let initialUSer = {
  listUsert: [],
};

const userReducer = (state = initialUSer, action) => {
  switch (action.type) {
    case "ADD_USER":
      let newState = { ...state };
      newState = {
        listUsert: [...newState.listUsert, action.payload.user],
      };
      return newState 
    
    default: newState
      break;
  }
};
