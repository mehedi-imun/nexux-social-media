import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../fitebase.init';
import googleLogo from "../../assets/Logo/google-logo.png";
const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
        let errorElement;
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  if (googleLoading) {
    return <p>Loading...</p>
  }
      if (googleError) {
        errorElement = (
          <div>
            <p className="text-error">{googleError.message}</p>
          </div>
        );
  }
  if (googleUser) {
    navigate('/')
  }
    return (
      <div>
        {errorElement}
        <button
          onClick={() => signInWithGoogle()}
          className="btn w-full btn-primary btn-outline border mb-2 w-100"
        >
          {" "}
          <img style={{ width: "50px" }} src={googleLogo} alt="" /> continue
          with google
        </button>
      </div>
    );
};

export default SocialLogin;