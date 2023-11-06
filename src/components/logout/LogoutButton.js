import React from "react";
import { useDispatch } from "react-redux";
import { SET_LOGIN, SET_USER } from "../../redux/features/auth/authSlice";
import { logoutUser } from "../../redux/features/auth/authService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./logoutButton.css";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      dispatch(SET_LOGIN(false));
      dispatch(SET_USER(null));
      navigate("/");
      toast.success("Log Out Successful...");
    } catch (error) {
        navigate("/");
        toast.success("Log Out Successful...");
    }
  };

  return (
    <button onClick={handleLogout}>Log Out</button>
  );
};

export default LogoutButton;