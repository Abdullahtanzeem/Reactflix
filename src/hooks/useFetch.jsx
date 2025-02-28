// import { useState, useEffect } from "react"

// export const useFetch = (apiPath, queryTerm="") => {
//     const [data, setData] = useState([]);
//     const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${import.meta.env.VITE_API_KEY}&query=${queryTerm}`;
 
//     useEffect(() => {
//         async function fetchMovies() {
//           const response= await fetch(url);
//           const json= await response.json();
//           setData(json.results);
//         }
//         fetchMovies();
//       }, [url]);

//     return { data }
// }


import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  
  // Dynamically adjust the URL to include "query" only when necessary
  const url = queryTerm
    ? `https://api.themoviedb.org/3/${apiPath}?api_key=${import.meta.env.VITE_API_KEY}&query=${queryTerm}`
    : `https://api.themoviedb.org/3/${apiPath}?api_key=${import.meta.env.VITE_API_KEY}`;

  console.log("Fetching data from:", url); // Debugging log

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch data");

        const json = await response.json();
        console.log("API Response:", json); // Debugging log
        setData(json.results || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchMovies();
  }, [url]);

  return { data };
};


