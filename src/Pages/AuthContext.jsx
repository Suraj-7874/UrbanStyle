import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const getStoredUsers = () => {
  const users = localStorage.getItem("urbanstyle_users");
  return users ? JSON.parse(users) : [];
};

const setStoredUsers = (users) => {
  localStorage.setItem("urbanstyle_users", JSON.stringify(users));
};

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(getStoredUsers());

  useEffect(() => {
    setStoredUsers(users);
  }, [users]);

  const login = (email, password) => {
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      setUser({
        email: found.email,
        name: found.name,
        orders: found.orders || [],
      });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  const register = (name, email, password) => {
    if (users.some((u) => u.email === email)) {
      return false;
    }
    const newUser = { name, email, password, orders: [] };
    setUsers((prev) => [...prev, newUser]);
    setUser({ email, name, orders: [] });
    return true;
  };

  const addOrder = (order) => {
    setUser((prev) => {
      const updated = { ...prev, orders: [...(prev.orders || []), order] };
      setUsers((us) =>
        us.map((u) =>
          u.email === updated.email ? { ...u, orders: updated.orders } : u
        )
      );
      return updated;
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, addOrder }}>
      {children}
    </AuthContext.Provider>
  );
};
