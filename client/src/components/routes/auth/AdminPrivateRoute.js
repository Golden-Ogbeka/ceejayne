import React from "react";
import {Route, Redirect} from "react-router-dom";
import axios from "axios";

const AdminPrivateRoute = ({component: Component, ...rest}) => {
  const [isLogin, setLoginStatus] = React.useState(true);
  React.useEffect(() => {
    const verifyAdmin = async () => {
      try {
        await axios.get("/api/verifyAdmin");
        setLoginStatus(true);
      } catch (error) {
        setLoginStatus(false);
        alert(error.response.data);
      }
    };
    verifyAdmin();
  }, []);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/admin/login",
              from: props.location,
            }}
          />
        )
      }
    />
  );
};

export default AdminPrivateRoute;
