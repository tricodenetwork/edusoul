import React from "react";
import { Icon } from "@iconify/react";

const ShowHidePassword = ({ showPasswordToggle, onClick, className }) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      {showPasswordToggle ? (
        <Icon icon="mdi:eye" className="w-6" color="#90050F" />
      ) : (
        <Icon icon="mdi:eye-off" className="w-6" color="#90050F" />
      )}
    </button>
  );
};

export default ShowHidePassword;

export const ConfirmPassword = ({ confirmPasswordToggle, onClick, className }) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      {confirmPasswordToggle ? (
        <Icon icon="mdi:eye" className="w-6" color="#90050F" />
      ) : (
        <Icon icon="mdi:eye-off" className="w-6" color="#90050F" />
      )}
    </button>
  );
};

