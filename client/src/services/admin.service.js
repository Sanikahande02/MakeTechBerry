import api from "./api";

export const adminRegister = (data) => {
  return api.post("/auth/register", data);
};

export const adminLogin = (data) => {
  return api.post("/auth/login", data);
};

export const getInternships = (token) => {
  return api.get("/internships", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const getProjects = (token) => {
  return api.get("/projects", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
