import gmailData from "../../email.json";
const searchReducer = (state = gmailData, action) => {
  switch (action.type) {
    case "SEARCH":
      console.log(action.text);
      const dupl = state;
      const sd = action.text;
      const filterDetails = dupl.filter((ser) => {
        return (
          ser.company_Name.toLocaleLowerCase().includes(sd.toLowerCase()) ||
          ser.description.toLocaleLowerCase().includes(sd.toLowerCase()) ||
          ser.time.toLocaleLowerCase().includes(sd.toLowerCase())
        );
      });
      return filterDetails;
    case "EMPTY":
      console.log("skdalfj");
      return gmailData;
    case "DELETE_SINGLE":
      const id = action.id;
      const unDeleted = state.filter((val) => {
        return val.id !== id;
      });
      return unDeleted;
    case "DELETE_MULTIPLE":
      let dIds = action.id;
      const multiDeleteData = state.filter((val) => {
        return !dIds.includes(val.id);
      });
      return multiDeleteData;
    case "ALL_SELECT":
      state.forEach((val, i) => {
        if (i < 17) {
          val.inbox = true;
        }
      });
      return state;
    default:
      return state;
  }
};

export default searchReducer;
