const host = "http://localhost:3000";

export async function getProducts() {
  const options = {
    headers: {
      "Content-Type": "application/json",
      authorization: ``,
    },
    method: "GET",
    // Body if post request
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

export const getCartItems = async () => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(host + `/cart-items`, options);
  return await res.json();
};

export const addToCart = () => {
  //
};

export const removeFromCart = () => {
  //
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

export const setToken = async (token) => {
  localStorage.setItem("smoothy-token", token);
};

export const getToken = async () => {
  localStorage.getItem("smoothy-token");
};
