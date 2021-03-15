import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // should be set based on env
});

const getUsers = () => instance.get("/users?_limit=5");

export default {
  getUsers,
};
