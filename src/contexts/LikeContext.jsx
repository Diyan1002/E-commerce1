// src/contexts/LikeContext.js
import React, { createContext, useContext, useState } from "react";

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [likeCount, setLikeCount] = useState(0);

  const addLike = () => setLikeCount((prev) => prev + 1);

  return (
    <LikeContext.Provider value={{ likeCount, addLike }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useLike = () => useContext(LikeContext);
