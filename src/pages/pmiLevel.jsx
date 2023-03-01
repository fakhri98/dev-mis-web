import React from "react";
import useSWR from "swr";
import { Outlet } from "react-router-dom";
import {BASE_URL} from "../config/config"
import Header from "./BaseLayout/Header";
import Cookies from "js-cookie";

const fetchData = async (url, token) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('Failed to fetch data');
  }
};


const GetPmiLevelList = () => {
  const token = Cookies.get('jwt');
  const { data, error } = useSWR([`${BASE_URL}/master/organisasi/pmi-level`, token], fetchData);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

  console.log(token);
  return (
    <div className="relative">
      <Header />
      <div>
        <div>{ JSON.stringify(data) }</div>

        <Outlet />
      </div>
    </div>
  );
};

//////////////////////////////////////////////////

// const GetPmiLevelList = (req, res) => {
//   try {
//     const errors = validationResult(req);

//     if(!errors.isEmpty()) {
//       return res.status(400).send({ errors: errors.array() });
//     }

//     serviceMasterOrganisasi.GetPmiLevel(req, res);
//   } catch (err) {
//     return res.send(err.message);
//   }
// };

export default GetPmiLevelList;
