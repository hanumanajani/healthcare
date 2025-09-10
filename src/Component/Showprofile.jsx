import React, { useState } from "react";
import { useGlobal } from '../context/Global';
import { useFirebase } from "../context/Firebase";

function Showprofile(props) {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [mobileNo, setMobileNo] = useState("+91 98765 43210");
  const [userType, setUserType] = useState("Patient / Doctor");
  const [imgUrl, setImgUrl] = useState(
    "https://tse1.mm.bing.net/th?id=OIP.thVfylZ6LBmYuAQS1UG0LgHaEK&pid=Api&P=0&h=180"
  );

  const firebase = useFirebase();

  const showUserProfile = () => {
    firebase.readuserprofile1(
      props.name,
      setEmail,
      setMobileNo,
      setImgUrl,
      props.usrtype
    );
    setName(props.name);
    setUserType(props.usrtype);
    alert("Profile fetched successfully!");
  };
    const useglobal = useGlobal()
    const setprofile = () => {
        useglobal.setcheck4(false)
        useglobal.setcheck3(false)
        useglobal.setcheck2(!useglobal.check2)
        useglobal.setcheck1(false)
        useglobal.setcheck5(false)
        useglobal.setcheck6(false)
        useglobal.setcheck7(false)
        useglobal.setcheck8(false)
        useglobal.setcheck9(false)

    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-base-200 transition-colors duration-500">
      {/* Show Profile Button */}
      <button
        onClick={showUserProfile}
        className="btn btn-primary mb-8 shadow-lg hover:scale-105 transition-transform"
      >
        Show Profile
      </button>

      {/* Profile Card */}
      <div className="card w-full max-w-md bg-base-100 shadow-xl rounded-2xl border border-base-300 hover:shadow-2xl transition-all duration-300">
        <div className="card-body items-center text-center p-8">
          {/* Avatar */}
          <div className="avatar mb-4">
            <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-md">
              <img src={imgUrl} alt="User" />
            </div>
          </div>

          {/* Name and Type */}
          <h2 className="text-2xl font-semibold text-base-content">{name}</h2>
          <p className="text-sm text-primary font-medium mb-4">{userType}</p>

          {/* Details */}
          <div className="space-y-2 text-base-content/80 text-sm w-full">
            <div className="flex justify-between border-b border-base-300 pb-1">
              <span className="font-medium">📧 Email</span>
              <span>{email}</span>
            </div>
            <div className="flex justify-between border-b border-base-300 pb-1">
              <span className="font-medium">📱 Mobile</span>
              <span>{mobileNo}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 w-full">
            <button onClick={() => { setprofile() }} className="btn btn-outline btn-secondary w-full">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showprofile;
