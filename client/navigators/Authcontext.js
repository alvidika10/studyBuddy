import React, { createContext, useState, useContext } from "react";
import { useDispatch } from "react-redux"
import { handleLogin, handleRegister } from "../store/actions/actionCreator";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const dispatch = useDispatch()

  const login = async (email, password) => {
    return dispatch(handleLogin({ email, password }))
      .then(() => {
        const access_token = AsyncStorage.getItem("access_token")
        return access_token
      })
      .then((access_token) => {
        if (access_token) {
          console.log(access_token)
          setIsLoggedIn(true)
        }
      })
      .catch((err) => {
        throw err
      })
  };

  const register = (username, email, password, phoneNumber, address) => {
    return dispatch(handleRegister({ username, email, password, phoneNumber, address }))
      .catch((err) => {
        throw err
      })
  };

  const updateUserRoleAndSpec = (role, specs) => {
    if (currentUser) {
      setCurrentUser((prev) => ({ ...prev, role, specializations: specs }));
    }
  };

  const logout = () => {
    AsyncStorage.removeItem("access_token")
      .then(() => {
        setIsLoggedIn(false);
      })
    // setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        register,
        currentUser,
        updateUserRoleAndSpec,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
