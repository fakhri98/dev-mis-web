import React from "react";
import useSWR from "swr";
import { useParams } from "react-router-dom";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ContentProjects = () => {
  const { id } = useParams("id");

  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="mt-2">
      <div className=""> Id: {data.id}</div>
      <div className=""> Name: {data.name}</div>
      <div className=""> Height: {data.height}</div>
      <div className=""> Weight: {data.weight}</div>
      {/* <div className=""> Base experience: {data.base_experience}</div> */}
    
      <img src={data.sprites.front_default} />
    </div>
  );
};

export default ContentProjects;
