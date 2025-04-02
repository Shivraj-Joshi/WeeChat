import React, { createContext, useState } from "react";

export const AuthContext = createContext();



const [currentUser, setCurrentUser] = useState();