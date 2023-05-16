import { getToken } from "./auth";
const host = "https://smoothy-api.onrender.com";
// const host = "http://localhost:3000";

export async function getProducts() {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(host + `/products`, options);
  return await res.json();
}

export async function getProduct(slug) {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(host + `/products/${slug}`, options);
  return await res.json();
}

export async function getBlogPosts() {
  const options = {
    headers: {
      "Content-Type": "application/json",
      authorization: ``,
    },
    method: "GET",
    // Body if post request
  };

  const res = await fetch(host + `/blogposts`, options);
  return await res.json();
}

export async function getBlogPost(slug) {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(host + `/blogposts/${slug}`, options);
  return await res.json();
}

export const getCartItems = async (setter) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  };

  const res = await fetch(host + `/cart-items`, options);
  return await res.json();
};

export const addToCart = async (product, quantity) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    method: "POST",
    body: JSON.stringify({ product, quantity }),
  };

  const res = await fetch(host + `/cart-items`, options);
  return await res.json();
};

export const removeFromCart = async (product) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    method: "DELETE",
  };

  const res = await fetch(host + `/cart-items/${product}`, options);
  return await res.json();
};

export const minusFromCart = async (product) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    method: "PATCH",
  };

  const res = await fetch(host + `/cart-items/${product}`, options);
  return await res.json();
};

export const placeOrder = async (order) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    method: "POST",
    body: JSON.stringify(order),
  };

  const res = await fetch(host + `/orders`, options);
  // return await res.json();
  return { message: "Successfully Placed Order" };
};

export const userSignup = async (creds) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(creds),
  };

  const res = await fetch(host + `/registrations`, options);
  return await res.json();
};

export const userLogin = async (creds) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(creds),
  };

  const res = await fetch(host + `/sessions`, options);
  return await res.json();
};
