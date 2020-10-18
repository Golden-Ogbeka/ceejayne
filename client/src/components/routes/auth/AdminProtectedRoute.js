import React from "react";
import {Route, Redirect} from "react-router-dom";
import axios from "axios";

const AdminProtectedRoute = ({component: Component, ...rest}) => {
  const [isLogin, setLoginStatus] = React.useState(false);

  React.useEffect(() => {
    const verifyUser = async () => {
      try {
        await axios.get("/api/verifyAdmin");
        setLoginStatus(true);
        alert("You are already logged in");
      } catch (error) {
        setLoginStatus(false);
      }
    };
    verifyUser();
  }, []);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? <Redirect to="/admin/dashboard" /> : <Component {...props} />
      }
    />
  );
};

export default AdminProtectedRoute;
