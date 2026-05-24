import axios from "axios";

const BASE_URL = "https://6a09b6e8e7e3f433d4835b9b.mockapi.io";

const client = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const cardsApi = {
  getAll: async () => {
    const { data } = await client.get("/cards");
    return data;
  },

  create: async (title) => {
    const { data } = await client.post("/cards", { title });
    return data;
  },

  remove: async (id) => {
    const { data } = await client.delete(`/cards/${id}`);
    return data;
  },
};