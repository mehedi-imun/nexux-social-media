import React from 'react';
import auth from '../../../fitebase.init';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLogin from './SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';
const SignUp = () => {
  let errorElement;
  const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  
  if (loading) {
    return <p>Loading...</p>
  }
   if (error) {
     errorElement = <p className="text-error">{error?.message}</p>;
  }
  if (user) {
    navigate('/')
  }
  const handleSignUp = async (event) => {
    event.preventDefault()
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email,password)
  }
    return (
      <div className=" flex justify-center mt-6 bg-base-100 ">
        <div className="card w-full max-w-sm shadow-2xl bg-accent  card-body"> 
          <h3 className='text-center text-2xl text-secondery font-bold'>Signup</h3>
          <form onSubmit={(e) => handleSignUp(e)} className=" w-full ">
            <div className="form-control mb-2">
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mb-2">
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                name="password"
                type="text"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="SignUp"
                className="btn btn-primary "
              />
            </div>
          </form>
          <p
            onClick={() => navigate("/login")}
            className="text-info cursor-pointer"
          >
            already have accout?
          </p>
          <div className="divider mt-1">OR</div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    );
};

export default SignUp;