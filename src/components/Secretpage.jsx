import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/actions/user";

export default function Secretpage() {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await dispatch(logout());
  };
  return (
    <div className="container my-5">
      <p class="fs-1">SECRETPAGE</p>
      <button onClick={handleLogout} type="button" className="btn btn-danger">
        Logout
      </button>
    </div>
  );
}
