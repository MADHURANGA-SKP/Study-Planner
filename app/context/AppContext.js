import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // // Sample users
  const [users, setUsers] = useState([
    { username: "JohnDoe", email: "john@example.com", password: "12345" },
    { username: "JaneDoe", email: "jane@example.com", password: "password" },
  ]);

  // Logged-in user
  const [user, setUser] = useState(null);

  // Notes
  const [notes, setNotes] = useState([]);

  // Login user
  const login = (username, password) => {
    const existingUser = users.find((u) => u.username === username && u.password === password);
    if (existingUser) {
      setUser(existingUser);
      return true; // Success
    }
    return false; // Failure
  };

  
  // Register user
  const register = (newUser) => {
    const exists = users.some((u) => u.username === newUser.username || u.email === newUser.email);
    if (!exists) {
      setUsers((prev) => [...prev, newUser]);
      return true;
    }
    return false;
  };

  const logout  = () => setUser(null)
  
  // Add note
  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  // Remove note
  const removeNote = (noteId) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  };


  return (
    <AppContext.Provider 
    value={{
        user,
        login,
        logout,
        register,
        addNote,
        removeNote,
        notes,
        setUser,
        }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
