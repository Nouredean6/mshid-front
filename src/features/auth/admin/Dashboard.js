import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TourList from "../../../components/tour/TourList/TourList";
// import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../../redux/features/auth/authSlice";
import { getTours } from "../../../redux/features/tour/tourSlice";
import UsersList from "../../../components/users/UsersList";
import { getUsers } from "../../../redux/features/users/usersSlice";

const Dashboard = () => {
  // useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { tours, isLoading: tourIsLoading, isError: tourIsError, message: tourMessage } = useSelector(
    (state) => state.tour
  );
  const { users, isLoading: userIsLoading, isError: userIsError, message: userMessage } = useSelector(
    (state) => state.user
  );
  

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getTours());
      dispatch(getUsers());
    }

    if (tourIsError) {
      console.log(tourMessage);
    }

    if (userIsError) {
      console.log(userMessage);
    }
  }, [isLoggedIn, tourIsError, userIsError, tourMessage, userMessage, dispatch]);

  return (
    <>
    <div>
      {/* <TourSummary tours={tours} /> */}
      <TourList tours={tours} isLoading={tourIsLoading} />
      <UsersList users={users} isLoading={userIsLoading} />
    </div></>
    
  );
};

export default Dashboard;
