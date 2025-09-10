import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";

function Setprofile(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [userType, setUserType] = useState("patient");
  const [imgUrl, setImgUrl] = useState("");

  const firebase = useFirebase();

  const profileUpdate = () => {
    if (name === props.name && userType === props.usrtype) {
      firebase.setuserprofile(name, email, imgUrl, mobileNo, userType);
      alert("Profile updated successfully!");
    } else {
      alert("Enter correct username and type, or Sign in first.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-base-200 transition-colors duration-500">
      <div className="card w-full max-w-md bg-base-100 shadow-xl rounded-2xl border border-base-300 p-8">
        <h2 className="text-2xl font-semibold text-center text-base-content mb-6">
          Edit Profile
        </h2>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="User Name"
            className="input input-bordered w-full"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mobile No"
            className="input input-bordered w-full"
            onChange={(e) => setMobileNo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            className="input input-bordered w-full"
            onChange={(e) => setImgUrl(e.target.value)}
          />

          {/* User Type Selector */}
          <select
            className="select select-bordered w-full"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          className="btn btn-primary w-full mt-6 shadow-md hover:scale-105 transition-transform"
          onClick={profileUpdate}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
}

export default Setprofile;
