import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";
import { useGlobal } from "../context/Global";

function Signin() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [usrtype, setUsrType] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [check, setCheck] = useState(false);

  const firebase = useFirebase();
  const useglobal = useGlobal();

  const signinbtn = () => {
    firebase.signinuser(email, password, check, setCheck);
    firebase.readuserprofile1(name, setMobileno, setImgurl, usrtype);

    alert("Sign in success");

    useglobal.setmainname(name);
    useglobal.setmainusrtype(usrtype);

    // keep values updated
    setMobileno(mobileno);
    setImgurl(imgurl);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center text-primary mb-4">
            Sign In
          </h2>

          {/* Username */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered w-full"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* User Type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Type</span>
            </label>
            <select
              className="select select-bordered w-full"
              onChange={(e) => setUsrType(e.target.value)}
              defaultValue=""
            >
              <option disabled value="">
                Select user type
              </option>
              <option value="paitent">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          {/* Sign in Button */}
          <div className="form-control mt-6">
            <button
              className="btn btn-primary w-full"
              onClick={signinbtn}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
