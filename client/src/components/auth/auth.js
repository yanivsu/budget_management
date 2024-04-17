import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:8005/budget"; //YANIV: This thing should be in env folder or something , but for homework , it's good engouth

/*
 * an authentication middleware that responsible to authanticate each route that
 * is being used in the application
 * it checks if there is a token and send it for verification in the server.
 * if valid, then return the component to render
 * */
const withAuth = (Component) => {
  const AuthRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
      const verifyToken = async () => {
        try {
          const response = await axios.get(API_URL + "/verifyToken", {
            withCredentials: true,
          });
          if (response.status === 200) {
            setIsAuthenticated(true);
          }
        } catch (error) {
          setIsAuthenticated(false);
        }
      };

      verifyToken();
    }, []);

    // renders "   " between pages for smooth operation
    if (isAuthenticated === null) {
      return <div></div>;
    }

    return isAuthenticated ? <Component /> : <Navigate to="/login" />;
  };
  // Invoke AuthRoute before returning it
  return <AuthRoute />;
};

export default withAuth;
