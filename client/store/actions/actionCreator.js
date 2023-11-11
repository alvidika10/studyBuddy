import {
  STUDENT_PROFILE_FETCH_SUCCESS,
  BUDDY_PROFILE_FETCH_SUCCESS,
  PROJECTS_FETCH_SUCCESS,
  PROJECT_FETCH_SUCCESS,
  RATINGS_FETCH_SUCCESS,
  USERS_FETCH_SUCCESS,
  USER_FETCH_SUCCESS,
  REVIEWS_FETCH_SUCCESS,
  CATEGORIES_FETCH_SUCCESS,
  CATEGORIES_BY_NAME_FETCH_SUCCESS,
  SPECIALIST_FETCH_SUCCESS,
  SPECIALIST_BY_ID_FETCH_SUCCESS,
  LIKES_FETCH_SUCCESS,
  TODOS_FETCH_SUCCESS,
} from "./actionTypes";

const BASE_URL = "https://6c10-2001-448a-11b0-13d6-61fe-51f7-6192-2016.ngrok-free.app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export function handleLogin(form) {
  return async () => {
    try {
      const { data } = await axios.post(`${BASE_URL}/login`, form);
      await AsyncStorage.setItem("access_token", data.access_token);
      console.log(data, '>>>>>>')
    } catch (err) {
      throw err;
    }
  };
}

export function handleRegister(form) {
  return async () => {
    try {
      const { data } = await axios.post(`${BASE_URL}/register`, form);
      console.log(data);
    } catch (err) {
      throw err;
    }
  };
}

export function updateRoleUser(role) {
  return async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios.patch(
        `${BASE_URL}/users`,
        { role },
        {
          headers: {
            access_token,
          },
        }
      );
      console.log(data);
    } catch (err) {
      throw err;
    }
  };
}

export function getUsers() {
  return async (dispatch) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios(`${BASE_URL}/users`, {
        headers: {
          access_token,
        },
      });
      dispatch({
        type: USERS_FETCH_SUCCESS,
        payload: data,
      });
    } catch (err) {
      throw err;
    }
  };
}

export function getUserById(id) {
  return async (dispatch) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios(`${BASE_URL}/users/${id}`, {
        headers: {
          access_token,
        },
      });
      dispatch({
        type: USER_FETCH_SUCCESS,
        payload: data,
      });
    } catch (err) {
      throw err;
    }
  };
}

export function updateUser(form) {
  return async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios.put(`${BASE_URL}/users`, form, {
        headers: {
          access_token,
        },
      });
      console.log(data);
    } catch (err) {
      throw err;
    }
  };
}

export function getStudentProfile() {
  return async (dispatch) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios(`${BASE_URL}/student_profile`, {
        headers: {
          access_token,
        },
      });
      console.log(data);
      dispatch({
        type: STUDENT_PROFILE_FETCH_SUCCESS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
}

export function getBuddyProfile() {
  return async (dispatch) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios(`${BASE_URL}/buddy_profile`, {
        headers: {
          access_token,
        },
      });
      dispatch({
        type: BUDDY_PROFILE_FETCH_SUCCESS,
        payload: data,
      });
    } catch (err) {
      throw err;
    }
  };
}

export function getProjects() {
  return async (dispatch) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios(`${BASE_URL}/projects`, {
        headers: {
          access_token,
        },
      });
      dispatch({
        type: PROJECTS_FETCH_SUCCESS,
        payload: data,
      });
    } catch (err) {
      throw err;
    }
  };
}

export function getProjectById(id) {
  return async (dispatch) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios(`${BASE_URL}/projects/${id}`, {
        headers: {
          access_token,
        },
      });
      dispatch({
        type: PROJECT_FETCH_SUCCESS,
        payload: data,
      });
    } catch (err) {
      throw err;
    }
  };
}

export function addProject(form) {
  return async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios.post(`${BASE_URL}/projects`, form, {
        headers: {
          access_token,
        },
      });
      console.log(data);
    } catch (err) {
      throw err;
    }
  };
}

export function deleteProject(id) {
  return async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios.delete(`${BASE_URL}/projects/${id}`, {
        headers: {
          access_token,
        },
      });
      console.log(data);
    } catch (err) {
      throw err;
    }
  };
}

export function updateProject(id, form) {
  return async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios.put(`${BASE_URL}/projects/${id}`, form, {
        headers: {
          access_token,
        },
      });
      console.log(data);
    } catch (err) {
      throw err;
    }
  };
}

export function updateStatusProject(id, status) {
  return async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios.patch(
        `${BASE_URL}/projects/${id}`,
        { status },
        {
          headers: {
            access_token,
          },
        }
      );
      console.log(data);
    } catch (err) {
      throw err;
    }
  };
}

