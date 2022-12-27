import React from "react";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const GetPmiLevelList = () => {

  const { data, error } = useSWR("https://api.pmi.or.id/api/v1/master/organisasi/pmi-level", fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

  return (
    <div className="relative">
      <Header />
      <table className=" table-auto">
        <thead>
          <tr className="border-b-2 border-gray-200">
            {/* <th>id</th> */}
            <th>nama</th>
            {/* <th>email</th>
            <th>city</th> */}
          </tr>
        </thead>

        <tbody>
          <tr className="border-b-2 border-gray-200">
            <td>{data.nama}</td>

          </tr>

        </tbody>
      </table>
    </div>
  );
};

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
