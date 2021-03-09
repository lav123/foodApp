import data from "../data/data.json";

export const dataReducer = (state, action) => {
  return { ...data };
};
