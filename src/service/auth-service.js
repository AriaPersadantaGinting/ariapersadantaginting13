import axios from "axios";

const postDataRegister = async (data) => {
  try {
    const result = await axios.post(
      "http://localhost:3000/api/dg-portfolio/users",
      data
    );
    return result;
  } catch (error) {
    console.info(error);
  }
};

const postDataLogin = async (data, callback) => {
  const result = await axios
    .post("http://localhost:3000/api/dg-portfolio/users/login", data)
    .then((res) => {
      console.info(res.data.data.token);
      callback(true, res.data.data.token);
    })
    .catch((error) => {
      console.info(error);
      callback(false, error);
    });
  return result;
};

const getDataUser = async (callback) => {
  const result = await axios
    .get(" http://localhost:3000/api/dg-portfolio/users/current", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      callback(res.data.data);
    })
    .catch((error) => {
      console.info(error.data);
      callback(error.data);
    });
  return result;
};

const updateDataUser = async (data) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No token found");
    }

    const response = await axios.patch(
      "http://localhost:3000/api/dg-portfolio/users/current",
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.info(response.data.data);
    return response.data.data; // Mengembalikan data yang diperbarui
  } catch (error) {
    console.error("Update failed:", error);
    throw error; // Lemparkan error jika diperlukan
  }
};

// project
const fetchCreateProject = async (data) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No token found");
    }

    const response = await axios.post(
      "http://localhost:3000/api/dg-portfolio/projects",
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.info(response.data.data);
    return response.data.data; // Mengembalikan data yang diperbarui
  } catch (error) {
    console.error("Update failed:", error);
    throw error; // Lemparkan error jika diperlukan
  }
};

const fetchAllProject = async (callback) => {
  try {
    const response = await axios.get(
      `https://dgportfolio.vercel.app/api/dg-portfolio/projects`
    );
    callback(response.data.data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchUpdateProject = async (projectId, data) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No token found");
    }

    const response = await axios.put(
      `http://localhost:3000/api/dg-portfolio/projects/${projectId}`,
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    console.info(response.data.data);
    return response.data.data; // Mengembalikan data yang diperbarui
  } catch (error) {
    console.error("Update failed:", error);
    throw error; // Lemparkan error jika diperlukan
  }
};

// skills
const fetchCreateSkill = async (data) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No token found");
    }

    const response = await axios.post(
      "http://localhost:3000/api/dg-portfolio/skills",
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.info(response.data.data);
    return response.data.data; // Mengembalikan data yang diperbarui
  } catch (error) {
    console.error("Update failed:", error);
    throw error; // Lemparkan error jika diperlukan
  }
};

const fetchAllSkill = async (callback) => {
  try {
    const response = await axios.get(
      `https://dgportfolio.vercel.app/api/dg-portfolio/skills`
    );
    callback(response.data.data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchUpdateSkill = async (skillId, data) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No token found");
    }

    const response = await axios.put(
      `http://localhost:3000/api/dg-portfolio/skills/${skillId}`,
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    console.info(response.data.data);
    return response.data.data; // Mengembalikan data yang diperbarui
  } catch (error) {
    console.error("Update failed:", error);
    throw error; // Lemparkan error jika diperlukan
  }
};

const fetchPostContact = async (data, callback) => {
  const response = await axios
    .post("https://dgportfolio.vercel.app/api/dg-portfolio/contact-me", data)
    .then((res) => {
      console.info(res.data.data);
      callback(true, res.data.data);
    })
    .catch((error) => {
      console.info(error);
      callback(false, error);
    });
  return response;
};

export default {
  postDataRegister,
  postDataLogin,
  getDataUser,
  updateDataUser,
  fetchCreateProject,
  fetchAllProject,
  fetchUpdateProject,
  fetchCreateSkill,
  fetchAllSkill,
  fetchUpdateSkill,
  fetchPostContact,
};
