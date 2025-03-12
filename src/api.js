const BASE_URL = "http://localhost:3300";

const api = {
  getCategories: async () => {
    const response = await fetch(`${BASE_URL}/categories`);
    return response.json();
  },

  createCategory: async (category) => {
    const response = await fetch(`${BASE_URL}/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });
    return response.json();
  },

  deleteCategory: async (id) => {
    await fetch(`${BASE_URL}/categories/${id}`, {
      method: "DELETE",
    });
  },

  getWords: async () => {
    const response = await fetch(`${BASE_URL}/words`);
    return response.json();
  },

  getWordsByCategory: async (categoryId) => {
    const response = await fetch(`${BASE_URL}/words?categoryId=${categoryId}`);
    return response.json();
  },

  createWord: async (word) => {
    const response = await fetch(`${BASE_URL}/words`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(word),
    });
    return response.json();
  },

  deleteWord: async (id) => {
    await fetch(`${BASE_URL}/words/${id}`, {
      method: "DELETE",
    });
  },

  updateWord: async (id, updatedWord) => {
    const response = await fetch(`${BASE_URL}/words/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedWord),
    });
    return response.json();
  },

  searchWords: async (query) => {
    const response = await fetch(`${BASE_URL}/words?q=${query}`);
    return response.json();
  },
};

export default api;
