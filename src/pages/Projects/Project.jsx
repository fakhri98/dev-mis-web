import React from "react";
import useSWR from "swr";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../BaseLayout/Header";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Project = () => {
  const navigate = useNavigate();

  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <Header />
      <div className="p-2">
        <div className="grid grid-cols-10 gap-4 text-center">
        {data.results.map((item) => (
            <div
              className="border border-gray-700 p-2 cursor-pointer"
              onClick={() =>
                navigate(
                  {
                    pathname: `${item.url.split('/')[6]}`,
                  },
                  {
                    replace: true,
                  }
                )
              }
            >
              {item.name}
            </div>
          ))}

        </div>

        <Outlet />
      </div>
    </div>

  );
};

export default Project;