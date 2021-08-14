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
    default:
      return state;
  }
};

export default searchReducer;
