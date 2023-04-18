import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    createUser(email, password)
      .then((res) => {
        const regUser = res.user;
        console.log(regUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="hero  min-h-[calc(100vh-80px)] bg-base-200">
      <div className="hero-content my-container flex-col">
        <div className="text-center lg:text-left">
          <h1 className="lg:text-5xl text-3xl font-bold">Please Register!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body lg:w-96 w-80">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                required
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
                <p className="text-xs">
                  Already have an account{" "}
                  <Link className="font-semibold" to={"/login"}>
                    Login
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
