import React from "react";
import cx from 'classnames'

const Input = ({ title, className, ...props }) => {
  return (
    <div>
      <div className="font-sans mb-2 text-lg"> {title} </div>
      <input
        className={cx('p-2 rounded-md w-full border border-neutral-500', className)}
        {...props}
      />
    </div>
  );
};

export default Input;
