import { Routes, Route } from "react-router-dom";
import { MovieDetail, MovieList, SearchPage, PageNotFound } from "../pages";

import React from 'react'

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={< MovieList />} />
                <Route path="movie/:id" element={< MovieDetail />} />
                <Route path="movies/popular" element={< MovieList />} />
                <Route path="movies/top" element={< MovieList />} />
                <Route path="movies/upcoming" element={< MovieList />} />
                <Route path="search" element={< SearchPage />} />
                <Route path="*" element={< PageNotFound />} />
            </Routes>
        </>
    )
}
