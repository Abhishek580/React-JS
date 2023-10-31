import React, { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/hiteshchoudhary")
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white text-3xl p-4">
      github follower:{data.followers}
    </div>
  );
}
// https://github.com/hiteshchoudhary
export default Github;

export const githubInfoLoader=async () =>{
    const res= await fetch("https://api.github.com/users/hiteshchoudhary")

    return res.json()
}