import { Routes, Route } from "react-router-dom";
import { MovieDetail, MovieList, SearchPage, PageNotFound } from "../pages";

import React from 'react'

export const AllRoutes = () => {
    return (
        <div >
            <main>
                <Routes>
                    <Route path="/" element={< MovieList apiPath="movie/now_playing" title="Home" />} />
                    <Route path="movie/:id" element={< MovieDetail />} />
                    <Route path="movies/popular" element={< MovieList apiPath="movie/popular" title="Popular" />} />
                    <Route path="movies/top" element={< MovieList apiPath="movie/top_rated" title="Top Movies" />} />
                    <Route path="movies/upcoming" element={< MovieList apiPath="movie/upcoming" title="Upcoming Movies" />} />
                    <Route path="search" element={< SearchPage apiPath="search/movie"  />} />
                    <Route path="*" element={< PageNotFound  />} />
                </Routes>
            </main>

        </div>
    )
}