export function getRatings() {
  return async (dispatch) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios(`${BASE_URL}/ratings`, {
        headers: {
          access_token,
        },
      });
      dispatch({
        type: RATINGS_FETCH_SUCCESS,
        payload: data,
      });
    } catch (err) {
      throw err;
    }
  };
}

export function updateRating(id, rating) {
  return async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios.put(
        `${BASE_URL}/ratings/${id}`,
        { rating },
        {
          headers: {
            access_token,
          },
        }
      );
      console.log(data);
    } catch (err) {
      throw err;
    }
  };
}

export function getReviews() {
  return async (dispatch) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios(`${BASE_URL}/reviews`, {
        headers: {
          access_token,
        },
      });
      dispatch({
        type: REVIEWS_FETCH_SUCCESS,
        payload: data,
      });
    } catch (err) {
      throw err;
    }
  };
}

export function createReview(projectId, comment) {
  return async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios.post(
        `${BASE_URL}/reviews/${projectId}`,
        { comment },
        {
          headers: {
            access_token,
          },
        }
      );
      console.log(data);
    } catch (err) {
      throw err;
    }
  };
}

export function deleteReview(id) {
  return async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios.delete(`${BASE_URL}/reviews/${id}`, {
        headers: {
          access_token,
        },
      });
      console.log(data);
    } catch (err) {
      throw err;
    }
  };
}

export function editReview(id, comment) {
  return async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios.put(
        `${BASE_URL}/reviews/${id}`,
        { comment },
        {
          headers: {
            access_token,
          },
        }
      );
      console.log(data);
    } catch (err) {
      throw err;
    }
  };
}

export function getCategories() {
  return async (dispatch) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios(`${BASE_URL}/categories`, {
        headers: {
          access_token,
        },
      });
      dispatch({
        type: CATEGORIES_FETCH_SUCCESS,
        payload: data,
      });
    } catch (err) {
      throw err;
    }
  };
}

export function getCategoriesByName(name, address) {
  return async (dispatch) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios(`${BASE_URL}/categories/${name}`, {
        headers: {
          access_token,
        },
        params: {
          address,
        },
      });
      dispatch({
        type: CATEGORIES_BY_NAME_FETCH_SUCCESS,
        payload: data,
      });
    } catch (err) {
      throw err;
    }
  };
}

export function getAllSpecialist() {
  return async (dispatch) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios(`${BASE_URL}/specialist`, {
        headers: {
          access_token,
        },
      });
      dispatch({
        type: SPECIALIST_FETCH_SUCCESS,
        payload: data,
      });
    } catch (err) {
      throw err;
    }
  };
}

export function getSpecialistById(id) {
  return async (dispatch) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios(`${BASE_URL}/specialist/${id}`, {
        headers: {
          access_token,
        },
      });
      dispatch({
        type: SPECIALIST_BY_ID_FETCH_SUCCESS,
        payload: data,
      });
    } catch (err) {
      throw err;
    }
  };
}

export function addSpecialist(specialist) {
  return async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios.post(
        `${BASE_URL}/specialist`,
        { specialist },
        {
          headers: {
            access_token,
          },
        }
      );
      console.log(data);
    } catch (err) {
      throw err;
    }
  };
}

export function getAllLike() {
  return async (dispatch) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios(`${BASE_URL}/likes`, {
        headers: {
          access_token,
        },
      });
      dispatch({
        type: LIKES_FETCH_SUCCESS,
        payload: data,
      });
    } catch (err) {
      throw err;
    }
  };
}

export function addLike(projectId) {
  return async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios.post(
        `${BASE_URL}/likes`,
        { projectId },
        {
          headers: {
            access_token,
          },
        }
      );
      console.log(data);
    } catch (err) {
      throw err;
    }
  };
}

export function deleteLike(projectId) {
  return async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios.delete(
        `${BASE_URL}/likes`,
        { projectId },
        {
          headers: {
            access_token,
          },
        }
      );
      console.log(data);
    } catch (err) {
      throw err;
    }
  };
}

export function getTodos() {
  return async (dispatch) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios(`${BASE_URL}/todos`, {
        headers: {
          access_token,
        },
      });
      dispatch({
        type: TODOS_FETCH_SUCCESS,
        payload: data,
      });
    } catch (err) {
      throw err;
    }
  };
}

export function updateTodo(id) {
  return async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios.put(`${BASE_URL}/todos/${id}`, {
        headers: {
          access_token,
        },
      });
      console.log(data);
    } catch (err) {
      throw err;
    }
  };
}

export function deleteTodo(id) {
  return async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios.delete(`${BASE_URL}/todos/${id}`, {
        headers: {
          access_token,
        },
      });
      console.log(data);
    } catch (err) {
      throw err;
    }
  };
}
