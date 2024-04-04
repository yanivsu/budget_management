import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios"; // or use fetch

const withAuth = (Component) => {
  const AuthRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
      const verifyToken = async () => {
        try {
          // Replace '/verifyToken' with your actual endpoint that verifies the token
          const response = await axios.get("/verifyToken", {
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

    if (isAuthenticated === null) {
      return <div>Loading...</div>; // or some loading spinner
    }

    return isAuthenticated ? <Component /> : <Navigate to="/login" />;
  };

  return AuthRoute;
};

export default withAuth;
