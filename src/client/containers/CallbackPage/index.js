import React from 'react';
import { withRouter } from 'react-router';

function CallbackPage(props) {
  props.auth.handleAuthentication().then(() => {
    props.history.push('/home');
  });

  return (
    <div>
      Loading user profile.
    </div>
  );
}

export default withRouter(CallbackPage);