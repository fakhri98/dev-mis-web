import React from "react";
import cx from 'classnames'

const Input = ({ title, className, ...props }) => {
  return (
    <div className="m-2">
      <div className="font-bold mb-2 text-lg"> {title} </div>
      <input
        className={cx('p-2 rounded-md w-full border border-neutral-500', className)}
        type="text"
        {...props}
      />
    </div>
  );
};

export default Input;
