const seeMailReducer = (state = {}, action) => {
  switch (action.type) {
    case "BIG_MAIL":
      const mailData = {
        id: action.id,
        company_Name: action.name,
        description: action.description,
        time: action.time,
        subject: action.subject,
      };
      state = mailData;
      return state;
    default:
      return state;
  }
};

export default seeMailReducer;
