import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../fitebase.init';
import googleLogo from "../../assets/Logo/google-logo.png";
const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
        useSignInWithGoogle(auth);
    return (
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-primary btn-outline border mb-2 w-100"
      >
        {" "}
        <img style={{ width: "50px" }} src={googleLogo} alt="" /> continue with
        google
      </button>
    );
};

export default SocialLogin;