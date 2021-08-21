export const multipleDelete = (id) => {
  return {
    type: "MULTI_SELECT",
    id,
  };
};

export const removeFromMultiSelect = (id) => {
  return {
    type: "REMOVE_FROM_SELECT",
    id,
  };
};

export const removeAll = () => {
  return {
    type: "REMOVE_ALL",
  };
};
