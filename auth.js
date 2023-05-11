export const setToken = (token) => {
  localStorage.setItem("smoothy-token", JSON.stringify(token));
};

export const getToken = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("smoothy-token"));
  }
};
