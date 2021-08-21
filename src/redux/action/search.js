export const searchResult = (searchData) => {
  return {
    type: "SEARCH",
    text: searchData,
  };
};
export const dataReset = () => {
  return {
    type: "EMPTY",
  };
};

export const deleteSingle = (id) => {
  return {
    type: "DELETE_SINGLE",
    id,
  };
};
export const deleteMultiple = (id) => {
  return {
    type: "DELETE_MULTIPLE",
    id,
  };
};

export const allSelect = () => {
  return {
    type: "ALL_SELECT",
  };
};
