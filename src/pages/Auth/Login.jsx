import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../fitebase.init';
import SocialLogin from './SocialLogin';

const Login = () => {
    let errorElement;
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    if (error) {
        errorElement = (
          <p className="text-error">
            {error?.message}
          </p>
        );
    }
    if (loading) {
        return <p>Loading...</p>
    }
    if (user) {
        navigate('/')
    }
    const handleLogin = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email,password)
    }
    return (
      <div className=" flex justify-center mt-6 bg-base-100 ">
        <div className="card w-full max-w-sm shadow-2xl bg-accent  card-body">
          <h3 className="text-center text-2xl text-secondery font-bold">
            Login
          </h3>
          {errorElement}
          <form onSubmit={(event) => handleLogin(event)} className=" w-full ">
            <div className="form-control mb-5">
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Login" className="btn btn-primary " />
            </div>
          </form>
          <p
            onClick={() => navigate("/signup")}
            className="text-info cursor-pointer"
          >
            create new accout?
          </p>
          <div className="divider">OR</div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    );
};

export default Login;