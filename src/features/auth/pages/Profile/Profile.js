import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../../../../redux/features/auth/authService";
import { SET_USER } from "../../../../redux/features/auth/authSlice";
// import Card from "../../components/card/Card";
// import { SpinnerImg } from "../../components/loader/Loader";
// import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
// import { SET_NAME, SET_USER } from "../../redux/features/auth/authSlice";
// import { getUser } from "../../services/authService";
import "./Profile.css";



const Profile = () => {
//   useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();

  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getUserData() {
      const data = await getUser();

      setProfile(data);
      setIsLoading(false);
      await dispatch(SET_USER(data));
    //   await dispatch(SET_NAME(data.name));
    }
    getUserData();
  }, [dispatch]);

  return (
    
    <div className="profile --my2">
      {/* {isLoading && <SpinnerImg />} */}
      <>
        {profile === null ? (
          <p>Something went wrong, please reload the page...</p>
        ) : (
          <div>
            <span className="profile-photo">
              <img src={profile?.photo} alt="profilepic" />
            </span>
            <span className="profile-data">
              <p>
                <b>Name : </b> {profile?.firstName}
              </p>
              <p>
                <b>Last Name : </b> {profile?.lastName}
              </p>
              <p>
                <b>Email : </b> {profile?.email}
              </p>
              <div>
                <Link to="/edit-profile">
                  <button className="--btn --btn-primary">Edit Profile</button>
                </Link>
              </div>
            </span>
            </div>
          
        )}
      </>
    </div>
  );
};

export default Profile;
