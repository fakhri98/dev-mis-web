import React from "react";
import useSWR from "swr";
import { Outlet, useNavigate } from "react-router-dom";
// import axios from "axios";
import {BASE_URL} from "../config/config"
// import { getToken } from "../config/auth";
import Header from "./BaseLayout/Header";


function fetchData(url, token) {
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.json());
}

// console.log(fetcher());


const GetPmiLevelList = () => {
  const token = localStorage.getItem('token')
  // focus in here, trying to fetch data using useSWR from REST API
  const { data, error } = useSWR([`${BASE_URL}/master/organisasi/pmi-level`, token], fetchData);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

  return (
    <div className="relative">
      <Header />
      <div>
        <div>{ JSON.stringify(data) }</div>
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
