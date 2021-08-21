const deleteReducer = (state = [], action) => {
  switch (action.type) {
    case "MULTI_SELECT":
      let id = action.id;
      state.push(id);
      console.log(state);
      return state;
    case "REMOVE_FROM_SELECT":
      let remId = action.id;
      state = state.filter((val) => {
        return val !== remId;
      });
      return state;
    case "REMOVE_ALL":
      state = [];
      return state;
    default:
      return state;
  }
};

export default deleteReducer;
