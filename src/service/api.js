import axios from "axios";

const api = axios.create({
  baseURL: "http://test.basis.com/api/",
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

const token = localStorage.getItem("access_token");
if (token) {
  api.defaults.headers.common["Authorization"] = "Bearer" + " " + token;
}

export default api;
