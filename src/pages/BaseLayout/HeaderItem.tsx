import React from "react";
import cx from "classnames";
import { Link, useLocation } from "react-router-dom";

type headerItemType = {
  title: string,
  path: string
}

const HeaderItem = ({title, path}: headerItemType) => {
  const {pathname} = useLocation();
  return (
    <Link to={path}>
      <div className="font-normal text-base">
        <div className={cx('flex items-center mt-6 mx-6', {
          'border-b-2 border-red-500' : pathname === path,
          'text-red-500':  pathname === path,
          'text-slate-400':  pathname !== path,
        })} >
          <div>
            {title}
          </div>
        </div>
      </div>
    
    </Link>
    
  );
};

export default HeaderItem;