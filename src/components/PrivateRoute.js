import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function PrivateRoute({ component: Component, ...rest }) {
  const {user} = useSelector(selectUser);
  console.log(user.user);
  function isAuth() {
    let ret = false;
    if (user) {
      ret = (user.isLogged ) ? true : false;
    } else {
      ret = false;
    }
    return ret;
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
