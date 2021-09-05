import React, { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useHistory } from "react-router-dom";

function Auth() {
  const history = useHistory();
  const [, forceUpdate] = useState();
  const validator = useRef(
    new SimpleReactValidator({
      autoForceUpdate: { forceUpdate: () => forceUpdate(1) },
    })
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
 
  async function onLogin(event) {
    event.preventDefault();
    if (validator.current.allValid()) {
      toast.info(email + " " + password);
      const user = { email: email, password: password };
      const token = { token: "shss888d8jbd@#!%^$J", expire: "58 minutos" };
      dispatch(login({ user, token }));
      history.push("/admin/201")
    } else {
      validator.current.showMessages();
    }
  }
  return (
    <>
      <div className="uk-margin-large uk-flex uk-flex-center ">
        <div className="uk-margin-large-top uk-card uk-card-default uk-card-large uk-card-body uk-box-shadow-xlarge uk-box-shadow-bottom">
          <h1>{"Login"}</h1>
          <form onSubmit={onLogin}>
            <div className="uk-margin">
              <div className="uk-inline">
                <span className="uk-form-icon" uk-icon="icon: user"></span>
                <input
                  className="uk-input"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <span className="uk-text-danger">
                  {validator.current.message(
                    "email",
                    email,
                    "required|email|min:5|max:250"
                  )}
                </span>
              </div>
            </div>

            <div className="uk-margin">
              <div className="uk-inline">
                <span
                  className="uk-form-icon uk-form-icon-flip"
                  uk-icon="icon: lock"
                ></span>
                <input
                  className="uk-input"
                  type="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <button className="uk-button uk-button-secondary uk-width-1-1">
                {"Login"}
              </button>
            </div>
          </form>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
}

export default Auth;
