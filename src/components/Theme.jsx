import React from "react";

const Theme = () => {
  return (
    <div className="w-full flex justify-end">
      <input
        type="checkbox"
        value="light"
        className="toggle theme-controller"
      />
    </div>
  );
};

export default Theme;
