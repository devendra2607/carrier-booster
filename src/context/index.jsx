import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function Auth({ children }) {
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();
  const { search, pathname } = useLocation();
  const name = new URLSearchParams(search).get("name");

  const checkAuth = async () => {
    const token = await localStorage.getItem("token");
    if (token) {
      setLogin(true);
    }

    if (login && (name === "login" || name === "singup")) {
      navigate("/tasklist");
    } else if (!login && name !== "singup" && pathname !== "/") {
      navigate("/auth?name=login");
    }
  };

  useEffect(() => {
    checkAuth();
  }, [pathname]);

  return (
    <AuthContext.Provider value={{ login, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
