import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const LOGIN_URL = "http://alihuseyn1-001-site1.otempurl.com/api/Auth/Login";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Kullanıcı adı ve şifreyi burada tanımlıyoruz
  const username = "admin";
  const password = "Admin_123";

  const login = async () => {
    try {
      const response = await axios.post(LOGIN_URL, {
        usernameOrEmail: username,
        password: password,
      });
      const newToken = response.data.token;
      setToken(newToken);
      setError(null);
      localStorage.setItem("token", newToken); // Token'ı saklıyoruz
    } catch (err) {
      console.error("Login failed:", err);
      setError("Giriş başarısız.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, error, username, password }}>
      {children}
    </AuthContext.Provider>
  );
};

// AuthContext'i kullanmak için özel hook
export const useAuth = () => {
  return useContext(AuthContext);
};
