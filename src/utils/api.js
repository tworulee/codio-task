const api = "https://66957d684bd61d8314cb71a8.mockapi.io/codio/product";

export const fetchProducts = async () => {
  const response = await fetch(api);
  return response.json();
};

export const fetchProductsById = async (idxsd) => {
  const res = await fetch(`${api}/${idxsd}`);
  return res.json();
};


export const updateProduct = async (id, data) => {
  await fetch(`${api}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const addProduct = async (data) => {
  await fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const deleteProduct = async (idxsd) => {
  await fetch(
    `${api}/${idxsd}`,
    {
      method: "DELETE",
    }
  );
};
