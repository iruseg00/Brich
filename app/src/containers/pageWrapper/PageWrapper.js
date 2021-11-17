import React, { useEffect } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PageWrapper = (props) => {
  const auth = useSelector( state => state.auth)
  useEffect(() => {
    if (props.title) document.title = props.title;
  });
  const location = useLocation();
  const Component = props.component;

  if (props.notAuth && auth.accessToken)
    return (
      <Redirect
        to={{
          pathname: "/",
          state: location.state,
        }}
      />
    );

  if (props.Auth && !auth.accessToken) 
    return <Redirect to={"/login"} />;

  return <Component {...props} />;
};

export default PageWrapper;