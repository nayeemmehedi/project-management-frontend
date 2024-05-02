import { api } from "./MainFetch";

export const projectPost = async (userData) => {
  try {
    const response = await api.post("/project", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginPost = async (userData) => {
  try {
    const response = await api.post("/auth/login", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const projectGet = async () => {
    try {
      const response = await api.get("/project");
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };


  export const projectDetails = async (id) => {
    try {
      if (id) {
        const response = await api.get(
          `/project/${id}`,
      
        );
        return response.data;
      } else {
        throw new Error("Project not found");
      }
    } catch (error) {
      throw error.response.data;
    }
  };





  export const projectUpdate = async ({ id, body }) => {
    try {
      if (id) {
        const response = await api.patch(
          `/project/${id}`,body
      
        );
        return response.data;
      } else {
        throw new Error("Project not found");
      }
    } catch (error) {
      throw error.response.data;
    }
  };


  
export const deleteProjectid = async (id) => {
  try {
    const response = await api.delete(`/project/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

