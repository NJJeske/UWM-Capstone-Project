import React from "react";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../sass/_callbackpage.scss";

function CallbackPage(props) {
  props.auth.handleAuthentication().then(() => {
    props.history.push("/home");
  });

  return (
    <div className="callbackPageDiv">
      <FontAwesomeIcon icon="spinner" /> Loading user profile...
    </div>
  );
}

export default withRouter(CallbackPage);
