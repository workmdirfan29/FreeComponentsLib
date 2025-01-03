import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastNotification: React.FC = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar
      closeOnClick
      pauseOnHover
      draggable
      progress={undefined}
      theme="dark"
    />
  );
};

export default ToastNotification;
