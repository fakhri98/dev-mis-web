import React from "react";
import useSWR from "swr";
import Header from "./BaseLayout/Header";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Relawan = () => {

  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="relative">
      <Header />
      <table className=" table-auto">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr className="border-b-2 border-gray-200">
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Relawan;
