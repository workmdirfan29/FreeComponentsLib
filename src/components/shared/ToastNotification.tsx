import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastNotification: React.FC = () => {
  return (
    <ToastContainer
      autoClose={3000}
      position="bottom-right"
      hideProgressBar
      closeOnClick
      pauseOnHover
      draggable
      theme="dark"
    />
  );
};

export default ToastNotification;
