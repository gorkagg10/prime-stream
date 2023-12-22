import React, {useEffect, useState} from 'react';
import GlobalRouter from "./routes/GlobalRouter";
import {useMovies} from "./hooks/useMovies";
import {MoviesContext} from "./context/MoviesContext";
import {useDocumentaries} from "./hooks/useDocumentaries";

function App() {

  const movies = useMovies();
  const documentaries = useDocumentaries();

  return (
    <MoviesContext.Provider value={{movies, documentaries}}>
      <GlobalRouter></GlobalRouter>
    </MoviesContext.Provider>
  );
}

export default App;
