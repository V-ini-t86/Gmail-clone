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
